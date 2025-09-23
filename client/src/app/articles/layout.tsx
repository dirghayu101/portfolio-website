export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="md:py-20 sm:py-10 text-legibility">{children}</div>;
}
