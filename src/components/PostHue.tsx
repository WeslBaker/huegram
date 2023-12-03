import { useState } from 'react'
import Hue from './Hue'

interface Props{
    addHue: (color:string)=> void
}

const PostHue = (props:Props) => {

    const[color, setColor] = useState('#')

  return (
    <div className='flex flex-row justify-evenly gap-6'>

        <div className='flex flex-col w-full p-4 gap-12'>
            <input className = "hueInput bg-slate-600 rounded-full w-56 h-8 indent-1" type="text" name="hue" id="hue" onChange={ (event) => setColor(event.target.value) } value={color}/>
            <a href="#" onClick={ () => {
              props.addHue(color)  ;
              setColor("#");
            }
              } className="btn bg-slate-600 rounded-full text-slate-400 hover:bg-slate-700 hover:test-slate-500 text-center w-1/3 mx-auto h-8">Post</a>
        </div>

        <Hue hue={ {color, username:"kavery", likes:3}} />

    </div>
  )
}

export default PostHue