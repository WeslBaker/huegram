//import React from 'react'
import Hue from './Hue'
import PostHue from './PostHue'
import HueObject from './HueModel'


interface Props {
    hues: HueObject[],
    addHue: (color:string) => void
    toggleLike?: (id?:number) => void
}

const Main = ({hues, addHue, toggleLike} : Props) => {
  return (
    <div className='main flex flex-wrap w-full pl-12 gap-6 overflow-y-auto h-full hide-scrollbar'>
        <PostHue addHue={addHue}/>


        {hues.map( (hue) => ( 
            
            <Hue hue={hue} toggleLike ={toggleLike} />
       ))}

        

    </div>
  )
}

export default Main