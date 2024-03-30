import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import SideBar from "@/components/sideBar";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
const MobileSideBar = () => {
    return (
        <Sheet>
        <SheetTrigger>
            <Button variant="ghost" size="icon" className="md:hidden">
                <Menu/>
            </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
            <SideBar/>
        </SheetContent>
        </Sheet>
    )
}

export default MobileSideBar;