import React from 'react'
import BoyGlobe from '/assets/BoyGlobe.png'
import Vector2 from '/assets/Vector 2.png'

const OurStrategy = () => {
  return (
    <div className='pb-28'>
     <div className='flex flex-col items-center gap-3 pt-[35px]'>
         {/* Header */}
      <div className=' w-[458px] h-[70px] text-center font-bold text-5xl text-[#424531]'>
        Our Strategy
      </div>
      {/* Subheader */}
      <p className='w-[725px] h-[36px] text-center font-medium italic text-xl'>
      “Those who solve tomorrow’s problem today will always be ahead”
      </p>
     </div>

     {/* Image and Main content */}
     <div className='flex pt-[100px] pl-[78px] mr-14'>
        <div>
            <img className='w-[748px] h-[738px] object-cover rounded-2xl' src={BoyGlobe} alt="" />
        </div>
        
        <div className='pl-5'>
            <div>
                <h1 className='w-[343px] h-[43px] font-bold text-4xl mt-5'>Industry Knowledge</h1>
                <p className='w-[721px] h-[216px] font-medium text-xl mt-10'>
                We dive deep into the construction sector, understanding its pulse, predicting its trends. This isn't just about knowing the industry—it's about shaping its future. Our deep insights uncover hidden opportunities, transforming challenges into industry-changing innovations. Your vision, amplified by our expertise.
                We don't just know construction—we shape its future.
                </p>
            </div>

            <div className='flex gap-4 mt-[50px]'>
                <img className='h-[340px]' src={Vector2} alt="" />
                <div className='w-[721px]'>
                    <p className='w-[385px] h-[43px] font-bold text-4xl text-[#055E07]'>Strategic Partnerships</p>
                    <p className='w-[700px] h-[288px] mt-9 font-medium text-xl '>
                        In our world, 1+1 always equals more than 2. We forge alliances that amplify potential, connecting local innovators with global players. These partnerships aren't just about opening doors—they're about building bridges to new markets, technologies, and possibilities. With us, your local venture can make a global impact. <br />
                        Intrigued? This is just the foundation. The real question is: are you ready to build something extraordinary with us?</p>
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default OurStrategy
