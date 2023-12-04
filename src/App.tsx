//import Menu from './components/Menu'
import Main from './components/Main'
import Profile from './components/Profile'
import NavBar from './components/NavBar'
import { useEffect, useState } from 'react'
import HueObject from './components/HueModel';

function App() {

  const [hues, setHues] = useState<HueObject[]>([]);

  const [currentUser] = useState({
    username: "kavery",
    likes: 58,
    hues: [ {id:36, color:'#ffa510', username:"kavery", likes: 15}]
  });


  useEffect( ()=>
  {
    fetch('./sampleData.json')
    .then( res => res.json() )
    .then( data => setHues(data) ) 
  }, [])

  const addNewHue = (color:string ) => 
  {
      console.log(color)
      const newHue = {color, username: currentUser.username, id: length+1 , likes:0, isLiked: false};
      setHues( [newHue, ...hues ] );
  }

  return (
    <div className='flex bg-slate-900 h-screen'>
      {/* <Menu /> */}
      <div className="flex flex-col">
        <NavBar />
        <Main hues={hues} addHue = {addNewHue} />
      </div>

      <Profile />
    </div>
  )
}

export default App
