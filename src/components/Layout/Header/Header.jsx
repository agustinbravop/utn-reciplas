import User from "../../User/User";
import Logo from "../../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

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
      <Logo />
      <NavBar area={area} />
      <User userName={userName} />
    </header>
  );
}
