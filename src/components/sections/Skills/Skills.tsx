import SkillCard from './SkillCard';
import SkillTabs from './SkillTabs';
import { skills } from './skills.data';

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <SkillTabs />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
