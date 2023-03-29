'use strict';

import { useContext } from "react";
import { PropertyContext } from "../../store/propertyContext.jsx";

//COMPONENT imports
import Carousel from "../components/carousel";
import PropertyDetails from "../components/propertyDetails";
import KeyFacts from "../components/keyFacts";
import SaleInfo from "../components/saleInfo";
import Shortcuts from "../components/shortcuts";
// import Footer from "../components/footer";

//SVG TOPNAV imports
import notification from "../assets/img/notification.svg";
import search from "../assets/img/search-normal.svg";
import settings from "../assets/img/setting-2.svg";
import logout from "../assets/img/logout.svg";
import tempAvatar from "../assets/img/tempavatar.png";

//SVG SIDENAV imports
import dashboard from "../assets/img/sidenav/speedometer.svg";
import searchProperty from "../assets/img/sidenav/search-status.svg";
import calendar from "../assets/img/sidenav/calendar.svg";
import clients from "../assets/img/sidenav/profile-2user.svg";
import mls from "../assets/img/sidenav/shopping-cart.svg";
import invite from "../assets/img/sidenav/user-circle-add.svg";
import help from "../assets/img/sidenav/message-question.svg";

import logo from "../assets/img/sidenav/cornerlogo.svg";

//MOCK PROPERTY import
// import data from "../assets/data/data.json";

import { motion } from "framer-motion";

export default function Index() {
  const { property } = useContext(PropertyContext);

  if (!property) {
    return null;
  }

  return (
    <>
      <div className="drawer drawer-mobile bg-base-300">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content pl-6 pr-6 z-20">
          <div
            style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
          >
            <div className="navbar bg-base-300 mt-4 -mb-1 flex flex-row justify-between w-full z-50">
              <div className="w-8 h-8">
                <motion.label
                  htmlFor="my-drawer-2"
                  className="btn btn-square btn-error drawer-button"
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-left"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    whileHover={{
                      scale: 1.2,
                      rotate: 180,
                      transition: {
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      },
                    }}
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="15 6 9 12 15 18" />
                  </motion.svg>
                </motion.label>
                <a className="btn btn-ghost font-normal normal-case text-lg tracking-tight text-neutral">
                  <span className="mr-2 text-base-200">{property.address}.</span>{" "}
                  {property.homeDetails.mls}
                </a>
              </div>
              <div>
                <ul className="menu menu-horizontal px-1">
                  <button className="btn btn-ghost btn-circle mt-4">
                    <div className="indicator">
                      <img
                        src={notification}
                        alt="notification"
                        className="w-5 h-5"
                      />
                      <span className="badge badge-xs badge-primary indicator-item mt-1 mr-1"></span>
                    </div>
                  </button>
                  <button className="btn btn-ghost btn-circle mt-4">
                    <img src={search} alt="search" className="w-5 h-5" />
                  </button>
                  <button className="btn btn-ghost btn-circle mt-4">
                    <img src={settings} alt="settings" className="w-5 h-5" />
                  </button>
                  <button className="btn btn-ghost btn-circle mt-4">
                    <img src={logout} alt="logout" className="w-5 h-5" />
                  </button>
                  <li tabIndex={0}>
                    <a>
                      <div className="avatar">
                        <div className="w-12 rounded-full">
                          <img src={tempAvatar} />
                        </div>
                      </div>
                      <div className="flex flex-col items-start text-sm">
                        <span>Berkay Erdinc</span>
                        <span className="text-base-200 mt-1">
                          hi@berkayerdinc.com
                        </span>
                      </div>
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                      </svg>
                    </a>
                    <ul className="p-2 bg-base-300 w-full">
                      <li>
                        <a className="text-center block">Submenu 1</a>
                      </li>
                      <li>
                        <a className="text-center block">Submenu 2</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* TOP NAV ABOVE*/}
          <Carousel />
          <div className="w-full flex flex-row justify-evenly mt-6 pl-2">
            <div
              className="bg-white rounded-lg"
              style={{ width: "26rem", height: "33rem" }}
            >
              {/* <p>TEMPLATE FOR SALE DETAIL AREA</p> */}
              <SaleInfo />
            </div>
            <div className="w-full mx-6">
              <div className="bg-white rounded-lg mb-4 h-20">
                <PropertyDetails />
              </div>
              <div className="h-96 bg-white rounded-lg">
                <KeyFacts />
              </div>
            </div>
            <div
              className="bg-white rounded-lg"
              style={{ width: "30rem", height: "23rem" }}
            >
              <Shortcuts />
            </div>
          </div>
          {/* SIDENAV NAV BELOW*/}
        </div>
        <div className="drawer-side" style={{ height: "62rem" }}>
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-72 bg-white text-base-content">
            {/* <!-- Sidebar content here --> */}
            <div>
              <img
                src={logo}
                alt="cornerLogo"
                className="w-10 h-10 mb-7 mt-6 ml-1"
              />
            </div>
            <li>
              <button className="btn btn-square btn-primary w-full h-14 text-white mb-5">
                Create New Tour <span className="ml-1">+</span>
              </button>
            </li>
            <li className="py-1">
              <span className="text-sm">
                <img src={dashboard} alt="dashboard" className="w-6 h-6" />
                Dashboard
              </span>
            </li>
            <li className="py-1">
              <span className="text-sm">
                <img
                  src={searchProperty}
                  alt="searchProperty"
                  className="w-6 h-6"
                />
                Search Property
              </span>
            </li>
            <li className="py-1">
              <span className="text-sm">
                <img src={calendar} alt="calendar" className="w-6 h-6" />
                Calendar
              </span>
            </li>
            <li className="py-1">
              <span className="text-sm">
                <img src={clients} alt="clients" className="w-6 h-6" />
                My Clients
              </span>
            </li>
            <li className="py-1">
              <span className="text-sm">
                <img src={mls} alt="mlslists" className="w-6 h-6" />
                MLS Lists
              </span>
            </li>
            <li className="py-1">
              <span className="text-sm">
                <img
                  src={notification}
                  alt="notification-sidenav"
                  className="w-6 h-6"
                />
                Notifications
              </span>
            </li>
            <li className="py-1">
              <span className="text-sm">
                <img src={invite} alt="inviteandearn" className="w-6 h-6" />
                Invite & Earn
              </span>
            </li>
            <span className="text-sm bottom-4 absolute">
              <p className="ml-4">Need Help?</p>
              <li className="py-1">
                <span className="text-sm">
                  <img src={help} alt="helpdesk" className="w-6 h-6" />
                  Help Desk
                </span>
              </li>
            </span>
          </ul>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
