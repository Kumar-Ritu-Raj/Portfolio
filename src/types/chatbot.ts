export interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

export interface KnowledgeEntry {
  keywords: string[];
  response: string;
}
