import React from 'react'
import Benarc from '../../assets/images/Benarc.png'
import Cihp from '../../assets/images/Cihp.png'
import Agl from '../../assets/images/Agl.png'
import Homme from '../../assets/images/Homme.png'
import Bam from '../../assets/images/Bam.png'
import Urban from '../../assets/images/Urban.png'
import Atm from '../../assets/images/Atm.png'
import Metro from '../../assets/images/Metro.png'
import Army from '../../assets/images/Army.png'
import East from '../../assets/images/east.png'
import Button from '../Button'

const RecentCients = () => {
  return (
    <div>
      <div className='w-[792px] h-[140px] mt-[59px] ml-[159px] font-bold text-6xl text-[#424530]'>
       Driving Sustainable Growth For Exceptional Businesses
      </div>

      {/* Clients Logos */}
      <div className='grid grid-cols-5 gap-4 justify-items-center items-center mx-[167px] h-[149px] mt-[100px] '>
        <img src={Benarc} alt="" />
        <img src={Cihp} alt="" />
        <img src={Agl} alt="" />
        <img src={Homme} alt="" />
        <img src={Bam} alt="" />
      </div>

      <div className='grid grid-cols-4 justify-items-center items-center gap-5 mx-[216px] h-[115px] mt-[50px]'>
      <img src={Urban} alt="" />
        <img src={Atm} alt="" />
        <img src={Metro} alt="" />
        <img src={Army} alt="" />
      </div>

      {/* Button */}
      <div className='flex justify-center pb-[100px]'>
        <Button content={'Know More'} BtnStyle={'w-[355px] h-[100px] mt-[200px] bg-[#424531] text-[#FFF0CE] gap-10 font-medium text-3xl '} image={East}/>
      </div>
    </div>
  )
}

export default RecentCients
