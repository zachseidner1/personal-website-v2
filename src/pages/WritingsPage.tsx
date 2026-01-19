import { WritingProps } from "./Writing";
import WritingsList from "./WritingsList";

export default function WritingsPage({
  writingsList,
}: {
  writingsList: WritingProps[];
}) {
  return (
    <div className="min-h-screen bg-base-200 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Page Title and Description */}
        <div className="mb-12">
          <h1 className="text-center text-4xl font-extrabold text-base-content lg:text-5xl">
            Writings
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-base-content/80">
            Here are some of the writings I'm willing to share with the
            internet.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <WritingsList writingsList={writingsList} />
      </div>
    </div>
  );
}
