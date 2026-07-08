import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function DesignerCta({ href, children }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 rounded-full border border-gray-900 bg-white px-5 py-3 text-sm font-medium uppercase tracking-[0.12em] text-gray-900 shadow-[0_10px_24px_rgba(17,24,39,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-900 hover:text-white hover:shadow-[0_14px_32px_rgba(17,24,39,0.16)] focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
    >
      <span>{children}</span>
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-900 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-gray-900">
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  );
}
