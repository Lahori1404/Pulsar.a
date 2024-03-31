import { UserButton } from "@clerk/nextjs";
import { ArrowRight, Code, ImageIcon, MessagesSquare, Music, VideoIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

const tools = [
    {
        label: "Conversation",
        icon: MessagesSquare,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        href: "/conversation"
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        href: "/imageGeneration"
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        href: "/video"
    },
    {
        label: "Music Generation",
        icon: Music,
        color: "text-yellow-500",
        bgColor: "bg-yellow-500/10",
        href: "/music"
    },
    {
        label: "Code Generation",
        icon: Code,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        href: "/codeGeneration"
    },
]

const DashBoardPage = () => {
    return (
        <div>
            <div className="mb-8 space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold text-center">
                    Experience the realm of AI
                </h2>
                <p className="font-light text-sm md:text-lg text-center">
                    Play with the smartest AI - On your Finger tips
                </p>
            </div>
            <div className="px-4 md:px-20 lg:px-32 flex flex-col space-y-4">
                {
                    tools.map((tool) => (
                        <Link key = {tool.href} href={tool.href}>
                        <Card
                         key={tool.href}
                         className="p-4 border-black/10 flex items-center justify-between hover:shadow-lg transition cursor-pointer">
                            <div className="flex items-center gap-x-4">
                                <div className= {cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                    <tool.icon className={cn("w-8 h-8 ", tool.color)}/>
                                </div>
                                <div className="font-semibold">
                                    {tool.label}
                                </div>
                            </div>
                            <ArrowRight className="w-5 h-5"/>
                         </Card>
                         </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default DashBoardPage;