import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-linear-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen text-white">
      <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[80vh] items-center">
        <div className="flex flex-col gap-6 items-center justify-center px-6 md:px-10 py-10 md:py-0">
          <p className="text-2xl md:text-4xl font-bold underline italic text-center">
            Your Trusted URL Shortener - BreakLink
          </p>
          <p className="px-4 md:px-10 text-sm md:text-lg font-medium text-center">
            Our URL Shortener is easy to understand and use. Unlike other URL Shorteners, we respect your privacy and keep it simple and straightforward.
          </p>
          <div className="flex flex-col md:flex-row gap-5 justify-center">
            <Link href="/shorten">
              <button className="bg-purple-700 hover:bg-purple-800 transition-all duration-300 rounded-lg shadow-lg px-6 py-2 font-bold text-white transform hover:scale-105">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="bg-purple-700 hover:bg-purple-800 transition-all duration-300 rounded-lg shadow-lg px-6 py-2 font-bold text-white transform hover:scale-105">
                GitHub
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center relative px-6 md:px-0 py-10 md:py-0">
          <Image
            className="rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500"
            alt="An Image of a vector"
            src={"/vector.jpg"}
            width={500}
            height={500}
            priority
          />
        </div>
      </section>
      <footer className="text-center py-4 bg-purple-900 text-white text-sm md:text-base fixed bottom-0 w-full">
        <p>© 2026 BreakLink. All rights reserved.</p>
      </footer>
    </main>
  );
}
