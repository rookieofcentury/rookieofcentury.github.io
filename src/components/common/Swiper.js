import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styled from 'styled-components';

const SlideImage = styled.img`
  padding: 3rem;
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

function CommonSwiper({ images = [], title }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !Array.isArray(images) || images.length === 0) {
    return <div />; // 대체 처리
  }

  console.log('Swiper ==> ', Swiper);
  console.log('images ==> ', images);
  console.log('isArray:', Array.isArray(images));

  return (
    <div>
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        autoHeight={true}
      >
        {images.map((imgPath, idx) => (
          <SwiperSlide key={idx}>
            <SlideImage
              src={`${process.env.PUBLIC_URL}/${imgPath}`}
              alt={`${title} 이미지 ${idx + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CommonSwiper;