import React from "react";
import Container from "./container";

export default function pricing() {
  return (
    <div className="flex grid grid-cols-1 md:grid-cols-3">
      <div class="rounded-lg mx-4 shadow-lg overflow-hidden my-4 bg-white border border-slate-500 hover:shadow-2xl hover:scale-110 transform transition">
        <div class="px-6 py-8 bg-white dark:bg-gray-800 sm:p-10 sm:pb-6">
          <div class="flex justify-center">
            <span class="inline-flex px-4 py-1 rounded-full text-lg leading-5 tracking-wide text-clay-400 ">
              Monthly Plan
            </span>
          </div>
          <div class="mt-4 flex justify-center text-6xl leading-none text-clay-400">
            ₹1,200
            {/* <span class="ml-1 pt-8 text-2xl leading-8 font-medium text-gray-500 dark:text-gray-400">
              /month
            </span> */}
          </div>
        </div>
        <div class="px-6 pt-6 pb-8 bg-white dark:bg-gray-800 sm:p-10 sm:pt-6">
          <ul>
            <li class="mt-4 flex items-start">
              <div class="flex-shrink-0">
                <svg
                  class="h-6 w-6 text-green-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <p class="ml-3 text-base leading-6 text-gray-400">
                Rs 1200 per month
              </p>
            </li>
            <li class="mt-4 flex items-start">
              <div class="flex-shrink-0">
                <svg
                  class="h-6 w-6 text-green-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <p class="ml-3 text-base leading-6 text-gray-400">
                5 sessions per week
              </p>
            </li>
            <li class="mt-4 flex items-start">
              <div class="flex-shrink-0">
                <svg
                  class="h-6 w-6 text-green-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <p class="ml-3 text-base leading-6 text-gray-400">
                Perfect for first time yoga enthusiasts
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div class="rounded-lg mx-4 shadow-lg overflow-hidden my-4 bg-white border border-slate-500 hover:shadow-2xl hover:scale-110 transform transition">
        <div class="px-6 py-8 bg-white dark:bg-gray-800 sm:p-10 sm:pb-6">
          <div class="flex justify-center">
            <span class="inline-flex px-4 py-1 dark:text-white rounded-full text-lg leading-5 tracking-wide text-clay-400">
              6-Month Plan
            </span>
          </div>
          <div class="mt-4 flex justify-center text-6xl leading-none text-clay-400">
            ₹5,999
            {/* <span class="ml-1 pt-8 text-2xl leading-8 font-medium text-gray-500 dark:text-gray-400">
              /month
            </span> */}
          </div>
        </div>
        <div class="px-6 pt-6 pb-8 bg-white dark:bg-gray-800 sm:p-10 sm:pt-6">
          <ul>
            <li class="mt-4 flex items-start">
              <div class="flex-shrink-0">
                <svg
                  class="h-6 w-6 text-green-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <p class="ml-3 text-base leading-6 text-gray-400">
                Pay for 5 months and <span className = 'font-black text-clay'>get 1 month free</span>
              </p>
            </li>
            <li class="mt-4 flex items-start">
              <div class="flex-shrink-0">
                <svg
                  class="h-6 w-6 text-green-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <p class="ml-3 text-base leading-6 text-gray-400">
              5 sessions per week
              </p>
            </li>
            <li class="mt-4 flex items-start">
              <div class="flex-shrink-0">
                <svg
                  class="h-6 w-6 text-green-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <p class="ml-3 text-base leading-6 text-gray-400">
                Ideal to master techniques of yogic kriyas
              </p>
            </li>

          </ul>
        </div>
      </div>

      <div class="rounded-lg mx-4 shadow-lg overflow-hidden my-4 bg-white border border-slate-500 hover:shadow-2xl hover:scale-110 transform transition">
        <div class="px-6 py-8 bg-white dark:bg-gray-800 sm:p-10 sm:pb-6">
          <div class="flex justify-center">
            <span class="inline-flex px-4 py-1 dark:text-white rounded-full text-lg leading-5  tracking-wide text-clay-400">
              12-Month Plan
            </span>
          </div>
          <div class="mt-4 flex justify-center text-6xl leading-none text-clay-400">
            ₹10,800
            {/* <span class="ml-1 pt-8 text-2xl leading-8 font-medium text-gray-500 dark:text-gray-400">
              /month
            </span> */}
          </div>
        </div>
        <div class="px-6 pt-6 pb-8 bg-white dark:bg-gray-800 sm:p-10 sm:pt-6">
          <ul>
            <li class="mt-4 flex items-start">
              <div class="flex-shrink-0">
                <svg
                  class="h-6 w-6 text-green-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <p class="ml-3 text-base leading-6 text-gray-400">
                Pay for 9 months and <span className = 'font-black text-clay'>get 3 months free</span>
              </p>
            </li>
            <li class="mt-4 flex items-start">
              <div class="flex-shrink-0">
                <svg
                  class="h-6 w-6 text-green-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <p class="ml-3 text-base leading-6 text-gray-400">
              5 sessions per week
              </p>
            </li>
            <li class="mt-4 flex items-start">
              <div class="flex-shrink-0">
                <svg
                  class="h-6 w-6 text-green-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <p class="ml-3 text-base leading-6 text-gray-400">
                Perfect to make yoga a part of your lifestyle
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
