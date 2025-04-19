'use client';

import { useState } from "react";
import Swal from 'sweetalert2';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { API_BASE_URL } from '@/lib/constant';
import Link from "next/link";

const RegisterForm = () => {
    const [passwordStrength, setPasswordStrength] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // toggle handler
    const togglePassword = () => setShowPassword(prev => !prev);
    const toggleConfirmPassword = () => setShowConfirmPassword(prev => !prev);

    const checkPasswordStrength = (password: string) => {
        const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        const mediumRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*\d))|((?=.*[A-Z])(?=.*\d))).{8,}$/;

        if (strongRegex.test(password)) return "kuat";
        else if (mediumRegex.test(password)) return "sedang";
        else return "lemah";
    };
    const getPasswordStrengthPercent = (password: string) => {
        let score = 0;
        if (password.length >= 8) score += 1;
        if (/[a-z]/.test(password)) score += 1;
        if (/[A-Z]/.test(password)) score += 1;
        if (/\d/.test(password)) score += 1;
        if (/[\W_]/.test(password)) score += 1;

        return (score / 5) * 100;
    };

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));

        if (name === "password") {
            const strength = checkPasswordStrength(value);
            setPasswordStrength(strength);
            setPasswordMatch(value === form.confirmPassword);
        }

        if (name === "confirmPassword") {
            setPasswordMatch(value === form.password);
        }
    };


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        // if (form.password !== form.confirmPassword) {
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Oops...',
        //         text: 'Password tidak cocok!',
        //         confirmButtonColor: '#3085d6',
        //         confirmButtonText: 'Coba Lagi'
        //     });
        //     return;
        // }
        if (form.password.length < 8) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password minimal 8 karakter!',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Coba Lagi'
            });
            return;
        }
        if (!passwordMatch) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password dan konfirmasi tidak cocok!',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Coba Lagi'
            });
            return;
        }

        try {
            const res = await fetch(`${API_BASE_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: form.name,
                    email: form.email,
                    password: form.password
                })
            });

            if (!res.ok) {
                const errorData = await res.json();
                Swal.fire({
                    icon: 'error',
                    title: 'Oopss..',
                    text: 'Gagal daftar:' + (errorData.message ?? res.statusText),
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Coba Lagi'
                });
                return;
                // alert("Gagal daftar: " + (errorData.message ?? res.statusText));
                // return;
            }

            const data = await res.json();
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Pendaftaran berhasil! Silakan login.',
                // confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
            });
            // return;
            // alert("Pendaftaran berhasil! Silakan login.");
            window.location.href = '/login';

        } catch (error) {
            console.error("Error:", error);
            Swal.fire({
                icon: 'error',
                title: 'Oopss..',
                text: 'Terjadi kesalahan. Silakan coba lagi.',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Coba Lagi'
            });
            // alert("Terjadi kesalahan. Silakan coba lagi.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[url('/img/desk-1868498_1920.jpg')] bg-cover bg-center">
            <div className="max-w-md w-full bg-white p-6 rounded shadow-lg border">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Register Account</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium">Nama Lengkap</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                className="w-full border px-3 py-2 pr-10 rounded focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePassword}
                                className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-500 cursor-pointer"
                            >
                                {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                            </button>
                        </div>

                        {form.password && (
                            <div className="mt-2">
                                <div className="h-2 bg-gray-300 rounded">
                                    <div
                                        className={`
                    h-2 rounded transition-all duration-300
                    ${passwordStrength === "kuat" ? "bg-green-500" :
                                                passwordStrength === "sedang" ? "bg-yellow-500" :
                                                    "bg-red-500"
                                            }
                `}
                                        style={{ width: `${getPasswordStrengthPercent(form.password)}%` }}
                                    />
                                </div>
                                <p className={`text-sm mt-1 ${passwordStrength === "kuat" ? "text-green-600" :
                                    passwordStrength === "sedang" ? "text-yellow-600" :
                                        "text-red-600"
                                    }`}>
                                    Password {passwordStrength}
                                </p>
                            </div>
                        )}

                        <p className="text-xs text-red-700 mt-1">
                            Gunakan kombinasi huruf besar, huruf kecil, angka, simbol, dan minimal 8 karakter.⚠️
                        </p>

                    </div>

                    <div>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                className="w-full border px-3 py-2 pr-10 rounded focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            />
                            <button
                                type="button"
                                onClick={toggleConfirmPassword}
                                className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-500 cursor-pointer"
                            >
                                {showConfirmPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                            </button>
                        </div>

                        {form.confirmPassword && !passwordMatch && (
                            <p className="text-sm text-red-600 mt-1">Password tidak cocok</p>
                        )}
                        {form.confirmPassword && passwordMatch && (
                            <p className="text-sm text-green-600 mt-1">Password cocok</p>
                        )}

                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer"
                    >
                        Register
                    </button>
                </form>

                <p className="text-sm text-center mt-4">
                    Sudah punya akun? <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
}
export default RegisterForm;
