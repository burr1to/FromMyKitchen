import React from "react";

function ErrorBox({ message, onClose }) {
  return (
    <div
      className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex justify-center'
      role='alert'
    >
      <br />
      <span className='block sm:inline'>{message}</span>
      <button
        className='absolute top-0 right-0 mt-1 mr-2'
        onClick={onClose}
      ></button>
    </div>
  );
}

export default ErrorBox;
