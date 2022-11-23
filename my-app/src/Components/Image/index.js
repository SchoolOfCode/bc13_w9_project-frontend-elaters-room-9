export function Image(props) {
  return (
    <a href={props.link}>
      <img src={props.src} alt={props.alt} />
    </a>
  );
}

export default Image;
