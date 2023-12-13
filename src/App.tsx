//import Menu from './components/Menu'
import Main from './components/Main'
import Profile from './components/Profile'
import NavBar from './components/NavBar'
import { useEffect, useState } from 'react'
import HueObject from './components/HueModel';
import UserObject from './components/UserModel';

function App() {

  const [hues, setHues] = useState<HueObject[]>([]);

  // const [currentUser] = useState({
  //   username: "JospehMother",
  //   likes: 58,
  //   hues: [
  //     {"id": 2, "color": "#ff8c00", "username": "JosephMother", "likes": 8, "isLiked":false },
  //     {"id": 5, "color": "#ff6747", "username": "JosephMother", "likes": 13, "isLiked":false}]
  // });
  const [currentUser, setCurrentUser] = useState<UserObject>();

  useEffect( ()=>
  {
    fetch('./sampleData.json')
    .then( res => res.json() )
    .then( data => setHues(data) )
  }, [])

  useEffect( ()=>
  {
    fetch('./userData.json')
    .then( res => res.json() )
    .then( data => setCurrentUser(data) ) 
  }, [])

  const addNewHue = (color:string ) => 
  {
      console.log(color)
      const newHue = {color, username: currentUser?.username, id: hues.length+1 , likes:0, isLiked: false};
      setHues( [newHue, ...hues ] );
      const userHues = currentUser?.hues?.concat(newHue);
      const newUser = {username: currentUser?.username, likes: currentUser?.likes, hues: userHues};
      console.log(newUser);
      console.log(currentUser);
      setCurrentUser(newUser);
  }

  const toggleLike = (id?:number) =>
  {
    //generate new array of hues
    const updatedHues = [...hues];
    const hue = updatedHues.find(h => h.id == id);
    console.log("Like toggled")
    if(hue)
    {
      hue.isLiked = !hue.isLiked;
    }
    setHues(updatedHues);
    if(hue?.isLiked && hue.username == currentUser?.username && currentUser?.likes)
    {
      const newLikes = currentUser.likes + 1;
      setCurrentUser({username: currentUser?.username, likes: newLikes, hues: currentUser?.hues})
    }
    else if(currentUser?.likes && hue?.username == currentUser?.username)
    {
      const newLikes = currentUser.likes - 1;
      setCurrentUser({username: currentUser?.username, likes: newLikes, hues: currentUser?.hues})
    }
    console.log(currentUser?.likes)
  }

  return (
    <div className='flex bg-slate-900 h-screen'>
      {/* <Menu /> */}
      <div className="flex flex-col">
        <NavBar hues={[]} addHue={function (): void {
          throw new Error('Function not implemented.');
        } } />
        <Main hues={hues} addHue = {addNewHue} toggleLike = {toggleLike}/>
      </div>

      <Profile currentUser={currentUser} />
    </div>
  )
}

export default App
