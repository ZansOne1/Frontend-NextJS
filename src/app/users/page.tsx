'use client';

import React, { useEffect, useState } from 'react';
import UserTable from '../../components/Usertable';
import Layout from '@/components/Layout';
import UserFormModal from '../../components/Userformmodal';
import Swal from 'sweetalert2';

type User = {
    id: number;
    username: string;
    email: string;
};

export default function UserPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState<User | undefined>();
    // console.log(editingUser);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:3001/users/findAll');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleAddOrEdit = async (user: User) => {
        try {
            if (!user.id || user.id === 0) {
                // ADD (POST)
                const response = await fetch('http://localhost:3001/users', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: user.username,
                        email: user.email,
                    }),
                });
                // console.log(response);

                if (!response.ok) {
                    const errorData = await response.json();
                    if (errorData.message?.includes('Email already exists')) {
                        Swal.fire({
                            icon: 'warning',
                            title: 'Duplicate Email',
                            text: 'This email is already registered. Please use a different one.',
                        });
                    } else {
                        throw new Error('Failed to add user');
                    }
                    return;
                }

                const newUser = await response.json();
                setUsers(prev => [...prev, newUser]);

                Swal.fire({
                    icon: 'success',
                    title: 'User added successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                // EDIT (PUT)
                const response = await fetch(`http://localhost:3001/users/${user.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(user),
                });

                if (!response.ok) throw new Error('Failed to update user');

                setUsers(prev => prev.map(u => (u.id === user.id ? user : u)));

                Swal.fire({
                    icon: 'success',
                    title: 'User updated successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
            }

            setModalOpen(false);
            setEditingUser(undefined);
        } catch (error) {
            console.error('Error saving user:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong while saving the user!',
            });
        }
    };
    const handleAdd = () => {
        // setUsers(users);
        setModalOpen(true);
    };
    const handleEdit = (user: User) => {
        setEditingUser(user);
        setModalOpen(true);
    };

    const handleDelete = async (id: number) => {
        const confirm = await Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this user!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
        });

        if (confirm.isConfirmed) {
            try {
                const res = await fetch(`http://localhost:3001/users/${id}`, {
                    method: 'DELETE',
                });

                if (res.ok) {
                    setUsers(prev => prev.filter(u => u.id !== id));
                    Swal.fire('Deleted!', 'User has been deleted.', 'success');
                } else {
                    Swal.fire('Error!', 'Failed to delete user.', 'error');
                }
            } catch (error) {
                console.error('Error deleting user:', error);
                Swal.fire('Error!', 'There was a problem deleting the user.', 'error');
            }
        }
    };


    const handleDetail = async (user: User) => {
        try {
            const res = await fetch(`http://localhost:3001/users/${user.id}`);
            const detail = await res.json();

            Swal.fire({
                title: `<strong>Detail User</strong>`,
                html: `
                    <div class="p-4 rounded-xl bg-blue-50 shadow-md text-sm text-gray-700 space-y-2">
                        <div class="flex justify-between">
                        <span class="font-semibold">ID:</span>
                        <span>${detail.id}</span>
                        </div>
                        <div class="flex justify-between">
                        <span class="font-semibold">Username:</span>
                        <span>${detail.username}</span>
                        </div>
                        <div class="flex justify-between">
                        <span class="font-semibold">Email:</span>
                        <span>${detail.email}</span>
                        </div>
                        <div class="flex justify-between">
                        <span class="font-semibold">Created:</span>
                        <span>${new Date(detail.created_date).toLocaleString()}</span>
                        </div>
                    </div>
`,
                icon: 'info',
                confirmButtonText: 'Close',
                customClass: {
                    popup: 'rounded-lg shadow-md',
                }
            });
        } catch (error) {
            console.error('Error fetching user detail:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to fetch user details.',
            });
        }
    };


    return (
        <Layout>
            {loading ? (
                <div className="flex flex-col items-center justify-center h-60">
                    <svg
                        className="animate-spin h-10 w-10 text-blue-500 mb-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                    </svg>
                    <p className="text-gray-600 text-sm">Please wait, loading data...</p>
                </div>

            ) : (
                <UserTable
                    data={users}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onDetail={handleDetail}
                    onAdd={handleAdd}
                />
            )}
            <UserFormModal
                isOpen={modalOpen}
                onClose={() => {
                    setModalOpen(false);
                    setEditingUser(undefined);
                }}
                onSubmit={handleAddOrEdit}
                initialData={editingUser}
            />
        </Layout>
    );
}
