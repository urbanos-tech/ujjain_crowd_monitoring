import React from 'react'
import { notifications } from '../data/notifications';
import { Button } from '@chakra-ui/react';

function Notification() {
  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high':
        return '#ff4d4d'; // Red
      case 'medium':
        return '#ffa64d'; // Orange
      case 'low':
        return '#4dff88'; // Green
      default:
        return '#ccc'; // Gray
    }
  };

  return (
    <div className='w-full' style={{ padding: '20px' }}>
      <h2 className='text-2xl'>Notifications</h2>
      {notifications.map(notification => (
        <div
        className='space-y-4'
          key={notification.id}
          style={{
            borderLeft: `5px solid ${getSeverityColor(notification.severity)}`,
            padding: '10px',
            margin: '10px 0',
            backgroundColor: '#f9f9f9',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div>
            <p><strong>{notification.message}</strong></p>
            <p style={{ fontSize: '12px', color: '#888' }}>{new Date(notification.timestamp).toLocaleString()}</p>
          </div>
          <Button colorScheme='teal' size='md'>Send Alert</Button>
        </div>
      ))}
    </div>
  )
}

export default Notification