import React, { useEffect, useState } from 'react'
import axios from "axios"


export default function Dashboard() {

    const [data, setData] = useState([]);

    const [taskName, setTaskName] = useState("");
    const [priority, setPriority] = useState("");
    const [editId, setEditId] = useState(null)


    useEffect(() => {
        FetchApi();
    }, [])

    const FetchApi = async () => {
        const response = await axios.get("http://localhost:4000/viewData")
        console.log(response.data.data)
        setData(response.data.data)
    }

    const addData = async () => {

        if (editId) {
            await axios.put(`http://localhost:4000/updateData?id=${editId}`, { taskName, priority })
            setEditId(null)
        } else {
            await axios.post("http://localhost:4000/addData", { taskName, priority });
        }


        setName("");
        setViews("");
        FetchApi()

    };


    const deleteData = async (id) => {
        console.log("Deleting ID:", id);

        await axios.delete(`http://localhost:4000/deleteData?id=${id}`);
        setData(data.filter((item) => item._id !== id));
    }


    const editData = (id) => {
        let editResponce = data.find((item) => item._id === id)
        setTaskName(editResponce.taskName)
        setPriority(editResponce.priority)
        setEditId(id)
    }


    return (
        <div className="dashboard-container">

            <h1 className="title">Task Manager Dashboard</h1>

            <form onSubmit={addData} className="task-form">

                <input type="text" className="input-field" value={taskName} name="taskName" placeholder="Enter Task Name" onChange={(e) => setTaskName(e.target.value)} required />
                <input type="text" className="input-field" value={priority} name="priority" placeholder="Enter Priority" onChange={(e) => setPriority(e.target.value)} required />

                <button type="submit" className="submit-btn">Submit</button>

            </form>

            {data.length > 0 ? (
                <div className="task-list">
                    {data.map((e, i) => (
                        <div key={i} className="task-card">
                            <h3>{e.taskName}</h3>
                            <p>Priority: {e.priority}</p>
                            <div className="button-group">
                                <button onClick={() => deleteData(e._id)} className="delete-btn">Delete</button>
                                <button onClick={() => editData(e._id)} className="edit-btn">Edit</button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="no-data">No data available.</p>
            )}

        </div>
    )
}
