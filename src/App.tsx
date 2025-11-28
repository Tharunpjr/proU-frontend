import React from "react";
import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { SignInForm } from "./SignInForm";
import { SignOutButton } from "./SignOutButton";
import { Toaster } from "sonner";
import { FadeIn, SlideUp, ScaleIn } from "react-bits";


export default function App(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm h-16 flex justify-between items-center border-b shadow-sm px-4">
        <Reveal>
          <h2 className="text-xl font-semibold text-primary">Chef</h2>
        </Reveal>

        <Authenticated>
          <Reveal>
            <SignOutButton />
          </Reveal>
        </Authenticated>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md mx-auto">
          <Content />
        </div>
      </main>

      <Toaster />
    </div>
  );
}

function Content(): JSX.Element {
  const loggedInUser = useQuery(api.auth.loggedInUser);

  // Convex loading state
  if (loggedInUser === undefined) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-section">
      {/* Title */}
      <div className="text-center">
        <Reveal>
          <h1 className="text-5xl font-bold text-primary mb-4">
            Cook with Chef
          </h1>
        </Reveal>

        <Authenticated>
          <Reveal>
            <p className="text-xl text-secondary">
              Welcome back,{" "}
              <span className="font-medium">
                {loggedInUser?.email ?? "friend"}
              </span>
              !
            </p>
          </Reveal>
        </Authenticated>

        <Unauthenticated>
          <Reveal>
            <p className="text-xl text-secondary">Sign in to get started</p>
          </Reveal>
        </Unauthenticated>
      </div>

      {/* Sign-in Form */}
      <Unauthenticated>
        <Reveal>
          <SignInForm />
        </Reveal>
      </Unauthenticated>
    </div>
  );
}
