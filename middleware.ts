import { clerkMiddleware, createRouteMatcher} from "@clerk/nextjs/server";
const protectedRoute = createRouteMatcher([
    '/',
    '/upcoming',
    '/previous',
    '/recordings',
    '/personal-room',
    '/meeting(.*)'
])
export default clerkMiddleware((auth , rep)=> {
    if( protectedRoute(rep) ) auth().protect();}
    )

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};