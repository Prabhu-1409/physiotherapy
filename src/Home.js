import React from 'react'
import './Styling.css'
import { Carousel } from 'react-responsive-carousel'
import { Slider } from 'infinite-react-carousel';


function Home() {

    const settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        className: "slide_box",
        dots: true,
        virtualList: true,
        duration: 20,
        arrows:true,
        
      };
    const data = [
        {
            image:"https://depositphotos-blog.s3.eu-west-1.amazonaws.com/uploads/2017/07/Soothing-nature-backgrounds-2-1024x684.jpg"
        },
        {
            image:'https://depositphotos-blog.s3.eu-west-1.amazonaws.com/uploads/2024/07/vincent-van-zalinge-vUNQaTtZeOo-unsplash-3-1024x684.jpg'
        },
        {
            image:'https://depositphotos-blog.s3.eu-west-1.amazonaws.com/uploads/2011/06/Depositphotos_1740943_original12.jpg'
        },
        {
            image:'https://depositphotos-blog.s3.eu-west-1.amazonaws.com/uploads/2011/06/052511lenspen1.jpg'
        },
        {
            image:'https://depositphotos-blog.s3.eu-west-1.amazonaws.com/uploads/2011/06/DSC1072ff1.jpg.webp'
        },
        {
            image:'https://depositphotos-blog.s3.eu-west-1.amazonaws.com/uploads/2011/06/Depositphotos_1740943_original1.jpg.webp'
        }
    ]
  return (
    <div>
      <Slider {...settings}>
      {
        data && data.map((item,i)=>{
            return(
                <div>
                <img src={item.image} width={'100%'} alt='image'></img>
                </div>
            )
        })
      }
      </Slider>
    </div>
  )
}

export default Home
