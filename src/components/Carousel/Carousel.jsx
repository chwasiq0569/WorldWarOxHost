import React from "react";
import ClassicsImg1 from '../../assets/Containers.webp';
import ClassicsImg2 from '../../assets/Dusted.webp';
// import ClassicsImg3 from '../../assets/Containers 7.png';
import './Carousel.css'


const slideWidth = 24.2;

const _items = [
  {
    player: {
      title: 'CONTAINERS',
      desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
      image: ClassicsImg1,
    },
  },
  {
    player: {
      title: "DUSTED",
      desc: "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
      image: ClassicsImg2,
    },
  },
  {
    player: {
      title: 'CONTAINERS',
      desc: 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
      image: ClassicsImg1,
    },
  },
  {
    player: {
      title: "DUSTED",
      desc: "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
      image: ClassicsImg2,
    },
  },
  {
    player: {
      title: 'CONTAINERS',
      desc: 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
      image: ClassicsImg1,
    },
  },
  {
    player: {
      title: "DUSTED",
      desc: "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
      image: ClassicsImg2,
    },
  }
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
    },
    player: _items[idx].player,
  };

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles, filter: 'grayscale(1)' };
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles, opacity: 0 };
      break;
  }

  return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
  const item = createItem(pos, idx, activeIdx);

  return (
    <li className="carousel__slide-item" style={item.styles}>
      <div className="carousel__slide-item-img-link">
        <img src={item.player.image} alt={item.player.title} />
      </div>
      <div className="carousel-slide-item__body">
        <h4>{item.player.title}</h4>
      </div>
    </li>
  );
};

const keys = Array.from(Array(_items.length).keys());

const Carousel = () => {
  const [items, setItems] = React.useState(keys);
  const [isTicking, setIsTicking] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map(
          (_, i) => prev[(i - jump + bigLength) % bigLength],
        );
      });
    }
  };

  const handleDotClick = (idx) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  React.useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  React.useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
  }, [items]);

  return (
    <div className="carousel__wrap">
      <div className="carousel__inner">
        <div className="carousel__container">
          <ul className="carousel__slide-list">
            {items.map((pos, i) => (
              <CarouselSlideItem
                key={i}
                idx={i}
                pos={pos}
                activeIdx={activeIdx}
              />
            ))}
          </ul>
        </div>

        <div className="carousel__dots">
          <button className="carousel_btn carousel_btn--prev" onClick={() => prevClick()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="87" viewBox="0 0 60 87" fill="none">
              <path d="M0 43.5L59.25 0.631744L59.25 86.3683L0 43.5Z" fill="#9F9F9F" />
            </svg>
          </button>
          {items.slice(0, length - 1).map((pos, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={i === activeIdx ? 'dot active' : 'dot'}
            />
          ))}
          <button className="carousel_btn carousel_btn--next" onClick={() => nextClick()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="87" viewBox="0 0 60 87" fill="none">
              <path d="M60 43.5L0.75 86.3683L0.75 0.631744L60 43.5Z" fill="#ED1C27" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

// ReactDOM.render(<Carousel />, document.getElementById('root'));