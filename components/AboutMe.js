import React from "react";
import userData from "@constants/data";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          About Me.
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}.{/* Currently working on{" "} */}
            {/* <a
              className="bg-red-500 rounded-md px-2 py-1 text-white"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} ✈️
            </a> */}
          </p>
        </div>
      </div>

      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-10 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For any sort help / enquiry, shoot a{" "}
                <a
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  mail
                </a>{" "}
                and I will get back asap.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I am looking for a job currently, If you see me as a good fit,
                check my{" "}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  CV
                </a>{" "}
                and I'd love to work for you.
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              {/* <div className="flex flex-row justify-start items-center ">
                <a
                  href={userData.socialLinks.facebook}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Facebook
                  </div>
                </a>
              </div> */}
              {/* <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.twitter}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Twitter
                  </div>
                </a>
              </div> */}
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </div>
                </a>
              </div>
              {/* <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.instagram}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                    Instagram
                  </div>
                </a>
              </div> */}
            </div>
            <div className="col-span-1 md:col-span-1">
              {/* Goals for the year*/}
              <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
                Goals for 2023
              </h1>
              <ul class="text-large font-medium text-gray-900 dark:border-gray-600 dark:text-white">
                {userData.about.goals.map((idx) => (
                  <>
                    <GoalCard goal={idx} />
                  </>
                ))}
              </ul>
            </div>
          </div>

          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}

            <h1 className="text-3xl rounded-md px-2 py-1 inline-block font-bold bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://seeklogo.com/images/O/openzeppelin-logo-2909FE553F-seeklogo.com.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://camo.githubusercontent.com/df9365ae11c1678020c68db521a0a98522be0c065151e720e9ec4cf7624def50/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f436861696e6c696e6b2d3337354244323f7374796c653d666f722d7468652d6261646765266c6f676f3d436861696e6c696e6b266c6f676f436f6c6f723d7768697465"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://camo.githubusercontent.com/fc47d33f8dee7a7ee58f8b40ed2b5fa2daeb1e28a0cba62a5374b4c98edb16ca/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f457468657265756d2d3343334333443f7374796c653d666f722d7468652d6261646765266c6f676f3d457468657265756d266c6f676f436f6c6f723d7768697465"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://seeklogo.com/images/H/hardhat-logo-888739EBB4-seeklogo.com.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://avatars.githubusercontent.com/u/22205159?s=280&v=4"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3VgNhP1A0wkrHPmYn6RWokpJTIMqQLOcv8JDS1L8Y-ojRWey6F57g9Bn1FmFnziE_doQ&usqp=CAU"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://docs.ipfs.tech/images/ipfs-logo.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://avatars.githubusercontent.com/u/20999355?s=280&v=4"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Uniswap_Logo_and_Wordmark.svg/1280px-Uniswap_Logo_and_Wordmark.svg.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/200x200/7186.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://1.bp.blogspot.com/-w5GMADRXlX8/XbMwKQf3_DI/AAAAAAAADHU/LHFA0pehinAN1090Qom38xiq2KbaemO5wCLcBGAsYHQ/s1600/logo.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://mythx.gallerycdn.vsassets.io/extensions/mythx/mythxvsc/0.7.21/1588799500898/Microsoft.VisualStudio.Services.Icons.Default"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://cryptologos.cc/logos/polygon-matic-logo.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://camo.githubusercontent.com/c839570bc71901106b11b8411d9277a6a8356a9431e4a16d6c26db82caab7d62/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6f6e676f44422d2532333465613934622e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d6f6e676f6462266c6f676f436f6c6f723d7768697465"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://camo.githubusercontent.com/b46e59b09c063a31380646688a68018381767a7a206547c93f896df4643671e9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d7973716c2d2532333030303030662e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d7973716c266c6f676f436f6c6f723d7768697465"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://camo.githubusercontent.com/29e7fc6c62f61f432d3852fbfa4190ff07f397ca3bde27a8196bcd5beae3ff77/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f706f7374677265732d2532333331363139322e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d706f737467726573716c266c6f676f436f6c6f723d7768697465"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://cryptologos.cc/logos/solana-sol-logo.png"
                className="h-20 w-20 mx-4 my-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const GoalCard = ({ goal }) => {
  return (
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
      <div class="flex items-center pl-3">
        <input
          disabled
          id="disabled-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="vue-checkbox"
          class="w-full py-3 ml-2 text-large font-medium text-gray-900 dark:text-gray-300"
        >
          {goal}
        </label>
      </div>
    </li>
  );
};
