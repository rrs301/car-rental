import React from 'react'

function CarsFiltersOption() {
  return (
    <div className='mt-10 flex items-center justify-between'>
        <div>
            <h2 className='text-[30px] font-bold'>Cars Catalog</h2>
            <h2>Explore our cars you might likes</h2>
        </div>
        <div className='flex gap-5'>
            <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>Price</option>
            <option>Min to Max</option>
            <option>Max to Min</option>
            </select>
            <select className="select 
            select-bordered w-full md:block max-w-xs hidden">
            <option disabled selected>Manufactural</option>
            <option>Honda</option>
            <option>BMW</option>
            <option>Toyoto</option>
            </select>
        </div>
    </div>
  )
}

export default CarsFiltersOption