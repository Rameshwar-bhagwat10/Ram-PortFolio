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
  SiKotlin,
  SiFirebase,
  SiPrisma,
  SiStripe,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiAndroidstudio,
  SiTauri,
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
  { name: 'Tauri', icon: SiTauri, color: '#FFC131' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Stripe', icon: SiStripe, color: '#635BFF' },
  { name: 'Pandas', icon: SiPandas, color: '#150458' },
  { name: 'NumPy', icon: SiNumpy, color: '#013243' },
  { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
  { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'VS Code', icon: VscCode, color: '#007ACC' },
  { name: 'Android Studio', icon: SiAndroidstudio, color: '#3DDC84' },
  { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
];
