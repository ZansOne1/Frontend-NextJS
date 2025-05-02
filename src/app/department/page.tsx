// pages/index.tsx
import OrgTree from "../../componentss/Orgtree";
import { Department } from "./types";

const orgData: Department = {
    id: "1",
    name: "Company24",
    head: "Alex Miller",
    role: "CEO",
    employees: ["/img/user1.png"],
    children: [
        {
            id: "2",
            name: "Finance and Accounting",
            head: "Andrew Baxter",
            role: "Head of Finance",
            employees: ["/img/user2.png", "/img/user3.png"],
            children: [
                {
                    id: "3",
                    name: "Accounting",
                    head: "Norma Porter",
                    role: "Chief Accountant",
                    employees: ["/img/user4.png", "/img/user5.png"],
                },
                {
                    id: "4",
                    name: "Finance",
                    head: "Andrew Baxter",
                    role: "Head of Finance",
                    employees: ["/img/user2.png", "/img/user3.png", "/img/user6.png"],
                }
            ]
        },
        // Tambah department lain seperti HR, Logistics, dll
    ]
};

export default function OrgStructurePage() {
    return (
        <div className="min-h-screen bg-gray-50 p-10 overflow-auto">
            <OrgTree data={orgData} />
        </div>
    );
}
