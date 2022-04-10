import React, {useEffect, useState} from 'react'
import axios from 'axios'
import TaskInstance from './TaskInstance'
import AddTask from './AddTask'

export default function AllTasks() {

    const [allTasks, setAllTasks] = useState([])
    const [trigger, setTrigger] = useState(false)

    const triggerUpdate = () =>{
        setTrigger(!trigger)
    }

    useEffect(()=>{
        axios.get('http://localhost:5000/students')
        .then((response)=>{
            setAllTasks(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [trigger])


  return (
    <>
        <div className='container container-fluid' style={{margin: '30px auto'}}>
            <AddTask triggerUpdate={triggerUpdate}  />
        </div>
        <div className='container container-fluid' style={{margin: '30px auto'}}>
            <h4 style={{margin: '20px auto'}}>All Students ({allTasks.length})</h4>
            <div className="row">
                {allTasks.map((e, i)=><TaskInstance triggerUpdate={triggerUpdate} data={e} key={i} />)}
            </div>
        </div>
    </>
    
  )
}
