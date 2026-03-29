import * as content from "./Content.ts";

function Intro() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8 min-h-screen flex items-center">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#773b3b] to-[#886554] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
          />
        </div>

        <div className="mx-auto max-w-6xl py-24 sm:py-32 flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-[#773b3b] to-[#886554] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src={content.about_pic}
              alt="Nadine Verelia Moiras"
              className="relative h-64 w-64 lg:h-96 lg:w-96 object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition duration-500"
            />
          </div>

          {/* Text Section */}
          <div className="text-center lg:text-left flex-1">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Hi! I'm{" "}
              <span className="text-[#773b3b]">Nadine Verelia Moiras</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl">
              Penultimate student at{" "}
              <span className="font-semibold text-gray-900">SUTD</span> ×
              Exchange at{" "}
              <span className="font-semibold text-gray-900">
                University of Waterloo
              </span>
              . <br />
              <span className="">{content.about}</span>
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
              <a
                href="work"
                className="rounded-md bg-[#773b3b] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#5a2d2d] focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                View My Work
              </a>
              <a
                href="https://github.com/NadineeSCH"
                className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-2"
              >
                GitHub <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
