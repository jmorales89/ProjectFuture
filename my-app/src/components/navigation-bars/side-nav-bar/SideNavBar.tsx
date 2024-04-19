"use client"
import Link from 'next/link'
import { useTopNavBarTab } from "@/store/top-nav-bar-store"


export default function SideNavBar () {
  const setTopNavBarTab = useTopNavBarTab((state) => state.setTab)
  const handleClickSetTopNavBarTabs = (setTabs: string) => {
      setTopNavBarTab(setTabs)
  }

  return (
    <>
      <div>Side Nav Bar</div>
      <div>
        <Link onClick={ () => handleClickSetTopNavBarTabs("Home")} href='/'>Home</Link>
      </div>
      <div>
        <Link onClick={ () => handleClickSetTopNavBarTabs("Patient")} href='/patient'>Patient</Link>
      </div>
      <div>
        <Link onClick={ () => handleClickSetTopNavBarTabs("Scheduler")} href='/scheduler'>Scheduler</Link>
      </div>
    </>
  )
}
