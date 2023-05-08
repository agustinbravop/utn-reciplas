import "./User.css";

export default function User({ userName }) {
  if (!userName) {
    return null
  }
  
  return <>
   <div>
    {userName.slice(0, 2).toUpperCase()}
   </div>
   <p>
    {userName}
   </p> 
  </>
}
