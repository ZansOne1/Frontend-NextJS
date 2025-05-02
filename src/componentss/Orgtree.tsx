// components/OrgChart/OrgTree.tsx
import DepartmentCard from "./Departmentcard";
// import Department from "../app/department/types";

interface Department {
    id: string;
    name: string;
    head: string;
    role: string;
    employees: string[];
    children?: Department[];
}
export default function OrgTree({ data }: { data: Department }) {
    return (
        <div className="flex flex-col items-center">
            <DepartmentCard {...data} />
            {data.children && data.children.length > 0 && (
                <>
                    {/* Connector Line */}
                    <div className="w-px h-6 bg-gray-400" />
                    {/* Child departments horizontally */}
                    <div className="flex space-x-8 mt-2 relative">
                        {data.children.map((child: any) => (
                            <div key={child.id} className="flex flex-col items-center">
                                <OrgTree data={child} />
                            </div>
                        ))}
                        {/* Horizontal Line Between Children */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gray-400"></div>
                    </div>
                </>
            )}
        </div>
    );
}
