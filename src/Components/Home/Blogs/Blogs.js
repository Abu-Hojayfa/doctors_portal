import React from 'react';
import './Blogs.css';
import herry from '../../../images/herry.png';
import moment from 'moment';

const Blogs = () => {
  return (
    <section className='blog-container m-auto mb-5'>
      <h5 className="text-center">OUR BLOGS</h5>
      <h2 className="text-center">From Our Blog News</h2>
      <div className="row m-0">
        <div className="col-md-4">
          <div className='blogs'>
            <div className="d-flex justify-content-center align-items-center mb-5 mt-2">
              <img src={herry} alt="" />
              <div style={{paddingLeft:'40px'}}>
                <h4>Dr. Caudi</h4>
                <h5>{moment().format("dddd, MMMM-D-YYYY")}</h5>
              </div>
            </div>

            <h2>2 times of brush in a day can Keep you healthy</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              accusamus quasi maiores ea magnam inventore ipsum, tempora quaerat
              alias magni!
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className='blogs'>
            <div className="d-flex justify-content-center align-items-center mb-5 mt-2">
              <img src={herry} alt="" />
              <div style={{paddingLeft:'40px'}}>
                <h4>Dr. Caudi</h4>
                <h5>{moment().format("dddd, MMMM-D-YYYY")}</h5>
              </div>
            </div>

            <h2>2 times of brush in a day can Keep you healthy</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              accusamus quasi maiores ea magnam inventore ipsum, tempora quaerat
              alias magni!
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className='blogs'>
            <div className="d-flex justify-content-center align-items-center mb-5 mt-2">
              <img src={herry} alt="" />
              <div style={{paddingLeft:'40px'}}>
                <h4>Dr. Caudi</h4>
                <h5>{moment().format("dddd, MMMM-D-YYYY")}</h5>
              </div>
            </div>

            <h2>2 times of brush in a day can Keep you healthy</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              accusamus quasi maiores ea magnam inventore ipsum, tempora quaerat
              alias magni!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;