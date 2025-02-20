// Publications Container

import { publicationsContainer3xl } from '../assets/styles';

import Publications from "../components/Publication-Publication";
import Recommendation from "../components/Publication-Recommendation";

const PublicationsContainer = () => {
  return (
    <div
      id="publications"
      className={`mt-20 flex w-9/10 flex-col gap-20 place-self-center ${publicationsContainer3xl}`}
    >
      <Publications />
      <Recommendation />
    </div>
  );
};

export default PublicationsContainer;
