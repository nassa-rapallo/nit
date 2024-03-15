import { PropsWithChildren } from "react";

export const Section: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="h-screen w-screen flex flex-col">{children}</section>
  );
};
