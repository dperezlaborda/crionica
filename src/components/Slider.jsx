import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageOne from '../images/img1.jpg';
import ImageTwo from '../images/img2.jpeg';
import ImageThree from '../images/img3.jpg';
import CardBio from './CardBio';

const items = [
  {
    img: ImageOne,
    name:'Rodolfo',
    bio:'Etiam vulputate odio sed porta vehicula. Etiam interdum fringilla ex, sed lobortis tellus volutpat nec. Praesent sapien erat, sagittis sit amet diam at, viverra sagittis diam. Nulla eu mauris eget diam condimentum faucibus. Suspendisse est lectus, fermentum quis fermentum pulvinar, venenatis a diam.'
  },
  {
    img: ImageTwo,
    name:'María',
    bio:'Etiam vulputate odio sed porta vehicula. Etiam interdum fringilla ex, sed lobortis tellus volutpat nec. Praesent sapien erat, sagittis sit amet diam at, viverra sagittis diam. Nulla eu mauris eget diam condimentum faucibus. Suspendisse est lectus, fermentum quis fermentum pulvinar, venenatis a diam.'
  },
  {
    img:ImageThree,
    name:'Francisco',
    bio:'Etiam vulputate odio sed porta vehicula. Etiam interdum fringilla ex, sed lobortis tellus volutpat nec. Praesent sapien erat, sagittis sit amet diam at, viverra sagittis diam. Nulla eu mauris eget diam condimentum faucibus. Suspendisse est lectus, fermentum quis fermentum pulvinar, venenatis a diam.'
  }
];

const Slider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <CardBio img={item.img} name={item.name} bio={item.bio}/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Slider;