'use client';
import Link from "next/link";

import { HiUserGroup } from 'react-icons/hi';

const AdminHomepage = () => {
    return (
        <>
            <AdminHomepageCompoents />
        </>
    );
};

const AdminHomepageCompoents = () => {
    const NavItems = [
        { link: "/dashboard/admin/student", label: "Students", icon: <HiUserGroup className="w-6 h-6 mr-2" /> }, 
    
    ];

    return (
        <>
            <div className=" p-4">
                <h1 className="text-xl font-semibold">Admin Dashboard</h1>
                <div className="mt-4 flex items-center justify-center h-full">
                    {NavItems.map((item, index) => (
                        <NavItemComponent key={index} item={item} />
                    ))}
                </div>
            </div>
        </>
    );
};

const NavItemComponent = ({ item }) => {
    return (
        <div className="flex items-center py-2 px-4 shadow-sm rounded-md bg-white w-40 h-40 hover:bg-green-300 hover:text-white font-bold">
            {item.icon} {/* Render the icon */}
            <Link href={item.link}>
                {item.label}
            </Link>
        </div>
    );
};

export default AdminHomepage;