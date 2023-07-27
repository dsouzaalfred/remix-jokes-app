import { Outlet } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function TestRoute() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
