import Link from "next/link";
import { auth } from "@/app/_lib/auth";

export default async function Navigation() {
  const session = await auth();
  console.log(session);

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              <span>Guest area</span>
              <span className="inline-block ">
                <img
                  className="h-7 ml-1 rounded-full"
                  src={session.user.image}
                  alt={session.user.name}
                  referrerPolicy="no-referrer"
                />
              </span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
