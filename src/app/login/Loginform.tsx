"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { API_BASE_URL } from '@/lib/constant';
import { SECRET_KEY } from '@/lib/constant';
import CryptoJS from "crypto-js";

export default function LoginForm() {
    const router = useRouter();
    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        // console.log(form);
        const encryptedPassword = CryptoJS.AES.encrypt(form.password, SECRET_KEY).toString();

        const payload = {
            email: form.email,
            password: encryptedPassword,
        };
        const res = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        const data = await res.json();
        // console.log(data);
        // process.exit();

        if (res.ok) {
            // Simpan token (sementara pakai localStorage)
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', data.user.username);
            localStorage.setItem('email', data.user.email);
            router.push('/dashboard');
        } else {
            setError(data.message || 'Login gagal');
        }
    };
    return (
        <form
            onSubmit={handleLogin}
            className="bg-white border p-6 rounded shadow-lg w-100 space-y-4"
        >
            <h2 className="text-3xl text-center font-semibold mb-6 text-black">Login to ProjectTask</h2>
            {error && (
                <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-4">
                    <svg
                        className="w-5 h-5 mt-0.5 text-red-500 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01M12 5.5a7.5 7.5 0 110 15 7.5 7.5 0 010-15z"
                        />
                    </svg>
                    <span>{error}</span>
                </div>
            )}

            <input
                type="email" name="email" placeholder="Email" onChange={handleChange}
                className="w-full mb-3 px-3 py-2 border rounded" required
            />
            <input
                type="password" name="password" placeholder="Password" onChange={handleChange}
                className="w-full mb-3 px-3 py-2 border rounded" required
            />
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer"
            >
                Login
            </button>
            <Link href="/" passHref>
                <button
                    type="button"
                    className="w-full bg-green-500 text-white py-2 rounded hover:bg-gray-500 cursor-pointer"
                >
                    Home
                </button>
            </Link>
            {/* <div className="fixed top-4 right-4 z-50 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded shadow-md">
                <strong className="font-bold">Register!</strong>
                <span className="block sm:inline"> Link pendaftaran telah dikirim ke email kamu.</span>
            </div> */}
            <Link href="/register" passHref>
                <button className="fixed top-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 cursor-pointer">
                    Create Account +
                </button>
            </Link>
        </form>

    );
}
