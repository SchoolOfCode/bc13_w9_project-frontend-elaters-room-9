import Image from "../Image/index";
import "./Card.css";
import Title from "../Title/index";
import { useNavigate } from "react-router-dom";

function Card({ id, alt, src, title, route }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
<<<<<<< HEAD
    <div className="cardContainer" id={id} onClick={handleClick}>
=======
    <div className="card" id={id} onClick={handleClick}>
>>>>>>> main
      <Image src={src} alt={alt} />
      <Title Title={title} />
    </div>
  );
}

export default Card;