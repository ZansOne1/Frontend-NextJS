'use client';

import Layout from '@/components/Layout';

export default function DashboardPage() {
    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Selamat datang di Dashboard 🎉
                </h1>
                <p className="text-gray-600 mt-2">
                    Ini adalah halaman utama setelah login berhasil.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                    <div className="p-4 bg-white shadow-md rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-800">Total Projects</h3>
                        <p className="text-gray-600 mt-2">50</p>
                    </div>

                    <div className="p-4 bg-white shadow-md rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-800">Active Tasks</h3>
                        <p className="text-gray-600 mt-2">25</p>
                    </div>

                    <div className="p-4 bg-white shadow-md rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-800">Completed Tasks</h3>
                        <p className="text-gray-600 mt-2">30</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
