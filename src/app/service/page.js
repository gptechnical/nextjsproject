'use client'
import React from 'react';
import '../../../styles/custom.css';

const Services = () => {
  return (
    <>
      <div className='box_ser'>
        <div className='container box_two'>
          <h2 className='head_two'>My <span style={{ color: "#ffc107" }}>Services</span></h2>
          <div className='dashline'></div>
          <div className='row g-4 mt-4 pb-4'>
            <div className='col-md-4 col-sm-4'>
              <div className="card">
                <img src="./lapi.jpg" className="card-img-top" alt="laptop" />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card
                    title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-4'>
              <div className="card">
                <img src="./lapi.jpg" className="card-img-top" alt="laptop" />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card
                    title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-4'>
              <div className="card">
                <img src="./lapi.jpg" className="card-img-top" alt="laptop" />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card
                    title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services