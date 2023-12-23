import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

// import Atropos from 'atropos/react';
// import 'atropos/css';

interface TimelineCardProps {
    Title: string;
    Description: string;
}
const TimelineCard: React.FC<TimelineCardProps> = (props) => {
    const { Title, Description } = props; //Destructuring Title, Description = props = title, description(from parent)
    return (
        <section className=" md:h-84 my-32">
            <div className="parent-timeline-title flex flex-col place-content-center dark:text-white bg-white dark:bg-inherit overflow-hidden">
                {/* <div className="timeline-title -trigger absolute border-lg border-red-500">
        </div> */}
                <h1 className="font-lexend font-normal text-7xl w-full text-center">
                    <span id='experience' className="bg-clip-text text-transparent bg-gradient-to-t dark:from-slate-500 from-white to-blue-800  dark:to-white w-full">
                        {Title}
                    </span>
                    <span className="text-5xl bg-clip-text text-transparent bg-gradient-to-t dark:from-slate-500 dark:to-white from-white to-blue-800 w-full"><br />
                        {Description}
                    </span>
                </h1>
                <div className="astrodivider self-center pt-6 px-16 scale-150"><div className="astrodividermask"></div></div>

                {/* <hr className="timeline-title  w-60 md:w-fit md:px-60 mb-5 self-center h-0 border-2 border-gray-400" /> */}

                {/* <p className="timeline-title  mb-8 px-4 md:px-20 text-center text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 font-bg">{Description}</p> */}
            </div>
            <div className="overflow-visible  grid grid-rows-3 sm:grid-rows-1 gap-y-0 px-5 sm:grid-cols-4 sm:gap-x-8">

                <div style={{ backgroundImage: `url("./images/website-undraw.svg")` }} className="md:translate-x-12 md:translate-y-12 bg-contain md:bg-contain border-b-2 border-gray-400 sm:border-0 bg-no-repeat bg-bottom md:bg-top row-span-0 sm:row-span-0 sm:col-span-1">
                </div>


                {/* <Atropos className="py-0 mx-auto max-w-screen-xl row-span-2 sm:row-span-0 sm:col-span-2" shadow={false} commonOrigin={false}> */}
                <div className="py-0 mx-auto max-w-screen-xl row-span-2 sm:row-span-0 sm:col-span-2">
                    <div data-atropos-offset="-1" className="">
                        <div className="dark:text-white md:my-4 py-4 md:p-4 px-2">
                            {/* <a href="#" data-atropos-offset="10" className="hidden bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              Tutorial
            </a> */}

                            {/* <h1 data-atropos-offset="5" className={`overflow text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-2 font-bg`}>{Title}</h1>
            <p className="text-sm md:text-lg font-normal text-gray-700 dark:text-white mb-6" data-atropos-offset="7">{Description}</p> */}
                            <ol className="parent-timelinecard relative ps-4 border-s border-gray-200 dark:border-gray-700">
                                <li className="mb-10 ms-6">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                        <Icon icon="ic:baseline-circle" style={{ color: "white" }} />
                                    </span>
                                    <div className="timelinecard">
                                        <div className='flex flex-row justify-start items-center gap-5 pb-2'>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/1200px-Tata_logo.svg.png" className='w-12 h-12 rounded-full' alt="" />
                                            <div className='flex flex-col justify-center items-start'>

                                                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Procurement Intern
                                                    {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span> */}
                                                </h3>
                                                <time className="block mb-2 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">Tata Steel</time>
                                            </div>
                                        </div>
                                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                            <ul className="list-disc">
                                                <li>Achieved a record of streamlining Release Orders (RO) creation process by 25k units.</li>
                                                <li>Proficient in creating Comprehensive Supplier Quotations (CSQ) post Request for Quotation (RFQ) and negotiation.</li>
                                                <li>Efficiently managed Delivery Orders (DO) of IT equipment for various internal departments.</li>
                                            </ul>
                                        </p>
                                    </div>
                                </li>
                                <li className="mb-10 ms-6">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                        <Icon icon="ic:baseline-circle" style={{ color: "white" }} />
                                    </span>
                                    <div className="timelinecard">
                                        <div className='flex flex-row justify-start items-center gap-5 pb-2'>
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBndNcrlAT19ephLlWjeGi-lYKsY92PAwircWa2BRM9w&s" className='w-12 h-12 rounded-full' alt="" />
                                            <div className='flex flex-col justify-center items-start'>

                                                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Data Analytics Intern
                                                    {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span> */}
                                                </h3>
                                                <time className="block mb-2 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">Justdial Pvt. Ltd.</time>
                                            </div>
                                        </div>
                                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                            <ul className="list-disc">
                                                <li>Enhanced website visibility and traffic of paid contracts and search optimization.</li>
                                                <li>Continuous regression, load and functional testing of the website.</li>
                                                <li>Led the categorization of contracts to enhance organizational efficiency.</li>
                                            </ul>
                                        </p>
                                    </div>
                                </li>
                                <li className="mb-10 ms-6">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                        <Icon icon="ic:baseline-circle" style={{ color: "white" }} />
                                    </span>
                                    <div className="timelinecard">
                                        <div className='flex flex-row justify-start items-center gap-5 pb-2'>
                                            <img src="https://s3-symbol-logo.tradingview.com/zfsteering-gear-india-ltd--600.png" className='w-12 h-12 rounded-full' alt="" />
                                            <div className='flex flex-col justify-center items-start'>

                                                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Procurement JET{/* <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span> */}
                                                </h3>
                                                <time className="block mb-2 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">ZF India Pvt. Ltd</time>
                                            </div>
                                        </div>
                                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"><ul className="list-disc">
                                            <li >Strategically forecasted MOQs based on historical data, optimizing inventory management.</li>
                                            <li >Implemented SAP scheduling and MRP planning for efficient production operations.</li>
                                            <li >Provided IT support for system enhancements and collaborated cross-functionally to ensure seamless supply chain flow.</li>
                                        </ul></p>
                                    </div>
                                </li>

                            </ol>
                            {/* <a href="#" data-atropos-offset="10" className="mt-10 flex sm:inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-gray-300 rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Get Started
              <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </a> */}
                        </div>
                    </div>
                </div>
                {/* </Atropos> */}

                <div style={{ backgroundImage: `url("./images/web-builder.svg")` }} className="md:-translate-x-52 md:translate-y-80  scale-x-[-1] hidden md:block bg-cover border-b-2 border-gray-400 sm:border-0 bg-no-repeat bg-bottom md:bg-top md:bg-contain row-span-1 sm:row-span-0 sm:col-span-1">
                </div>

            </div>
        </section>
    )
}

export default TimelineCard