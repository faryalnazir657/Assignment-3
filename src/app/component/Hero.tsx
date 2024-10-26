
import Image from"next/image"
import image from "../public/image.png";
import pexelsgraphic from "../public/pexelsgraphic.jpeg"
import pexelsimage from "../public/pexelsimage.jpn.jpg"
import pexels from "../public/pexels.jpeg"

const Hero = () => { 

     return (
   
    <div className=' '>
     <section className="items-center">
        <h1 className=" flex items-center justify-center text-6xl p-3 m-4 text-orange-900"> Welcome to my Portfolio</h1><br/>
        <p className="text-center text-lg text-amber-500"> I want to show you my recent work project |</p>
        <div className="flex items-center justify-center h-screen">
       <Image src={image}alt="setching Image" width={300} height={200} className="flex-col-3"></Image>
        </div>
    
        
        </section>    
        <div>

 <h1 className="text-6xl text-center text-amber-800"> About me</h1>
 <p className="text-center text-lg text-amber-500"> "Hello my name is faryal nazir a front-end developer passionate about creating dyarmic and using next React,Next js,and tailwind css <br/>logistics company </p>
 </div>
 
        <div>
         <h1 className="text-6xl text-center p-10 text-amber-800">Skills</h1>
         <ul>
            <li className="text-lg text-center p-6 text-amber-500">website developer</li>
            <li className="text-lg text-center p-6 text-amber-500 ">Graphic designig</li>
            <li className="text-lg text-center p-6 text-amber-500">SEO</li>
            <li className="text-lg text-center p-6 text-amber-500">Wordpress website developer</li>
            <li className="text-lg text-center p-6 text-amber-500">Data antery expert</li>
            <li className="text-lg text-center p-6 text-amber-500">Freelancer</li>
         </ul>
        </div>
       <div>
          <h1 className="text-6xl text-center p-6 text-amber-800">Experience</h1>
           <h1 className="text-lg text-center p-6 text-amber-500"> wordpress website</h1>
           <p className="text-lg text-center p-6 text-amber-500"> created my own website almost working 3 year experience</p>
           <h2 className="text-lg text-center p-6 text-amber-500"> Graphic Designing</h2>
           <p className="text-lg text-center p-6 text-amber-500"> I have experience in Graphic Designing 3 year experience expert</p>
       </div>
    
       <div className="text-center">
         
         <h1 className="text-orange-700 text-lg text-center p-4 font-bold">Website Developer</h1>
      <div className="flex items-center justify-center h-screen">
      <Image src={pexels} alt="website developer" width={500} height={500} className="flex-col-3"></Image>


      </div>
      </div>
      <div className="flex justify-center items-center ">

      </div>
      <Image src={pexelsimage} alt="Seo image" width={500} height={500} className="flex-col-3 block mx-auto" ></Image>
      <h1 className="text-amber-700 text-lg text-center p-4 font-bold">Search engin optimization</h1>
      <div>

      </div>

      <div className="flex items-center justify-center h-screen p-5">

      <div className="p-10 m-5">
      <Image src={pexelsgraphic} alt="Graphics designing" width={500} height={500} className="flex-col-3"></Image>
       <h1 className="text-amber-700 text-lg text-center p-4 font-bold">Graphics Designing</h1>
       
       </div>


       </div>


       </div>


       )
      }
       export default Hero