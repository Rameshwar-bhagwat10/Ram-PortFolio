export default function Card({ children }: { children: React.ReactNode }) {
  return <div className="p-6 rounded-lg border">{children}</div>;
}
