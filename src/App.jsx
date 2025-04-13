import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import myPhoto from './assets/MY_PHOTO.jpg'

function App() {

  gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 

  var container = useRef();

  useGSAP(() => {
    var tl = gsap.timeline();

    tl.from("img", {
      y: "-500",
      duration: 1,
    })

    tl.from("#name", {
      scale: 0,
      duration: 1,
      opacity: 0,
    })

    tl.from("#about", {
      x:-200,
      duration: 0.5
    })

    tl.from("p", {
      scale: 0,
      duration: 1,
    })

    tl.from(".sep", {
      scale: 0,
      duration: 0.5,
    })

    tl.from("#hobbies", {
      x:-200,
      duration: 0.5
    })

    tl.from("ul li", {
      y:50,
      opacity:0,
      duration:0.8,
      stagger:0.25,
    })

  }, [container])

  return (
    <div ref={container}>
      <div className="flex flex-col justify-center items-center p-5">
        <img className='w-48 rounded-3xl object-cover mb-2.5 block' src={myPhoto} alt="myPhoto" />
        <span className=" text-5xl text-black relative p-2.5 max-[500px]:text-3xl" id='name'>Sourav Kumar Bera</span>
      </div>
      <main className="p-5">
        <div className=" text-3xl max-[500px]:text-xl text-black relative p-2.5" id='about'>About Me</div>
        <p className=" px-4 pb-5 text-2xl max-[500px]:text-lg">Hello,my name is Sourav Kumar Bera a B.Tech student at Haldia Institute of Technology, Haldia. I am currently pursuing an undergraduate degree in Computer Science and Engineering (2024-2028), with a keen interest in exploring the latest advancements in technology.</p>
        <div className="w-[100%] h-0.5 bg-black my-5 sep"></div>

        <div className="text-3xl max-[500px]:text-xl text-black relative p-2.5" id='hobbies'>My Hobbies</div>
        <ul className="pt-2 p-5 text-2xl max-[500px]:text-lg list-disc list-inside">
          <li>Programming</li>
          <li>Reading tech blogs</li>
          <li>Watching Cricket</li>
        </ul>
      </main>
    </div>

  )
}

export default App
