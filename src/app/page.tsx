"use client";

import { useState } from "react";
import Envelope from "@/src/components/Envelope/Envelope";
import Invitation from "@/src/components/Invitation";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened ? (
        <Envelope onOpen={() => setOpened(true)} />
      ) : (
        <Invitation />
      )}
    </>
  );
}