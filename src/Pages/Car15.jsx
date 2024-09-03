import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import arrow from '/MyLandingPageProjects/CarRental/src/assets/icons/arrow.png'
import BrownCar from '/MyLandingPageProjects/CarRental/src/assets/cars/BrownCar.png'

function Car15() {

  return (
    <>


    <div className='flex flex-col md:flex-row items-center justify-center'>
      <div id="box-image" className='flex flex-col items-center gap-4'>
        <img className='mt-10' src={BrownCar}  width={500}/>
        <span className='text-black dark:text-white font-extrabold text-4xl'>Brown Car</span>
        <p className="text-black dark:text-white font-bold text-2xl text-center">12 500$</p>
        <button className='bg-orange-400 p-2 hover:bg-orange-600 rounded-2xl text-white font-bold text-2xl'>تقديم الطلب</button>
      </div>

      <Link to='/Home' className='bg-green-400 p-2 mt-28 hover:bg-green-600 text-white flex flex-row-reverse gap-3 rounded-2xl'>
<button className='text-xl'>رجوع</button>
<img src={arrow} width={20} />
</Link>
    </div>

    </>
  )
}

export default Car15
