import React, { useState, useEffect } from "react";
import axios from 'axios';
import './AdminDashboard.css'
import ItemCard from "../../components/AdminItemCard/ItemCard";
import AddItem from "../../components/AdminAddItem/AdminAddItem";
import ContactCard from "../../components/AdminContactCard/AdminContactCard";
import OrderCard from "../../components/AdminOrderCard/AdminOrderCard";
import AddIcon from "./add-icon.png"
import Profile from "./user.png";
import Mobile from "./mobile.png";
import Laptop from "./laptop.png";
import Tablet from "./tablet.png";
import Contact from "./contact.png";
import Review from "./review.png";


function AdminDashboard() {

  const [activeComponent, setActiveComponent] = useState("orderInformation");
  const [orders, setOrders] = useState([]);
  const [mobiles, setMobiles] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [tablets, setTablets] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [addItem, setAddItem] = useState("");

  const loadItems = async () => {
    const responseO = await axios.get(`${process.env.REACT_APP_API_URL}/order`);
    const responseM = await axios.get(`${process.env.REACT_APP_API_URL}/mobile`);
    const responseL = await axios.get(`${process.env.REACT_APP_API_URL}/laptop`);
    const responseT = await axios.get(`${process.env.REACT_APP_API_URL}/tablet`);
    const responseC = await axios.get(`${process.env.REACT_APP_API_URL}/contact`);
    const responseR = await axios.get(`${process.env.REACT_APP_API_URL}/review`);

    setOrders(responseO.data.data);
    setMobiles(responseM.data.data);
    setLaptops(responseL.data.data);
    setTablets(responseT.data.data);
    setContacts(responseC.data.data);
    setReviews(responseR.data.data);
  }

  useEffect(() => {
    loadItems();
  }, []);

  const handleSetActiveComponent = (component) => {
    setActiveComponent(component);
  };


  return (
    <div>
      <h1 className="text-center p-3 bg-dark text-white">नमस्ते 🙏 Admin</h1>
      <div className="m-3 mx-4">
        <div className='row'>
          <div className="container d-block d-md-none col-12 rounded-4 bg-dark text-white mb-3">
              <div className="d-flex justify-content-evenly py-2">
                <img src={Profile} className="icon-ht" onClick={() => handleSetActiveComponent("orderInformation")}/>
                <img src={Mobile} className="icon-ht" onClick={() => handleSetActiveComponent("mobileInformation")}/>
                <img src={Laptop} className="icon-ht" onClick={() => handleSetActiveComponent("laptopInformation")}/>
                <img src={Tablet} className="icon-ht" onClick={() => handleSetActiveComponent("tabletInformation")}/>
                <img src={Contact} className="icon-ht" onClick={() => handleSetActiveComponent("contact")}/>
                <img src={Review} className="icon-ht" onClick={() => handleSetActiveComponent("review")}/>
              </div>
            </div>
          <div className='col-3 pt-3 shadow rounded-4 bg-dark text-white menu-box-1 d-none d-md-block'>
            <div className="fs-5 m-2 my-3 p-2 px-4 rounded-4 cursor-pointer dash-item"
              onClick={() => handleSetActiveComponent("orderInformation")}>
              Order Information
            </div>
            <div className="fs-5 m-2 my-3 p-2 px-4 rounded-4 cursor-pointer dash-item"
              onClick={() => handleSetActiveComponent("mobileInformation")}>Mobile Information</div>
            <div className="fs-5 m-2 my-3 p-2 px-4 rounded-4 cursor-pointer dash-item"
              onClick={() => handleSetActiveComponent("laptopInformation")}>Laptop Information</div>
            <div className="fs-5 m-2 my-3 p-2 px-4 rounded-4 cursor-pointer dash-item"
              onClick={() => handleSetActiveComponent("tabletInformation")}>Tablet Information</div>
            <div className="fs-5 m-2 my-3 p-2 px-4 rounded-4 cursor-pointer dash-item"
              onClick={() => handleSetActiveComponent("contact")}>Contact</div>
            <div className="fs-5 m-2 my-3 p-2 px-4 rounded-4 cursor-pointer dash-item"
              onClick={() => handleSetActiveComponent("review")}>Review</div>
          </div>
          <div className={`col-12 col-md-9 ${activeComponent ? "active" : ""}`}>
            <div className="shadow w-100 rounded-4 border menu-box-2">
              {activeComponent === "orderInformation" && (
                <div>
                  <h1 className="text-center pt-2 pt-2">Order Information</h1><hr />
                  <div className="container">
                    {
                      orders.map((order) => {
                        const { _id, url, title, content, price, name, imgurl, address, city, state, code, mob, email, pass, payment, type } = order;
                        return (<OrderCard key={_id} _id={_id} url={url} title={title} content={content} price={price} name={name} imgurl={imgurl} address={address} city={city} state={state} code={code} mob={mob} email={email} pass={pass} payment={payment} type={type} loadItems={loadItems} />)
                      })
                    }
                  </div>
                </div>
              )}
              {activeComponent === "mobileInformation" && (
                <div>
                  <h1 className="text-center pt-2">Mobile Information</h1><hr />
                  <div className="container d-flex flex-wrap justify-content-between">
                    {
                      mobiles.map((mobile) => {
                        const { _id, url, title, content, price } = mobile;
                        return (<ItemCard key={_id} _id={_id} url={url} title={title} content={content} price={price} loadItems={loadItems} type={"mobile"} />)
                      })
                    }
                    <img src={AddIcon}
                      className="position-fixed add-icon shadow-lg border border-dark-subtle p-2 rounded-circle"
                      onClick={() => {
                        handleSetActiveComponent("addItem")
                        setAddItem("mobile")
                      }} />
                  </div>
                </div>
              )}
              {activeComponent === "laptopInformation" && (
                <div>
                  <h1 className="text-center pt-2">Laptop Information</h1><hr />
                  <div className="container d-flex flex-wrap justify-content-between">
                    {
                      laptops.map((laptop) => {
                        const { _id, url, title, content, price } = laptop;
                        return (<ItemCard key={_id} _id={_id} url={url} title={title} content={content} price={price} loadItems={loadItems} type={"laptop"} />)
                      })
                    }
                    <img src={AddIcon}
                      className={`position-fixed add-icon shadow-lg border border-dark-subtle p-2 rounded-circle ${activeComponent === "depositAmount" ? "active" : ""}`}
                      onClick={() => {
                        handleSetActiveComponent("addItem")
                        setAddItem("laptop")
                      }} />
                  </div>
                </div>
              )}
              {activeComponent === "tabletInformation" && (
                <div>
                  <h1 className="text-center pt-2">Tablet Information</h1><hr />
                  <div className="container d-flex flex-wrap justify-content-between">
                    {
                      tablets.map((tablet) => {
                        const { _id, url, title, content, price } = tablet;
                        return (<ItemCard key={_id} _id={_id} url={url} title={title} content={content} price={price} loadItems={loadItems} type={"tablet"} />)
                      })
                    }
                    <img src={AddIcon}
                      className="position-fixed add-icon shadow-lg border border-dark-subtle p-2 rounded-circle"
                      onClick={() => {
                        handleSetActiveComponent("addItem")
                        setAddItem("tablet")
                      }} />
                  </div>
                </div>
              )}
              {activeComponent === "addItem" && (
                <div>
                  <AddItem type={addItem} loadItems={loadItems} />
                </div>
              )}
              {activeComponent === "contact" && (
                <div>
                  <h1 className="text-center pt-2">Contact</h1><hr />
                  <div className="container d-flex flex-wrap justify-content-between">
                    {
                      contacts.map((contact) => {
                        const { _id, name, email, message } = contact;
                        return (<ContactCard key={_id} _id={_id} name={name} email={email} message={message} loadItems={loadItems} type={"contact"} msg={"Message"} />)
                      })
                    }
                  </div>
                </div>
              )}
              {activeComponent === "review" && (
                <div>
                  <h1 className="text-center pt-2">Review</h1><hr />
                  <div className="container d-flex flex-wrap justify-content-between">
                    {
                      reviews.map((review) => {
                        const { _id, name, message } = review;
                        return (<ContactCard key={_id} _id={_id} name={name} message={message} loadItems={loadItems} type={"review"} msg={"Review"} />)
                      })
                    }
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard