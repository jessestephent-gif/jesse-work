
import { GoogleGenAI, Type } from "@google/genai";
import { Devotional } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // This is a fallback for development and should not appear in production.
  // The environment is expected to have the API key.
  console.warn("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const devotionalSchema = {
  type: Type.OBJECT,
  properties: {
    verseReference: {
      type: Type.STRING,
      description: "The Bible verse reference, e.g., 'Psalm 34:18'",
    },
    verseText: {
      type: Type.STRING,
      description: "The full text of the Bible verse.",
    },
    devotionalText: {
      type: Type.STRING,
      description: "A short devotional paragraph of about 100 words.",
    },
  },
  required: ["verseReference", "verseText", "devotionalText"],
};

export const getDailyDevotional = async (): Promise<Devotional | null> => {
  if (!API_KEY) {
    return {
      verseReference: "Psalm 34:18",
      verseText: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
      devotionalText: "In moments of deep sorrow, it can feel like you are entirely alone. But this verse is a powerful reminder that you are never truly abandoned. God draws near to you in your pain, offering not just comfort but salvation. Your brokenness is not a barrier to His love; it is the very place where His healing presence is most profound. Hold onto this promise. He sees you, He is with you, and He is working to restore your spirit."
    };
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Generate a short, uplifting Christian devotional (around 100 words) for someone healing from heartbreak, anxiety, or depression. Include a relevant Bible verse and its reference. Your response MUST be a JSON object with three keys: "verseReference", "verseText", and "devotionalText".`,
      config: {
        responseMimeType: "application/json",
        responseSchema: devotionalSchema,
      },
    });

    const jsonString = response.text;
    if (jsonString) {
      const devotional: Devotional = JSON.parse(jsonString);
      return devotional;
    }
    return null;
  } catch (error) {
    console.error("Error fetching daily devotional:", error);
    // Return a fallback devotional on error
    return {
      verseReference: "Isaiah 41:10",
      verseText: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
      devotionalText: "When fear and anxiety loom large, remember this powerful promise. You are not facing your battles alone. God is not a distant observer but an active presence in your life, offering strength when you feel weak and support when you feel overwhelmed. Let this truth anchor your soul. He is your God, your helper, your unwavering support. Lean on Him, and let His strength become yours."
    };
  }
};
