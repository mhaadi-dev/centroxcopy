"use client";

import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface BlogsContextType {
  blogs: any[];
  setBlogs: Dispatch<SetStateAction<any[]>>;
  categoryBlogs: any[];
  setCategoryBlogs: Dispatch<SetStateAction<any[]>>;
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  page: number;
  categoryPage:number,
  setCategoryPage:Dispatch<SetStateAction<number>>,
  setPage: Dispatch<SetStateAction<number>>;
}

const BlogsContext = createContext<BlogsContextType | undefined>(undefined);

export function BlogsWrapper({ children }: { children: ReactNode }) {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [categoryBlogs, setCategoryBlogs] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [page, setPage] = useState(1);
  const [categoryPage,setCategoryPage]=useState(1)

  return (
    <BlogsContext.Provider value={{ blogs, setBlogs, categoryBlogs, setCategoryBlogs, selectedCategory, setSelectedCategory, page, setPage,setCategoryPage,categoryPage }}>
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
