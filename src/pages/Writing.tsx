export type WritingProps = {
  title: string;
  date: Date;
  children: React.ReactNode;
};

export default function Writing({ title, date, children }: WritingProps) {
  return (
    <div className="min-h-full w-full bg-base-200">
      <article className="prose prose-sm mx-auto px-4 py-8 sm:prose lg:prose-lg">
        <h2>{title}</h2>
        <p className="text-sm text-gray-500">{date.toLocaleDateString()}</p>
        <hr />
        {children}
      </article>
    </div>
  );
}
