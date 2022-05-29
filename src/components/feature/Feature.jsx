  
 

const Feature = ({ title, text }) => (
  <div className="landingpage1__features-container__feature">
    <div className="landingpage1__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="landingpage1__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
