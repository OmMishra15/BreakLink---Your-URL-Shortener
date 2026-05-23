"use client";
import Link from "next/link";
import { React, useState } from "react";

const shorten = () => {
  const [URL, setURL] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState("");

  function generate() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      URL: URL,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        setURL("");
        setshorturl("");
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      <div className="min-h-screen bg-linear-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">
          Generate Your Shortened URL
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <input
            type="text"
            placeholder="Enter Your URL"
            value={URL}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              setURL(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Preferred Short URL"
            value={shorturl}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              setshorturl(e.target.value);
            }}
          />
          <button
            onClick={generate}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Generate URL
          </button>
          <div className="py-4">
            {generated && (
              <>
                <span className="font-bold text-lg">Your Link: </span>
                <code>
                  <Link href={generated} target="_blank">
                    {generated}
                  </Link>
                </code>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default shorten;
