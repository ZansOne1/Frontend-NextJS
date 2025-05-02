// components/OrgChart/DepartmentCard.tsx
import React from 'react';

export default function DepartmentCard({ name, head, role, employees }: {
    name: string;
    head: string;
    role: string;
    employees: string[];
}) {
    return (
        <div className="bg-white border shadow-md p-3 rounded-lg text-center w-56">
            <h3 className="font-semibold text-blue-800">{name}</h3>
            <p className="text-sm text-gray-700 mt-1">{head}</p>
            <p className="text-xs text-gray-500">{role}</p>
            <div className="mt-2 flex justify-center -space-x-1">
                {employees.map((emp, idx) => (
                    <img key={idx} src={emp} alt="employee" className="w-6 h-6 rounded-full border-2 border-white" />
                ))}
            </div>
        </div>
    );
}
