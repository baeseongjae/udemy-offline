import React from "react";

function SignUpForm() {
  const inputClassName =
    "bg-gray-500 border border-gray-500 px-4 py-2 outline-none focus:border-blue-500 rounded-md";

  return (
    <div>
      {/* <div class="mb-6">
        <label
          for="success"
          class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
        >
          Your name
        </label>
        <input
          type="text"
          id="user-id"
          name="user-id"
          class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
          placeholder="id를 입력하세요"
        />
      </div>
      <div>
        <label
          for="error"
          class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
        >
          Your id
        </label>
        <input
          type="password"
          id="user-pw"
          name="user-pw"
          class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
          placeholder="패스워드를 입력하시오"
        />
      </div> */}

      <input type="text" className={inputClassName} />

      <input type="password" className={inputClassName} />

      <input
        type="text"
        name="user-id"
        id="user-id"
        placeholder="ID를 입력하세요"
        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      ></input>
      <input
        type="password"
        name="user-pw"
        id="user-pw"
        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="패스워드를 입력하세요"
      ></input>
      <label
        for="message"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Your message
      </label>
      <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="한줄 자기소개를 쓰시오"
      ></textarea>
      <button
        type="button"
        class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        회원가입
      </button>
    </div>
  );
}

export default SignUpForm;
