"use client";

import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface BlogsContextType {
  blogs: any[]; 
  setBlogs: Dispatch<SetStateAction<any[]>>;
  page:number,
  setPage:any
}

const BlogsContext = createContext<BlogsContextType | undefined>(undefined);

// Context provider component
export function BlogsWrapper({ children }: { children: ReactNode }) {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [page,setPage]=useState(1) 

  return (
    <BlogsContext.Provider value={{ blogs, setBlogs,page,setPage }}>
      {children}
    </BlogsContext.Provider>
  );
}

export function useBlogs() {
  const context = useContext(BlogsContext);
  if (!context) {
    throw new Error("useBlogs must be used within a BlogsWrapper");
  }
  return context;
}
