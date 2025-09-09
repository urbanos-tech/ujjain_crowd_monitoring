import React from 'react'
import { Box } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation();

    const tabs = [
        {
            title: "Dashboard",
            link: "/"
        },
        {
            title: "Notification and Alerts",
            link: "/notification"
        },
        {
            title: "Zones",
            link: "/zones"
        },
        {
            title: "Visual Validation",
            link: "/visual"
        }
    ]
    const currentloaction = location.pathname;
    const classActive = 'p-2 text-violet-700 cursor-pointer bg-violet-50 rounded-lg';
    const classUnActive = 'p-2 hover:text-violet-700 cursor-pointer hover:bg-violet-50 text-violet-600 rounded-lg'
    return (
        <Box className="bg-opacity-5 z-[1001] border-b p-4 flex justify-between bg-white">
            <div>
                <img src='/logo.webp' className='w-[30px] h-[30px]'/>
            </div>
            {/* <div className='space-x-4'>
                {
                    tabs.map((tab) => {
                        return <Link to={tab.link} className={currentloaction === tab.link ? classActive : classUnActive}>
                            {tab.title}
                        </Link>
                    })
                }
            </div> */}
        </Box>
    )
}

export default Navbar