import React from 'react'

function ProgressBar({ severity,progressValue }) {
    const backgroundColor = severity === 'good' ? '#20c997' : severity === 'average' ? '#17a2b8' : '#e55353';
    return (
        <div class="w-full bg-gray-200 rounded-full h-2.5 ">
            <div class="h-2.5 rounded-full" style={{width: progressValue,backgroundColor:backgroundColor}}></div>
        </div>
    )
}

export default ProgressBar;