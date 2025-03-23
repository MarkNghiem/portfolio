// Publications Container

// Components
import Publications from "../components/Publication-Publication";
import Recommendation from "../components/Publication-Recommendation";

// Stylesheets
import '../assets/stylesheets/publications.css';

const PublicationsContainer = () => {
  return (
    <div
      id="publications"
      className="publication-container-desktop-layout desktop-layout col-flex mobile-to-tablet-layout publication-layout"
    >
      <Publications />
      <Recommendation />
    </div>
  );
};

export default PublicationsContainer;
