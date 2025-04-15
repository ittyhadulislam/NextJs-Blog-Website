import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  children: React.ReactNode;
};

const NewsLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="py-12">
        <h1 className="text-2xl font-bold mb-8">Latest News</h1>
        <nav className="space-x-4 mb-4">
          <Link href="/news/sports">Sports</Link>
          <Link href="/news/health">Health</Link>
          <Link href="/news/tech">Technology</Link>
        </nav>
        <div className="flex justify-between gap-4">
          <div className="md:w-4/5 h-96 bg-slate-200 flex items-center justify-center">
            {children}
          </div>
          <div className="bg-purple-300 h-96 md:w-1/5">Sidebar</div>
        </div>
      </div>
    </div>
  );
};

export default NewsLayout;
