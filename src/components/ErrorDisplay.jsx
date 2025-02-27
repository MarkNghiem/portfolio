// Component to be rendered if there are any errors

import '../assets/stylesheets/error.css';

import pikaHiding from "../../public/pika-hiding.jpeg";
import chuchuHiding from "../../public/chuchu-hiding.jpeg";

const ErrorDisplay = () => {
  return (
    <div
      id="error-display"
      className="error-container"
    >
      <h1 className="error-title title">
        <span className="text-7xl">❌ </span>ERROR!!
      </h1>
      <br />
      <p className='mx-3'>
        😥 Uh oh... Pika and Chuchu bit the internet cord and now are hiding.
      </p>
      <p className='mx-3'>Please try again later when I caught them.</p>
      <div id="pic-container" className="error-pictures-container">
        <img src={pikaHiding} className="error-pictures avatar-rounded-full" />
        <img src={chuchuHiding} className="error-pictures avatar-rounded-full" />
      </div>
    </div>
  );
};

export default ErrorDisplay;
