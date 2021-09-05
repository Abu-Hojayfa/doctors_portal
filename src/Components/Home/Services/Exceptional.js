import React from 'react';
import exception from '../../../images/exception.png';

const Exceptional = () => {
  return (
    <section className='row mt-5 pt-5'>
      <div className='col-md-5 exception-img'>
        <img className='img-fluid' src={exception} alt=""/>
      </div>

      <div className='col-md-6 exception-info mt-4'>
        <h1>Exceptional Dental <br/> Care, On your Terms</h1>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum expedita labore quidem nemo voluptatum perferendis exercitationem, assumenda quis minima obcaecati aliquam, dignissimos laudantium ipsa! Minus magnam mollitia vel, quia rem cumque modi aliquid iure fugiat quas aspernatur at blanditiis possimus quidem facere. Obcaecati natus sit quaerat modi sapiente magni rerum error! Nesciunt voluptas in commodi sed sit sapiente asperiores inventore! Lorem ipsum dolor sit amet consectetur, adipisicing elit. At alias tempora commodi tenetur. Quisquam, possimus.</p>
        <button className='btn exception-btn'>Learn More</button>
      </div>
    </section>
  );
};

export default Exceptional;