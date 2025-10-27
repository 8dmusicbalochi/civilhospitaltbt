
export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  photo_url: string;
  available_days: string[];
  availability_time?: string;
}

export interface Department {
  name: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
}

export interface Appointment {
  id: number;
  name: string;
  phone: string;
  department: string;
  date: string;
  message: string;
}

export interface Service {
  name: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface Tender {
  id: number;
  title: string;
  ref: string;
  closingDate: string;
  documentUrl: string;
}