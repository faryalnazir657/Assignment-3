
import React from 'react'

const contactfrom = () => {
  return (
    <div className="max-w-lg mx-auto p-4">
        <h1 className="text-3xl font-bol mb-6 text-amber-900"> contact me</h1>
        <form className="space-y-4">
             <div>
                <label className="block text-sm font-medium text-amber-500"htmlFor='name'>Name</label>

                <input type='text'
                
                id="name"
                name="name"
                className="mt-1 block w-full border-gray-500 rounded-md shadow-sm focus:border-indigo-600focus:ring-indigo"
                placeholder="your Name">


                </input>
             </div>
             <div>
             <label className="block text-sm font-medium text-amber-500"htmlFor='email'>Email</label>
             <input type="email"
             id="email"
             name="email"
             className='mr-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo'
             placeholder='youremail.com'></input>

             
             </div>
             <div>
              <label className='block text-sm font-medium text-amber-500 ' htmlFor='message'>Message</label>
              <textarea
               id="message"
               name="message"
               className='mt-1 block w-full border-amber-500 rounded-md shadow-sm focuse:border-indigo-500 focus:ring-indigo'></textarea>

               </div>
               <div>
               <button 
               type="submit"
               className='w-full bg-amber-600 text-amber-300 py-2 px-4 rounded-md hover:bg-amber-400'>
                submit
               </button>
               </div>
           </form>

        </div>

       );
     };
     export default contactfrom