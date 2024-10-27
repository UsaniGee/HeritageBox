import React from 'react'
import HeroBg from '/assets/HomeBg.jpg'
import Button from '../components/Button.jsx'
import Vector from  '/assets/Vector.png'
import HardHat from  '/assets/HardHat.png'
import Box from  '/assets/Box.png'
import Overlay from '/assets/Overlay.png'
import Hand from '/assets/hand 1.png'
import RecentCients from '../components/landing Page/RecentCients.jsx'
import OurStrategy from '../components/landing Page/OurStrategy.jsx'
import FeaturedProject from '../components/landing Page/FeaturedProject.jsx'


const Home = () => {
  return (
    <div className=' '>

      {/* First Section */}
      <div className='relative text-[]'>
        {/* image Section */}
        <div className='bg-black h-full'>
          <img className='opacity-45' src={HeroBg} alt="" />
        </div>

        {/* Text Section */}
        <div className='absolute top-[200px] left-[104px]'>
          <p className='w-[309px] h-[36px] top-[320px] font-medium text-xl text-[#FFFFFF]'>
            At Heritage Box, we believe</p>
          <p className='w-[650px] h-[210px] top-[373px] font-bold text-5xl text-[#FFF0CE]'>
          “Those who solve tomorrow’s problems today will always be ahead.”
          </p>
          <p className='w-[600px] h-[108px] top-[623px] font-medium text-xl text-[#FFFFFF]'>
          Picture a world where local brilliance meets global success, where construction ventures don't just survive. We're building it, one venture at a time.
          </p>
        </div>

        {/* Button */}
        <div className='absolute top-[650px] left-[104px] '>
          <Button content={'Who Are We'} image={Vector} BtnStyle='w-[280px] h-[70px] text-xl gap-10'/>
        </div>
      </div>

      {/* Second Section */}
      <div className='flex items-center justify-around bg-[#424530] h-[163px]'>

        {/* Text */}
        <div className='font-bold text-3xl text-[#FFFFFF]'>
          Contractors & Construction Manager Since 1998.
        </div>

        {/* Button */}
        <div className=''>
          <Button content={'See our Projects'} image={Vector} BtnStyle='w-[280px] h-[70px] text-xl gap-10'/>
        </div>
      </div>

      {/* Third Section */}
      <div>
        {/* What we do */}
        <div className='flex justify-around h-[200px] items-center'>
          <p className='w-[358px] h-[70px] font-bold text-5xl text-[#424530]'>What we do</p>
          <p className='w-[421px] h-[36px] font-medium text-xl'>Take a look at what we can do for you.</p>
        </div>
      </div>

      {/* Fourth section */}
      <div className='border grid grid-cols-3 grid-rows-2 font-semibold'>
        <div className='border-2 space-y-10 h-[550px] px-20 pt-[60px]'>
          <img className='w-[64px] h-[64px]' src={HardHat} alt="Hard Hat" />
          <div className='w-[342px] h-[92px] text-3xl'>
            Construction Cost & Transaction Advisory
          </div>
          <div className='flex gap-10 pt-[184px] text-xl'>
            <p className=''>Learn more</p>
            <img className='w-[34px] h-[34px]' src={Vector} alt="" />
          </div>
        </div>    

        <div className='border-2 space-y-10 h-[550px] px-20 pt-[60px]'>
          <img className='w-[64px] h-[64px]' src={HardHat} alt="Hard Hat" />
          <div className='w-[342px] h-[92px] text-3xl'>
            Construction Project Management
          </div>
          <div className='flex gap-10 pt-[184px] text-xl'>
          <p className=''>Learn more</p>
          <img className='w-[34px] h-[34px]' src={Vector} alt="" />
          </div>
        </div>
        
        <div className='border-2 space-y-10 h-[550px] px-20 pt-[60px]'>
          <img className='w-[64px] h-[64px]' src={HardHat} alt="Hard Hat" />
          <div className='w-[248px] h-[46px] text-3xl'>
            Design and Build
          </div>
          <div className='flex gap-10 pt-[230px] text-xl'>
          <p className=''>Learn more</p>
          <img className='w-[34px] h-[34px]' src={Vector} alt="" />
          </div>
        </div>
        
        <div className='border-2 space-y-10 h-[550px] px-20 pt-[60px]'>
          <img className='w-[64px] h-[64px]' src={HardHat} alt="Hard Hat" />
          <div className='w-[293px] h-[46px] text-3xl'>
            Investment Advisory
          </div>
          <div className='flex gap-10 pt-[230px] text-xl'>
          <p className=''>Learn more</p>
          <img className='w-[34px] h-[34px]' src={Vector} alt="" />
          </div>
        </div>
        
        <div className='border-2 space-y-10 h-[550px] px-20 pt-[60px]'>
          <img className='w-[64px] h-[64px]' src={HardHat} alt="Hard Hat" />
          <div className='w-[325px] h-[46px] text-3xl'>
            Business Development
          </div>
          <div className='flex gap-10 pt-[230px] text-xl'>
          <p className=''>Learn more</p>
          <img className='w-[34px] h-[34px]' src={Vector} alt="" />
          </div>
        </div>

        <div className='border-2 h-[550px] flex justify-center items-center'>
          <img className='w-[193.37px] h-[194px]' src={Box} alt="" />
        </div>
      </div>

      {/* Fifth Section */}
      <div className='bg-[#424530] relative -z-10'>
        {/* Background overlay image */}
        <div>
          <img src={Overlay} alt="" />
        </div>

        {/* Background hand image */}
        <div className='absolute bottom-[-39px] right-20 '>
          <img className='w-[600px] h-[800px] -rotate-[10.18deg]' src={Hand} alt="" />
        </div>

        {/* Text and button */}
        <div className='absolute top-[213px] left-[80px]'>
          <div className='w-[700px] h-[210px] font-bold text-5xl text-[#FFF0CE]'>
            Welcome to Heritage Box - where tech meets transformation.
          </div>

          <div className='w-[500px] h-[144px] font-medium text-xl text-[#FFFFFF]'>
          With cutting-edge technology as our foundation, we deliver more than services - we create experiences, drive sustainable growth, and redefine success.
          </div>

          <Button content={'Discuss the project'} image={Vector} BtnStyle={'gap-5 w-[280px] h-[70px] font-medium text-xl text-[#424530] mt-[50px] ml-0'}/>
        </div>
      </div>

      {/* Recent Cliients */}
      <div className='bg-white pt-1'>
       <RecentCients />
      </div>

      {/* Our Strategy */}
      <div className=''>
        <OurStrategy />
      </div>

      {/* Featured Projects */}
      <FeaturedProject />
    </div>
  )
}

export default Home
