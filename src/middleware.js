import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const dummyUser = {
    role: "admin",
    name: "John Doe",
  };
  const isServices = request.nextUrl.pathname.startsWith("/services");
  const isAdmin = dummyUser.role === "admin";

  if (isServices && !isAdmin) return NextResponse.redirect(new URL("/login", request.url));

  return NextResponse.next();
}
