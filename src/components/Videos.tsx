import mp4 from "../assets/video/concierto.mp4";
import ogg from "../assets/video/concierto.ogg";
import webm from "../assets/video/concierto.webm";

const Videos = () => {
  return (
    <>
      <div className="video">
        <div className="overlay">
          <div className="contenedor contenido-video">
            <h2>Rock & EDM Festival</h2>
            <p>Julio 2023 Quilpué,Chile</p>
            
          </div>
        </div>
        <video autoPlay muted loop>
              <source src={mp4} type="video/mp4" />
              <source src={ogg} type="video/ogg" />
              <source src={webm} type="video/webm" />
            </video>
      </div>
      
    </>
  );
};

export default Videos;
