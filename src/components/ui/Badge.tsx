export default function Badge({ children }: { children: React.ReactNode }) {
  return <span className="px-2 py-1 text-sm rounded bg-primary/10">{children}</span>;
}
