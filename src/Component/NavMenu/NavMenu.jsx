import { HashLink } from "react-router-hash-link";

const NavMenu = ({ level, address }) => {
  return (
    <div>
      <HashLink
        smooth
        to={address}
        className="hover:text-lime-300 text-xs transition-all transform duration-100 hover:underline hover:text-sm"
      >
        {level}
      </HashLink>
    </div>
  );
};


export default NavMenu;
