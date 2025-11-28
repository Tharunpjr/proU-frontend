import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import { ConvexReactClient, ConvexProvider } from "convex/react"

const convexUrl = (import.meta.env.VITE_CONVEX_URL as string) || null
console.log("VITE_CONVEX_URL =", convexUrl)

let convexClient: ConvexReactClient | null = null
if (convexUrl) {
  try {
    convexClient = new ConvexReactClient(convexUrl)
  } catch (e) {
    console.error("Failed to create ConvexReactClient:", e)
  }
}

const root = createRoot(document.getElementById("root") as HTMLElement)

if (!convexClient) {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} else {
  root.render(
    <React.StrictMode>
      <ConvexProvider client={convexClient}>
        <App />
      </ConvexProvider>
    </React.StrictMode>
  )
}
