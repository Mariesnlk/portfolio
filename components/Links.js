import React from "react";
import Link from "next/link";
import userData from "@constants/data";

export default function Links() {
  return (
    <div className="flex justify-center">
      <div className="flex block rounded-xl shadow-lg bg-white max-w-sm text-center mt-10 mb-10 px-10">
        <div className="flex flex-col items-center p-3">
          <h5 className="text-gray-900 text-2xl font-bold subtitle m-5">
            Reach me here
          </h5>
          <div className="grid grid-cols-3 gap-4 text-gray-900">
            <div class="...">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-linkedin h-5 w-5"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </div>
            <div class="col-span-2 ...">
              <Link href={userData.socialLinks.linkedin}>
                <h1 className="font-semibold text-l text-gray-900">Linkedin</h1>
              </Link>
            </div>
            <div class="...">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-github h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <div class="col-span-2 ...">
              <Link href={userData.socialLinks.github}>
                <h1 className="font-semibold text-l text-gray-900">GitHub</h1>
              </Link>
            </div>
            <div class="...">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-devpost h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31c0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861c.009-2.569-1.096-3.853-3.767-3.853Z" />
              </svg>
            </div>
            <div class="col-span-2 ...">
              <Link href={userData.socialLinks.devpost}>
                <h1 className="font-semibold text-l text-gray-900">Devpost</h1>
              </Link>
            </div>
          </div>
          <h5 className="text-gray-900 text-2xl font-bold subtitle m-5">
            Get to know more about me here
          </h5>
          <div className="grid grid-cols-3 gap-4 text-gray-900">
            <div class="...">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill-rule="evenodd"
                clip-rule="evenodd"
                className="bi bi-cv h-5 w-5"
                viewBox="0 0 20 20"
              >
                <path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z" />
              </svg>
            </div>
            <div class="col-span-2 ...">
              <Link href={userData.resumeUrl}>
                <h1 className="font-semibold text-l text-gray-900">Resume</h1>
              </Link>
            </div>
            <div class="...">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-portfolio h-5 w-5"
                viewBox="0 0 20 20"
              >
                <path d="M4 5H.78c-.37 0-.74.32-.69.84l1.56 9.99S3.5 8.47 3.86 6.7c.11-.53.61-.7.98-.7H10s-.7-2.08-.77-2.31C9.11 3.25 8.89 3 8.45 3H5.14c-.36 0-.7.23-.8.64C4.25 4.04 4 5 4 5zm4.88 0h-4s.42-1 .87-1h2.13c.48 0 1 1 1 1zM2.67 16.25c-.31.47-.76.75-1.26.75h15.73c.54 0 .92-.31 1.03-.83c.44-2.19 1.68-8.44 1.68-8.44c.07-.5-.3-.73-.62-.73H16V5.53c0-.16-.26-.53-.66-.53h-3.76c-.52 0-.87.58-.87.58L10 7H5.59c-.32 0-.63.19-.69.5c0 0-1.59 6.7-1.72 7.33c-.07.37-.22.99-.51 1.42zM15.38 7H11s.58-1 1.13-1h2.29c.71 0 .96 1 .96 1z" />
              </svg>
            </div>
            <div class="col-span-2 ...">
              <Link href="/intro">
                <h1 className="font-semibold text-l text-gray-900">
                  My Portfolio
                </h1>
              </Link>
            </div>
            <div class="...">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-youtube h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5l-6-3.5v7z" />
              </svg>
            </div>
            <div class="col-span-2 ...">
              <Link href={userData.socialLinks.youtube}>
                <h1 className="font-semibold text-l text-gray-900">Youtube</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
