// ./src/app/(blog)/layout.tsx

import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
     
        {children}
     </>
  );
}