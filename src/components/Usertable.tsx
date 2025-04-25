'use client';

import React, { useMemo, useState } from 'react';
import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    flexRender,
    ColumnDef,
} from '@tanstack/react-table';
import { Button } from '@/components/Button';
import { Eye, Pencil, Plus, Trash2 } from 'lucide-react';

type User = {
    id: number;
    username: string;
    email: string;
};

interface UserTableProps {
    data?: User[];
    onEdit: (user: User) => void;
    onDelete: (id: number) => void;
    onDetail: (user: User) => void;
    onAdd: () => void;
}

export default function UserTable({ data = [], onEdit, onDelete, onDetail, onAdd }: UserTableProps) {
    const [globalFilter, setGlobalFilter] = useState('');

    const columns = useMemo<ColumnDef<User>[]>(() => [
        { accessorKey: 'no', header: 'NO', cell: ({ row }) => row.index + 1, },
        { accessorKey: 'username', header: 'Username' },
        { accessorKey: 'email', header: 'Email' },
        { accessorKey: 'created_date', header: 'Created Date' },
        {
            id: 'actions',
            header: 'Actions',
            cell: ({ row }) => (
                <div className="space-x-2 text-center flex justify-center">
                    <Button onClick={() => onDetail(row.original)} variant="green" title="Detail">
                        <Eye className="w-4 h-4" />
                    </Button>
                    <Button onClick={() => onEdit(row.original)} variant="warning" title="Edit">
                        <Pencil className="w-4 h-4" />
                    </Button>
                    <Button onClick={() => onDelete(row.original.id)} variant="destructive" title="Delete">
                        <Trash2 className="w-4 h-4" />
                    </Button>
                </div>
            ),
        }

    ], [onEdit, onDelete, onDetail]);

    const table = useReactTable({
        data,
        columns,
        state: { globalFilter },
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <div className="p-3 bg-white rounded-lg">
            <h1 className="text-xl font-bold mb-4">User Management</h1>
            <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
                <div className="flex items-center gap-2">
                    <label htmlFor="pageSize" className="text-sm text-gray-600">Show</label>
                    <select
                        id="pageSize"
                        className="border border-gray-300 bg-white shadow-sm rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        value={table.getState().pagination.pageSize}
                        onChange={(e) => table.setPageSize(Number(e.target.value))}
                    >
                        {[5, 10, 25, 50, 100].map(size => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                    <span className="text-sm text-gray-600">entries</span>
                </div>

                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="🔍 Search user..."
                        className="px-4 py-2 border bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-xs"
                        value={globalFilter}
                        onChange={(e) => setGlobalFilter(e.target.value)}
                    />
                    <Button className="w-1/2 flex items-center gap-1" onClick={onAdd} variant="default">
                        <Plus className="w-4 h-4" />
                        Add User
                    </Button>
                </div>
            </div>


            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="min-w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-gray-200 text-gray-700 uppercase text-xs font-semibold">
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <th
                                        key={header.id}
                                        className={`p-3 border-b border-gray-300 ${header.id === 'actions' ? 'text-center' : 'text-left'
                                            }`}
                                    >
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>

                    <tbody>
                        {table.getRowModel().rows.map((row, i) => (
                            <tr key={row.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50 hover:bg-gray-100'}>
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id} className="p-3 border-b border-gray-200">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        {table.getRowModel().rows.length === 0 && (
                            <tr>
                                <td colSpan={columns.length} className="text-center p-4 text-gray-500">
                                    No data found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>

            <div className="flex items-center justify-between mt-4 gap-4 flex-wrap">
                <Button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    variant="outline"
                >
                    ⬅ Prev
                </Button>

                <span className="text-sm text-gray-600">
                    Page{' '}
                    <select
                        className="border border-gray-300 bg-white shadow-sm rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        value={table.getState().pagination.pageIndex}
                        onChange={(e) => table.setPageIndex(Number(e.target.value))}
                    >
                        {Array.from({ length: table.getPageCount() }, (_, i) => (
                            <option key={i} value={i}>
                                {i + 1}
                            </option>
                        ))}
                    </select>{' '}
                    of <strong>{table.getPageCount()}</strong>
                </span>

                <Button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    variant="outline"
                >
                    Next ➡
                </Button>
            </div>


        </div>
    );
}
