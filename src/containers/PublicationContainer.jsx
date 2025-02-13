// Publications Container

import Publications from '../components/Publication-Publication';
import Recommendation from '../components/Publication-Recommendation';

const PublicationsContainer = () => {
  return (
    <div
      id="publications"
      className="mt-40 grid w-4/5 max-w-[1920px] grid-cols-9 gap-10 place-self-center mb-20"
    >
      <Publications />
      <Recommendation />
    </div>
  );
};

export default PublicationsContainer;
