import React from 'react'
import img from '../images/icon-music.svg'
import "./Section3.css"

const Section3 = () => {
  return (
    <div className='bor'>
        <div className='backgroud'>
            <div className='flex'>
                <div className='bor1'>
                <img src={img} alt="" />
                </div>
                <div className='h3p'>
                <h5>Annual Plan</h5>
                <p>$59.99/year</p>
                </div>
                <h4>
                <a href="">change</a>
                </h4>
            </div>
        </div>
        <br />
        <br />
      {/* <div className='sec4'>
        <button>proceed to payment</button>
      </div>
      <div>
        <h3> Cancel Order</h3>
      </div>  */}
    </div>
  )
}

export default Section3