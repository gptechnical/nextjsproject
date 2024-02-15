import React from 'react'
import '../../../styles/custom.css'

const Contact = () => {
  return (
    <>
      <div className='box_ser'>
        <div className='container box_two'>
          <h2 className='head_two'>Contact <span style={{ color: "#ffc107" }}>Us</span></h2>
          <div className='dashline'></div>
          <div className="row g-4 mt-4 pb-4">
            <div className="col-md-6 col-sm-6 col-lg-6">
              <div className="card">
                <div className="card-body">
                  <form>
                    <h4>Send a Message</h4>
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Full Name"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email Address" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlTextarea1" className="form-label">Textarea</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Message...' rows="3"></textarea>
                    </div>
                    <button type="button" className="btn_send">Send</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6">
              <div className="card">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7005.437387352624!2d77.36272873959486!3d28.608214771745576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce565fcf639e7%3A0x677c4d7bd48136!2sSector%2059%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1707978509661!5m2!1sen!2sin"
                  width="100%" height="410" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
          <div className='row g-4'>
            <div className='col-md-4 col-sm-4'>
              <div className="card">
                <div className="card-body" style={{ backgroundColor: "#673AB7", border: "1px solid #ffffff", cursor: "pointer", padding: "60px 20px" }}>
                  <i className="bi bi-geo Loc"></i>
                  <span style={{ paddingLeft: "10px", color: "#ffffff", fontWeight: "500" }}>Noida, Uttar Pradesh Sector-59</span>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-4'>
              <div className="card">
                <div className="card-body" style={{ backgroundColor: "#673AB7", border: "1px solid #ffffff", cursor: "pointer", padding: "60px 20px" }}>
                  <ul className='social_icon'>
                    <li><i className="bi bi-facebook"></i></li>
                    <li><i className="bi bi-instagram"></i></li>
                    <li><i className="bi bi-youtube"></i></li>
                    <li><i className="bi bi-twitter-x"></i></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-4'>
              <div className="card">
                <div className="card-body" style={{ backgroundColor: "#673AB7", border: "1px solid #ffffff", cursor: "pointer", padding: "60px 20px" }}>
                  <i className="bi bi-envelope Loc"></i>
                  <span style={{ paddingLeft: "10px", color: "#ffffff", fontWeight: "500" }}>gptech015@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact