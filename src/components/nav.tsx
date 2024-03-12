"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Architecture",
    href: "/architecture",
    subLinks: [
      { name: "Sagrada Familia", href: "/architecture/sagrada-familia" },
      { name: "Casa Batlló", href: "/architecture/casa-batllo" },
      { name: "Casa Milà (La Pedrera)", href: "/architecture/casa-mila" },
    ],
  },
];

export function Nav() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div>
      <div className="nav w-full px-0 py-12">
        <ul className="list-none font-medium">
          {navLinks.map((link) => {
            return (
              <li
                key={link.name}
                className={`${clsx({
                  active: pathname === link.href,
                })} float-left m-0 w-full`}
              >
                <Link href={link.href} className="text-b text-[#767676]">
                  {link.name}
                </Link>
                {link.subLinks && (
                  <ul className="clear-both ml-5 list-none font-medium">
                    {link.subLinks.map((subLink) => {
                      return (
                        <li
                          key={subLink.name}
                          className={`${clsx({
                            active: pathname === subLink.href,
                          })} float-left m-0 w-full`}
                        >
                          <Link
                            href={subLink.href}
                            className="text-b text-[#767676]"
                          >
                            {subLink.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
