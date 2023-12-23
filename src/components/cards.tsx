import React, {  useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icon } from '@iconify/react/dist/iconify.js'
import "../components/css/Skills.css"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);


interface CardsProps {
  // Add your prop types here
}

const Cards: React.FC<CardsProps> = ({ }) => {

  const data = [
    {
      title: "Foodies Point",
      description: "Foodies Point Bhopal's website is a masterclass in design and functionality synergy. With a captivating layout and seamless navigation, it offers users a delightful experience on any device. Whether you're browsing on a desktop or a mobile phone, the website's responsive design ensures an optimal viewing experience. Its intuitive menus make exploring the site a breeze, allowing users to find what they're looking for with ease. Overall, Foodies Point Bhopal's website sets a high standard for responsiveness and user-friendliness in the digital landscape.",
      content: "https://foodiespointbhopal.com",
      footer: "",
      image: ["./images/screen (2).jpg","./images/screen (2).jpg","./images/screen (2).jpg"]
    },
    {
      title: "Cherry Berry",
      description: "The TypeScript-powered web development and design service repository is a hub of creativity and innovation, dedicated to crafting seamless online experiences with precision and flair. With a focus on cutting-edge technology and meticulous attention to detail, we bring ideas to life with expertise and passion. Our mission is to elevate digital experiences through innovation, delivering solutions that captivate and inspire.",
      content: "https://cherryberry.in/",
      footer: "",
      image: ["./images/screen (3).jpg","./images/screen (3).jpg","./images/screen (3).jpg"]
    },
    {
      title: "Recipe App",
      description: "Introducing our Recipe App, a culinary delight crafted with TypeScript (TSX) and powered by the Spoonacular API. With its intuitive interface and seamless navigation, discover an extensive array of recipes to tantalize your taste buds. Harnessing the power of Recoil, our app delivers lightning-fast performance and effortless state management, ensuring a smooth and immersive cooking experience. Dive into a world of flavor, explore new culinary horizons, and unleash your inner chef with our Recipe App.",
      content: "https://recipeapp1.web.app",
      footer: "",
      image: ["./images/screen (1).jpg","./images/screen (1).jpg","./images/screen (1).jpg"]
    },
    {
      title: "MDX Blog Website",
      description: "A blog website built using MDX and Next.js. This website is a hub of creativity and innovation, dedicated to crafting seamless online experiences with precision and flair. With a focus on cutting-edge technology and meticulous attention to detail, we bring ideas to life with expertise and passion. Our mission is to elevate digital experiences through innovation, delivering solutions that captivate and inspire.",
      content: "https://mdxblog.vercel.app/",
      footer: "",
      image: ["./images/screen (4).jpg","./images/screen (4).jpg","./images/screen (4).jpg"]
    }
  ];
  // const cercleRef = useRef<HTMLDivElement>(null);
const [currIndex, setCurrIndex] = useState(5);
const [AnimDirection, setAnimDirection] = useState(true);
  useGSAP(() => {
    gsap.set(".image-tilt", {
      // rotationZ: 10,
      // skewY: -5,
      transform: "perspective(800px) rotate3D(0,1,0, -20deg)",
      // skewX: -20,
      // rotationX: 500,
      // opacity: 0,
      // duration: 1,
    });
    // const TL = gsap.timeline({ paused: true });
    gsap.to(`.image-tilt-child1`,{
      marginTop:"30px",
      left:"30px"
    });
    gsap.to(`.image-tilt-child2`,{
      marginTop:"60px",
      left:"60px"
    });
    
    // const handleMouseEnter = () => {
    //   TL.play();
    // };

    // const cercle = cercleRef.current;
    // if (cercle) {
    //   cercle.addEventListener('mouseenter', handleMouseEnter);
    // }

    // // Cleanup the event listener on component unmount
    // return () => {
    //   if (cercle) {
    //     cercle.removeEventListener('mouseenter', handleMouseEnter);
    //   }
    // };
  });
  return (
    <div className="container mx-auto px-8 2xl:px-32 mt-32 font-lexend">
      {/* <h2 className="text-3xl font-semibold tracking-tight leading-normal">Projects I’m the most proud of</h2> */}
      <h1 className="font-lexend pt-32 mb-16 font-normal text-7xl w-full text-center">
      <span id='projects-ex' className="bg-clip-text text-transparent bg-gradient-to-t dark:from-slate-500 from-white to-blue-800  dark:to-white w-full">
          Projects
        </span>
        <span className="text-5xl bg-clip-text text-transparent bg-gradient-to-t dark:from-slate-500 dark:to-white from-white to-blue-800 w-full"><br />
          I’m the most proud of
        </span>
      </h1>
      {data.map((item,index) => {
        return (
          <Card className='my-12 shadow-lg flex flex-row border-2 border-gray-300 dark:border-gray-900'>
              <div className="basis-1/2 grow">
            <CardHeader className=''>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription className='text-justify'>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <a className='hover:text-blue-900' href={item.content}>Visit Here <Icon icon="material-symbols:arrows-more-up" className='inline' width="22" height="22"/></a>
            </CardContent>
            <CardFooter>
              <p>{item.footer}</p>
            </CardFooter>
              </div>
              <div className="basis-3/6 flex flex-col relative group" onMouseEnter={() => {setCurrIndex(index); setAnimDirection(true);}} onMouseLeave={() => {setCurrIndex(index); setAnimDirection(false);}}>
              <img src={item.image[0]} alt={item.content} className={`${currIndex == index ? AnimDirection ? "animate-move-and-fade2" : "animate-move-and-fade2-rev" : "animate-move-and-fade2-rev"} hover:z-40 absolute lazy rounded-2xl h-[90%] border-2 w-full mt-3 image-tilt border-gray-300 dark:border-gray-900`} />
              <img src={item.image[1]} alt={item.content} className={`${currIndex == index ? AnimDirection ? "animate-move-and-fade1" : "animate-move-and-fade1-rev" : "animate-move-and-fade1-rev"} hover:z-40 absolute lazy rounded-2xl h-[90%] border-2 w-full mt-3 image-tilt border-gray-300 dark:border-gray-900`} />
              <img src={item.image[2]} alt={item.content} className=" lazy rounded-2xl h-[90%] border-2 w-full mt-3 image-tilt border-gray-300 dark:border-gray-900" />
              </div>
          </Card>
        )
      })}

      
    </div>
  )
}

export default Cards