import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const MobileNav = ({ isOpen, onOpen }) => {
  const location = useLocation();

  return (
    <>
      <div
        onClick={onOpen}
        className={
          isOpen ? "mobile_nav_overlay_open" : "mobile_nav_overlay_closed"
        }
      ></div>

      <div
        className={
          isOpen ? "mobile_nav_container_open" : "mobile_nav_container_closed"
        }
      >
        <div className="mobile_nav_close_btn" onClick={onOpen}>
          X
        </div>

        <ul className="mobile_nav_links_container">
          {navLinks.map((l) => {
            return (
              <li onClick={onOpen} className="mobile_nav_link_li" key={l.title}>
                <NavLink
                  className={`mobile_nav_link ${
                    location.pathname == l.href && "nav_link_active"
                  }`}
                  to={l.href}
                >
                  {l.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
