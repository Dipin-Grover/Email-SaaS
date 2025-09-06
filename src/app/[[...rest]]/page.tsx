import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignIn routing="hash" />
      { /* Use routing="hash" if you want hash-based routing to avoid catch-all complexity */ }
    </div>
  );
}
