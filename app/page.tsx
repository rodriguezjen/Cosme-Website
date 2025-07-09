'use client'
import Mainpage from "./components/Mainpage";
import { Header, Product } from "./components";
import About from "./components/About";
import { JSX, useState } from "react";
import Feedback from "./components/Feedback";

export default function Home() {
  const [page,setPage]=useState("Mainpage");
  const currentPage:Record<string,JSX.Element>={
    "Mainpage":<Mainpage></Mainpage>,
    "Product":<Product></Product>,
    "About":<About></About>,
    "Feedback":<Feedback></Feedback>
  }
  return (
    <main className="h-[100vh] w-full flex overflow-hidden">
      <Header setPage={setPage}></Header>
      <div className="h-full w-full flex flex-col overflow-x-hidden">
        {
          currentPage[page]||null
        }
          
      </div>
     
      
      

    </main>
  );
}
