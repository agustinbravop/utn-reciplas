import "./User.css";

const areaToUserName = {
  prod: "Sr. Producción",
  compras: "Sr. Compras",
  ventas: "Sr. Ventas",
  admin: "Sr. Administrador",
};
export default function User({ area }) {
  if (!area) {
    return null;
  }

  const userName = areaToUserName[area];

  return (
    <div className="user">
      <div className="user-icon">{userName.slice(0, 2).toUpperCase()}</div>
      <p>{userName}</p>
    </div>
  );
}
