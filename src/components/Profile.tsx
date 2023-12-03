import kaylee from '/kaylee.jpg'

const Profile = () => {
  return (
    <div className='flex flex-col border-2 p-8 items-center text-white'>


        <div className="flex w-1/3">
            <img src={kaylee} alt="" className='rounded-full'/>
        </div>
        <h1>@kavery</h1>

    </div>
  )
}

export default Profile