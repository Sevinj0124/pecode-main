import React, { useState,useEffect } from 'react'
import Card from './Card'
import axios from 'axios'

const ArticlesSection = () => {

  // *Massivin parcalanmasi
//   const [melumatlar,setMelumat] = useState ([])
//   useEffect(()=> {
// axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-04-06&sortBy=publishedAt&apiKey=d51c1f6db7cf432ba832b7c1a5ceb845")
//   .then((xeberler)=> {
// setMelumat(xeberler.data.articles)
//   })
// },[])


  return (
    <div>
<div className="articles-two ">
   <div className="row">
    <div className="col-12 col-md-6">
      <Card kartinShekli="/assets/images/blog1.jpeg" kartinBasligi = "The truth about ReactJS" kartinParaqrafi = " Sigh, it’s like we can’t catch a break. So much has happened over the past happened happened over the past happened....."/>
    </div>
    <div className="col-12 col-md-6">
      <Card kartinShekli="/assets/images/blog2.png" kartinBasligi = "How to solve an unsolvable
conflict " kartinParaqrafi = "Sigh, it’s like we can’t catch a break. So much has happened over the past happened happened over the past happened....."/>
    </div>
   </div>
</div>
<div className="articles-three">
<div className="row">
<div className="col-12 col-md-6 col-lg-4">
<Card kartinShekli="/assets/images/blog3.png"
 kartinBasligi = "The truth about ReactJS"
  kartinParaqrafi = " Sigh, itit’s like we canit’t catch a break. So much has happened over the past......."/> 
</div>
<div className="col-12 col-md-6 col-lg-4">
  <Card kartinShekli="/assets/images/blog4.png" kartinBasligi = "Gaffer. Case Study" kartinParaqrafi = " Sigh, it’s like we can’t catch a break. So much has happened over the past......."/> 
</div>
<div className="col-12 col-md-6 col-lg-4">
  <Card kartinShekli="/assets/images/blog5.png" kartinBasligi = "How to solve an unsolvable
conflict " kartinParaqrafi = "Sigh, it’s like we can’t catch a break. So m....."/> 
</div>
<div className="col-12 col-md-6 col-lg-4">
  <Card kartinShekli="/assets/images/blog6.png" kartinBasligi = "The truth about ReactJS" kartinParaqrafi = "Sigh, it’s like we can’t catch a break. So much has happened over the past......."/> 
</div>
<div className="col-12 col-md-6 col-lg-4">
  <Card kartinShekli="/assets/images/blog7.png" kartinBasligi = "Gaffer. Case Study" kartinParaqrafi = " Sigh, it’s like we can’t catch a break. So much has happened over the past......."/> 
</div>
<div className="col-12 col-md-6 col-lg-4">
  <Card  kartinShekli="/assets/images/blog8.png" kartinBasligi = "How to solve an unsolvable" kartinParaqrafi = " Sigh, it’s like we can’t catch a break. So m...."/>
</div>

</div>
    </div>
    </div>
  )
}

export default ArticlesSection