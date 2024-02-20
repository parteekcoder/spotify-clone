import { motion } from "framer-motion";

export default function Playlist({ ...props }) {
    return (
        <></>
    )
}

Playlist.Horizontal = ({ ...props }) => {
    return (
        <div className="flex gap-2 flex-col">
            {
                props.playlist.map((playlist: any, index: number) => {
                    return (
                        <div key={index}>
                            <div className="font-bold text-2xl">
                                {playlist.title}
                            </div>
                            <div className="overflow-x-scroll overflow-y-hidden">
                                <div className="flex justify-between w-full gap-5 px-2 items-center">
                                    {playlist.list.map((song: any, index: number) => {
                                        return (
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <div className='rounded bg-gray-950 min-w-32 px-1 py-5 flex flex-col justify-between gap-2'>
                                                    <div className="oveflow-hidden rounded h-[70%]">
                                                        <img src={song.img} className="rounded" />
                                                    </div>
                                                    <div>
                                                        <div className="h-[20%] font-semibold">
                                                            {song.title}
                                                        </div>
                                                        <div className="text-[#7d7f86] h-[10%] text-sm">
                                                            {song.desc}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

Playlist.Vertical = ({ ...props }) => {

    return (
        <div>
            {
                props.playlist.map((playlist: any, index: number) => {
                    return (
                        <div className="flex flex-col justify-between items-center" key={index}>
                            <div className="flex justify-between items-center w-full">
                                <div className="font-semibold">{playlist.title}</div>
                                <div className="text-[#7d7f86] text-sm">see all</div>
                            </div>
                            <div className="w-full">
                                {
                                    playlist.list.map((song: any, index: number) => {
                                        return <div className="my-2" key={index}><motion.div
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <div className='overflow-hidden rounded hover:bg-gray-900 px-2 py-2 flex justify-between gap-4 w-full'>
                                                <div className="oveflow-hidden rounded flex gap-3">
                                                    <img src={song.img} className="rounded w-12 h-12" />
                                                    <div className="flex flex-col">
                                                        <div className="text text-base">
                                                            {song.title}
                                                        </div>
                                                        <div className="text-[#7d7f86] text-sm">
                                                            {song.desc}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-[#7d7f86] flex justify-center items-center text-xs">
                                                    {song.time}
                                                </div>
                                            </div>
                                        </motion.div></div>
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}