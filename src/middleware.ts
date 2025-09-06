import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    
    "/", 
    '/api/:path*',
    // this is used here if we remove it then localhost:3000/sign-in goes to localhost:3000/ again and again  if anything wrong happens go there 
    "/(api|trpc)(.*)",
  ],
};
