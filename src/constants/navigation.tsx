// constants/navigation.ts
import { MdHome } from "react-icons/md";
import { FaGithub, FaFolder } from "react-icons/fa";
import { NavItem } from "@/types/index";

export const navItems: NavItem[] = [
  { path: "/", name: "Home", icon: <MdHome />, size: "24px" },
  { path: "/projects", name: "Projects", icon: <FaFolder />, size: "20px" },
  { path: "/git_repos", name: "Git Repos", icon: <FaGithub />, size: "23px" },
];
