import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });

  const currentUrl = request.nextUrl.pathname;
  const isAdmin = token?.role === "ADMIN";

  if (
    token &&
    (currentUrl.startsWith("/sign-in") || currentUrl.startsWith("/sign-up"))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (currentUrl.startsWith("/add-project") && !isAdmin) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/sign-in", "/sign-up", "/add-project/:path*"],
};
