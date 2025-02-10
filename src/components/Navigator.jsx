import { useEffect, useState } from 'react';

const Navigator = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = (innerHeight) => {
      const scrollPosition = window.scrollY;
      setVisible(scrollPosition > innerHeight);
    };
  }, [])

  return (
    <div id="navigator" className="fixed top-40 right-5 text-end text-lg">
      <ul>
        <li className='mb-2'>
          About <span className="ml-2">●</span>
        </li>
        <li className='mb-2'>
          Projects <span className="ml-2">●</span>
        </li>
        <li>
          Publications <span className="ml-2">●</span>
        </li>
      </ul>
    </div>
  );
};

export default Navigator;
