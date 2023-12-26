import { useEffect, useState } from 'react';
import { codeText, codeTextCss, codeTextHtml, codeTextJs } from '@/Recoil/store';
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
import { Icon } from '@iconify/react';
interface CodeComponentProps {
    language: string;
}

const CodeComponent: React.FC<CodeComponentProps> = ({ language }) => {
    const [code, setCode] = useRecoilState(codeText);
    const [codeHtml, setCodeHtml] = useRecoilState(codeTextHtml);
    const [codeCss, setCodeCss] = useRecoilState(codeTextCss);
    const [codeJs, setCodeJs] = useRecoilState(codeTextJs);
    const [tabVisible, setTabVisible] = useState([true, false, false, false]);
    const handleTabClick = (tab_id: number) => {
        setTabVisible(prevState => {
            // Map over the previous state array
            return prevState.map((visible, index) => {
                // Set the second tab to true and others to false
                visible == true;
                return index === tab_id;
            });
        });
    };
    // const [codeProgress,setcodeProgress] = useState(0);
    var srcCode = ["//I Know React \n" + `
    import React from 'react';

const Joke = () => {
  return (
    <div>
      <h1>Why did the developer go broke?</h1>
      <p>Because he used up all his cache!💾</p>
      💸💸💸💸
    </div>
  );
};

export default Joke;
            `, 
            "//I Know HTML \n" +`
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            </head>
            <body>
                <h1>Hello World!</h1>
                <p>This is an <span class="heart">❤️</span> HTML page!</p>
                <p>Isn't it lovely?</p>
            </body>
            </html>
            `,
        
        "//I Know Tailwind \n" +`
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        
        @layer base {
          :root {
            --background: hsl(120, 100%, 50%); /* Neon green */
            --foreground: hsl(0, 100%, 50%); /* Neon red */
        
            --card: hsl(240, 100%, 50%); /* Neon blue */
            --card-foreground: hsl(60, 100%, 50%); /* Neon yellow */
          }
        }
            `,
        
        "//I Know Javascript \n" +`
        const impressEmployer = () => {
            console.log("👨‍💼Employer: So, why should we hire you?");
            console.log("👨‍🎓You: Well, I can talk to computers. Here, watch this:");
            setTimeout(() => {
                console.log("💻Computer: Hello, world!");
                console.log("👨‍🎓You: Impressed?");
                console.log("👨‍💼Employer: Very. Welcome aboard!");
            }, 2000);
        };
        
        impressEmployer();
            `];

    var index = [0, 0, 0, 0];
    function typeWriterEffect(progress: number, direction: number, id: number, codeTxt: string) {
        let TxtLength = codeTxt.length * progress;
        if (direction === 1 && index[id] < TxtLength) {
            switch (id) {
                case 0:
                    setCode(prevCode => prevCode + codeTxt.charAt(index[id]));
                    break;
                case 1:
                    setCodeHtml(prevCode => prevCode + codeTxt.charAt(index[id]));
                    break;
                case 2:
                    setCodeCss(prevCode => prevCode + codeTxt.charAt(index[id]));
                    break;
                case 3:
                    setCodeJs(prevCode => prevCode + codeTxt.charAt(index[id]));
                    break;
                default:
                    break;
            }
            index[id]++;
            if (codeTxt.length - 1 == index[id]) {
                handleTabClick(id < 3 ? id + 1 : 0);
            }
            typeWriterEffect(progress, direction, id, codeTxt);
        }
        if (index[id] >= TxtLength) {
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
                end: "bottom+=290% top",
                scrub: true,
                pin: true,
                // markers: true,
                fastScrollEnd: true,
            },
            duration: 1,
        });
        gsap.from(".gsap-hl-js", {
            scrollTrigger: {
                trigger: ".trigger-react",
                start: "top top+=20%",
                end: "bottom top",
                scrub: true,
                // pin: true,
                // markers: true,
                fastScrollEnd: true,
                onUpdate: (self) => {
                    // console.log("Progress: 😎", self.progress, "Direction⬅", self.direction);
                    typeWriterEffect(self.progress, self.direction, 0, srcCode[0]);
                },
            },
            duration: 1,
        });
        gsap.from(".gsap-hl-js", {
            scrollTrigger: {
                trigger: ".trigger-html",
                start: "top top+=20%",
                end: "bottom top",
                scrub: true,
                fastScrollEnd: true,
                onUpdate: (self) => {
                    // console.log("Progress: 😎", self.progress, "Direction⬅", self.direction);
                    typeWriterEffect(self.progress, self.direction, 1, srcCode[1]);
                },
            },
            duration: 1,
        });
        gsap.from(".gsap-hl-js", {
            scrollTrigger: {
                trigger: ".trigger-css",
                start: "top top+=20%",
                end: "bottom top",
                scrub: true,
                fastScrollEnd: true,
                onUpdate: (self) => {
                    // console.log("Progress: 😎", self.progress, "Direction⬅", self.direction);
                    typeWriterEffect(self.progress, self.direction, 2, srcCode[2]);
                },
            },
            duration: 1,
        });
        gsap.from(".gsap-hl-js", {
            scrollTrigger: {
                trigger: ".trigger-js",
                start: "top top+=20%",
                end: "bottom top",
                scrub: true,
                fastScrollEnd: true,
                onUpdate: (self) => {
                    // console.log("Progress: 😎", self.progress, "Direction⬅", self.direction);
                    typeWriterEffect(self.progress, self.direction, 3, srcCode[3]);
                },
            },
            duration: 1,
        });

    });

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <>
            <div className="relative">
                <div className="absolute top-0 z-40">
                    <div className="h-96 w-20 flex trigger-react"></div>
                    <div className="h-96 w-20 flex  trigger-html"></div>
                    <div className="h-96 w-20 flex  trigger-css"></div>
                    <div className="h-96 w-20 flex  trigger-js"></div>
                </div>
                <div className="relative top-0 hl-js max-w-screen-lg mx-auto shadow-xl mt-32 gsap-hl-js">
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
                            <div className="bg-gray-800 flex-col flex justify-between items-center h-full">
                                <div className="flex flex-col h-full w-full">

                                    <Icon icon="devicon:react-wordmark" fontSize={70} className={`icon-react  border-b-2 border-gray-500 py-2  ${tabVisible[0] ? "text-white" : "text-gray-500"}`} style={{ filter: "grayscale(1)", opacity: `${tabVisible[0] ? "1" : "0.4"}` }} onClick={() => {
                                        handleTabClick(0);
                                    }} />
                                    <Icon icon="devicon-plain:html5-wordmark" fontSize={70} className={`icon-html border-b-2 border-gray-500 text-gray-500 py-2 ${tabVisible[1] ? "text-white" : "text-gray-500"}`} onClick={() => {
                                        handleTabClick(1);
                                    }} />
                                    <Icon icon="devicon-plain:css3-wordmark" fontSize={70} className={`icon-css border-b-2 border-gray-500 text-gray-500 py-2 ${tabVisible[2] ? "text-white" : "text-gray-500"}`} onClick={() => {
                                        handleTabClick(2);
                                    }} />
                                    <Icon icon="devicon-plain:javascript" fontSize={60} className={`icon-js  text-gray-500 py-2.5 w-full ${tabVisible[3] ? "text-white" : "text-gray-500"}`} onClick={() => {
                                        handleTabClick(3);
                                    }} />
                                </div>
                                <div className="flex flex-col items-center w-full">
                                    <Icon icon="tabler:dots" fontSize={30} className='rotate-90 w-full text-gray-500 my-2' />
                                    <Icon icon="bytesize:settings" fontSize={50} className='border-y-2 w-full border-gray-500 text-gray-500 py-2' />
                                </div>
                            </div>
                            <div className="h-full w-full p-0 relative">
                                <pre className={`h-full w-full p-0 m-to-0 absolute top-0 left-0  ${tabVisible[0] ? "" : "hidden"}  code-block-js`}>
                                    <code className=" language-javascript code-from-here p-0"
                                        dangerouslySetInnerHTML={{ __html: Prism.highlight(`${code}`, Prism.languages.javascript, language) }}
                                    ></code>
                                </pre>
                                <pre className={`h-full w-full p-0 m-to-0 absolute top-0 left-0  ${tabVisible[1] ? "" : "hidden"}  code-block-css`}>
                                    <code className=" language-javascript code-from-here p-0"
                                        dangerouslySetInnerHTML={{ __html: Prism.highlight(`${codeHtml}`, Prism.languages.javascript, language) }}
                                    ></code>
                                </pre>
                                <pre className={`h-full w-full p-0 m-to-0 absolute top-0 left-0  ${tabVisible[2] ? "" : "hidden"}  code-block-html`}>
                                    <code className=" language-javascript code-from-here p-0"
                                        dangerouslySetInnerHTML={{ __html: Prism.highlight(`${codeCss}`, Prism.languages.javascript, language) }}
                                    ></code>
                                </pre>
                                <pre className={`h-full w-full p-0 m-to-0 absolute top-0 left-0  ${tabVisible[3] ? "" : "hidden"} code-block-react`}>
                                    <code className=" language-javascript code-from-here p-0"
                                        dangerouslySetInnerHTML={{ __html: Prism.highlight(`${codeJs}`, Prism.languages.javascript, language) }}
                                    ></code>
                                </pre>
                            </div>
                        </div>

                        <div className="w-full h-4 bg-blue-500 flex flex-row">
                            <Icon icon="gg:remote" className='w-[5%] h-full' style={{ color: "white" }} />
                            <Icon icon="teenyicons:git-fork-solid" className='ms-4 w-[3%] h-full py-[2px]' style={{ color: "white" }} />
                            <span className="text-xs">master*</span>
                            <Icon icon="oui:cross-in-circle-empty" className='ms-4 h-full py-[2px]' style={{ color: "white" }} />
                            <span className="text-xs">0</span>
                            <Icon icon="ph:warning" className='ms-1 h-full py-[2px]' style={{ color: "white" }} />
                            <span className="text-xs">11</span>
                            <Icon icon="ic:outline-cell-tower" className='ms-4 h-full py-[2px]' style={{ color: "white" }} />
                            <span className="text-xs">0</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default CodeComponent;
