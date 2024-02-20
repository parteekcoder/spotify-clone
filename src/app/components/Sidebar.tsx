"use client";
import Playlist from "./Playlist";

export default function Sidebar() {
    const playlist = [
        {
            'title': 'Recently Played',
            'list': [
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
            'title': 'My Playlist',
            'list': [
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
        <div className='bg-black flex flex-col gap-3 py-10 px-4 h-screen w-full lg:w-[20%] min-w-34 overflow-auto pb-40'>
            <Playlist.Vertical playlist={playlist}/>
            <div className="flex justify-center items-center">
                <button className="bg-gray-500 px-5 py-2 rounded w-full">
                    Create a New Playlist
                </button>
            </div>
        </div>
    )
}
