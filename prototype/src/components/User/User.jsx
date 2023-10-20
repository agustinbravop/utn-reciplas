import "./User.css";

export default function User({ userName }) {
  if (!userName) {
    return null;
  }

  return (
    <div className="user">
      <div className="user-icon">{userName.slice(0, 2).toUpperCase()}</div>
      <p>{userName}</p>
    </div>
  );
}
