import style from "./wellbeing.module.css";

/**
 * 
 * This Wellbeing component currently holds a wellbeing array,
 * this array has a small selection of videos.
 * It is harcoded in the front end and mapped in the return function.
 * Future development will look to store a larger selection of videos on the backend,
 * these will be accessed through the appropriate fetch request.
 
 */

const Wellbeing = () => {
  const wellbeing = [
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
    <div className={style.allOfWellbeing}>
      <header class={style.header}>
      <h2> Your Wellbeing </h2>
      </header>
      <main class={style.main}>
      <div className={style.container}>
        {wellbeing.map((wellbeing) => (
          <div className={style.wellbeing}>
            <iframe
              src={wellbeing.url}
              title={wellbeing.title}
              key={wellbeing.key}
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

export default Wellbeing;
