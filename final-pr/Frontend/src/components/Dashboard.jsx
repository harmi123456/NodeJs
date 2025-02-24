import React from 'react'

export default function Dashboard() {
    
    return (
        <div>
            <h1>Dashboard</h1>


            <h1>Add Tasks</h1>

            <form method="post" className="task-form">
                <input type="text" name="name" placeholder="Enter Your Name" required />
                <input type="text" name="subject" placeholder="Enter Subject" required />
                <input type="text" name="city" placeholder="Enter City Name" required />
                <input type="text" name="img" placeholder="Enter Image URL" required />

                <button type="submit" className="submit-btn">Submit</button>
            </form>


        </div>
    )
}
