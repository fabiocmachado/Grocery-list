import Link from "next/link";
import { FormatedList } from "../Lib/definitions";
import React, { useState } from "react";
import AddForm from "../(components)/AddForm";

export default function Add() {
  return (
    <>
      {" "}
      <div>
        <h1>Add product page!</h1>
        <AddForm />
      </div>
      <div></div>
      <div className="flex flex-auto">
        <button
          type="button"
          className="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          <Link href="/">Home</Link>
        </button>
        <button
          type="button"
          className="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          <Link href="/list">Lista</Link>
        </button>
      </div>
    </>
  );
}
