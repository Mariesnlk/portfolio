import React from "react";
import { useRouter } from 'next/router'

export default function TrickyTriangle(props) {
    let router= useRouter();

    function navigateToLinks() {
        router.push('/links')
    };

  return (
    <div className="flex justify-center">
        <div className="flex block rounded-xl shadow-lg bg-white max-w-sm text-center mt-5 mb-5 px-10">
            <div className="flex flex-col items-center p-3">
                <img className="rounded flex" alt="tricky" src="/triangle.png" />
                <h5 className="text-gray-900 text-3xl font-bold subtitle m-5">Which answer is the same</h5>

                <button className="subtitle flex text-lg px-8 py-4 m-2 text-gray-900 font-semibold rounded-full border border-gray-800  hover:bg-gray-800 hover:text-white hover:border-transparent "
                    type="button" onClick={navigateToLinks}> 95, 168, 193 
                </button>
                <button className="subtitle flex text-lg px-8 py-4 m-2 text-gray-900 font-semibold rounded-full border border-gray-800  hover:bg-gray-800 hover:text-white hover:border-transparent "
                    type="button" onClick={navigateToLinks}> 119, 120, 169
                </button>
                <button className="subtitle flex text-lg px-8 py-4 m-2 text-gray-900 font-semibold rounded-full border border-gray-800  hover:bg-gray-800 hover:text-white hover:border-transparent "
                    type="button" onClick={navigateToLinks}> 336, 337, 505
                </button>
                <button className="subtitle flex text-lg px-8 py-4 m-2 text-gray-900 font-semibold rounded-full border border-gray-800  hover:bg-gray-800 hover:text-white hover:border-transparent "
                    type="button" onClick={navigateToLinks}> 696, 697, 985
                </button>
            </div>
        </div>
    </div>
  )
}
