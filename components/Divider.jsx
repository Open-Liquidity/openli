import Image from 'next/image'
import React from 'react'

const Divider = ({gradient}) => {
  return (
    <div className="py-[100px] relative">
      {gradient && <Image
            src="/gradient.svg"
            alt="gradient"
            width={100}
            height={100}
            className="absolute pointer-events-none w-full h-[100px] object-cover top-0"
          />}
          <div className="absolute w-full flex justify-center">
          <div className=" w-2 h-2 bg-primary rotate-45 -mt-1"></div>
          </div>
      <hr className=" h-[1px] border-none bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>
  )
}

export default Divider