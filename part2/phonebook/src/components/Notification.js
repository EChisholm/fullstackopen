import React from "react"

const Notification = ({message,messageType}) => {
    const positiveNotificationStyle = {
        color: "green",
        background: "lightgrey",
        fontSize: "20px",
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
    }

    const negativeNotificationStyle = {
        color: "red",
        background: "lightgrey",
        fontSize: "20px",
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
    }
    
    if (message === null) {
        return null
    }
    return (
        <div style={messageType ? positiveNotificationStyle : negativeNotificationStyle}>
            {message}
        </div>
    )
}
export default Notification