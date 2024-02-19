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

export default function Player() {
    return (
        <div className='flex justify-between py-10 px-10 bg-black w-screen sticky bottom-0 items-center'>
            <div className="flex justify-center items-center gap-8">
                <div className="flex flex-col">
                    <div>Date</div>
                    <div className="text-[#7d7f86]">song</div>
                </div>
                <div className="flex gap-4">
                    <FavouriteIcon width={25} height={25} />
                    <AddIcon width={25} height={25} />
                </div>

            </div>
            <div className="flex flex-col w-[50%] gap-2">
                <div className="flex gap-3 justify-center items-center">
                    <ShuffleIcon width={25} height={25}/>
                    <PreviousIcon width={25} height={25}/>
                    <PlayIcon width={25} height={25}/>
                    <NextIcon width={25} height={25}/>
                    <LoopIcon width={25} height={25}/>
                </div>
                <div>
                    <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                        <div className={`bg-blue-600 h-1 rounded-full w-[45%]`}></div>
                    </div>
                </div>
            </div>
            <div className="flex gap-3">
                <SpeakerIcon width={25} height={25} />
                <MicrophoneIcon width={25} height={25} />
                <DesktopMobileIcon width={25} height={25} />
            </div>
        </div>
    )
}
