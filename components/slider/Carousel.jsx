import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

export default function Carroussel(props) {
  const [Carousel, setCarousel] = useState(null);
  const [offsetRadius, setOffsetRadius] = useState(4);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const loadCarousel = async () => {
      const DynamicCarousel = await dynamic(() =>
        import("react-spring-3d-carousel")
      );
      setCarousel(() => DynamicCarousel);
    };

    loadCarousel();
  }, []);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);



  useEffect(() => {
    const table = props.cards.map((element, index) => {
      return { ...element, onClick: () => setGoToSlide(index) };
    });
    setCards(table);
  }, [props.cards, setGoToSlide]);
  

  if (!Carousel) {
    return null; // Мы рендерим пустоту, если Carousel еще не загружен
  }

  let xDown = null;
  let yDown = null;

  const getTouches = (evt) => {
    return (
      evt.touches || evt.originalEvent.touches // browser API
    ); // jQuery
  };

  const handleTouchStart = (evt) => {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  const handleTouchMove = (evt) => {
    if (!xDown || !yDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        setGoToSlide(prevSlide => prevSlide + 1);

      } else {
        /* right swipe */
        setGoToSlide(prevSlide => prevSlide - 1);

      }
    } else {
      if (yDiff > 0) {
        /* up swipe */
      } else {
        /* down swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  };

  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
      />
    </div>
  );
}
