// src/app/page.tsx
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard"); // Redirects the homepage to /dashboard
}
