import React from "react";
import Link from "next/link";
import { pageRoutes } from "./routes";

const routes = pageRoutes.map((pr) => (
  <li>
    <Link className="capitalize" href={pr.href}>
      {pr.label}
    </Link>
  </li>
));

export const Nav = () => {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
        <Link href="/" className="btn btn-primary">
          Next.Js
        </Link>
        <ul className="menu menu-horizontal md:ml-8">{routes}</ul>
      </div>
    </nav>
  );
};
