"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Icon } from '@iconify/react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"

const components: { title: string; href: string; description: string ; icon:any}[] = [
  {
    title: "Technologies i use",
    href: "/#tech",
    description: "Overview of the technologies and tools I use in my projects.",
    icon:"gridicons:science"
  },
  {
    title: "Projects",
    href: "/#projects",
    description: "A showcase of the projects I've worked on and developed.",
    icon:"ion:desktop-outline"
  },
  {
    title: "Experience",
    href: "/#experience",
    description: "Details of my professional experience and career milestones.",
    icon:"material-symbols:work-history"
  },
  {
    title: "Freelance Work",
    href: "/freelance",
    description: "Insights and stories from my freelance work and projects.",
    icon:"tabler:free-rights"
  },
  {
    title: "Blogs",
    href: "/blogs",
    description: "Articles, tutorials, and insights on various topics.",
    icon:"fa6-solid:blog"
  },
  {
    title: "Contact",
    href: "contact",
    description: "Get in touch with me.",
    icon:"subway:call-4"
  },
]


export function NavigationMenus() {
  return (
    <NavigationMenu className="font-noto ">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger><Icon icon="material-symbols:person" width="20" height="20" className="mb-1.5 me-1" />About me</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_.75fr]">
              <li>
                <ListItem href="/About" title={"About me"} icon={<Icon icon="icon-park-twotone:me" className="inline-flex mr-1" width="20" height="20"/>}>
                  Learn more about my background and experience.
                </ListItem>
                <ListItem href="/Resume" title="Resume" icon={<Icon icon="ph:download-bold" className="inline-flex mr-1" width="20" height="20"/>}>
                  View my professional resume and work history.
                </ListItem>
                <ListItem onClick={() => { const element = document.getElementById('projects'); element?.scrollIntoView({ behavior: 'smooth' }); }} title="Projects" icon={<Icon icon="ion:desktop-outline" className="inline-flex mr-1" width="20" height="20"/>}>
                  Explore the projects I've worked on and developed.
                </ListItem>
              </li>
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <img src="/images/logo-fav.ico" className="outline-1 outline outline-slate-700 shadow-lg rounded-full h-full w-12 sm:h-12" alt="Vivek's Profile" />

                    <div className="mb-2 mt-4 text-lg font-medium">
                      Vivek Kumar
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      I create interactive, visually appealing web interfaces using HTML, CSS, and JavaScript technologies.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="">
          <NavigationMenuTrigger><Icon icon="clarity:vmw-app-line" width="20" height="20" className="mb-1.5 me-1"/>Sections</NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  icon={<Icon icon={component.icon} className="inline-flex mr-1" width="18" height="18"/>}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/contact">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <Icon icon="mingcute:phone-call-fill" width="20" height="20" className="mb-1.5 me-1" />
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title,icon,href, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          to={href || ""}
          onClick={() => { const element = document.querySelector(`${href}`); element?.scrollIntoView({ behavior: 'smooth' }); }}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{icon}{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

