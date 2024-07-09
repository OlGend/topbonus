"use client";
import React, { useEffect, useRef, useState } from 'react';

const KeitaroIframe = ({ links, newUrl }) => {
  const [currentLinkIndex, setCurrentLinkIndex] = useState(0);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);
  const iframeRef = useRef(null);

  console.log("NEWURL", newUrl);

  useEffect(() => {
    const iframe = iframeRef.current;

    const handleLoadError = () => {
      console.log(`Error loading ${links[currentLinkIndex]}, moving to next link.`);
      setCurrentLinkIndex((prevIndex) => {
        if (prevIndex + 1 < links.length) {
          return prevIndex + 1;
        } else {
          setHasReachedEnd(true);
          return prevIndex;
        }
      });
    };

    if (iframe && !hasReachedEnd) {
      iframe.onload = () => {
        console.log(`Successfully loaded ${links[currentLinkIndex]}`);
      };
      iframe.onerror = handleLoadError;

      // Установка src должна быть последней
      iframe.src = links[currentLinkIndex] + `/${newUrl}`;
    }

    // Очистка обработчиков событий при размонтировании
    return () => {
      if (iframe) {
        iframe.onload = null;
        iframe.onerror = null;
      }
    };
  }, [currentLinkIndex, links, newUrl, hasReachedEnd]);

  return (
    <div className="iframe-container">
      <iframe 
        ref={iframeRef} 
        style={{ position: 'absolute', width: '100%', height: '500px', left: "0", top: "100px" }} 
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
};

export default KeitaroIframe;
