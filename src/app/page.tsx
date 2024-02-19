import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Player from './components/Player'
import Sidebar from './components/Sidebar'

export default function Home() {
  return (
    <div className='w-full h-screen'>
      <div className='flex justify-between w-full flex-col lg:flex-row'>
        <Navbar/>
        <MainContent/>
        <Sidebar/>
      </div>
      <Player/>
    </div>
  )
}