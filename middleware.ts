import { NextResponse, NextRequest } from "next/server";

import { jwtVerify, createRemoteJWKSet } from "jose";
import { hankoApi } from "./utils/hanko";

export async function middleware(req: NextRequest) {
  const hanko = req.cookies.get("hanko")?.value;

  const JWKS = createRemoteJWKSet(new URL(`${hankoApi}/.well-known/jwks.json`));

  try {
    const verifiedJWT = await jwtVerify(hanko ?? "", JWKS);
  } catch {
    return NextResponse.redirect(new URL("/signin", req.url));
  }
}

export const config = {
  matcher: ["/dashboard"],
};
