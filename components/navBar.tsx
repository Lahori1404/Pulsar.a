import MobileSideBar from "@/components/mobile-sidebar";
import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
const navBar = () => {
    return (
        <div className="flex items-center p-4">
            <MobileSideBar/>
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
    )
}

export default navBar