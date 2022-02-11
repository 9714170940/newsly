import React from "react";
import { useState } from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import { dashboardRoutes } from "../routers/dashboard";
import { clearAllData, getParticularData } from "../utils/localstorage";
import "../style/sidebar.css";
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { isTokenExpired } from "../utils/function";
import { setUserAuthId } from "../redux/actions/action";
import { useDispatch } from "react-redux";
import { logOut } from "../firebase/auth";

const Sidebar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isCollapsed, setCollapsed] = useState(true);
  const [isNightMode, setNightMode] = useState(false);
  const token = getParticularData("token");

  const handleLogOut = () => {
    clearAllData();
    const object = {
      id: null,
      authId: null,
      logged: false,
      isLoginSuccess: false,
      user: {},
    };
    dispatch(setUserAuthId(object));
    logOut()
    history.push("/login");
  };

  const links = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "bx bx-home-alt icon",
      text: "text nav-text",
    },
    {
      name: "Revenue",
      path: "/dashboard/revenue",
      icon: "bx bx-bar-chart-alt-2 icon",
      text: "text nav-text",
      link: "nav-link"
    },
    {
      name: "Notifications",
      path: "/dashboard/notifications",
      icon: "bx bx-bell icon",
      text: "text nav-text",
      link: "nav-link"
    },
    {
      name: "Analytics",
      path: "/dashboard/analytics",
      icon: "bx bx-pie-chart-alt icon",
      text: "text nav-text",
      link: "nav-link"
    },
    {
      name: "Likes",
      path: "/dashboard/likes",
      icon: "bx bx-heart icon",
      text: "text nav-text",
      link: "nav-link"
    },
    {
      name: "Wallets",
      path: "/dashboard/wallets",
      icon: "bx bx-wallet icon",
      text: "text nav-text",
      link: "nav-link"
    },
  ];

  const selectComponent = (requiredSession, redirectUrl, Component, props) => {
    if (requiredSession) {
      return !isTokenExpired(token) ? (
        <Component {...props} />
      ) : (
        <Redirect to={`${redirectUrl}`} />
      );
    } else {
      return <Component {...props} />;
    }
  };

  return (
    <div className={`body ${isNightMode && "dark"}`}>
      <nav className={`sidebar ${!isCollapsed && "close"}`}>
        <header>
          <div className="image-text">
            <span className="image">
              <img
                className="img-collapsed"
                src="./assets/brand_logo_small.svg"
                alt=""
              />
            </span>

            <div className="text logo-text">
              <span className="name">Newsly</span>
            </div>
          </div>

          <i
            className="bx bx-chevron-right toggle"
            onClick={() => setCollapsed((prev) => !prev)}
          ></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <li className="search-box">
              <i className="bx bx-search icon"></i>
              <input type="text" placeholder="Search..." />
            </li>

            <ul className="menu-links">
              {links.map((data, index) => {
                return (
                  <li key={index+1}>
                    <NavLink to={data?.path}>
                      <i className={`${data?.icon}`}></i>
                      <span className={`${data?.text}`}>{data?.name}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="bottom-content">
            <li onClick={handleLogOut}>
              <p>
                <i className="bx bx-log-out icon"></i>
                <span className="text nav-text">Logout</span>
              </p>
            </li>

            <li className="mode">
              <div className="sun-moon">
                <i className="bx bx-moon icon moon"></i>
                <i className="bx bx-sun icon sun"></i>
              </div>
              <span className="mode-text text">Dark mode</span>

              <div
                className="toggle-switch"
                onClick={() => setNightMode((prev) => !prev)}
              >
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </nav>
      <section className="home">
        <Navbar />
        {
          <Switch>
            {dashboardRoutes.map(
              (
                {
                  exact,
                  path,
                  requiredSession,
                  name,
                  redirectUrl,
                  component: Component,
                },
                index
              ) => {
                return (
                  <Route
                    exact={exact}
                    path={path}
                    key={index}
                    {...dashboardRoutes}
                    render={(props) =>
                      selectComponent(
                        requiredSession,
                        redirectUrl,
                        Component,
                        props
                      )
                    }
                  />
                );
              }
            )}
            <Redirect from="/dashboard/" to="/dashboard" />
          </Switch>
        }
      </section>
    </div>
  );
};

export default Sidebar;
