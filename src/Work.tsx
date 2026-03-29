import EmblaCarousel from "./carousel/EmblaCarousel.tsx";
import { work } from "./Content.ts";
import type { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = {};

function Work() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8 py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-60 bg-linear-to-tr from-[#773b3b] to-[#886554] opacity-30 sm:left-[calc(50%-30rem)] sm:w-6xl"
          />
        </div>

        <div className="mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold tracking-tight text-gray-900 mb-16">
            My <span className="text-[#773b3b]">Work</span>
          </h2>

          <div className="space-y-16">
            {work.map((item, index) => (
              <div
                key={index}
                className="pb-12 border-b border-gray-200 last:border-b-0"
              >
                <div className="flex flex-col gap-8 items-start">
                  {/* Content Section */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-3xl font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.type === "internship"
                            ? "capitalize bg-blue-100 text-blue-800"
                            : "capitalize bg-purple-100 text-purple-800"
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-[#773b3b] font-semibold mb-6">
                      <span>{item.start}</span>
                      <span>—</span>
                      <span>{item.end}</span>
                    </div>

                    <p className="text-lg leading-8 text-gray-700 mb-6">
                      {item.desc}
                    </p>
                    <p className="text-lg leading-8 text-[#773b3b] mb-2">
                      Technologies used:
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Images Section */}
                  {/* {item.pic.length > 0 && (
                    <div className="flex gap-4 lg:w-1/3 overflow-x-auto lg:overflow-x-visible">
                      {item.pic.map((image, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={image}
                          alt={`${item.title} - ${imgIndex + 1}`}
                          className="h-40 w-40 lg:h-48 lg:w-48 object-cover rounded-lg shadow-lg shrink-0"
                        />
                      ))}
                    </div>
                  )} */}
                  {item.pic.length > 0 && (
                    <EmblaCarousel pictures={item.pic} options={OPTIONS} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
