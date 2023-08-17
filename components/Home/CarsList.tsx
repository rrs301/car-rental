
import React, { useEffect, useState } from 'react'
import CarCard from './CarCard'
import CarCardSkelton from './CarCardSkelton'

function CarsList(props:any) {
    const [isLoaded,setIsLoaded]=useState(true)
    useEffect(()=>{
        if(props.carsList)
        {
            setIsLoaded(false)
        }
    },[props.carsList])
  return (
    <div className='grid grid-cols-2 
    md:grid-cols-3
    lg:grid-cols-4'>
        {/* <CarCardSkelton/> */}
        {!isLoaded&&props.carsList.map((car:any,index:number)=>(
            <div key={index}>
                <CarCard car={car} />
            </div>
        ))}
        {isLoaded?
        [1,2,3,4,5].map((item)=>(
          <CarCardSkelton/>  
        ))
        :null}
    </div>
  )
}

export default CarsList