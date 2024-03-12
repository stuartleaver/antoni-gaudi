interface NavLink {
  name: string;
  href: string;
  subLinks?: NavLink[];
}
