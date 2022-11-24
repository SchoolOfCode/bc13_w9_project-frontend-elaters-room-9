import style from "./Videos.module.css";

const Videos = () => {
  const videos = [
    {
      url: "https://www.youtube.com/embed/Xa5EU-qAv-I",
      title: "VSCode Keyboard Shortcuts For Productivity",
      key: 1,
    },
    {
      url: "https://www.youtube.com/embed/PHaECbrKgs0",
      title: "Full React Tutorial #11 - Props",
      key: 2,
    },
    {
      url: "https://www.youtube.com/embed/lFm5IP7ZEYw",
      title: "School of Code Bootcamp: A Day In The Life Of",
      key: 3,
    },
    {
      url: "https://www.youtube.com/embed/Law7wfdg_ls",
      title: "React Router Tutorial | React For Beginners",
      key: 4,
    },
  ];

  return (
    <div className={style.allofvideo}>
      <header class={style.header}>
        <h2> Videos, Lectures & Resources </h2>
      </header>
      <main class={style.main}>
      <div className={style.container}>
        {videos.map((video) => (
          <div className="video">
            <iframe
              src={video.url}
              title={video.title}
              key={video.key}
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

export default Videos;
