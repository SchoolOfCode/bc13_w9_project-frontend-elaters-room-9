import "./Card.css";
import Title from "../Title/index";
import { useNavigate } from "react-router-dom";
/**
 * 
 * This is a reusable card component,
 * that is passed id,title and route
 * from the home component. However these could
 * be tweaked depending on where it is used.
 */

function Card({ id, title, route }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div className="card" id={id} onClick={handleClick}>
      <div className="image"/>
      <Title Title={title} />
    </div>
  );
}

export default Card;