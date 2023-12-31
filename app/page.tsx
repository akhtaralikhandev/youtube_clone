"use client"
import Image from 'next/image'
import Sidebar from '../components/home/sidebar/sidebar'
import Voice from '@/components/home/voice/voice'
import Main from '../components/home/main/main'
import { sideBarContext } from '../components/home/sidebar/context'
import { useState } from 'react'
import Navbar from '@/components/home/navbar/navbar'
export default function Home() {
  const [display, setDisplay] = useState("w-0")
  const [marginLeft_, setMarginLeft] = useState("md:ml-72 ml-0")
  const [navbarDisplay, setNavbarDisplay] = useState("hidden")
  const [signInHeight, setSignInHeight] = useState("hidden")
  const [category, setCategory] = useState("New")
  const [words, setWords] = useState("")
  const toggleSignInHeight = () => {
    if (signInHeight === "hidden") {
      setSignInHeight("block")
    } else {
      setSignInHeight("hidden")
    }
  }
  return (
    <sideBarContext.Provider value={{ display, marginLeft_, setDisplay, setMarginLeft, navbarDisplay, setNavbarDisplay, signInHeight, setSignInHeight, category, setCategory, words, setWords }}>
      <div>
        {/* <Voice /> */}
        <Navbar onClick={() => toggleSignInHeight()} />

        <Sidebar />
        <Main />
      </div> </sideBarContext.Provider>
  )
}
