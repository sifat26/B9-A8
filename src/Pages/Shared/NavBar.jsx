import { NavLink } from "react-router-dom";

const NavBar = () => {
  const links = (
    < >
      <li>
        <NavLink to='/' className={({ isActive }) =>
                      isActive
                        ? "border border-[#23BE0A] bg-white text-[#23BE0A]"
                        : ""
                    }>Home</NavLink>
      </li>
      <li>
        <NavLink to='/listed-book' className={({ isActive }) =>
                      isActive
                        ? "border border-[#23BE0A] bg-white text-[#23BE0A]"
                        : ""
                    }>Listed Books</NavLink>
      </li>
      <li>
        <NavLink to='/pages-to-read' className={({ isActive }) =>
                      isActive
                        ? "border border-[#23BE0A] bg-white text-[#23BE0A]"
                        : ""
                    }>Pages to Read</NavLink>
      </li>
      <li> <NavLink to='/best-book' className={({ isActive }) =>
                      isActive
                        ? "border border-[#23BE0A] bg-white text-[#23BE0A]"
                        : ""
                    }>Best Book</NavLink></li>
      <li> <NavLink to='/about' className={({ isActive }) =>
                      isActive
                        ? "border border-[#23BE0A] bg-white text-[#23BE0A]"
                        : ""
                    }>About</NavLink></li>
    </>
  );
  return (
    <div >
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-neutral-900 lg:text-3xl text-2xl font-bold">BookBuzz</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 text-lg">{links}</ul>
        </div>
        <div className="navbar-end gap-4">
          <a className="btn bg-[#23BE0A] text-white lg:text-lg">Sign In</a>
          <a className="btn bg-[#59C6D2] text-white lg:text-lg">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
