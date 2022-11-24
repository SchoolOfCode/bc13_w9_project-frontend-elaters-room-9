import Image from "../Image/index";
import "./Card.css";
import Title from "../Title/index";

function Card(props) {
  return (
    <div className="cardContainer" id={props.id}>
      <Image src={props.src} alt={props.alt} />
      <Title Title={props.Title} />
    </div>
  );
}

export default Card;
