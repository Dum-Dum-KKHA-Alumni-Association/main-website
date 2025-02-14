import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
	const accessToken = req.cookies.get('access_token')?.value;

	console.log('Access token', accessToken);

	const isProtectedRoute = req.nextUrl.pathname.startsWith('/dashboard'); // Adjust as needed

	if (isProtectedRoute && !accessToken) {
		return NextResponse.redirect(new URL('/sign-in', req.url));
	}

	return NextResponse.next();
}

// Apply middleware only to protected routes
export const config = {
	matcher: ['/dashboard/:path*'], // Adjust for your protected routes
};
