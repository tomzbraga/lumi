"use client";

import TopBar from "@/components/TopBar";
import Main from "@/components/Main";
import { useState } from "react";

export type Tab = "tasks" | "pomodoro" | "files";

export default function Home() {
  const [tab, setTab] = useState<Tab>("tasks");

  return (
    <>
      <section>
        <TopBar onTabChange={setTab} />
      </section>
      <main>
        <Main tab={tab} />
      </main>
    </>
  );
}
