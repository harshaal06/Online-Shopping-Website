import './About.css'
import Navbar from '../../components/Navbar/Navbar'

function About() {
  return (
    <div>
        <Navbar />
        <p>
    <h1 class="name">
            <b>About Us</b>
    </h1>
    </p>
    <div className="mt-3 pb-5">
    <div className="container">
      <div className="row">
        <div className="my-md-5 my-sm-0 d-flex flex-wrap flex-wrap justify-content-around">
          <img src="../images/review.png" className="col-md-6"></img>
          <div className="card col-md-5 col-xs-12 shadow p-md-4 px-5 w-xs-100 w-md-auto">
            <h4 className="my-3">WRITE A REVIEW</h4>
            <p className="mb-2">Name : </p>
            <input type="text" placeholder="Enter Name" required className="mb-4 p-2 px-3 rounded border border-black"
              id="input-Name"></input>
            <p className="mb-2 col-6">Review : </p>
            <textarea name="Message" rows="4" placeholder="Write Your Review" required
              className="p-3 rounded border border-black" id="input-Msg"></textarea>
            <div className="mt-4 mb-4">
              <button type="button" className="px-4 py-2 rounded bod">&nbsp; Cancel &nbsp;</button>
              <button type="button" className="px-5 py-2 rounded border bag">Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="p-5 c-bag">
    <div className="container">
      <h1 className="text-center mb-4">WHAT PEOPLE SAY</h1>
      <div className="row">
        <div className="r-bag d-flex flex-wrap justify-content-evenly p-md-4" id="review-Box">
            dnfndfndfnwnnfnww
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default About