export interface Member {
  id: string;
  name: string;
  sector: string;
  country: string;
  type: 'Premium' | 'Corporativa' | 'Asociado';
  logo: string;
  description: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  type: string;
  modality: 'Presencial' | 'Virtual' | 'Híbrido';
  image: string;
  location?: string;
  isMembersOnly?: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}