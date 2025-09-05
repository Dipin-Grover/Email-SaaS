// app/page.tsx or pages/index.tsx
'use client'; // Only necessary for App Router with client-side Clerk hooks
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs';

export default function Home() {
  return (
    <main>
      <h1>Welcome to Email SAAS</h1>
      <SignedOut>
        <a href="/sign-in">Sign In</a>
      </SignedOut>
      <SignedIn>
        <UserButton />
        <p>You are already signed in!</p>
      </SignedIn>
      {/* Add more home page content here */}
    </main>
  );
}
