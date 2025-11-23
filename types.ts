
export interface Devotional {
  verseReference: string;
  verseText: string;
  devotionalText: string;
}

export interface Testimony {
  name: string;
  story: string;
  image: string;
}

export interface Counselor {
    name: string;
    title: string;
    bio: string;
    image: string;
}

export interface Resource {
    title: string;
    type: 'Article' | 'Video' | 'Book' | 'Devotional';
    description: string;
    link: string;
    image: string;
}

export interface ChatMessage {
    id: number;
    name: string;
    message: string;
    timestamp: string;
}

export interface PrayerRequest {
    id: number;
    name: string; // "Anonymous" or a name
    request: string;
    timestamp: string;
}

export interface Event {
    date: string;
    title: string;
    description: string;
}
