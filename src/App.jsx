import myPhoto from './assets/MY_PHOTO.jpg'

function App() {

  return (
    <>
      <div className="flex flex-col justify-center items-center p-5">
        <img className='w-28 rounded-xl object-cover mb-2.5 block' src={myPhoto} alt="myPhoto" />
        <span className=" text-5xl text-black relative p-2.5 max-[500px]:text-3xl">Sourav Kumar Bera</span>
      </div>
      <main className="p-5 ">
        <span className=" text-3xl max-[500px]:text-xl text-black relative p-2.5">About Me</span>
        <p className=" px-3 py-5 text-2xl max-[500px]:text-lg">Hello,my name is Sourav Kumar Bera a B.Tech student at Haldia Institute of Technology, Haldia. I am currently pursuing an undergraduate degree in Computer Science and Engineering (2024-2028), with a keen interest in exploring the latest advancements in technology.</p>
        <div className="w-[100%] h-0.5 bg-black my-5"></div>

        <span className="text-3xl max-[500px]:text-xl text-black relative p-2.5">My Hobbies</span>
        <ul className="p-5 text-2xl max-[500px]:text-lg list-disc list-inside">
          <li>Programming</li>
          <li>Reading tech blogs</li>
          <li>Watching Cricket</li>
        </ul>
      </main>
    </>

  )
}

export default App
