import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
          
          {children}
          { <VisualEditing />}
          </>
    );
  }