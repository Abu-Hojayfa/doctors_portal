import React from 'react';
import './HeaderMain.css';
import chair from '../../../images/Mask Group 1.png';
import { useHistory } from 'react-router';

const HeaderMain = () => {
  let history = useHistory();
  const appointment = () =>{
    history.push('/appointment');
  };
  return (
    <main style={{height:'700px', marginRight:'0px'}} className="row  d-flex align-items-center">
        <div className="col-md-4 offset-md-1 infoClass">
          <h1 style={{color:'#3A4256'}}>
            Your New Smile <br/>
            Starts Here
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos mollitia saepe neque doloribus sapiente adipisci eum, assumenda accusamus perferendis! Laboriosam Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias et vitae id veritatis magni ratione distinctio ad possimus ipsum.
          </p>
          <button onClick={appointment} className="btn paymentButn ">GET APPOINTMENT</button>
        </div>
        <div className="col-md-6">
          <img src={chair} alt="" className="img-fluid"/>
        </div>
    </main>
  );
};

export default HeaderMain;