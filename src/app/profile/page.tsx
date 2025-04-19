'use client';

import Layout from '@/components/Layout';

export default function ProfilePage() {
    const user = {
        name: 'Fauzan Ramdani Ferdiansyah',
        email: 'zans@gmail.com',
        role: 'Project Manager',
        avatar: '/img/zans.jpeg',
        joined: '16 Desember 1999',
    };

    return (
        <Layout>
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Profil Saya</h1>

                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col sm:flex-row items-center gap-6">
                    <img
                        src={user.avatar}
                        alt="User Avatar"
                        className="w-32 h-32 rounded-full border shadow"
                    />
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
                        <p className="text-gray-600">{user.email}</p>
                        <p className="text-gray-500 text-sm">Role: {user.role}</p>
                        <p className="text-gray-500 text-sm">Bergabung sejak: {user.joined}</p>

                        <div className="mt-4 flex justify-center sm:justify-start gap-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
                                Edit Profil
                            </button>
                            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition">
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
