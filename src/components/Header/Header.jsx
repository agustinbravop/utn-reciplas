import User from "../User/User";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

export default function Header({ area }) {
  return (
    <header className="main-header">
      <Logo />
      <NavBar area={area} />
      <User area={area} />
    </header>
  );
}
