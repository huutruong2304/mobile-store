export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="container mx-auto max-w-screen-lg">{children}</section>
  );
}
