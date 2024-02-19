function Card({ data }: any) {
    return (
        <div className='overflow-hidden rounded hover:bg-gray-900 px-2 py-2 flex justify-between gap-4 w-full'>
            <div className="oveflow-hidden rounded flex gap-3">
                <img src={data.img} className="rounded w-12 h-12" />
                <div className="flex flex-col">
                    <div className="text text-base">
                        {data.title}
                    </div>
                    <div className="text-[#7d7f86] text-sm">
                        {data.desc}
                    </div>
                </div>
            </div>
            <div className="text-[#7d7f86] flex justify-center items-center text-xs">
                {data.time}
            </div>
        </div>
    )
}

function PlayList({ data }: { data: any }) {
    return (
        <div className="flex flex-col justify-between items-center">
            <div className="flex justify-between items-center w-full">
                <div className="font-semibold">{data.title}</div>
                <div className="text-[#7d7f86] text-sm">see all</div>
            </div>
            <div className="w-full">
                {
                    data.list.map((song: any, index: number) => {
                        return <div className="my-2" key={index}><Card data={song} /></div>
                    })
                }
            </div>
        </div>
    )
}
export default function Overview() {
    const playlist = [
        {
            'title':'Recently Played',
            'list':[
                {
                    'img': 'https://nitj.ac.in/files/1707290111500-Welcome%20Snap.jpg',
                    'title': 'Savage',
                    'desc': 'Aespa',
                    'time': '2min 3sec',
                    'link': ''
                },
                {
                    'img': 'https://nitj.ac.in/files/1707290111500-Welcome%20Snap.jpg',
                    'title': 'Savage',
                    'desc': 'Aespa',
                    'time': '2min 3sec',
                    'link': ''
                },
                {
                    'img': 'https://nitj.ac.in/files/1707290111500-Welcome%20Snap.jpg',
                    'title': 'Savage',
                    'desc': 'Aespa',
                    'time': '2min 3sec',
                    'link': ''
                },
                {
                    'img': 'https://nitj.ac.in/files/1707290111500-Welcome%20Snap.jpg',
                    'title': 'Savage',
                    'desc': 'Aespa',
                    'time': '2min 3sec',
                    'link': ''
                },
            ]
        },
        {
            'title':'My Playlist',
            'list':[
                {
                    'img': 'https://nitj.ac.in/files/1707290111500-Welcome%20Snap.jpg',
                    'title': 'Savage',
                    'desc': 'Aespa',
                    'time': '2min 3sec',
                    'link': ''
                },
                {
                    'img': 'https://nitj.ac.in/files/1707290111500-Welcome%20Snap.jpg',
                    'title': 'Savage',
                    'desc': 'Aespa',
                    'time': '2min 3sec',
                    'link': ''
                },
                {
                    'img': 'https://nitj.ac.in/files/1707290111500-Welcome%20Snap.jpg',
                    'title': 'Savage',
                    'desc': 'Aespa',
                    'time': '2min 3sec',
                    'link': ''
                },
                {
                    'img': 'https://nitj.ac.in/files/1707290111500-Welcome%20Snap.jpg',
                    'title': 'Savage',
                    'desc': 'Aespa',
                    'time': '2min 3sec',
                    'link': ''
                },
            ]
        }
    ]
    return (
        <div className='bg-black flex flex-col gap-3 py-10 px-10 h-screen w-[20%] overflow-scroll pb-40'>
            <div>
                profile
            </div>
            {
                playlist.map((playlist, index)=>{
                    return (
                        <PlayList data={playlist} key={index}/>
                    )
                })
            }
            <div className="flex justify-center items-center">
                <button className="bg-gray-500 px-5 py-2 rounded w-full">
                    Create a New Playlist
                </button>
            </div>
        </div>
    )
}
