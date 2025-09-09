import React from 'react'
import ProgressBar from '../Components/ui/ProgressBar'
import { Select } from '@chakra-ui/react'
import { zones } from '../data/zones'
import ReactPlayer from "react-player";

function Visual() {
    const data = [
        {
            data_name: "Total In",
            data_value: 150,
            max: 300,
            severity: 'average'
        },
        {
            data_name: "Total Out",
            data_value: 75,
            max: 300,
            severity: 'bad'
        },
        {
            data_name: "Current Headcount",
            data_value: 75,
            max: 300,
            severity: 'good'
        },
        {
            data_name: "Flow Rate",
            data_value: 1.2,
            unit: "p/m/sec",
            max: 5,
            severity: 'bad'
        },
        {
            data_name: "Density",
            data_value: 3.5,
            unit: `p/m<sup className="text-lg">2<sup>`,
            max: 10,
            severity: 'average'
        }
    ]
    return (
        <div className='space-y-4 p-4 w-full'>

            <div className='flex space-y-4 flex-col'>
                <div className='flex space-x-4'>

                    <div className='p-4 w-full space-y-2 border rounded-lg'>
                        <h1 className='text-xl font-bold'>Filters</h1>
                        <Select placeholder='Select Zone'>
                            {
                                zones.map((zone) => {
                                    return <option>{zone.zone_name}</option>
                                })
                            }
                        </Select>
                    </div>

                <video width="900" height="506" controls autoplay loop muted>
  <source src="/video1.mp4" type="video/mp4" />
  Your browser doesn’t support the video tag.
</video>

                  

   {   /**<ReactPlayer
        src="/videos/result_gadowlia.mp4"
        controls
        width="640px"
        height="360px"
      />*/}

                </div>

                <div className='grid grid-cols-5 gap-4 w-full justify-between'>
                    {
                        data.map((dat) => {

                            return <div className='p-4 space-y-2  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
                                <div className='text-lg font-bold'>{dat.data_name}</div>
                                <div className='text-2xl font-bold'>{dat.data_value}<span>&nbsp;</span><span className='text-xl font-semibold' dangerouslySetInnerHTML={{ __html: dat.unit }}></span></div>
                                <ProgressBar severity={dat.severity} progressValue={(dat.data_value / dat.max) * 100} />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Visual