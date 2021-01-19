import React from "react";

class Greeting extends React.Component {
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        if (hours <=12) {
            timeOfDay = "Morning"
        }
            
        else if (hours > 12 && hours <=19) {
            timeOfDay = "evening"
        }
        else {
            timeOfDay = "night"
        }
        
        return(
            <body>
                <h3> Good {timeOfDay} wishes to you</h3>
            </body>
        )
    }
}
export default Greeting;