import StickyQuotes from "@/components/anim/StickyQuotes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="max-w-2xl h-auto w-full flex flex-col py-[200px]">
        <h2 className="text-2xl mb-4 font-semibold">Research techniques </h2>
        <div className="text-xl flex flex-col space-y-3">
          <span>
            Sora is a diffusion model, which generates a video by starting off
            with one that looks like static noise and gradually transforms it by
            removing the noise over many steps.
          </span>
          <span>
            Sora is capable of generating entire videos all at once or extending
            generated videos to make them longer. By giving the model foresight
            of many frames at a time, we’ve solved a challenging problem of
            making sure a subject stays the same even when it goes out of view
            temporarily.
          </span>

          <span>
            Similar to GPT models, Sora uses a transformer architecture,
            unlocking superior scaling performance.
          </span>

          <span>
            We represent videos and images as collections of smaller units of
            data called patches, each of which is akin to a token in GPT. By
            unifying how we represent data, we can train diffusion transformers
            on a wider range of visual data than was possible before, spanning
            different durations, resolutions and aspect ratios.
          </span>

          <span>
            Sora builds on past research in DALL·E and GPT models. It uses the
            recaptioning technique from DALL·E 3, which involves generating
            highly descriptive captions for the visual training data. As a
            result, the model is able to follow the user’s text instructions in
            the generated video more faithfully.
          </span>

          <span>
            In addition to being able to generate a video solely from text
            instructions, the model is able to take an existing still image and
            generate a video from it, animating the image’s contents with
            accuracy and attention to small detail. The model can also take an
            existing video and extend it or fill in missing frames. Learn more
            in our technical report.
          </span>

          <span>
            Sora serves as a foundation for models that can understand and
            simulate the real world, a capability we believe will be an
            important milestone for achieving AGI.
          </span>
        </div>
      </section>

      {/* // * Stick Quotes */}
      <StickyQuotes />

      <section className="flex flex-col items-center h-screen w-full bg-black py-[200px]">
        <div>
          <span className="text-zinc-500">Research Leads</span>
          <p className="text-white">Bill Peebles & Tim Brooks</p>
        </div>
      </section>
    </main>
  );
}
