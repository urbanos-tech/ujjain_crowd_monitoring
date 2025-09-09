import React from 'react';

const ZoneCard = ({ zone }) => {
    // Determine the Tailwind class for severity
    const severityClass = {
        Low: 'bg-green-200 text-green-800',
        Medium: 'bg-yellow-200 text-yellow-800',
        High: 'bg-orange-200 text-orange-800',
        Critical: 'bg-red-200 text-red-800',
    };

    return (
        <div className='p-4 w-[400px]'>
            <div className="w-full rounded overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white p-2">
                <h3 className="text-xl font-bold mb-2">{zone.zone_name}</h3>
                <p className="text-gray-700"><strong>Density:</strong> {zone.density}</p>
                <p className="text-gray-700"><strong>Headcount:</strong> {zone.headcount}</p>
                <p className="text-gray-700"><strong>Flow Rate:</strong> {zone.flow_rate}</p>
                <button className='text-normal text-blue-600 hover:text-blue-800 p-1 rounded-lg '>See More...</button>
            </div>
        </div>
    );
};

export default ZoneCard;
