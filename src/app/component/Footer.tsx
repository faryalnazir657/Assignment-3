import { Children } from 'react'

export default function Footer()  {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <h1 className="text-center text-3xl font-bold p-0 text-amber-800">Portfolio</h1>

      </main>

      <footer className='bg-amber-700 text-amber-400 py-5 text-center'>&copy;Faryal Bibi</footer>

     <ul className="flex gap-4 justify-center font-bold bg-amber-700 text-amber-400">

     <li>faryalnazir53@gmail.com</li>
     <li>Linkedin:Faryal Nazir</li>
     <li>Instagram:itx.faryalchaudhary</li>
     </ul>

      
      
    </div>
  )
}

