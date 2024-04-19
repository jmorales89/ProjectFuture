"use client"
import { create } from "zustand"

type TopNavBarTab = {
    selectedTab: string,
    setTab: (newTab: string) => void
}

export const useTopNavBarTab = create<TopNavBarTab>((set) => ({
    selectedTab: 'Home',
    setTab: (newTab) => {
        set({ selectedTab: newTab})
     }
    

}))