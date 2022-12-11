import React from 'react';
import './messageModal.css'

const MessageModal = (props) => {
    const {successMessage, errorMessage} = props;
    return (
        <div id="messageModal">
            {successMessage}
            {errorMessage}
        </div>
    )
}

export default MessageModal;