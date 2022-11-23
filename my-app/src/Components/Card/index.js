import Image from "../Image/index";
import "./Card.css";
import Title from "../Title/index";

function Card(props) {
  return (
    <div className="container" id={props.id}>
      <Image link={props.link} src={props.src} alt={props.alt} />
      <Title Title={props.Title} />
    </div>
  );
}

export default Card;
