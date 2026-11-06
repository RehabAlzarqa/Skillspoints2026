import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Skillspoints",
  description: "Skillspoints application",
};

type Props = {
  children: ReactNode;
};

const layout = (props: Props) => {
  return (
    <html lang="en">
      <body>
        {props.children}
        <Toaster />
      </body>
    </html>
  );
};

export default layout;