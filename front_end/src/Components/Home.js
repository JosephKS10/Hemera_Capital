import React from 'react'
import "./Home.css"
export default function Home() {
  return (
<>
<header>
    <a href="#" className='Nav_heading'>Hemera Capital</a>
    <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Process</a></li>
        <li><a href="#">Advantages</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><span><a href="#">Contact Us</a></span></li>
        <span><button className='signin_button'>Sign in</button></span>
        

    </ul>
</header>
<section className='banner'>
{/* <video autoplay loop src="/static/media/video.11c46e6c.mp4" type="video/mp4" class="video_promo"></video> */}
</section>

</>
  );
}
