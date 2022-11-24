import style from "./games.modules.css"

const Games = () => {
  const games = [
    {
      url: "https://scratch.mit.edu/projects/639886506/embed",
      title: "Taco Rush",
      key: 1,
    },
    {
      url: "https://scratch.mit.edu/projects/711919060/embed",
      title: "Happy Dog",
      key: 2,
    },
    {
      url: "https://scratch.mit.edu/projects/641110136/embed",
      title: "The Food Truck Game",
      key: 3,
    },
    {
      url: "https://scratch.mit.edu/projects/711935745/embed",
      title: "Goblins, Bats and Trees",
      key: 4,
    },
  ];

  return (
    <div className="Games">
      <h2> Games </h2>

      <div className="container">
        {games.map((games) => (
          <div className="games">
            <iframe
              src={games.url}
              allowtransparency="true"
              width="485"
              height="375"
              frameborder="0"
              scrolling="no"
              title={games.title}
              key={games.key}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;

