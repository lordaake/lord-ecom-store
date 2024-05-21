/** ErrorModal.jsx */

import React from 'react';

const ErrorModal = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 relative w-96">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                >
                    &times;
                </button>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default ErrorModal;

