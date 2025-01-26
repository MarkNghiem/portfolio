// Component to be rendered if there are any errors

import pikaHiding from "../../public/pika-hiding.jpeg";
import chuchuHiding from "../../public/chuchu-hiding.jpeg";

const ErrorDisplay = () => {
  return (
    <div
      id="error-display"
      className="font-san flex h-dvh flex-col items-center justify-center bg-gradient-to-br from-amber-300/30 from-10% via-slate-300/20 via-60% to-red-300/20 to-90% text-center text-2xl text-slate-700 font-stretch-125%"
    >
      <h1 className="flex items-center gap-4 text-4xl">
        <span className="text-6xl">❌ </span>ERROR!!
      </h1>
      <br />
      <p>
        😥 Uh oh... Pika and Chuchu bit the internet cord and now are hiding.
      </p>
      <p>Please try again later when I caught them.</p>
      <div id="pic-container" className="mt-10 flex gap-20">
        <img src={pikaHiding} className="size-96 rounded-full object-cover" />
        <img src={chuchuHiding} className="size-96 rounded-full object-cover" />
      </div>
    </div>
  );
};

export default ErrorDisplay;
