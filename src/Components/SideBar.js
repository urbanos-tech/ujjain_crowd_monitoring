import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoHomeSharp } from "react-icons/io5";
import { icon } from 'leaflet';
import { IoIosNotifications } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { FaMap } from "react-icons/fa6";

const Sidebar = () => {
    const location = useLocation();
    const tabs = [
        {
            title: "Dashboard",
            link: "/",
            icon: <IoHomeSharp></IoHomeSharp>
        },
        {
            title: "Notification and Alerts",
            link: "/notification",
            icon: <IoIosNotifications />
        },
        {
            title: "Zones",
            link: "/zones",
            icon: <FaMap />,
        },
        {
            title: "Visualization",
            link: "/visual",
            icon: <FaVideo />
        }
    ]
    const currentloaction = location.pathname;
    const classActive = 'p-2 flex rounded-lg items-center space-x-4 text-violet-700 cursor-pointer bg-violet-200';
    const classUnActive = 'p-2 flex rounded-lg items-center space-x-4 hover:text-violet-700 cursor-pointer hover:bg-violet-200 text-violet-600'
    return (
        <div className="h-screen sticky top-0 left-0 w-[350px] bg-white text-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] border-black">
            {/* Navigation Links */}
            <div className='space-y-2 p-2 flex flex-col border-b border-black'>
                <h1 className='text-xl font-bold'>Menu</h1>
                {
                    tabs.map((tab) => {
                        return <Link to={tab.link}>
                            <div className={currentloaction === tab.link ? classActive : classUnActive}><span className='text-2xl'>{tab.icon}</span><span>{tab.title}</span></div>
                        </Link>
                    })
                }
            </div>
            <div className="py-2">
                <h1 className='px-2 text-xl font-bold'>Current Situation</h1>
                <div className="flex flex-col">
                    <div className="px-4 py-2 border-b flex w-full justify-between">
                        <h2 className="text-lg font-semibold text-gray-700">Total In</h2>
                        <p className="text-lg font-bold text-green-600">150</p>
                    </div>
                    <div className="px-4 py-2 border-b flex w-full justify-between">
                        <h2 className="text-lg font-semibold text-gray-700">Total Out</h2>
                        <p className="text-lg font-bold text-green-600">75</p>
                    </div>
                    <div className="px-4 py-2 border-b flex w-full justify-between">
                        <h2 className="text-lg font-semibold text-gray-700">Headcount</h2>
                        <p className="text-lg font-bold text-green-600">75</p>
                    </div>
                    <div className="px-4 py-2 border-b flex w-full justify-between">
                        <h2 className="text-lg font-semibold text-gray-700">Density</h2>
                        <p className="text-lg font-bold text-green-600">3.2 p/m<sup>2</sup></p>
                    </div>
                    <div className="px-4 py-2 border-b flex w-full justify-between">
                        <h2 className="text-lg font-semibold text-gray-700">Flow rate</h2>
                        <p className="text-lg font-bold text-green-600">1.5 p/m/s</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
