import React from "react";
import Link from "next/link";
import { pageRoutes } from "./routes";

const routes = pageRoutes.map((pr) => (
  <li>
    <Link className="text-md" href={pr.href}>
      {pr.label}
    </Link>
  </li>
));

export const Nav = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 px-3">
        <Link className="text-xl" href="/">
          Home
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details className="px-5">
              <summary className="text-xl">Pages</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">{routes}</ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};
