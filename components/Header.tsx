"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAppState } from "../context";
import { register } from "@teamhanko/hanko-elements";
import { hankoApi } from "../utils/hanko";

export default function Header() {
  const [appState, setAppState] = useAppState();
  const router = useRouter();

  const logout = async () => {
    try {
      await appState.hanko?.user.logout().then(() => {
        setAppState((state) => ({ ...state, userId: undefined }));
      });

      router.push("/signin");
      router.refresh();
      return;
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  useEffect(() => {
    if (appState.hanko?.user)
      appState.hanko?.user
        .getCurrent()
        .then((user) => {
          setAppState((state) => ({ ...state, userId: user.id }));
        })
        .catch((userError) => {
          console.log("GET LOGGED IN USER ERROR => ", userError.message);
        });
  }, [appState.hanko]);

  useEffect(() => {
    register(hankoApi).catch((error) => {
      // handle error
      console.log("HANKO AUTH ERROR => ", error);
    });
  }, []);

  return (
    <header className="flex flex-col xs:flex-row justify-between items-center w-full mt-3 border-b pb-7 sm:px-4 px-2 border-gray-500 gap-2">
      <Link href="/" className="flex space-x-2">
        <Image
          alt="header text"
          src="/bed.svg"
          className="sm:w-10 sm:h-10 w-9 h-9"
          width={24}
          height={24}
        />
        <h1 className="sm:text-3xl text-xl font-bold ml-2 tracking-tight">
          roomGPT.io
        </h1>
      </Link>
      {!appState.userId ? (
        <a
          className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-blue-600 text-white px-5 py-2 text-sm shadow-md hover:bg-blue-500 bg-blue-600 font-medium transition"
          href="/signin"
        >
          <p>Signin</p>
        </a>
      ) : (
        <button
          onClick={logout}
          className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-blue-600 text-white px-5 py-2 text-sm shadow-md hover:bg-blue-500 bg-blue-600 font-medium transition"
        >
          Signout
        </button>
      )}
    </header>
  );
}
