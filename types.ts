import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface InfoCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  color: 'pink' | 'cyan' | 'purple';
}

export interface SizeItem {
  category: string;
  size: string;
  detail?: string;
}

export enum ThemeColor {
  PINK = 'text-retro-pink',
  CYAN = 'text-retro-cyan',
  PURPLE = 'text-retro-purple',
}