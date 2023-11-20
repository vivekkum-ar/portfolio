import { useEffect } from 'react';
import hljs from 'highlight.js';
import { codeText } from '@/Recoil/store';
import { useRecoilState } from 'recoil';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {TextPlugin} from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
interface HljsCompProps {
    language: string;
}
const HljsComp: React.FC<HljsCompProps> = ({ language }) => {
    const [code,setCode] = useRecoilState(codeText);
    var srcCode = `useGSAP(() => {
        gsap.from(".astrodivider", {
          scrollTrigger: {
            trigger: ".astrodivider",
            start: "top center",
            end: "bottom center",
            scrub: true,
            markers: true,
          },
          y: -500,
          opacity: 0,
          duration: 1,
        });`;
    var speed = 3;
    var i = 0;
    function typeWriter(progress:number) {
        let codeLength = srcCode.length * progress;
      if (i < codeLength) {
        setCode(prevCode => prevCode + srcCode.charAt(i));
        i++;
        typeWriter(progress);
      }
      if(i >= srcCode.length) return;
    }
    useGSAP(() => {
        // gsap.to(".code-here", {
        //     scrollTrigger: {
        //             trigger: ".gsap-hl-js",
        //             start: "top top+=10%",
        //             end: "center top",
        //             scrub: true,
        //             pin: true,
        //     },
        //     duration: 2,
        //     text: srcCode,
        //     ease: "none",
        //   });
        gsap.from(".gsap-hl-js", {
          scrollTrigger: {
            trigger: ".gsap-hl-js",
            start: "top top+=10%",
            end: "center top",
            scrub: true,
            pin: true,
            markers: true,
            toggleActions: "play pause resume reset",
            onUpdate: (self) => {
                console.log("Progress: 😎", self.progress);
                typeWriter(self.progress);
              },
            // onEnter: (self) => {
            //     console.log("Enter: 😎", self.progress);
            //     console.log("done");
            //   },
          },
        //   y: -500,
          duration: 1,
        });
    });

    useEffect(() => {
        hljs.highlightAll();
    }, []);

    return (
        <>
            <div className="hl-js max-w-screen-lg mx-auto shadow-xl mt-32 gsap-hl-js">
                <div className="container-hljs h-[25rem] dark:bg-gray-800 bg-gray-200">
                    <div className="row border-b-4 border-blue-500 bg-slate-900">
                        <div className="column left">
                            <span className="dot ms-1" style={{ background: "#ED594A" }}></span>
                            <span className="dot ms-1" style={{ background: "#FDD800" }}></span>
                            <span className="dot ms-1" style={{ background: "#5AC05A" }}></span>
                        </div>
                        <div className="column middle mt-2">
                            <label className='outline outline-slate-300 w-full flex flex-grow items-center'>Vivek Kumar - Homepage</label>
                        </div>
                        <div className="column right">
                            <div style={{ float: "right" }}>
                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>
                            </div>
                        </div>
                    </div>
                    <pre className='h-full bg-[#282c34]'>
                        <code className="language-javascript code-here" dangerouslySetInnerHTML={{
                            __html: hljs.highlight(`${language}`, `${code}`).value
                        }} />
                    </pre>
                </div>
            </div>
        </>
    );
}

export default HljsComp;
