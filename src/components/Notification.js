import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Notification = () => {

  const showSuccessNotification = (message) => {
    toast.success(message, {
      position: 'top-right',
      autoClose: 3000, // Auto-close the notification after 3 seconds
    });
  };

  // Function to display an error notification
  const showErrorNotification = (message) => {
    toast.error(message, {
      position: 'top-right',
      autoClose: 3000,
    });
  };
  return (
    <ToastContainer />
  )
}

export default Notification