import Image from "../Image/index";
import "./Card.css";
function Card(props) {
  return (
    <div id="card">
      <Image src={props.src} alt={props.alt} />
    </div>
  );
}

export default Card;
