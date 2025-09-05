// app/dashboard/page.tsx
'use client';
import { UserButton } from '@clerk/nextjs';

export default function DashboardPage() {
  return (
    <main>
      <h1>Welcome to your Dashboard!</h1>
      <UserButton />
    </main>
  );
}
