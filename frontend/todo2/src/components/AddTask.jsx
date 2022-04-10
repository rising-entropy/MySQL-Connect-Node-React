import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function AddTask(props) {

    const [theSalutation, setTheSalutation] = useState("");
    const [theFName, setTheFName] = useState("");
    const [theLName, setTheLName] = useState("");
    const [theAddress, setTheAddress] = useState("");
    const [theZip, setTheZip] = useState("");
    const [thePhone, setThePhone] = useState("");
    const [theEmployer, setTheEmployer] = useState("");

    

    const formSubmitHandler = (e) => {
        e.preventDefault();
        let body = {
            "salutation": theSalutation,
            "fName": theFName,
            "lName": theLName,
            "address": theAddress,
            "zip": theZip,
            "phone": thePhone,
            "employer": theEmployer
        }
        axios.post('http://localhost:5001/students', body)
        .then((response)=>{
            setTheSalutation("")
            setTheFName("")
            setTheLName("")
            setTheAddress("")
            setTheZip("")
            setThePhone("")
            setTheEmployer("")
            props.triggerUpdate()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  return (
    <div className="container container-fluid text-center" style={{fontSize: '1.5rem'}}>
        <form onSubmit={formSubmitHandler}>
            <div className="row">
                <input onChange={(e)=>{
                    setTheSalutation(e.target.value)
                }} placeholder='Salutation' style={{borderRadius: '30px'}} type="text" value={theSalutation} required/>
            </div>
            <div className="row">
                <input onChange={(e)=>{
                    setTheFName(e.target.value)
                }} placeholder='First Name' style={{borderRadius: '30px'}} type="text" value={theFName} required/>
            </div>
            <div className="row">
                <input onChange={(e)=>{
                    setTheLName(e.target.value)
                }} placeholder='Last Name' style={{borderRadius: '30px'}} type="text" value={theLName} required/>
            </div>
            <div className="row">
                <input onChange={(e)=>{
                    setTheAddress(e.target.value)
                }} placeholder='Address' style={{borderRadius: '30px'}} type="text" value={theAddress} required/>
            </div>
            <div className="row">
                <input onChange={(e)=>{
                    setTheZip(e.target.value)
                }} placeholder='Zip Code' style={{borderRadius: '30px'}} type="text" value={theZip} required/>
            </div>
            <div className="row">
                <input onChange={(e)=>{
                    setThePhone(e.target.value)
                }} placeholder='Phone Number' style={{borderRadius: '30px'}} type="text" value={thePhone} required/>
            </div>
            <div className="row">
                <input onChange={(e)=>{
                    setTheEmployer(e.target.value)
                }} placeholder='Employer' style={{borderRadius: '30px'}} type="text" value={theEmployer} required/>
            </div>
            <div className="row text-center">
                <button style={{width: '180px', margin: '10px auto', borderRadius: '20px', boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px", backgroundColor: '#DFDFDE', }} type="submit">Add</button>
            </div>
        </form>
    </div>
  )
}
