import Image from 'next/image';  
import { google, slack, atlassian, dropbox, shopify } from './imports';


const Brand = () => (
  <div className="landingpage1__brand section__padding">
    <div>
      <Image src={google} />
    </div>
    <div>
      <Image src={slack} />
    </div>
    <div>
      <Image src={atlassian} />
    </div>
    <div>
      <Image src={dropbox} />
    </div>
    <div>
      <Image src={shopify} />
    </div>
  </div>
);

export default Brand;
