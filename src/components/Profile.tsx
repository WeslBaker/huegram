// import HueObject from './HueModel';
import './Palette.css'
// import { useState } from 'react'
import UserObject from './UserModel'

interface Props {
  currentUser?: UserObject;
}
const Profile = (props: Props) => {
  // const [currentUser] = useState({
  //   username: "JospehMother",
  //   likes: 58,
  //   hues: [
  //     {"id": 2, "color": "#ff8c00", "username": "JosephMother", "likes": 8, "isLiked":false },
  //     {"id": 5, "color": "#ff6747", "username": "JosephMother", "likes": 13, "isLiked":false}]
  // });
  const paletteHues = props.currentUser?.hues;
  // const blankHue = {id: 0, color: "rgba(255, 255, 255, .1)", username: props.currentUser?.username, likes: 0, isLiked: false}
  // console.log(blankHue)
  // if(paletteHues?.length)
  // {
  //   for(let i = 0; i < (35 - paletteHues?.length); i++)
  //   {
  //     paletteHues?.push(blankHue)
  //   }
  //   paletteHues.reverse
  // }

  {console.log(paletteHues)}
  return (
    <div className='flex flex-col p-8 items-center text-white'>
        <h1>@{props.currentUser?.username}</h1>
        <div className="palette mt-4">
        {paletteHues?.map( (hue) => ( 
            
            <div key={hue.id} style={{ backgroundColor: hue.color }}>
              
            </div>
       ))}
      
        </div>
        <div className="likes flex flex-col w-full items-center">
          <h1 className="mt-10 font-bold text-4xl">{props.currentUser?.likes}</h1>
          <p>Likes</p>
          <h1 className="mt-10 font-bold text-4xl">{props.currentUser?.hues?.length}</h1>
          <p>Hues Posted</p>
        </div>



    </div>
  )
}

export default Profile