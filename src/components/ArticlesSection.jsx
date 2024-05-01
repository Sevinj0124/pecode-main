import React from 'react'
import Card from './Card'

const ArticlesSection = () => {
  return (
    <div>
<div className="articles-two">
   <div className="row">
    <div className="col-12 col-md-6">
      <Card kartinShekli="/assets/images/blog1.jpeg" kartinBasligi = "Yeni xeber" kartinParaqrafi = " burada sizin"/>
    </div>
    <div className="col-12 col-md-6">
      <Card kartinShekli="/assets/images/blog2.png" kartinBasligi = "Yeni xeber 2" kartinParaqrafi = " burada sizin"/>
    </div>
    
   </div>
</div>

<div className="articles-three">
</div>
<div className="row">
<div className="col-12 col-md-6 col-lg-4">
  <Card />
</div>
<div className="col-12 col-md-6 col-lg-4">
  <Card />
</div>
<div className="col-12 col-md-6 col-lg-4">
  <Card />
</div>
<div className="col-12 col-md-6 col-lg-4">
  <Card />
</div>
<div className="col-12 col-md-6 col-lg-4">
  <Card />
</div>
<div className="col-12 col-md-6 col-lg-4">
  <Card />
</div>
</div>
    </div>
  )
}

export default ArticlesSection