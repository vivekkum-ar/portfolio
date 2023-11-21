import { useEffect, useState } from 'react';
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
import { Icon } from '@iconify/react';
import colors from 'tailwindcss/colors';
interface CodeComponentProps {
    language: string;
}

const CodeComponent: React.FC<CodeComponentProps> = ({ language }) => {
    const [code, setCode] = useRecoilState(codeText);
    const [tabVisible,setTabVisible] = useState([true,false,false,false]);

    const handleTabClick = (tab_id:number) => {
        setTabVisible(prevState => {
            // Map over the previous state array
            return prevState.map((visible, index) => {
                // Set the second tab to true and others to false
                return index === tab_id;
            });
        });
    };
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
        // if (direction === 1 && i < codeLength) {
        //     setCode(prevCode => prevCode + srcCode.charAt(i));
        //     i++;
        //     typeWriter(progress, direction);
        // }
        // if (i >= codeLength) {
        //     return;
        // };
    }
    useGSAP(() => {
        gsap.set(".m-to-0", { margin: 0, });
        gsap.set(".m-to-0", { margin: 0, });
        // gsap.from(".gsap-hl-js", {
        //     scrollTrigger: {
        //         trigger: ".gsap-hl-js",
        //         start: "top top+=10%",
        //         end: "bottom top",
        //         scrub: true,
        //         pin: true,
        //         markers: true,
        //         fastScrollEnd: true,
        //         onUpdate: (self) => {
        //             console.log("Progress: 😎", self.progress, "Direction⬅", self.direction);
        //             typeWriter(self.progress, self.direction);
        //         },
        //     },
        //     duration: 1,
        // });
        let tl = gsap.timeline({
            // scrollTrigger: {
            //     trigger: ".gsap-hl-js",
            //     start: "top top+=10%",
            //     end: "bottom top",
            //     scrub: true,
            //     pin: true,
            //     markers: true,
            //     fastScrollEnd: true,
            // },
            // delay: 0.5,
            // paused: true, // default is false
            // repeat: 2, // number of repeats (-1 for infinite)
            // repeatDelay: 1, // seconds between repeats
            // repeatRefresh: true, // invalidates on each repeat
            // yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
            defaults: { // children inherit these defaults
                duration: 1,
                ease: "none"
            },
            // smoothChildTiming: true,
            // autoRemoveChildren: true,
            // onComplete: myFunc,
            // other callbacks: 
            // onStart, onUpdate, onRepeat, onReverseComplete
            // Each callback has a params property as well
            // i.e. onUpdateParams (Array)
        });
        // tl.to(".icon-react", {  filter:"grayscale(1)"});
        // tl.to(".code-block-react", {  visibility:"visible" });
        // tl.to(".icon-react", {  filter:"grayscale(1)",opacity:"0.5" });
        // tl.to(".code-block-react", {  visibility:"hidden"},"<");
        // tl.to(".icon-html", { color:"white" });
        // tl.to(".code-block-html", {  visibility:"visible" });
        // tl.to(".icon-html", { color:colors.gray[500] });
        // tl.to(".code-block-html", {  visibility:"hidden"},"<");
        // tl.to(".icon-css", { color:"white" });
        // tl.to(".code-block-css", {  visibility:"visible" });
        // tl.to(".icon-css", { color:colors.gray[500] });
        // tl.to(".code-block-css", {  visibility:"hidden"},"<");
        // tl.to(".icon-js", { color:"white" });
        // tl.to(".code-block-js", {  visibility:"visible" });
        // tl.to(".icon-js", { color:colors.gray[500] });
        // tl.to(".code-block-js", {  visibility:"hidden"},"<");
    });

    useEffect(() => {
        Prism.highlightAll();
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
                        <div className="bg-gray-800 flex-col flex justify-between items-center h-full">
                            <div className="flex flex-col h-full w-full">

                                <Icon icon="devicon:react-wordmark" fontSize={70} className={`icon-react  border-b-2 border-gray-500 py-2  ${tabVisible[0] ? "text-white" : "text-gray-500"}`} style={{filter:"grayscale(1)", opacity:`${tabVisible[0] ? "1" : "0.4"}`}} onClick={() => {
                                    handleTabClick(0);
                                }}/>
                                <Icon icon="devicon-plain:html5-wordmark" fontSize={70} className={`icon-html border-b-2 border-gray-500 text-gray-500 py-2 ${tabVisible[1] ? "text-white" : "text-gray-500"}`}  onClick={() => {
                                    handleTabClick(1);
                                }}/>
                                <Icon icon="devicon-plain:css3-wordmark" fontSize={70} className={`icon-css border-b-2 border-gray-500 text-gray-500 py-2 ${tabVisible[2] ? "text-white" : "text-gray-500"}`}  onClick={() => {
                                    handleTabClick(2);
                                }}/>
                                <Icon icon="devicon-plain:javascript" fontSize={60} className={`icon-js  text-gray-500 py-2.5 w-full ${tabVisible[3] ? "text-white" : "text-gray-500"}`}  onClick={() => {
                                    handleTabClick(3);
                                }}/>
                            </div>
                            <div className="flex flex-col items-center w-full">
                                <Icon icon="tabler:dots" fontSize={30} className='rotate-90 w-full text-gray-500 my-2' />
                                <Icon icon="bytesize:settings" fontSize={50} className='border-y-2 w-full border-gray-500 text-gray-500 py-2' />
                            </div>
                        </div>
                        <div className="h-full w-full p-0 relative">
                            <pre className={`h-full w-full p-0 m-to-0 absolute top-0 left-0 border-4  ${tabVisible[3] ? "" : "hidden"}  code-block-js border-red-400`}>
                                <code className=" language-javascript code-from-here p-0"
                                    // dangerouslySetInnerHTML={{ __html: Prism.highlight(`${code}`, Prism.languages.javascript, language) }}
                                >Javascript</code>
                            </pre>
                            <pre className={`h-full w-full p-0 m-to-0 absolute top-0 left-0 border-4  ${tabVisible[1] ? "" : "hidden"}  code-block-css border-blue-400`}>
                                <code className=" language-javascript code-from-here p-0"
                                    // dangerouslySetInnerHTML={{ __html: Prism.highlight(`${code}`, Prism.languages.javascript, language) }}
                                >HTML</code>
                            </pre>
                            <pre className={`h-full w-full p-0 m-to-0 absolute top-0 left-0 border-4  ${tabVisible[2] ? "" : "hidden"}  code-block-html border-green-400`}>
                                <code className=" language-javascript code-from-here p-0"
                                    // dangerouslySetInnerHTML={{ __html: Prism.highlight(`${code}`, Prism.languages.javascript, language) }}
                                >CSS</code>
                            </pre>
                            <pre className={`h-full w-full p-0 m-to-0 absolute top-0 left-0 border-4  ${tabVisible[0] ? "" : "hidden"} code-block-react border-yellow-400`}>
                                <code className=" language-javascript code-from-here p-0"
                                    // dangerouslySetInnerHTML={{ __html: Prism.highlight(`${code}`, Prism.languages.javascript, language) }}
                                >React</code>
                            </pre>
                        </div>
                    </div>
                        <div className="w-full h-4 bg-blue-500 flex flex-row">
                        <Icon icon="gg:remote" className='w-[5%] h-full'  style={{color: "white"}} />
                        <Icon icon="teenyicons:git-fork-solid" className='ms-4 w-[3%] h-full py-[2px]'  style={{color: "white"}} />
                        <span className="text-xs">master*</span>
                        <Icon icon="oui:cross-in-circle-empty" className='ms-4 h-full py-[2px]'  style={{color: "white"}} />
                        <span className="text-xs">0</span>
                        <Icon icon="ph:warning" className='ms-1 h-full py-[2px]'  style={{color: "white"}} />
                        <span className="text-xs">11</span>
                        <Icon icon="ic:outline-cell-tower" className='ms-4 h-full py-[2px]'  style={{color: "white"}} />
                        <span className="text-xs">0</span>
                        </div>
                </div>
            </div>

        </>
    );
}

export default CodeComponent;
