"use client";
import React, { useState } from "react"
import { CollectionsIcon } from "../icons/Collections"
import { DiscoverIcon } from "../icons/Discover"
import { DownloadIcon } from "../icons/Download"
import { FavouriteIcon } from "../icons/Favourite"
import { FilesIcon } from "../icons/Files"
import { HamburgerIcon } from "../icons/Hamburger"
import { HomeIcon } from "../icons/Home"
import { handleNavigate } from "../utilities/navigation";

export default function Navbar() {
    const [open, setOpen] = useState(true);
    const toggleNavbar = () => {
        setOpen(prev => !prev)
    }

    return (
        <div className={`py-10 px-10 bg-black h-12 ${open ? 'h-screen' : ''} lg:h-screen`}>
            <div className={`flex justify-between gap-2 items-center ${!open ? 'lg:flex-col' : ''} `}>
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
                        {<Navbar.RenderMenu Component={HomeIcon} title='Home' url='Home' />}
                        {<Navbar.RenderMenu Component={DiscoverIcon} title='Discover' url='Discover' />}
                        {<Navbar.RenderMenu Component={CollectionsIcon} title='Collection' url='Collection' />}
                    </div>
                </div>
                <div className="w-full flex flex-col gap-5">
                    <div className="text-[#7d7f86]">
                        Library
                    </div>
                    <div className="flex flex-col gap-4 pl-4">
                        {<Navbar.RenderMenu Component={DownloadIcon} title='Download' url='Download' />}
                        {<Navbar.RenderMenu Component={FavouriteIcon} title='Favourite' url='Favourite' />}
                        {<Navbar.RenderMenu Component={FilesIcon} title='FilesIcon' url='Local Files' />}
                    </div>
                </div>
            </div>}

        </div>
    )
}

Navbar.RenderMenu = ({ ...props }) => {
    return (
        <div className="flex justify-start items-center gap-3 cursor-pointer" onClick={() => handleNavigate(props.url)}>
            <props.Component width={25} height={25} color='#7d7f86' />
            <div className='text-[#7d7f86] text-sm font-semibold hover:text-[#1e88e5]'>{props.title}</div>
        </div>
    )
}