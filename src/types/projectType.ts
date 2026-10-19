export type Project = {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubLink?: string;
};