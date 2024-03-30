"use client";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Code, ImageIcon, LayoutDashboard, MessagesSquare, Music, Settings, VideoIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const monserrat = Montserrat({
    weight: "600",
     subsets: ["latin"]
    });

const routes = [
    {
        label: "DashBoard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500"
    },
    {
        label: "Conversation",
        icon: MessagesSquare,
        href: "/conversation",
        color: "text-violet-500"
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-pink-500"
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "text-orange-700"
    },
    {
        label: "Music Generation",
        icon: Music,
        href: "/music",
        color: "text-yellow-600"
    },
    {
        label: "Code Generation",
        icon: Code,
        href: "/code",
        color: "text-green-700"
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings",
        color: "text-gray-200"
    }
];

const SideBar = () => {
    const pathName = usePathname();
    return(
        <div className="space-y-4 px-3 py-3 text-white h-full bg-gray-900">
            <Link href="\dashboard">
            <div className="flex items-center pl-3 mb-14">
                <div className="relative w-12 h-12 mr-2">
                <Image 
                fill 
                alt="Logo" 
                src = "/pulsarMainIcon.svg"/>
                </div>
                <h1 className= {cn("text-2xl font-bold", monserrat.className)}>Pulsar</h1>
            </div>
            </Link>
            <div className="space-y-1">
                {routes.map((route) => (
                    <Link 
                    href={route.href} 
                    key={route.href}
                    className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-green-200 hover:bg-white/10 rounded-lg transition", pathName == route.href ? "text-white bg-white/10" : "text-zinc-400")}>
                        <div className="flex items-center">
                            <route.icon className= {cn("h-5 w-5 mr-3", route.color)}/>
                            {route.label}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SideBar;