function Card({ data }: any) {
    return (
        <div className='overflow-hidden rounded hover:bg-gray-900 px-1 py-5 flex flex-col justify-between gap-2'>
            <div className="oveflow-hidden rounded h-[70%]">
                <img src={data.img} className="rounded" />
            </div>
            <div>
                <div className="h-[20%] font-semibold">
                    {data.title}
                </div>
                <div className="text-[#7d7f86] h-[10%] text-sm">
                    {data.desc}
                </div>
            </div>
        </div>
    )
}

function PlayList({ list }: { list: any }) {
    return (
        <div className="flex justify-between w-full gap-3 items-center">
            {list.map((list: any, index: number) => {
                return <Card data={list} key={index} />
            })}
        </div>
    )
}

export default function MainContent() {
    const playlist = [
        {
            'title': 'Hello, Parteek',
            'list': [{
                'img': 'https://nitj.ac.in/files/1707290111500-Welcome%20Snap.jpg',
                'title': 'Todays hot hit',
                'desc': 'Listen to todays hot hits',
                'link': '',
            },
            {
                'img': 'https://nitj.ac.in/files/1707290111500-Welcome%20Snap.jpg',
                'title': 'Todays hot hit',
                'desc': 'Listen to todays hot hits',
                'link': '',
            },
            {
                'img': 'https://nitj.ac.in/files/1707290111500-Welcome%20Snap.jpg',
                'title': 'Todays hot hit',
                'desc': 'Listen to todays hot hits',
                'link': '',
            },
            {
                'img': 'https://nitj.ac.in/files/1707290111500-Welcome%20Snap.jpg',
                'title': 'Todays hot hit',
                'desc': 'Listen to todays hot hits',
                'link': '',
            }]
        },
        {
            'title': 'New Releases',
            'list': [{
                'img': 'https://nitj.ac.in/files/1707290111500-Welcome%20Snap.jpg',
                'title': 'Todays hot hit',
                'desc': 'Listen to todays hot hits',
                'link': '',
            },
            {
                'img': 'https://nitj.ac.in/files/1707290111500-Welcome%20Snap.jpg',
                'title': 'Todays hot hit',
                'desc': 'Listen to todays hot hits',
                'link': '',
            },
            {
                'img': 'https://nitj.ac.in/files/1707290111500-Welcome%20Snap.jpg',
                'title': 'Todays hot hit',
                'desc': 'Listen to todays hot hits',
                'link': '',
            },
            {
                'img': 'https://nitj.ac.in/files/1707290111500-Welcome%20Snap.jpg',
                'title': 'Todays hot hit',
                'desc': 'Listen to todays hot hits',
                'link': '',
            }]
        },
        {
            'title': 'Hello, Parteek',
            'list': [{
                'img': 'https://nitj.ac.in/files/1707290111500-Welcome%20Snap.jpg',
                'title': 'Todays hot hit',
                'desc': 'Listen to todays hot hits',
                'link': '',
            },
            {
                'img': 'https://nitj.ac.in/files/1707290111500-Welcome%20Snap.jpg',
                'title': 'Todays hot hit',
                'desc': 'Listen to todays hot hits',
                'link': '',
            },
            {
                'img': 'https://nitj.ac.in/files/1707290111500-Welcome%20Snap.jpg',
                'title': 'Todays hot hit',
                'desc': 'Listen to todays hot hits',
                'link': '',
            },
            {
                'img': 'https://nitj.ac.in/files/1707290111500-Welcome%20Snap.jpg',
                'title': 'Todays hot hit',
                'desc': 'Listen to todays hot hits',
                'link': '',
            }]
        },


    ]
    return (
        <div className='pt-10 pb-40 px-20 bg-gray-950 w-[70%] h-screen overflow-scroll'>
            <div className="py-2 flex justify-center items-center w-full">
                <div className="w-[60%]">
                    <form>
                        <div className="relative rounded-full overflow-hidden">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border rounded-full" placeholder="Search for artist,songs,albums..." />
                        </div>
                    </form>
                </div>
            </div>
            {
                playlist.map((playlist: any, index: number) => {
                    return (
                        <div key={index}>
                            <div className="font-bold text-2xl">
                                {playlist.title}
                            </div>
                            <div>
                                <PlayList list={playlist.list} />
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}
