import React from 'react'
import { useState } from 'react';
import HoverButton from '../Components/ui/HoverButton';
import { zones } from '../data/zones';
import ZoneCard from '../Components/cards/ZoneCard';

function Zones() {
    const [currAlertLevel, setCurrAlertLevel] = useState("Low");

    const alert_level = [
        {
            title: "Low",
            color: "green",
        },
        {
            title: "Medium",
            color: "blue"
        },
        {
            title: "High",
            color: "yellow"
        },
        {
            title: "Critical",
            color: "red"
        }
    ];
    return (
        <div className='w-full h-[100vh] bg-gray-50 bg-opacity-10'>
            <div className='px-4 py-4 w-full justify-start flex space-x-2 cursor-pointer'>
                {
                    alert_level.map((level) => {
                        return <HoverButton currAlertLevel={currAlertLevel} level={level} onClick={() => setCurrAlertLevel(level.title)}></HoverButton>
                    })
                }
            </div>
            <div className='flex flex-wrap justify-start w-full'>
                {
                    zones.filter((zone) => zone.severity === currAlertLevel).map((zone) => {
                        return <ZoneCard zone={zone} />
                    })
                }
            </div>
        </div>
    )
}

export default Zones