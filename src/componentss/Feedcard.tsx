// app/(main)/page.tsx
import Topbar from '@/componentss/Topbar2'
import RightSidebar from '@/componentss/Rightsidebar'
import MainFeed from '@/componentss/Mainfeed'
import QuickActionBar from './Quickactionbar'

export default function FeedPage() {
    return (
        <div className="flex min-h-screen bg-gradient-to-b from-purple-400 to-purple-600 text-shadow-white text-white">
            <div className="flex flex-col w-full h-screen overflow-auto custom-scroll">
                <div className="flex flex-1">
                    <main className="flex-1 p-4">
                        <Topbar />
                        <MainFeed />
                    </main>
                    <RightSidebar />
                </div>
            </div>
            <QuickActionBar />
        </div>
    )
}
