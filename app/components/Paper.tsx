import React from "react";

export const Paper = ({ children }: { children: React.ReactNode }) => (
  <main className="bg-paper flex flex-col p-4 max-w-[40rem] mx-auto min-h-full border-x-4 border-y border-black rounded-lg font-drawn">
    <div className="bg-dots bg-repeat bg-[length:1rem] flex-1 h-full w-full px-4 py-[1.2rem]">
      {children}
    </div>
  </main>
);
