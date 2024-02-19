"use client";
import { AddIcon } from "../icons/Add";
import { DesktopMobileIcon } from "../icons/DesktopMobile";
import { FavouriteIcon } from "../icons/Favourite";
import { LoopIcon } from "../icons/Loop";
import { MicrophoneIcon } from "../icons/Microphone";
import { NextIcon } from "../icons/Next";
import { PlayIcon } from "../icons/Play";
import { PreviousIcon } from "../icons/Previous";
import { ShuffleIcon } from "../icons/Shuffle";
import { SpeakerIcon } from "../icons/Speaker";

const PlayerBar = () => {
    return (
        <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
            <div className={`bg-blue-600 h-1 rounded-full w-[45%]`}></div>
        </div>
    )
}

export default function Player() {

    const handleClick = () => {
        alert('Player option clicked')
    }
    const renderOptions = (Component : any, onClick: ()=>  void) => {
        return (
            <div className="cursor-pointer" onClick={onClick}>
                <Component width={25} height={25} color="#FFFFFF"/>
            </div>
        )
    }
    return (
        <div className='flex justify-center md:justify-between py-10 px-10 bg-black w-screen fixed bottom-0 items-center'>
            <div className="hidden md:flex justify-center items-center gap-8">
                <div className="flex flex-col">
                    <div>Date</div>
                    <div className="text-[#7d7f86]">song</div>
                </div>
                <div className="flex gap-4">
                    {renderOptions(FavouriteIcon,handleClick)}
                    {renderOptions(AddIcon,handleClick)}
                </div>
            </div>
            <div className="flex flex-col w-[40%] gap-4 justify-between">
                <div className="flex gap-3 justify-center items-center">
                    {renderOptions(ShuffleIcon,handleClick)}
                    {renderOptions(PreviousIcon,handleClick)}
                    {renderOptions(PlayIcon,handleClick)}
                    {renderOptions(NextIcon,handleClick)}
                    {renderOptions(LoopIcon,handleClick)}
                </div>
                <div>
                    <PlayerBar />
                </div>
            </div>
            <div className="w-[15%] gap-3 items-center justify-center hidden md:flex">
                {renderOptions(SpeakerIcon,handleClick)}
                <PlayerBar />
                {renderOptions(MicrophoneIcon,handleClick)}
                {renderOptions(DesktopMobileIcon,handleClick)}
            </div>
        </div>
    )
}
