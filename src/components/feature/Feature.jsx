  
 

const Feature = ({ title, text, url }) => (
  <div className="landingpage1__features-container__feature">
    <div className="landingpage1__features-container__feature-title">
      <div />
      <h1>{title}</h1>
      <button>
        <a href={url}> Fuente </a>
      </button>
    </div>
    <div className="landingpage1__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
