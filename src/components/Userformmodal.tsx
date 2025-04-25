'use client';

import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Button } from '@/components/Button';
type User = {
    id: number;
    username: string;
    email: string;
};
interface UserFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (user: User) => void;
    initialData?: User;
}

export default function UserFormModal({ isOpen, onClose, onSubmit, initialData }: UserFormModalProps) {
    const [formData, setFormData] = useState<User>({ id: 0, username: '', email: '' });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ id: 0, username: '', email: '' });
        onClose();
    };

    return (
        <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-30 p-4">
                <Dialog.Panel className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
                    <Dialog.Title className="text-lg font-semibold mb-4">
                        {formData.id ? 'Edit User' : 'Add User'}
                    </Dialog.Title>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="w-full border px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="flex justify-end gap-2">
                            <Button type="button" onClick={onClose} variant="outline">Cancel</Button>
                            <Button type="submit" variant="default">{formData.id ? 'Update' : 'Add'}</Button>
                        </div>
                    </form>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
}
