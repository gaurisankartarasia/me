import { Personal_data_types, SocialLinkItem } from "@/types";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const personal_data: Personal_data_types = {
  avatar_url: "https://avatars.githubusercontent.com/u/157940097?v=4",
  github_url: "https://github.com/gaurisankartarasia",
  name: "Gaurisankar Tarasia",
  location: "Odisha, India",
  email: "gaurisankartarasia@gmail.com",
  bio: "Pretends to be a web developer.",
};


export const DEFAULT_GIT_USERNAME = "gaurisankartarasia";

// --- Social Links Data ---
export const socialPrimary: SocialLinkItem[] = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: personal_data?.github_url,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/gaurisankar-tarasia-0a32a8235",
  },
  {
    icon: IoMdMail,
    label: "Email",
    href: `mailto:${
      personal_data?.email ?? "example@example.com"
    }?subject=From Your Website&body=Hello%20Gaurisankar,`,
  },
];

// --- Resume Download Links ---
export const resume_urls = {
  resumeLiveUrl:
    "https://www.canva.com/design/DAGhhbzugGA/8XIdx8tWkO4MEyiDVJIC-A/view?utm_content=DAGhhbzugGA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h55fa4fb22f",
  resumePdfUrl:
    "https://raw.githubusercontent.com/gaurisankartarasia/4565dnfi4/main/Gaurisankar%20Tarasia20250313.pdf",
};
