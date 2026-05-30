
export function Description() {
    return (
      <div className="bg-white dark:bg-[#121212]">
        <div className="min-h-[calc(100vh-5rem)] flex items-center">
          <div className="grid items-center w-full max-w-[1100px] mx-auto px-8 md:grid-cols-3 gap-x-2 gap-y-4">
            <div className="md:col-span-2 text-center md:text-left pb-4">
              <h2 className="mt-2 text-4xl pb-4 font-bold text-gray-900 dark:text-white md:text-5xl">
                Hi 👋
              </h2>
              <p className="text-4xl pb-4 font-bold text-gray-900 dark:text-white md:text-5xl">
                I&apos;m Jericho Huelar
              </p>
              <p className="mt-2 text-lg pb-4 font-semibold text-gray-900 dark:text-white leading-relaxed md:text-xl">
                📌 Calgary, AB
              </p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white leading-relaxed md:text-xl">
                University of Calgary
              </p>
              <p className="text-lg font-semibold pb-4 text-gray-900 dark:text-white leading-relaxed md:text-xl">
                Software Engineering Student
              </p>
              <div className="flex items-center">
                <a className="pr-5" href="https://www.linkedin.com/in/jericho-huelar-112a04301/">
                  <img
                      src="/images/LinkedIn.png"
                      alt="Linkedin Logo"
                      className="h-10"
                    />
                </a>
                <a href="https://github.com/jlhuelar">
                  <img
                      src="/images/github.png"
                      alt="Github Logo"
                      className="h-10"
                    />
                </a>
              </div>
            </div>
            <div className="flex justify-center mt-8 md:mt-0 md:col-span-1 pb-4">
              <div className="w-64 h-100 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/jericho.jpg"
                  alt="Personal Photo"
                  className="w-full h-full object-cover object-[center top] scale-110 transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 pb-10">
          <div className="grid w-full max-w-[1300px] mx-auto px-6 md:grid-cols-3 gap-4">
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: "12px", border: 0 }}
              src="https://open.spotify.com/embed/track/4AQSA9Do6uF4a1XkLNok6d?utm_source=generator&theme=0"
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy">
            </iframe>
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: "12px", border: 0 }}
              src="https://open.spotify.com/embed/track/3Naqjihn2GJjOBZNeenivP?utm_source=generator&theme=0"
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy">
            </iframe>
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: "12px", border: 0 }}
              src="https://open.spotify.com/embed/track/6phkEy1YzAK1JWZWgwC36v?utm_source=generator&theme=0"
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    );
  }
