import React from 'react'

interface CardsProps {
  // Add your prop types here
}

const Cards: React.FC<CardsProps> = ({}) => {
  return (
    <div className="container mx-auto px-8 2xl:px-32  mt-32 font-lexend">
  <h2 className="text-3xl font-semibold tracking-tight leading-normal">Projects I’m the most proud of</h2>
  <div className="flex flex-col items-start gap-4 md:flex-row md:items-end justify-between">
    <p className="mt-6 space-y-4 tracking-wide leading-relaxed text-gray-400 font-medium max-w-2xl">I love building products that solve problems. I take pride in looking at things from end users’ perspectives and working backward to create compelling experiences.</p><a className="flex-shrink-0 font-medium inline-flex items-center gap-2 text-green-300 hover:underline hover:text-sky-400 underline-offset-4 transition" href="/projects/" >View all projects <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg></a></div>
  <div className="grid lg:grid-cols-2 max-w-6xl mx-auto mt-12 gap-8">
    <div className="flex flex-col rounded-2xl relative overflow-hidden shadow-md hover:shadow-xl transition group bg-[#1b1b1e] ring-1 ring-gray-700/30 ring-inset" >
      <div className="absolute inset-0 bg-dots fade-y opacity-50" />
      <div className="absolute z-20 bottom-20 -right-1/2 h-[101%] aspect-square bg-gradient-to-c from-highlight to-[70%] to-transparent rounded-full opacity-30 sm:opacity-20 sm:group-hover:opacity-30 group-hover:scale-150 transition duration-300" />
      <div className="absolute bottom-36 fade-b -right-20 hidden sm:block"><svg className="w-[30rem]" viewBox="0 0 366 366" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="stroke-1 stroke-white/10" d="M281.922 56.3231C284.978 53.1316 284.311 48.8332 280.256 46.9224C250.391 32.8482 214.577 27.386 179.56 31.7131C141.682 36.3937 107.839 52.1454 85.4772 75.5029C63.1151 98.8605 54.0652 127.911 60.3185 156.263C66.0994 182.473 84.5209 206.101 111.926 222.746C115.646 225.006 121.299 224.097 124.354 220.905L281.922 56.3231Z" pathLength={1} strokeDashoffset="0px" strokeDasharray="1px 1px" /><path className="stroke-1 stroke-white/10" d="M84.0777 309.677C81.0222 312.868 81.6891 317.167 85.7439 319.078C115.609 333.152 151.423 338.614 186.44 334.287C224.318 329.606 258.161 313.855 280.523 290.497C302.885 267.14 311.935 238.089 305.682 209.737C299.901 183.527 281.479 159.899 254.075 143.254C250.354 140.994 244.702 141.903 241.646 145.095L84.0777 309.677Z" pathLength={1} strokeDashoffset="0px" strokeDasharray="1px 1px" /></svg></div>
      <div className="p-8 sm:py-12 relative z-20 h-full flex flex-col">
        <div className="flex flex-col sm:flex-row gap-3 justify-between">
          <h3 className="text-4xl font-semibold">Slant it</h3>
        </div>
        <p className="prose text-gray-200/60 font-medium text-sm my-8 leading-[1.8] tracking-wide drop-shadow">Having built so many products, I looked for ways to make videos of my products that I could post online. Screen recordings worked, but they weren’t catchy enough on social media. And that’s why I built Slant it!<br /><br />Slant it is an easy-to-use 3D product video maker from simple screen recordings. It has various features including smart music beat detection, dozens of 3D animations, and more spread across free and pro plans.</p>
        <div className="flex justify-between mt-auto"><a className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-50 text-gray-950 shadow-xl shadow-black/20 hover:bg-gray-300 focus:ring-1 ring-gray-300 focus:ring-offset-2 text-sm font-medium px-4 py-2" href="https://slantit.app" target="_blank" >Live{/* */} <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover/button:translate-x-px group-hover/button:-translate-y-px transition-transform"><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg></a></div>
      </div>
      <div className="relative z-20 lg:mix-blend-luminosity group-hover:mix-blend-normal"><video className="lazy aspect-video fade-t-ease rounded-2xl group-hover:scale-110 origin-bottom transition duration-700" autoPlay muted loop playsInline poster="/featured-projects/slant-it/poster.jpg"><source data-src="/featured-projects/slant-it/video.webm" type="video/webm" /><source data-src="/featured-projects/slant-it/video.mp4" type="video/mp4" /></video></div>
    </div>
    <div className="flex flex-col rounded-2xl relative overflow-hidden shadow-md hover:shadow-xl transition group bg-[#1b1b1e] ring-1 ring-gray-700/30 ring-inset" >
      <div className="absolute inset-0 bg-dots fade-y opacity-50" />
      <div className="absolute z-20 bottom-20 -right-1/2 h-[101%] aspect-square bg-gradient-to-c from-highlight to-[70%] to-transparent rounded-full opacity-30 sm:opacity-20 sm:group-hover:opacity-30 group-hover:scale-150 transition duration-300" />
      <div className="absolute bottom-36 fade-b -right-20 hidden sm:block"><svg className="w-[30rem]" viewBox="0 0 366 366" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="stroke-1 stroke-white/10" clipRule="evenodd" d="M251.589 53.8386C251.589 65.0735 242.923 74.2843 231.91 75.1504L205.326 147.939L248.235 149.93C251.636 142.63 259.039 137.571 267.623 137.571C279.43 137.571 289.001 147.142 289.001 158.949C289.001 170.756 279.43 180.328 267.623 180.328C266.243 180.328 264.894 180.197 263.587 179.947L136.523 305.533C137.203 307.62 137.571 309.848 137.571 312.161C137.571 323.968 127.999 333.54 116.192 333.54C104.385 333.54 94.8139 323.968 94.8139 312.161C94.8139 301.218 103.036 292.195 113.64 290.934L155.272 195.767L114.153 194.755C110.244 199.027 104.624 201.706 98.377 201.706C86.57 201.706 76.9986 192.135 76.9986 180.328C76.9986 168.521 86.57 158.949 98.377 158.949C101.542 158.949 104.546 159.637 107.248 160.871L210.06 60.9954C209.265 58.7578 208.832 56.3487 208.832 53.8386C208.832 42.0316 218.404 32.4601 230.211 32.4601C242.018 32.4601 251.589 42.0316 251.589 53.8386ZM248.139 167.76C248.387 168.308 248.657 168.843 248.949 169.366L138.52 278.512L176.909 190.758C178.098 188.039 177.855 184.907 176.262 182.404C174.668 179.901 171.933 178.356 168.967 178.283L119.508 177.066C119.368 176.148 119.169 175.25 118.916 174.375L208.483 87.3647L184.431 153.219C183.459 155.882 183.812 158.849 185.382 161.209C186.953 163.57 189.554 165.042 192.386 165.173L248.139 167.76Z" pathLength={1} strokeDashoffset="0px" strokeDasharray="1px 1px" /></svg></div>
      <div className="p-8 sm:py-12 relative z-20 h-full flex flex-col">
        <div className="flex flex-col sm:flex-row gap-3 justify-between">
          <h3 className="text-4xl font-semibold">Blaze</h3>
          <div className="flex items-center gap-1.5 text-gray-300 font-medium">2,162<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg><span className="text-gray-400 text-xs">on GitHub</span></div>
        </div>
        <p className="prose text-gray-200/60 font-medium text-sm my-8 leading-[1.8] tracking-wide drop-shadow">A peer-to-peer file-sharing web app I built to solve a problem I faced while transferring files from my phone to my laptop without having to upload files to a cloud account or download specific file-sharing apps.<br /><br />Blaze became the <strong>#1 Product of the day</strong> on Product Hunt and gets about 300 weekly views. DigitalOcean is sponsoring the infrastructure for this project. Technologies I learned while building Blaze:</p>
        <div className="flex justify-between mt-auto"><a className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-50 text-gray-950 shadow-xl shadow-black/20 hover:bg-gray-300 focus:ring-1 ring-gray-300 focus:ring-offset-2 text-sm font-medium px-4 py-2" href="https://blaze.now.sh/" target="_blank" >Live{/* */} <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover/button:translate-x-px group-hover/button:-translate-y-px transition-transform"><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg></a><a className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-50/10 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2" href="https://github.com/blenderskool/blaze" target="_blank" >GitHub<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover/button:translate-x-px group-hover/button:-translate-y-px transition-transform"><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg></a></div>
      </div>
      <div className="relative z-20 lg:mix-blend-luminosity group-hover:mix-blend-normal"><video className="lazy aspect-video fade-t-ease rounded-2xl group-hover:scale-110 origin-bottom transition duration-700" autoPlay muted loop playsInline poster="/featured-projects/blaze/poster.jpg"><source data-src="/featured-projects/blaze/video.webm" type="video/webm" /><source data-src="/featured-projects/blaze/video.mp4" type="video/mp4" /></video></div>
    </div>
    <div className="flex flex-col rounded-2xl relative overflow-hidden shadow-md hover:shadow-xl transition group bg-[#1b1b1e] ring-1 ring-gray-700/30 ring-inset" >
      <div className="absolute inset-0 bg-dots fade-y opacity-50" />
      <div className="absolute z-20 bottom-20 -right-1/2 h-[101%] aspect-square bg-gradient-to-c from-highlight to-[70%] to-transparent rounded-full opacity-30 sm:opacity-20 sm:group-hover:opacity-30 group-hover:scale-150 transition duration-300" />
      <div className="absolute bottom-36 fade-b -right-20 hidden sm:block"><svg className="w-[30rem]" viewBox="0 0 366 366" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="stroke-1 stroke-white/10" d="M167.283 322.838C166.931 323.612 166.579 324.373 166.227 325.134L166.226 325.134C166.168 325.12 166.127 325.105 166.068 325.092H166.053C163.735 324.516 161.356 323.882 158.964 323.19H158.95C154.743 321.953 150.435 320.539 146.07 318.91C110.61 305.785 71.4909 279.661 48.495 237.978C22.459 190.79 21.2343 132.479 44.7921 64.5881C69.6322 74.0689 91.2736 85.3939 109.63 98.52C111.244 99.6726 112.83 100.84 114.4 102.036C115.956 103.203 117.483 104.384 118.982 105.594C136.443 119.538 150.529 135.323 161.161 152.893C162.68 155.403 164.129 157.95 165.506 160.532C167.71 164.663 169.736 168.878 171.576 173.192C172.13 174.491 172.667 175.799 173.187 177.116C174.646 180.797 175.955 184.495 177.122 188.204C178.301 191.953 179.335 195.712 180.231 199.474C180.812 201.914 181.335 204.355 181.803 206.795C184.499 220.852 185.352 234.871 184.798 248.434C183.659 276.359 176.558 302.354 167.308 322.786L167.307 322.787C167.299 322.804 167.291 322.821 167.283 322.838Z" pathLength={1} strokeDashoffset="0px" strokeDasharray="0px 1px" /><path className="stroke-1 stroke-white/10" d="M238.197 193.209C235.359 241.333 211.181 282.412 184.74 310.005L184.742 310.002L184.74 310.003C186.184 305.798 187.529 301.445 188.755 296.966C189.281 295.046 189.784 293.103 190.264 291.138C198.906 255.767 199.938 213.336 183.89 172.866C180.591 164.538 176.672 156.541 172.162 148.847C160.376 128.762 144.483 110.881 124.542 95.2623C135.795 75.6236 150.751 56.1723 169.395 36.9659C189.524 57.7281 205.301 78.8793 216.655 100.304L216.656 100.303C227.305 120.413 234.077 140.761 236.927 161.277C237.86 167.989 238.372 174.72 238.463 181.467C238.516 185.376 238.428 189.29 238.197 193.209Z" pathLength={1} strokeDashoffset="0px" strokeDasharray="0px 1px" /><path className="stroke-1 stroke-white/10" d="M249.695 193.886C246.309 251.347 214.424 299.27 182.682 328.086C253.714 305.451 359.041 226.334 297.459 57.1506C268.932 67.5391 245.359 79.815 226.037 93.3733C243.775 126.21 251.7 159.824 249.695 193.886Z" pathLength={1} strokeDashoffset="-1px" strokeDasharray="1px 1px" /></svg></div>
      <div className="p-8 sm:py-12 relative z-20 h-full flex flex-col">
        <div className="flex flex-col sm:flex-row gap-3 justify-between">
          <h3 className="text-4xl font-semibold">Pigmnts</h3>
          <div className="flex items-center gap-1.5 text-gray-300 font-medium">66<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg><span className="text-gray-400 text-xs">on GitHub</span></div>
        </div>
        <p className="prose text-gray-200/60 font-medium text-sm my-8 leading-[1.8] tracking-wide drop-shadow">An image-to-color palette generator I built to learn the Rust programming language and WebAssembly. The project also introduced me to various clustering algorithms and I further expanded it to a
          {/* */}<strong>full-fledged product</strong> that anyone can use to create visually appealing color palettes.<br /><br />Pigmnts is available as a browser extension, web app, CLI tool, and library for Rust and JavaScript using WebAssembly. It has a free and a pro plan with extra features.</p>
        <div className="flex justify-between mt-auto"><a className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-50 text-gray-950 shadow-xl shadow-black/20 hover:bg-gray-300 focus:ring-1 ring-gray-300 focus:ring-offset-2 text-sm font-medium px-4 py-2" href="https://pigmnts.web.app" target="_blank" >Live{/* */} <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover/button:translate-x-px group-hover/button:-translate-y-px transition-transform"><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg></a><a className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-50/10 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2" href="https://github.com/blenderskool/pigmnts" target="_blank" >GitHub<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover/button:translate-x-px group-hover/button:-translate-y-px transition-transform"><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg></a></div>
      </div>
      <div className="relative z-20 lg:mix-blend-luminosity group-hover:mix-blend-normal"><video className="lazy aspect-video fade-t-ease rounded-2xl group-hover:scale-110 origin-bottom transition duration-700" autoPlay muted loop playsInline poster="/featured-projects/pigmnts/poster.jpg"><source data-src="/featured-projects/pigmnts/video.webm" type="video/webm" /><source data-src="/featured-projects/pigmnts/video.mp4" type="video/mp4" /></video></div>
    </div>
    <div className="flex flex-col rounded-2xl relative overflow-hidden shadow-md hover:shadow-xl transition group bg-[#1b1b1e] ring-1 ring-gray-700/30 ring-inset" >
      <div className="absolute inset-0 bg-dots fade-y opacity-50" />
      <div className="absolute z-20 bottom-20 -right-1/2 h-[101%] aspect-square bg-gradient-to-c from-highlight to-[70%] to-transparent rounded-full opacity-30 sm:opacity-20 sm:group-hover:opacity-30 group-hover:scale-150 transition duration-300" />
      <div className="absolute bottom-36 fade-b -right-20 hidden sm:block"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 366 366" className="w-[30rem]"><path className="stroke-1 stroke-white/10" d="M171.508 110.812C153.443 110.812 138.799 125.498 138.799 143.615C138.799 161.731 153.443 176.418 171.508 176.418C180.262 176.418 188.214 172.968 194.084 167.35C194.245 167.152 194.417 166.96 194.601 166.775C194.786 166.59 194.977 166.417 195.175 166.256C200.777 160.369 204.216 152.395 204.216 143.615C204.216 125.498 189.572 110.812 171.508 110.812Z" pathLength={1} strokeDashoffset="0px" strokeDasharray="0px 1px" /><path className="stroke-1 stroke-white/10" clipRule="evenodd" d="M84.5233 40.3882C75.7169 40.3882 68.5779 47.5478 68.5779 56.3796V240.896C68.5779 249.728 75.7169 256.887 84.5233 256.887H268.508C277.315 256.887 284.454 249.728 284.454 240.896V56.3796C284.454 47.5478 277.315 40.3882 268.508 40.3882H84.5233ZM171.508 191.179C181.949 191.179 191.602 187.795 199.436 182.061L216.388 199.063C219.262 201.945 223.922 201.945 226.796 199.063C229.67 196.18 229.67 191.507 226.796 188.625L209.844 171.624C215.561 163.767 218.935 154.086 218.935 143.615C218.935 117.346 197.701 96.0506 171.508 96.0506C145.314 96.0506 124.08 117.346 124.08 143.615C124.08 169.884 145.314 191.179 171.508 191.179Z" pathLength={1} strokeDashoffset="0px" strokeDasharray="0px 1px" /><path className="stroke-1 stroke-white/10" clipRule="evenodd" d="M58.0738 99.2445C56.7712 90.5098 62.7757 82.37 71.4852 81.0636L253.446 53.7702C262.156 52.4638 270.272 58.4856 271.575 67.2203L285.796 162.581L311.786 255.417C314.167 263.92 309.223 272.748 300.745 275.136L123.609 325.012C115.13 327.4 106.327 322.442 103.947 313.939L98.6965 295.185C91.9448 294.173 86.3509 288.854 85.2886 281.731L74.2976 208.032L54.2136 136.292C52.2724 129.358 55.2018 122.207 60.9469 118.51L58.0738 99.2445ZM199.337 182.387C191.503 188.121 181.85 191.505 171.408 191.505C145.215 191.505 123.981 170.209 123.981 143.94C123.981 117.671 145.215 96.3763 171.408 96.3763C197.602 96.3763 218.836 117.671 218.836 143.94C218.836 154.412 215.462 164.093 209.745 171.949L226.697 188.951C229.571 191.833 229.571 196.506 226.697 199.388C223.823 202.271 219.163 202.271 216.289 199.388L199.337 182.387Z" pathLength={1} strokeDashoffset="0px" strokeDasharray="0px 1px" /></svg></div>
      <div className="p-8 sm:py-12 relative z-20 h-full flex flex-col">
        <div className="flex flex-col sm:flex-row gap-3 justify-between">
          <h3 className="text-4xl font-semibold">UnTab</h3>
          <div className="flex items-center gap-1.5 text-gray-300 font-medium">342<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg><span className="text-gray-400 text-xs">on GitHub</span></div>
        </div>
        <p className="prose text-gray-200/60 font-medium text-sm my-8 leading-[1.8] tracking-wide drop-shadow">A productivity tool I built to manage a lot of tabs open on our browser. UnTab provides a beautiful search interface to search tabs, bookmarks, history and also perform quick actions with just a few keystrokes.<br /><br />I built UnTab in the <strong>FOSS Hack 2020</strong> and it was one of the winning projects. UnTab is available as an extension for both Chrome and Firefox. UnTab has a powerful themes and plugins API that makes it possible for anyone to extend UnTab’s feature set.</p>
        <div className="flex justify-between mt-auto"><a className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-50 text-gray-950 shadow-xl shadow-black/20 hover:bg-gray-300 focus:ring-1 ring-gray-300 focus:ring-offset-2 text-sm font-medium px-4 py-2" href="https://getuntab.now.sh" target="_blank" >Live{/* */} <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover/button:translate-x-px group-hover/button:-translate-y-px transition-transform"><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg></a><a className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-50/10 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2" href="https://github.com/blenderskool/untab" target="_blank" >GitHub<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover/button:translate-x-px group-hover/button:-translate-y-px transition-transform"><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg></a></div>
      </div>
      <div className="relative z-20 lg:mix-blend-luminosity group-hover:mix-blend-normal"><video className="lazy aspect-video fade-t-ease rounded-2xl group-hover:scale-110 origin-bottom transition duration-700" autoPlay muted loop playsInline poster="/featured-projects/untab/poster.jpg"><source data-src="/featured-projects/untab/video.mp4" type="video/mp4" /></video></div>
    </div>
  </div>
</div>
  )
}

export default Cards