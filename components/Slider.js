import Slider from 'react-slick';

export default function MySlider() {
  return (
    <div className="container">
      <Slider centerMode>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/300" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/400" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/500" />
        </div>
      </Slider>
      <style jsx>{`
        .container {
          margin: 20px 0;
        }
        .container div {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 500px;
        }
        img {
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
