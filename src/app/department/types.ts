// types.ts
export interface Department {
    id: string;
    name: string;
    head: string;
    role: string;
    employees: string[];
    children?: Department[];
}
