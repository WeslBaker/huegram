const NavBar = () => {
    return (
        <div className = "flex flex-row py-8 bg-gradient-to-b from-slate-800">
            <a href="#"><img className="w-12 ml-8 rounded-full" src="logo-prototype.svg"/></a>
            <a className ="text-slate-200 text-4xl pl-10 font-bold" href="#">HueGram</a>
            <input className = "h-3/4 rounded-full bg-slate-600 text-slate-300 m-auto w-96 indent-2" type="text" placeholder="Search"></input>
        </div>
    )

}

export default NavBar;