import Carousel from 'nuka-carousel';

export default function Slider() {
  const settings = {
    framePadding: '20px',
    slidesToShow: 3,
    cellSpacing: 30,
    decorators: [],
    wrapAround: true,
    // autoplay: true,
    autoplayInterval: 2000,
    cellAlign: 'center',
  };
  return (
    <Carousel {...settings}>
      <img src="https://unsplash.it/200" />
      <img src="https://unsplash.it/400" />
      <img src="https://unsplash.it/600/200" />
      <img src="https://unsplash.it/200" />
      <img src="https://unsplash.it/200" />
    </Carousel>
  );
}
