import User from "../../User/User";
import Logo from "../../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import "./Header.css";
import { Link } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";

const areaToUserName = {
  prod: "Sr. Producción",
  compras: "Sr. Compras",
  ventas: "Sr. Ventas",
  admin: "Sr. Admin",
};

export default function Header({ area }) {
  const userName = areaToUserName[area];
  return (
    <header className="main-header">
      <Logo area={area} />
      <NavBar area={area} />
      <div className="header-user">
        <User userName={userName} />
        {userName && (
          <Link to="/">
            <IoExitOutline></IoExitOutline>
          </Link>
        )}
      </div>
    </header>
  );
}
