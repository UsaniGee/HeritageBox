import React from 'react'
import Gwarimpa from '/assets/Gwarimpa.jpg'
import Sheriff from '/assets/Sheriff.jpg'
import Cfo from '/assets/Cfo.jpg'
import Button from '../Button'
import Vector from '/assets/Vector.png'

const FeaturedProject = () => {
  return (
    <div className='bg-[#424530] px-[100px] py-[118px]'>
      {/* Header */}
      <div>
        <div className='w-[465px] h-[70px] text-[#FFF0CE] text-5xl font-bold'>Featured Project</div>
        <p className='w-[337px] h-[36px] font-medium mt-[47px] text-xl text-[#FFFFFF]'>Over 1500 Projects completed</p>
      </div>

      {/* Images */}
      <div className='flex gap-10'>
        <div ><img className='w-[465px] h-[550px] rounded-[30px] object-cover' src={Gwarimpa} alt="" /></div>
        <div ><img className='w-[465px] h-[550px] rounded-[30px] object-cover' src={Sheriff} alt="" /></div>
        <div ><img className='w-[465px] h-[550px] rounded-[30px] object-cover' src={Cfo} alt="" /></div>
      </div>

      <div className='flex justify-center'>
      <Button content={'See more projects'} image={Vector} BtnStyle={'w-[280px] h-[70px]'}/>
      </div>
    </div>
  )
}

export default FeaturedProject
