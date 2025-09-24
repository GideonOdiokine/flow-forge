import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'


// Define which routes need authentication
const isProtectedRoute = createRouteMatcher([
    '/(pages|dashboard|settings|workflows)(.*)',
])

// Define public routes
const isPublicRoute = createRouteMatcher([
    '/',
    '/api/clerk-webhook',
    '/api/drive-activity/notification',
    '/api/payment/success',
])

// Define ignored routes (skip Clerk entirely)
const isIgnoredRoute = createRouteMatcher([
    '/api/auth/callback/discord',
    '/api/auth/callback/notion',
    '/api/auth/callback/slack',
    '/api/flow',
    '/api/cron/wait',
])

export default clerkMiddleware(async (auth, req) => {
    if (isIgnoredRoute(req)) {
        return // completely skip Clerk
    }

    if (isPublicRoute(req)) {
        return // allow without auth
    }

    if (isProtectedRoute(req)) {
        await auth.protect() // enforce login
    }
})

export const config = {
    matcher: [
        // Skip Next.js internals and static assets
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}
