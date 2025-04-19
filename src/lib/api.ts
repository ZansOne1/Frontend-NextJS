import { API_BASE_URL } from '@/lib/constant';

export async function registerUser(data: {
    username: string;
    email: string;
    password: string;
}) {
    const res = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Register failed');
    }

    return res.json();
}
