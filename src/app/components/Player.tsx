import { AddIcon } from "../icons/Add";
import { DesktopMobileIcon } from "../icons/DesktopMobile";
import { FavouriteIcon } from "../icons/Favourite";
import { MicrophoneIcon } from "../icons/Microphone";
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
                    <FavouriteIcon width={25} height={25}/>
                    <AddIcon width={25} height={25}/>
                </div>

            </div>
            <div className="flex flex-col gap-2">
                <div>PLayer settings</div>
                <div>Progress</div>
            </div>
            <div className="flex gap-3">
                <SpeakerIcon width={25} height={25}/>
                <MicrophoneIcon width={25} height={25}/>
                <DesktopMobileIcon width={25} height={25}/>
            </div>
        </div>
    )
}
