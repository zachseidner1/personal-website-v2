export type WritingProps = {
  title: string;
  date: Date;
  description?: string;
  children: React.ReactNode;
};

export default function Writing({ title, date, description, children }: WritingProps) {
  return (
    <div className="min-h-full w-full bg-base-200">
      <article className="prose prose-sm mx-auto px-4 py-8 sm:prose lg:prose-lg">
        <h2>{title}</h2>
        <p className="text-sm text-gray-500">{date.toLocaleDateString()}</p>
        {description && <p className="text-sm"> <i>{description}</i> </p>}
        <hr />
        {children}
      </article>
    </div>
  );
}
