import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import userData from "@constants/data";

export default function NavbarEmpty() {
  const router = useRouter();
  console.log(router.asPath);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="max-w-6xl  mx-auto px-4 py-4 md:py-5">
      <div className="flex  md:flex-row justify-between items-center">
        <div className="flex flex-col">
          <Link href="/">
            <h1 className="font-semibold text-xl dark:text-gray-100">
              {userData.name}
            </h1>
            <p className="text-base font-light text-gray-500 dark:text-gray-300">
              {userData.designation}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
