// components/Layout.tsx
import RightSidebar from "./Rightsidebar";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col bg-[#f5f5f7]">
                <Topbar />
                <main>{children}</main>
                {/* <main className="overflow-auto custom-scroll">{children}</main> */}
            </div>
            {/* <RightSidebar /> */}
        </div>
    );
}
