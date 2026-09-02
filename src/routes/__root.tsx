import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import "../styles.css";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl font-bold text-heading">404</h1>
        <h2 className="mt-4 font-serif text-xl text-heading">Page not found</h2>
        <p className="mt-2 font-mono text-sm text-dim">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="cta-secondary"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-xl tracking-tight text-heading">
          This page didn't load
        </h1>
        <p className="mt-2 font-mono text-sm text-dim">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="cta-primary"
          >
            Try again
          </button>
          <a
            href="/"
            className="cta-secondary"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vitalii Balitskyi — System Engineering Lead & Consultant" },
      {
        name: "description",
        content:
          "Vitalii Balitskyi — System Engineering Lead and consultant in Denmark. Helping deep-tech hardware teams turn fragile prototypes into production-ready systems.",
      },
      { name: "author", content: "Vitalii Balitskyi" },
      { rel: "canonical", href: "https://balitskyi.net/" },
      { property: "og:title", content: "Vitalii Balitskyi — System Engineering Lead & Consultant" },
      {
        property: "og:description",
        content:
          "Helping deep-tech hardware teams turn fragile prototypes into production-ready systems. System architecture, prototype-to-production pathways, and team advisory.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://balitskyi.net/" },
      { property: "og:image", content: "https://balitskyi.net/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://balitskyi.net/og-image.jpg" },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Mono:ital,wght@0,300;0,400;1,300&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
