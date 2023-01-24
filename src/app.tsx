import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const App = styled(({ className }: { className?: string }) => {
  const [name, setName] = useState("jiwon");

  useEffect(() => {
    console.log("hello");
    return () => console.log("bye");
  }, [name]);

  return (
    <div className={className}>
      <div>{name}</div>
      <button onClick={() => setName("global")}>click me</button>
      <div>Nice to meet you</div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        magnam explicabo tempora est dignissimos, facere, officia ipsum placeat
        ut atque, repellat dolores ratione deserunt error. Non est veniam atque
        consequatur.
      </div>
    </div>
  );
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
