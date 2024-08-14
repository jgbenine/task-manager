'use client'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CardBlog } from '../CardBlog/CardBlog';
import './SliderBlog.scss'
import 'swiper/css';
import 'swiper/css/pagination';

export function SliderBlog() {
  return (
    <div className="sliderBlog">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        modules={[Pagination]}
        className="sliderBlog"
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1230: {
            slidesPerView: 4,
            spaceBetween: 25,
          }
        }}>
        <SwiperSlide>
          <CardBlog
            title='A personalized dashboard to visualize and manipulate your tasks'
            category='Dashboard'
            imageUrl='/images/common/blog/img-post3.webp'
            link='/'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardBlog
            title='Create, edit and new statuses for your tasks for better organization'
            category='Management'
            imageUrl='/images/common/blog/img-post4.webp'
            link='/'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardBlog
            title='Your best free task manager'
            category='Tasks'
            imageUrl='/images/common/blog/img-post5.webp'
            link='/'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardBlog
            title='Create and access with your personalized credentials'
            category='Credentials'
            imageUrl='/images/common/blog/img-post2.webp'
            link='/'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
