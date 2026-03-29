import {contact} from "./Content.ts";

function Contact() {
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
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#773b3b] to-[#886554] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
            />
          </div>
  
          <div className="mx-auto max-w-4xl">
            
  
            {/* Text Section */}
            <div className="justify-center text-center flex-1">
              <h1 className="text-center text-6xl font-bold tracking-tight text-gray-900">
                <span className="text-[#773b3b]">Contact me</span>
              </h1>
  
              <div className="justify-center text-lg leading-8 text-gray-600">
                <div className="mt-5 text-md max-w-sm mb-5 text-wrap mx-auto">{contact.text}</div>

                <span className="font-semibold text-gray-900">Email: </span> <a href={`mailto:${contact.email}`} className="text-[#773b3b] hover:underline">{contact.email}</a>
                <br />
                <span className="font-semibold text-gray-900">LinkedIn: </span> <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#773b3b] hover:underline">{contact.linkedin}</a>
                <br />
                <span className="font-semibold text-gray-900">GitHub: </span> <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-[#773b3b] hover:underline">{contact.github}</a>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    );
}

export default Contact;
