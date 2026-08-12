import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for does not exist. Return to Arfan Ahmed's portfolio home.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex-1 flex items-center justify-center px-6 py-24">
      <div className="max-w-lg w-full text-center space-y-6">
        <p className="font-mono text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
          Error 404
        </p>
        <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-slate-100">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-all"
          >
            Back to Home
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 font-semibold text-xs uppercase tracking-wider rounded-lg transition-all"
          >
            View Projects
          </Link>
        </div>

        <nav aria-label="Helpful links" className="pt-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
            <li>
              <Link href="/about" className="hover:text-emerald-400 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
