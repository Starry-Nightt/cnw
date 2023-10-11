import React from "react";

function CounterLayout({ children }: { children: React.ReactNode }) {
  return <section className="h-screen bg-slate-500">{children}</section>;
}

export default CounterLayout;
