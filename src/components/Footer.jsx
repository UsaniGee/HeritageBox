import React from 'react'
import Logo from '../assets/images/Logo-Primary.png'
const Footer = () => {
  return (
    <div className='bg-[#FFF0CE] pt-[57px]'>

      {/* Footer Top */}
      <div className='flex justify-between pb-[58px] border-b-2 border-b-[#424530] px-[100px]'>
        {/* Logo */}
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className='w-[446px] h-[72px] font-medium text-2xl'>
          “Those who solve tomorrow’s problems today will always be ahead.”
        </div>
      </div>

      {/* Footer middle */}
      <div className='px-[100px] flex gap-10 py-5'>
        
        {/* First Section */}
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatem laborum voluptatum! Illum sint quis optio dignissimos iste consectetur doloribus.</div>
        
        {/* Second section */}
        <div className='space-y-2'>
          <div>Lorem</div>
          <div>Lorem</div>
          <div>Lorem</div>
          <div>Lorem</div>
          <div>Lorem</div>
          <div>Lorem</div>
          <div>Lorem</div>
        </div>
       
       {/* Third section */}
        <div className='flex gap-3'>

          <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora odit nemo voluptas quae doloremque natus illo repellat atque temporibus vero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, molestias.</div>
          <div className='flex flex-col gap-5'>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, doloremque!</div>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, doloremque!</div>
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div className='bg-[#424530] px-[100px] py-5 flex justify-center text-white '>
        <div>
         Copyright © Heritage Box 2024. All Rights Reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer
