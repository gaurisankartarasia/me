// src/components/types.ts
import { ElementType , ReactNode} from "react";
import { IconType } from "react-icons";

export interface Personal_data_types {
  avatar_url: string;
  github_url: string; // Kept for potential use in SocialLinks, though example only uses it for GitHub icon
  name: string | null;
  location: string | null;
  email: string | null;
  bio: string | null;
}

export interface SocialLinkItem {
  icon: ElementType;
  label: string;
  href: string;
}

export interface Skill {
  icon: IconType;
  name: string;
  size: string;
  description: string;
}


export interface NavItem {
  path: string;
  name: string;
  icon: ReactNode;
  size: string;
}

export interface Project {
    title: string
    description: string
    technologies: string[]
    isImportant?: boolean
    isUnderDevelopment?: boolean
    liveUrl?: string
    viewProjectLink?: string
  }

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}