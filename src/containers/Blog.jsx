import React from 'react'

const Blog = () => {
  return (
    <div className="container py-5">
  <div className="row">
    <div className=" skin-left-sidecol-12 col-md-6">
<img src="/assets/images/girl.svg" alt=""  className='w-100'/>
    </div>
    <div className=" skin-right-side col-12 col-md-6">
<h6>Smooth skin collection</h6>
<h2>For oily face skin</h2>
<p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse Varius enim in eros elementum tristique, duis cursus mi quis viverra ornare, eros dolor interdum nulla ut commodo.</p>
   <div className="shop-now ">
    <button className='shop p-2'>Shop now</button>
    <button className='explore p-2'>Explore more <img src="/assets/icons/sagox.svg" alt="" /></button>
   </div>
    </div>
  </div>
    </div>
  )
}

export default Blog