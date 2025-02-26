// Publications Container

import Publications from "../components/Publication-Publication";
import Recommendation from "../components/Publication-Recommendation";

const PublicationsContainer = () => {
  return (
    <div
      id="publications"
      className="publication-container-desktop-layout desktop-layout col-flex mobile-to-tablet-layout mt-20"
    >
      <Publications />
      <Recommendation />
    </div>
  );
};

export default PublicationsContainer;
