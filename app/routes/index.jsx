import Carousel from "../components/carousel";

//SVG NAV imports
import notification from "../assets/img/notification.svg";
import search from "../assets/img/search-normal.svg";
import settings from "../assets/img/setting-2.svg";
import logout from "../assets/img/logout.svg";
import tempAvatar from "../assets/img/tempavatar.png";


export default function Index() {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col justify-between pl-6">
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
          <div className="navbar bg-base-100 mt-10 flex flex-row justify-between w-full">
            <div>
              <label
                htmlFor="my-drawer-2"
                className="btn btn-square btn-error drawer-button"
              >
                <svg
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
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
              </label>
              <a className="btn btn-ghost normal-case text-2xl tracking-tight">
                2218 Thornridge Cir.. E5579076
              </a>
            </div>
            <div>
              <ul className="menu menu-horizontal px-1">
                <button className="btn btn-ghost btn-circle mt-4">
                  <div className="indicator">
                    <img
                      src={notification}
                      alt="notification"
                      className="w-6 h-6"
                    />
                    <span className="badge badge-xs badge-primary indicator-item"></span>
                  </div>
                </button>
                <button className="btn btn-ghost btn-circle mt-4">
                  <img
                    src={search}
                    alt="search"
                    className="w-6 h-6"
                  />
                </button>
                <button className="btn btn-ghost btn-circle mt-4">
                  <img
                    src={settings}
                    alt="settings"
                    className="w-6 h-6"
                  />
                </button>
                <button className="btn btn-ghost btn-circle mt-4">
                  <img
                    src={logout}
                    alt="logout"
                    className="w-6 h-6"
                  />
                </button>
                <li tabIndex={0}>
                  <a>
                    <div className="avatar">
                      <div className="w-14 rounded-full">
                        <img src={tempAvatar} />
                      </div>
                    </div>
                    <div className="flex flex-col items-start">
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
                  <ul className="p-2 bg-base-100 w-full">
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

        {/* SIDENAV NAV BELOW*/}
        {/* <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label> */}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-white text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
