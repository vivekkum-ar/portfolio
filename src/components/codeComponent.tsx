import { useEffect, useState } from 'react';
// import hljs from 'highlight.js';
import { codeText } from '@/Recoil/store';
import { useRecoilState } from 'recoil';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
import Prism from "prismjs";
import "prismjs/themes/prism-vsc-dark-plus.css";
import { Icon } from '@iconify/react/dist/iconify.js';
interface CodeComponentProps {
    language: string;
}

const CodeComponent: React.FC<CodeComponentProps> = ({ language }) => {
    const [code, setCode] = useRecoilState(codeText);
    // const [codeProgress,setcodeProgress] = useState(0);
    var srcCode = "//I Know HTML \n" + `
    useGSAP(() => 
            { gsap.from(".astrodivider", {
                scrollTrigger: {
                    trigger: ".astrodivider",
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                    markers: true,
                },
                y: -500,
                opacity: 0,
                duration: { 1}
            });
            `;
    // var speed = 3;
    var i = 0;
    function typeWriter(progress: number, direction: number) {
        let codeLength = srcCode.length * progress;
        if (direction === 1 && i < codeLength) {
            setCode(prevCode => prevCode + srcCode.charAt(i));
            i++;
            typeWriter(progress, direction);
        }
        if (i >= codeLength) {
            return;
        };
    }
    useGSAP(() => {
        gsap.set(".m-to-0", { margin: 0, });
        gsap.set(".m-to-0", { margin: 0, });
        gsap.from(".gsap-hl-js", {
            scrollTrigger: {
                trigger: ".gsap-hl-js",
                start: "top top+=10%",
                end: "bottom top",
                scrub: true,
                pin: true,
                markers: true,
                fastScrollEnd: true,
                onUpdate: (self) => {
                    console.log("Progress: 😎", self.progress, "Direction⬅", self.direction);
                    typeWriter(self.progress, self.direction);
                },
            },
            duration: 1,
        });
    });

    useEffect(() => {
        Prism.highlightAll()

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
                    <div className="h-full flex flex-row bg-[#282c34] ">
                        <div className="w-16 h-full bg-gray-800">
                            <div className="flex-col flex">
                                <div className="basis-1/6">
                                    <Icon icon="devicon-plain:html5-wordmark " fontSize={40} style={{ color: "white" }} />
                                    <Icon icon="devicon-plain:html5-wordmark " fontSize={40} style={{ color: "white" }} />
                                    <Icon icon="devicon-plain:html5-wordmark " fontSize={40} style={{ color: "white" }} />
                                </div>
                            </div>
                        </div>
                        <pre className='h-full w-full p-0 m-to-0'>
                            <code className=" language-javascript code-from-here p-0"
                                dangerouslySetInnerHTML={{ __html: Prism.highlight(`${code}`, Prism.languages.javascript, "javascript") }}
                            ></code>
                        </pre>
                    </div>
                </div>
            </div>

        </>
    );
}

export default CodeComponent;
