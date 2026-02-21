import { IconType } from 'react-icons';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiPython,
  SiAmazon,
  SiJavascript,
  SiGithub,
  SiVercel,
  SiPostman,
  SiSupabase,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export const skills: Skill[] = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
  { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'VS Code', icon: VscCode, color: '#007ACC' },
  { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
];
