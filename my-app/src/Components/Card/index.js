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
    <div className="cardContainer" id={id} onClick={handleClick}>
      <Image src={src} alt={alt} />
      <Title Title={Title} />
    </div>
  );
}

export default Card;
