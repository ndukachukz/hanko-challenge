"use client";

import { useCallback, useEffect, useState } from "react";
import { Hanko, register } from "@teamhanko/hanko-elements";
import { useRouter } from "next/navigation";

import { hankoApi } from "../utils/hanko";
import { useAppState } from "../context";

export default function HankoAuth() {
  const router = useRouter();
  const [{ hanko }, setAppState] = useAppState();

  const redirectAfterLogin = useCallback(() => {
    router.replace("/dashboard");
  }, [router]);

  useEffect(
    () =>
      hanko?.onAuthFlowCompleted(({ userID }) => {
        // update state
        setAppState((state) => ({ ...state, userId: userID }));
        redirectAfterLogin();
      }),
    [hanko, redirectAfterLogin]
  );

  return <hanko-auth />;
}
