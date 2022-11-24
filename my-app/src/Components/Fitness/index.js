<<<<<<< HEAD
import style from "./fitness.modules.css";
=======
import style from "./fitness.module.css";
>>>>>>> main

const Fitness = () => {
  const fitness = [
    {
      url: "https://www.youtube.com/embed/COp7BR_Dvps",
      title:
        "30 Minute Relaxing Yoga For Mental Health | All Levels - Slow Seated Flow",
      key: 1,
    },
    {
      url: "https://www.youtube.com/embed/ZToicYcHIOU",
      title: "Daily Calm | 10 Minute Mindfulness Meditation | Be Present",
      key: 2,
    },
    {
      url: "https://www.youtube.com/embed/2ghl626p4P8",
      title:
        "10 MIN STANDING YOGA STRETCH | Yoga Without Mat | Yoga with Uliana",
      key: 3,
    },
    {
      url: "https://www.youtube.com/embed/zSkFFW--Ma0",
      title: "5 minute meditation for focus",
      key: 4,
    },
  ];

  return (
    <div className={style.alloffitness}>
      <header class={style.header}>
      <h2> Fitness and Mental Health </h2>
<<<<<<< HEAD

      <div className="container">
        {fitness.map((fitness) => (
          <div className="fitness">
=======
      </header>
      <main class={style.main}>
      <div className={style.container}>
        {fitness.map((fitness) => (
          <div className={style.fitness}>
>>>>>>> main
            <iframe
              src={fitness.url}
              title={fitness.title}
              key={fitness.key}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      </main>
      <footer class={style.footer}></footer>
    </div>
  );
};

export default Fitness;
