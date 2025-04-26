export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
  demoUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  comment: string;
  avatar: string;
}