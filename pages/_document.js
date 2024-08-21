"use client"

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="A modern Finance Tracker application built with Next.js 14, Tailwind CSS, and Firebase. It features user authentication, protected routes, and secure data storage using Firebase Firestore, all while offering a sleek, responsive interface powered by Tailwind CSS."/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest/"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <title>Next Finance</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
