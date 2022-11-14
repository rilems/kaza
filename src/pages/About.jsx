import Banner from "../components/Banner";
import moreData from "../data/moreData";
import Collapse from "../components/Collapse";
import imageBanner from "../assets/aboutbannerDesktop.png";

const About = () => {
  const content = (title) => {
    switch (title) {
      case "fiability":
        return moreData.fiability;
      case "respect":
        return moreData.respect;
      case "service":
        return moreData.service;
      case "sécurity":
        return moreData.security;
      default:
        console.log("default");
        break;
    }
  };
  return (
    <div className="about">
      <Banner image={imageBanner} />
      <div className="about__dropdowns">
        <Collapse title="fiabilité" content={content("fiability")} />
        <Collapse title="respect" content={content("respect")} />
        <Collapse title="service" content={content("service")} />
        <Collapse title="sécurité" content={content("sécurity")} />
      </div>
    </div>
  );
};

export default About;