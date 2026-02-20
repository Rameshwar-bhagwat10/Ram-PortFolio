export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="p-6 rounded-lg border">
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="mt-2">{project.description}</p>
    </div>
  );
}
