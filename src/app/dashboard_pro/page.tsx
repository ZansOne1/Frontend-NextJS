import Sidebar from "@/components/Sidebarpro";
import Topbar from "@/components/Topbarpro";
import Topbarpro2 from "@/components/Topbarpro2";
import Feed from "@/components/Feedpro";
import RightPanel from "@/components/Rightpanelpro";

export default function DashboardPage() {
    return (
        <div className="flex h-screen bg-gradient-to-br from-purple-200 to-purple-400 text-gray-800 ">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Topbar />
                <div className="flex flex-1 overflow-y-auto">
                    <main className="flex-1 p-4 overflow-y-auto">
                        <Topbarpro2 />
                        <Feed />
                    </main>
                    <RightPanel />
                </div>
            </div>
        </div>
    );
}
// app/page.tsx
// import Layout from "@/componentss/Layout";
// import FeedCard from "@/componentss/Feedcard";

// export default function HomePage() {
//     return (
//         <Layout>
//             <FeedCard />
//         </Layout>
//     );
// }

