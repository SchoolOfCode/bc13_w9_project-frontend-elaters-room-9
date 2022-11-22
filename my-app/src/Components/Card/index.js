import Image from "../Image/index";

function Card(props) {
  return (
    <div id="card">
      <Image src={props.src} alt={props.alt} />
    </div>
  );
}

export default Card;
