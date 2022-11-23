import "bootstrap/dist/css/bootstrap.min.css";

const Videos = () => {
  return (
    <div className="Videos">
      <h2> Videos, Lectures & Resources </h2>
      <div class="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/Xa5EU-qAv-I"
          title="VSCode Keyboard Shortcuts For Productivity"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Videos;
