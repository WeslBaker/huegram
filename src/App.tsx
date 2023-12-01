import Menu from './components/Menu'
import Main from './components/Main'
import Profile from './components/Profile'
import { useEffect, useState } from 'react'

function App() {

  const [hues, setHues] = useState([]);

  useEffect( ()=>
  {
    fetch('./sampleData.json')
    .then(res => res.json())
    .then(data => setHues(data))
  }, [])

  const addNewHue = (color:string ) => 
  {
      console.log(color)
      const newHue = {color, username: "kaylee", id: hues[hues.length-1].id+1 , likes:0};
      setHues( [...hues, newHue ] );
  }

  return (
    <div className='flex bg-slate-800 h-screen'>
      <Menu />

      <Main hues={hues} addHue= {addNewHue} />

      <Profile />
    </div>
  )
}

export default App
