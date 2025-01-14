import React from 'react'
import useOnlineStatus from '../hooks/useOnlineStatus'

export default function SaveButton() {
  const isOnline = useOnlineStatus()
  
  const handleSaveClick = () => {
    alert('✅ Progress saved');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick} className='border-2 border-y-green-400 rounded-lg px-4 py-1'>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  )
}
