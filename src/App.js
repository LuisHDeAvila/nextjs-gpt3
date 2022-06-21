import SEO from './Seo';  
import { Footer, Blog, Possibility, Features, WhatLanding, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

const App = () => (
  <div className="App">
    <SEO siteTitle="eleache site" title="Home" description="landing page en nextjs" />
    <div className="gradient__bg">
      <Navbar />

    </div>
    <Features />
    {/* <Brand />
    <WhatLanding />
    <Possibility />
    <CTA />
    <Blog />
    <Footer /> */}
  </div>
);

export default App;
