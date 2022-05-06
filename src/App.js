import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Stage, Layer, Image, Text } from 'react-konva';
import useImage from 'use-image';
// import Video from './Video';
import { Html } from 'react-konva-utils';

const LionImage = () => {
  const [image] = useImage(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTDkP7cWIBGzvnpvXC8R9rZW4nmzpbNjbXV6F7y7DAzA5gBtIFBSgPRCo7sAFsABalfTo&usqp=CAU'
  );
  return <Image image={image} />;
};
export default function App() {
  const [textContent, setTextContent] = useState('Some text on canvas');
  const [showText, setShowText] = useState(true);
  const handleText = () => {
    setShowText((prevS) => !prevS);
  };

  return (
    <div className="App">
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <LionImage />
          {showText && <Text text={textContent} fontSize={25} padding={300} />}
          <Html
            divProps={{
              style: {
                // position: 'absolute',
              },
            }}
          >
            <video width="750" height="500" controls className="video">
              <source src="mov_bbb.mp4" type="video/mp4" />
            </video>
            <button className="textbutton" onClick={handleText}>
              Hide Text
            </button>
          </Html>
        </Layer>
      </Stage>
    </div>
  );
}
