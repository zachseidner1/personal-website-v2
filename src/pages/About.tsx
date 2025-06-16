import me from "../assets/images/me.jpg";
export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-base-200 p-4 sm:p-6 lg:p-8">
      <div className="card max-w-4xl bg-base-100 shadow-xl lg:card-side">
        <figure className="p-8">
          <div className="h-64 w-64 rounded-xl ring ring-primary ring-offset-2 ring-offset-base-100">
            <img
              src={me}
              alt="Portrait of the site owner"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </figure>

        <div className="card-body lg:w-1/2">
          <h1 className="card-title mb-4 text-4xl font-bold">🙆‍♂️ About Me</h1>

          <p className="mb-6 text-lg text-base-content/80">
            Hi! I'm Zach, and welcome to my home on the internet. Here you can
            find some information about my career, as well as some writings I do
            on the side. Hope you enjoy your stay!
          </p>
          <p className="text-lg text-base-content/80">
            I love building cool things, whether that be this website, or random
            games or other projects. When I'm not at my computer, I'm either
            exploring NYC, reading, going to the gym, or cooking.
          </p>

          <div className="divider my-4"></div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold">⏰ Currently...</h2>
            <ul className="list-disc pl-5 text-lg text-base-content/80">
              <li className="mb-1">
                <span className="font-semibold">Reading:</span> The Confederacy
                of Dunces
              </li>
              <li className="mb-1">
                <span className="font-semibold">Playing:</span> Deltarune
              </li>
              <li className="mb-1">
                <span className="font-semibold">Building:</span> V2 of my
                personal website
              </li>
              <li>
                <span className="font-semibold">Listening to:</span> Bossa Nova,
                Rock, Pop, Minecraft OST 🔥
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
