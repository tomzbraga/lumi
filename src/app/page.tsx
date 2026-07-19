"use client";

import TopBar from "@/components/TopBar";
import Main from "@/components/Main";
import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState();

  return (
    <>
      <section>
        <TopBar onTabChange={setTab} />
      </section>
      <main>
        <Main />
      </main>
    </>
  );
}
