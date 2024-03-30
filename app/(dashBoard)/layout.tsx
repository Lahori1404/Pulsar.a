import NavBar from "@/components/navBar";
import Sidebar from "@/components/sideBar";
const DashboardLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
            <div className="h-full relative">
                <div className="hidden h-full md:flex md:w-80 md:flex-col
                 md:fixed md:inset-y0 z-[80]">
                    <Sidebar/>
                 </div>
                 <main className="md:pl-80">
                    <NavBar/>
                    {children}
                 </main>
            </div>
    )
}

export default DashboardLayout;