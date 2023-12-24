import React, { useEffect } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
import emailjs from '@emailjs/browser';

interface ContactProps {
  // Add your prop types here
  Title?: string,
  Description?: string
}

const Contact: React.FC<ContactProps> = ({ Title= "", Description= "" }) => {
  console.log(Title, Description);
  /* ------------------------------------- Initialize EmailJs ------------------------------------- */
  useEffect(() => {
    emailjs.init({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      // Do not allow headless browsers
      blockHeadless: true,
      blockList: {
        // Block the suspended emails
        list: ['foo@emailjs.com', 'bar@emailjs.com'],
        // The variable contains the email address
        watchVariable: 'userEmail',
      },
      limitRate: {
        // Set the limit rate for the application
        id: 'app',
        // Allow 1 request per 10s = 10000ms
        throttle: 10000,
      },
    });
  },[]);
  useGSAP(() => {
    if(Title == "" && Description == "") return;
    gsap.set(".gsap-clip-animation-target", {clipPath: 'circle(1% at 50% 50%)'});
    gsap.to(".gsap-clip-animation-target", {
      scrollTrigger: {
        trigger: ".gsap-clip-animation-trigger",
        toggleActions: "play none none reverse",
        start: "top-=150% top",
        end: "center top",
        // once: true,
        scrub: 1,
        // markers: true,
        fastScrollEnd: true,
        // onUpdate: (self) => {
        //   console.log(self.progress*100);
        //   gsap.set(".gsap-clip-animation-trigger", {clipPath: 'circle(' + self.progress*100 + '% at 50% 50%)'});
        // },
      },
      duration: 1,
      clipPath: 'circle(100% at 50% 50%)',
    });
  });
  // A regex for phone number
  const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  );
  /* -------------------------------------- 1. Define Schema -------------------------------------- */
  const formSchema = z.object({
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    phone: z.string().regex(phoneRegex, 'Invalid Number!').optional().or(z.literal('')),
    message: z.string().max(250, {
      message: "Message should be less than 250 characters."
    }),
  })
  /* --------------------------------------- 2. Define Form --------------------------------------- */
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone: "",
      message: "",
    },
  })
  /* ---------------------------------- 3. Define submit handler ---------------------------------- */
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    var templateParams = {
      userEmail: values.email,
      userPhone: values.phone,
      userMessage: values.message
    };
    if(values.email && values.message) {
      emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, templateParams)
      .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert(`SUCCESS! - ${response.status} - ${response.text}`);
        },
        (error) => {
          console.log('FAILED...', error);
          alert(`FAILED... - ${error}`);
        },);
    }
  }
  return (
    <>
      {Title &&
        <div className='w-full flex flex-col gsap-clip-animation-trigger'>
          <h1 className="font-lexend font-normal text-7xl w-full text-center">
            <span id='experience' className="bg-clip-text text-transparent bg-gradient-to-t dark:from-slate-500 from-white to-blue-800  dark:to-white w-full">
              {Title}
            </span>
            {
              Description && <span className="text-5xl bg-clip-text text-transparent bg-gradient-to-t dark:from-slate-500 dark:to-white from-white to-blue-800 w-full"><br />
                {Description}
              </span>
            }
          </h1>
          <div className="astrodivider self-center w-full pt-6 px-16 scale-150"><div className="astrodividermask"></div></div>
        </div>
      }
      <div className="flex flex-row justify-center items-center w-full pt-6 pb-12 gsap-clip-animation-target" 
      // style={{ clipPath: 'circle(1% at 50% 50%)' }}
      >
        <div className="w-2/5 h-[80vh] opacity-80 rounded-xl shadow-xl translate-x-24 z-10 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 dark:from-slate-500 dark:via-slate-400 dark:to-slate-300">
        </div>
        <img src="/images/contactus.svg" className='lazy w-[60vw] h-[60vh] absolute -left-12 z-20' loading='eager' alt="" />

        <img src="/images/contactus.svg" className='lazy w-[50vw] h-[50vh] absolute right-0 -z-20' alt="" />
        <Card className="shadow-xl border-2 border-gray-300 font-lexend w-3/6 z-20 me-32">
          <CardHeader>
            <CardTitle className="flex text-5xl font-lexend bg-clip-text text-transparent bg-gradient-to-t dark:from-slate-500 dark:to-white from-slate-200 to-blue-800 w-full">
              Contact Me
            </CardTitle>
            <CardDescription className=''>
              {/* some text for a contact form description for a portfoilo website */}
              Get in touch with me to discuss your project. I'm available for new projects and I'd love to hear about yours.
            </CardDescription>
          </CardHeader>
          <CardContent className=''>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="">
                <div className="flex flex-row justify-start items-start space-x-6 mb-6 w-full">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className='basis-1/2'>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email " {...field} />
                        </FormControl>
                        <FormDescription className='text-xs scale-90 -translate-x-3 -translate-y-2 text-gray-400'>
                          I will get back to you on the above phone/email in 24 hours.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className='basis-1/2'>
                        <FormLabel>Phone (optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your phone +91..." {...field} />
                        </FormControl>
                        <FormDescription>
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="What do you want to talk about?" {...field} />
                      </FormControl>
                      <FormDescription>
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className='mt-6 w-full grid grid-cols-1 place-content-center'>
                  <Button className='mx-auto w-1/2' type="submit">Submit</Button>
                </div>
              </form>
            </Form>
          </CardContent>
          {/* <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter> */}
        </Card>
      </div>
    </>
  )
}

export default Contact