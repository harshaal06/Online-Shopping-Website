import React, { useState, useEffect } from "react";
import axios from 'axios';
import './AdminDashboard.css'
import ItemCard from "../../components/AdminItemCard/ItemCard";
import AddItem from "../../components/AdminAddItem/AdminAddItem";
import AddIcon from "./add-icon.png"

function AdminDashboard() {

  const [activeComponent, setActiveComponent] = useState("orderInformation");
  const [mobiles, setMobiles] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [tablets, setTablets] = useState([]);
  const [addItem, setAddItem] = useState("")

  const loadItems = async () =>{
      const responseM = await axios.get(`${process.env.REACT_APP_API_URL}/mobile`);
      const responseL = await axios.get(`${process.env.REACT_APP_API_URL}/laptop`);
      const responseT = await axios.get(`${process.env.REACT_APP_API_URL}/tablet`);

      setMobiles(responseM.data.data);
      setLaptops(responseL.data.data);
      setTablets(responseT.data.data);
  }

  useEffect(()=>{
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
            <div className='col-3 pt-3 shadow rounded-4 bg-dark text-white menu-box'>
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
            <div className={`col-9 ${activeComponent ? "active" : ""}`}>
              <div className="shadow w-100 rounded-4 border menu-box">
                {activeComponent === "orderInformation" && (
                  <div>
                    <h1 className="text-center">Order Information</h1><hr />
                  </div>
                )}
                {activeComponent === "mobileInformation" && (
                  <div>
                    <h1 className="text-center">Mobile Information</h1><hr />
                    <div className="container d-flex flex-wrap justify-content-between">
                    {
                        mobiles.map((mobile) => {
                            const {_id, url, title, content, price} = mobile;
                            return( <ItemCard key={_id} _id={_id} url={url} title={title} content={content} price={price} loadItems={loadItems} type={"mobile"} /> )
                        })
                    }
                    <img src={AddIcon}
                      className={`position-fixed add-icon shadow-lg border border-dark-subtle p-2 rounded-circle ${
                        activeComponent === "depositAmount" ? "active" : ""}`}
                        onClick={() => {handleSetActiveComponent("addItem")
                        setAddItem("mobile")}}/>
                    </div>
                  </div>
                )}
                {activeComponent === "laptopInformation" && (
                  <div>
                    <h1 className="text-center">Laptop Information</h1><hr />
                    <div className="container d-flex flex-wrap justify-content-between">
                    {
                        laptops.map((laptop) => {
                            const {_id, url, title, content, price} = laptop;
                            return( <ItemCard key={_id} _id={_id} url={url} title={title} content={content} price={price} loadItems={loadItems} type={"laptop"} /> )
                        })
                    }
                    <img src={AddIcon}
                      className={`position-fixed add-icon shadow-lg border border-dark-subtle p-2 rounded-circle ${
                        activeComponent === "depositAmount" ? "active" : ""}`}
                        onClick={() => {handleSetActiveComponent("addItem")
                        setAddItem("laptop")}}/>
                    </div>
                  </div>
                )}
                {activeComponent === "tabletInformation" && (
                  <div>
                    <h1 className="text-center">Tablet Information</h1><hr />
                    <div className="container d-flex flex-wrap justify-content-between">
                    {
                        tablets.map((tablet) => {
                            const {_id, url, title, content, price} = tablet;
                            return( <ItemCard key={_id} _id={_id} url={url} title={title} content={content} price={price} loadItems={loadItems} type={"tablet"} /> )
                        })
                    }
                    <img src={AddIcon}
                      className={`position-fixed add-icon shadow-lg border border-dark-subtle p-2 rounded-circle ${
                        activeComponent === "depositAmount" ? "active" : ""}`}
                        onClick={() => {handleSetActiveComponent("addItem")
                        setAddItem("tablet")}}/>
                    </div>
                  </div>
                )}
                {activeComponent === "addItem" && (
                  <div>
                    <AddItem type={addItem} loadItems={loadItems}/>
                  </div>
                )}
                {activeComponent === "contact" && (
                  <div>
                    <h1 className="text-center">Contact</h1><hr />
                  </div>
                )}
                {activeComponent === "review" && (
                  <div>
                    <h1 className="text-center">Review</h1><hr />
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