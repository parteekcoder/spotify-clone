function Card({ data }: any) {
    return (
        <div className='overflow-hidden rounded hover:bg-gray-900 px-5 py-5 flex flex-col justify-between gap-2'>
            <div className="oveflow-hidden rounded h-[70%]">
                <img src={data.img} className="rounded" />
            </div>
           <div>
           <div className="h-[20%]">
                {data.title}
            </div>
            <div className="text-[#7d7f86] h-[10%]">
                {data.desc}
            </div>
           </div>
        </div>
    )
}

function PlayList({ list }: { list: any }) {
    return (
        <div className="flex justify-between w-full items-center">
            {list.map((list: any) => {
                return <Card data={list} />
            })}
        </div>
    )
}

export default function MainContent() {
    const playlist = [
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
        },
        {
            'img': 'https://nitj.ac.in/files/1707290111500-Welcome%20Snap.jpg',
            'title': 'Todays hot hit',
            'desc': 'Listen to todays hot hits',
            'link': '',
        },

    ]
    return (
        <div className='py-10 px-20 bg-gray-950 h-screen w-[60%]'>
            <div>
                Search bar
            </div>
            <div>
                <div>
                    Hello,Parteek
                </div>
                <div>

                    <PlayList list={playlist} />
                </div>
            </div>
            <div>
                <div>
                    Hello,Parteek
                </div>
                <div>

                    <PlayList list={playlist} />
                </div>
            </div>
        </div>
    )
}
