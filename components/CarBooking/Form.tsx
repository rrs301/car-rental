import { BookCreatedFlagContext } from "@/context/BookCreatedFlagContext";
import {  createBooking, getStoreLocations } from "@/services";
import { useUser } from "@clerk/nextjs";
import React, { useContext, useEffect, useState } from "react";

function Form({car}:any) {
  const [storeLocation, setStoreLocation] = useState<any>([]);
  const {showToastMsg,setShowToastMsg}=useContext(BookCreatedFlagContext)
  const [formValue,setFormValue]=useState({
    location:'',
    pickUpDate:'',
    dropOffDate:'',
    pickUpTime:'',
    dropOffTime:'',
    contactNumber:'',
    userName:'Rahul Sanap',
    carId: ""
  })

  const today: any = new Date();
  useEffect(() => {
    getStoreLocation_();
  }, []);

  useEffect(()=>{
    if(car)
    {
      setFormValue({
        ...formValue,
        carId: car.id
      });
    }
  },[car])
  const getStoreLocation_ = async () => {
    const resp: any = await getStoreLocations();
    setStoreLocation(resp?.storesLocations);
  };

  const handleChange=(event:any)=>{
    setFormValue({
      ...formValue,
      [event.target.name]:event.target.value
    });
  }

  const handleSubmit=async()=>{
    console.log(formValue);
    const resp=await createBooking(formValue);
    console.log(resp);
    if(resp)
    {
      setShowToastMsg(true);
    }
  }

  return (
    <div>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">PickUp Location</label>
        <select className="select 
        select-bordered w-full max-w-lg"
        name="location" 
        onChange={handleChange}
       >
          <option disabled selected>
            PickUp Location?
          </option>
          {storeLocation &&
            storeLocation.map((loc: any, index: number) => (
              <option key={index}>{loc?.address}</option>
            ))}
        </select>
      </div>
      <div className="flex flec-col gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Pick Up Date</label>
          <input
            type="date"
            min={today}
            onChange={handleChange}
            placeholder="Type here"
            name="pickUpDate"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Drop Off Date</label>
          <input
            type="date"
            onChange={handleChange}
            placeholder="Type here"
                name="dropOffDate"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>
      <div className="flex gap-5 ">
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Pick Up Time</label>
          <input
            type="time"
            onChange={handleChange}
            name="pickUpTime"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Drop Off Time</label>
          <input
            type="time"
            name="dropOffTime"
            onChange={handleChange}
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>

      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Contact Number</label>
        <input
          type="text"
          placeholder="Type here"
          onChange={handleChange}
          name="contactNumber"
          className="input input-bordered w-full max-w-lg"
        />
      </div>
      <div className="modal-action">
        <button className="btn">Close</button>
        <button
          className="btn bg-blue-500 text-white
hover:bg-blue-800"
            onClick={handleSubmit}
        >
          Save
        </button>
      </div>
      
    </div>
  );
}

export default Form;
