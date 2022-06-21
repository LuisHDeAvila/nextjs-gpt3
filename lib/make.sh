#!/usr/bin/env bash
MAKE_TEMPLATE(){
DATABASE=$(ruby ./scraper.rb)
cat << TEMPLATE

import Feature from '../../components/feature/Feature';

const featuresData = [
$DATABASE
];

const Features = () => (
  <div className="landingpage1__features section__padding" id="features">
    <div className="landingpage1__features-heading">
      <h1 className="gradient__text">Interfaces</h1>
      <p>solicite acceso anticipado para comenzar</p>
    </div>
    <div className="landingpage1__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} url={item.url} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;

TEMPLATE
}

MAKE_TEMPLATE > ../src/containers/features/Features.jsx
cd ../

yarn dev 