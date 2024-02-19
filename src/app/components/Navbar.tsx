import { CollectionsIcon } from "../icons/Collections"
import { DiscoverIcon } from "../icons/Discover"
import { DownloadIcon } from "../icons/Download"
import { FavouriteIcon } from "../icons/Favourite"
import { FilesIcon } from "../icons/Files"
import { HomeIcon } from "../icons/Home"

export default function Navbar() {
    return (
        <div className='py-10 px-10 bg-black h-screen w-[20%]'>
            <div className='flex justify-between items-center'>
                <div>
                    logo
                </div>
                <div>
                    option
                </div>
            </div>
            <div className="px-5 py-8 w-full flex flex-col gap-5">
                <div className="w-full flex flex-col gap-5">
                    <div>
                        Features
                    </div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex justify-start items-center gap-3">
                            <HomeIcon width={25} height={25} />
                            <div>Home</div>
                        </div>
                        <div className="flex justify-start items-center gap-3">
                            <DiscoverIcon width={25} height={25} />
                            <div>Discover</div>
                        </div>
                        <div className="flex justify-start items-center gap-3">
                            <CollectionsIcon width={25} height={25} />
                            <div>Collections</div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-5">
                    <div>
                        Library
                    </div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex justify-start items-center gap-3">
                            <DownloadIcon width={25} height={25} />
                            <div>Download</div>
                        </div>
                        <div className="flex justify-start items-center gap-3">
                            <FavouriteIcon width={25} height={25} />
                            <div>Favourite</div>
                        </div>
                        <div className="flex justify-start items-center gap-3">
                            <FilesIcon width={25} height={25} />
                            <div>Local Files</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
