import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

const UpdateCoffee = () => {
  const coffee = useLoaderData()
  const  { _id, name, quantity, supplier, taste, category, details, photo} = coffee

  const handleUpdateCoffee = event => {
    event.preventDefault()

    const form = event.target 

    const name = form.name.value 
    const quantity = form.quantity.value 
    const supplier = form.supplier.value 
    const taste = form.taste.value 
    const category = form.category.value 
    const details = form.details.value 
    const photo = form.photo.value 

    const updatedCoffee = {name, quantity, supplier, taste, category, details, photo}
    console.log(updatedCoffee);
    
   

    // send data to the server 
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedCoffee)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount) {
        Swal.fire({
          title: 'Success',
          text: 'Coffee updated successfully ',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
      
    })
    
    
  }
   


  return (
    <div className='bg-slate-300 p-7'>
    <h2 className='text-3xl font-bold'>Update Coffee {name}</h2>

<form onSubmit={handleUpdateCoffee}>
{/* form name and quantity row */}
    <div className='md:flex gap-5'> 
      <div className='form-control md:w-1/2'>
        <label className='label'>
          <span className='label-text'>Name</span>
        </label>
        <label className='input-group'>
          
          <input type="text" name="name" defaultValue={name} placeholder='coffee name' className='input input-bordered w-full' id="" />
        </label>

      </div>

      <div className='form-control md:w-1/2'>
        <label className='label'>
          <span className='label-text'>Available Quantity</span>
        </label>
        <label className='input-group'>
        
          <input type="text" name="quantity" defaultValue={quantity} placeholder='Available Quantity' className='input input-bordered w-full'  id=""  />
        </label>

      </div>
    </div>
{/* form row */}
    <div className='md:flex gap-5'> 
      <div className='form-control md:w-1/2'>
        <label className='label'>
          <span className='label-text'>Supplier Name</span>
        </label>
        <label className='input-group'>
          
          <input type="text" name="supplier" defaultValue={supplier} placeholder='Supplier name' className='input input-bordered w-full' id="" />
        </label>

      </div>

      <div className='form-control md:w-1/2'>
        <label className='label'>
          <span className='label-text'>Taste</span>
        </label>
        <label className='input-group'>
        
          <input type="text" name="taste" defaultValue={taste} placeholder='taste' className='input input-bordered w-full'  id=""  />
        </label>

      </div>
    </div>
{/* form category and details row */}
    <div className='md:flex gap-5'> 
      <div className='form-control md:w-1/2'>
        <label className='label'>
          <span className='label-text'>Category</span>
        </label>
        <label className='input-group'>
          
          <input type="text" name="category" defaultValue={category} placeholder='category' className='input input-bordered w-full' id="" />
        </label>

      </div>

      <div className='form-control md:w-1/2'>
        <label className='label'>
          <span className='label-text'>Details</span>
        </label>
        <label className='input-group'>
        
          <input type="text" name="details"  defaultValue={details} placeholder='details' className='input input-bordered w-full'  id=""  />
        </label>

      </div>
    </div>
{/* form photo url row */}
    <div className='md:flex gap-5'> 
      <div className='form-control w-full'>
        <label className='label'>
          <span className='label-text'>Photo URS</span>
        </label>
        <label className='input-group'>
          
          <input type="text" name="photo" defaultValue={photo} placeholder='Photo URS' className='input input-bordered w-full' id="" />
        </label>

      </div>
    </div>
    <input type="submit" value="Update Coffee" className='btn btn-block my-8 bg-purple-400' />
  </form>
</div>
  )
}

export default UpdateCoffee