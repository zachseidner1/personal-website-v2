export default function Writing({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="prose prose-sm mx-auto px-4 py-8 sm:prose lg:prose-lg">
      <h2>{title}</h2>
      <hr />
      {children}
    </article>
  );
}
