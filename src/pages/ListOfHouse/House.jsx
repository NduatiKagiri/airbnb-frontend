import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Buttons/Loading';
import HouseCard from '../../components/House/HouseCard';
import getHouse from '../../redux/actions/House/getHouse';

function House() {
  const dispatch = useDispatch();
  const { houses } = useSelector((state) => state.house);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    dispatch(getHouse());
  }, [dispatch]);

  return (
    <div className="pb-8 px-4 md:px-16">
      <div className="flex flex-col items-center justify-center py-8 md:py-16 md:pb-32">
        <h1 className=" text-4xl font-bold text-center">
          Latest Model Houses Available.
        </h1>
        <p className=" text-xs text-slate-400">
          Please select your car for reservation.
        </p>
      </div>
      {houses.length > 0
        ? (
          <Carousel responsive={responsive} showDots>
            {houses.map((house) => (
              <div key={house.id}>
                <HouseCard
                  key={house.id}
                  id={house.id}
                  img={house.image}
                  name={house.name}
                  housePrice={house.price}
                />
              </div>
            ))}
          </Carousel>
        )
        : <Loading message="Loading Cars" /> }
    </div>
  );
}

export default House;
