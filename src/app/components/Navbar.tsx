"use client";
import React, { useState } from "react"
import { CollectionsIcon } from "../icons/Collections"
import { DiscoverIcon } from "../icons/Discover"
import { DownloadIcon } from "../icons/Download"
import { FavouriteIcon } from "../icons/Favourite"
import { FilesIcon } from "../icons/Files"
import { HamburgerIcon } from "../icons/Hamburger"
import { HomeIcon } from "../icons/Home"

export default function Navbar() {
    const [open, setOpen] = useState(true);
    const toggleNavbar = () => {
        setOpen(prev => !prev)
    }
    const handleNavigate = (link: string) => {
        alert('Navigating to page'+link)
    }

    const renderMenu = (Component:any, title:any,url:any) => {
        return (
            <div className="flex justify-start items-center gap-3 cursor-pointer" onClick={()=>handleNavigate(url)}>
                <Component width={25} height={25} color='#7d7f86' />
                <div className='text-[#7d7f86] text-sm font-semibold hover:text-[#1e88e5]'>{title}</div>
            </div>
        )
    }

    return (
        <div className={`py-10 px-10 bg-black h-screen`}>
            <div className={`flex justify-between gap-2 items-center ${!open ? 'flex-col' : ''}`}>
                <div>
                    <img className="w-10 h-10" src="https://nitj.ac.in/public/assets/images/logo_250.png" />
                </div>
                <div onClick={toggleNavbar} className="cursor-pointer">
                    <HamburgerIcon width={25} height={25} color={"#FFFFFF"} />
                </div>
            </div>
            {open && <div className="px-5 py-8 w-full flex flex-col gap-5">
                <div className="w-full flex flex-col gap-5">
                    <div className="text-[#7d7f86]">
                        Features
                    </div>
                    <div className="flex flex-col gap-4 pl-4">
                        {renderMenu(HomeIcon,'Home','Home')}
                        {renderMenu(DiscoverIcon,'Discover','Discover')}
                        {renderMenu(CollectionsIcon,'Collection','Collection')}
                    </div>
                </div>
                <div className="w-full flex flex-col gap-5">
                    <div className="text-[#7d7f86]">
                    Library
                    </div>
                    <div className="flex flex-col gap-4 pl-4">
                        {renderMenu(DownloadIcon,'Download','Download')}
                        {renderMenu(FavouriteIcon,'Favourite','Favourite')}
                        {renderMenu(FilesIcon,'Local Files','Local Files')}
                    </div>
                </div>
            </div>}

        </div>
    )
}
