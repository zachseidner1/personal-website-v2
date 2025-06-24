export type WritingProps = {
  title: string;
  date: Date;
  children: React.ReactNode;
};

export default function Writing({ title, children }: WritingProps) {
  return (
    <div className="h-full w-full bg-base-200">
      <article className="prose prose-sm mx-auto px-4 py-8 sm:prose lg:prose-lg">
        <h2>{title}</h2>
        <hr />
        {children}
      </article>
    </div>
  );
}
