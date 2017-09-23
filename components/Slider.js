import Slider from 'react-slick-ssr';

export default function AppSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    draggable: false,
  };
  return (
    <Slider {...settings}>
      <img src="static/sample.jpeg" />
      <img src="static/sample.jpeg" />
      <img src="static/sample.jpeg" />
      <img src="static/sample.jpeg" />
      <img src="static/sample.jpeg" />
      <img src="static/sample.jpeg" />
      <img src="static/sample.jpeg" />
    </Slider>
  );
}
