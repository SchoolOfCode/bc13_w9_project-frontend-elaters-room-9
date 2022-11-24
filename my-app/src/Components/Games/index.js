<<<<<<< HEAD
import style from "./games.modules.css"
=======
import style from "./games.module.css";
>>>>>>> main

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
<<<<<<< HEAD
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
=======
    <div className={style.allofgames}>
      <header class={style.header}>
        <h2> Games </h2>
      </header>
      <main class={style.main}>
        <div className={style.container}>
          {games.map((games) => (
            <div className={style.games}>
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
      </main>
      <footer class={style.footer}></footer>
>>>>>>> main
    </div>
  );
};

export default Games;

