import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import React from 'react'

interface AboutProps {
  // Add your prop types here
}

const About: React.FC<AboutProps> = ({}) => {
  return (
    <div className='relative'>
      <Card style={{backgroundImage:`url("/images/bg-com.jpg")`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className='my-6 shadow-lg flex flex-row border-2 border-gray-300 dark:border-gray-900'>
            <div className="w-full">
              <CardHeader className='w-full lg:mb-20'>
        <img src="/images/dev-activity.svg" className='absolute top-6 right-24 opacity-50 z-10 w-64 hidden lg:block' alt="" />
                <CardTitle className='font-pacifico text-3xl lg:text-5xl font-normal text-white'>Vivek Kumar</CardTitle>
                <CardDescription className='z-20 text-right text-white lg:text-3xl text-xl font-bold -translate-y-10 w-full font-lexend'>About me</CardDescription>
              </CardHeader>
              <CardContent className='flex flex-row justify-between'>
              </CardContent>
              <CardFooter className='pt-20'>
                {/* <p>{"item.footer"}</p> */}
              </CardFooter>
            </div>
          </Card>
          <img src="/images/logo-fav.ico" className='max-w-24 lg:max-w-40 mx-auto lg:mx-0 relative -top-20 lg:-top-32 lg:left-10 rounded-full border-4 border-slate-600 shadow-xl shadow-gray-700 opacity-90' alt="" />
          <div className="text-justify lg:px-24 px-6 pt-8 -translate-y-20 font-lexend">
        {/* <h1 className="text-3xl font-bold text-center text-indigo-600 mb-4">Hello! I'm Vivek Kumar</h1> */}
        <p className="text-lg mb-4 z-10">
          I am a professional web developer, UI designer, and web animation specialist based in Jamshedpur, Jharkhand. My journey into the world of technology started with a deep curiosity and passion for creating engaging and dynamic web experiences. I specialize in front-end development, primarily using ReactJS and NextJS, and I also have a strong background in Android app development using React Native.
        </p>
        <p className="text-lg mb-4 z-10">
        I am an experienced IT professional with a Bachelor's in Electronics and Communication Engineering and a UG Diploma in Electrical and Electronics Engineering. My internships at Tata Steel Foundation, Justdial Ltd., and ZF India Pvt. Ltd. provided expertise in procurement, data analytics, and systems engineering. I have also developed web applications using modern technologies. Certifications in Tableau, Advanced Excel, and SAP MM enhance my data analysis capabilities.  
        </p>
        <p className="text-lg mb-4 z-10">
          In my spare time, I enjoy experimenting with new web technologies, contributing to open-source projects, and sharing my knowledge through blogs and tutorials. I believe that the tech community thrives on collaboration and shared learning, and I am always eager to be a part of that vibrant ecosystem.Thank you for taking the time to learn about me. I am excited about the opportunities ahead and look forward to contributing my skills and passion to innovative projects that make a difference. If you have any questions or would like to discuss potential collaborations, please feel free to reach out!
        </p>
      <img src="/images/dev-chair.svg" className='absolute -bottom-20 opacity-40 lg:w-96 w-64 -z-10' alt="" />
      </div>
    </div>
  )
}

export default About