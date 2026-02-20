export default function SkillCard({ skill }: { skill: any }) {
  return (
    <div className="p-4 rounded-lg border text-center">
      <div className="text-2xl mb-2">{skill.icon}</div>
      <div>{skill.name}</div>
    </div>
  );
}
