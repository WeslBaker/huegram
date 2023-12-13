import { useState } from "react";
import HueObject from "./HueModel";

interface Props {
    hues: HueObject[],
    addHue: (color:string) => void
    toggleLike?: (id?:number) => void
}

const NavBar = (props: Props) => {
    const [color, setColor] = useState('#')
    // function filter(event)
    // {
    //     props.hues.filter(hue => hue.color.includes(color))
    // }

    return (
        <div className = "flex flex-row py-8">
            <a href="#"><img className="w-12 ml-8 rounded-full" src="logo-prototype.svg"/></a>
            <a className ="text-slate-200 text-4xl pl-10 font-bold" href="#">HueGram</a>
            <input className = "h-3/4 rounded-full bg-slate-600 text-slate-300 m-auto w-96 indent-2" 
                type="text" 
                placeholder="Search"
                value={color}
                onChange={e => {props.hues.filter(hue => {hue.color.includes(e.target.value)}); setColor(e.target.value); console.log(color)}}></input>
        </div>
    )

}

export default NavBar;