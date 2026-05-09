export interface Reference {
  id: number;
  name: string;
  company: string;
  position: string;
  quote: string | null;
  email?: string;
  logo: string;
  linkedInUrl: string;
}
