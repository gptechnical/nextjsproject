import Link from "next/link";
import './globals.css'
// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
      </head>
      <body>
        <nav className="navbar navbar-expand-lg bg_color" id="nav_bar">
          <div className="container">
            <Link className="navbar-brand text-white" href="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0 nav_color">
                <li className="nav-item">
                  <Link className="nav-link active text-light" aria-current="page" href="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" href="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" href="/service">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {children}
        <footer style={{backgroundImage: "url(/bg-footer.jpg)", backgroundRepeat: "no-repeat", 
         backgroundSize: "cover" }}>
          <div className="container">
            <div className="row pt-4 pb-4">
              <div className="col-md-3 col-sm-3">
                <h3 style={{color: "#ffc107"}}>About Us</h3>
                   <p style={{color: "#ffffff", wordBreak: "break-all", fontWeight: "600"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Quisque sit amet ultricies tellus. Mauris sed orci sit 
                    amet lorem mattis tincidunt at quis nunc. Maecenas 
                    consectetur ex id sapien malesuada sagittis.</p>
              </div>
              <div className="col-md-3 col-sm-3">
              <h3 style={{color: "#ffc107"}}>Links</h3>
              <ul style={{listStyle: "none", color: "#ffffff", paddingLeft: "0px", 
                     textDecoration: "none", fontWeight: "600"}}>
                    <li><Link href="/" style={{textDecoration: "none", color: "#ffffff"}}>Home</Link></li>
                    <li><Link href="/about" style={{textDecoration: "none", color: "#ffffff"}}>About</Link></li>
                    <li><Link href="/service" style={{textDecoration: "none", color: "#ffffff"}}>Services</Link></li>
                    <li><Link href="/contact" style={{textDecoration: "none", color: "#ffffff"}}>Contact</Link></li>
              </ul>
              </div>
              <div className="col-md-3 col-sm-3">
              <h3 style={{color: "#ffc107"}}>Services</h3>
              <ul style={{listStyle: "none", paddingLeft: "0px", color: "#ffffff", 
                    fontWeight: "600", lineHeight: "30px", cursor: "pointer" }}>
                    <li>Frontend Developer</li>
                    <li>Website Developer</li>
                    <li>Responsive Design</li>
                    <li>ReactJs Developer</li>
                    <li>NextJs Developer</li>
              </ul>
              </div>
              <div className="col-md-3 col-sm-3">
              <h3 style={{color: "#ffc107"}}>Contact Us</h3>
                   <p><a href="tel:+91-9898989898" style={{color: "#ffffff", 
                   textDecoration: "none", fontSize: "20px", fontWeight: "600" }}>
                   <i className="bi bi-telephone-fill"></i> +91-9898989898</a></p>
                   <form>
                    <input type="email" placeholder="Email Address" 
                    style={{ border: "none", outline: "0", padding: "5px 0px 5px 10px", borderRadius: "20px" }}/>
                    <button className="btn_sub" type="button">Subscribe</button>   
                   </form>
              </div>
            </div>
          </div>
          <div style={{color: "#ffffff", textAlign: "center", fontWeight: "500", padding: "10px 0", borderTop: "1px solid #ffffff7a"}}>Copyright © All Rights Reserved 2023-2024 </div>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" 
        crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}
