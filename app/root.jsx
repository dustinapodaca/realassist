//REMIX imports
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

//TAILWIND import
import stylesheet from "~/tailwind.css";

//CONTEXT import
import { PropertyProvider } from "~/store/propertyContext";

export const links = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta = () => ({
  charset: "utf-8",
  title: "Real Assist Mockup",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <PropertyProvider>
          <Outlet />
        </PropertyProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
