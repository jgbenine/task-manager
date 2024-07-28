'use client'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './SliderBlog.scss'
import 'swiper/css';
import 'swiper/css/pagination';
import { CardBlog } from '../CardBlog/CardBlog';

export function SliderBlog() {
  return (
    <div className="sliderBlog">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
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
            spaceBetween: 40,
          },
          1230: {
            slidesPerView: 4,
            spaceBetween: 50,
          }}}>
        <SwiperSlide>
          <CardBlog
            title='Organize your daily job enhance your life performance'
            category='Category'
            imageUrl='/images/common/img-post1.png'
            link='/'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardBlog
            title='Mark one activity as done makes your brain understands the power of doing'
            category='Category'
            imageUrl='/images/common/img-post2.png'
            link='/'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardBlog
            title='Careful with missunderstanding the difference between a list of things and a list of desires'
            category='Category'
            imageUrl='/images/common/img-post3.png'
            link='/'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardBlog
            title='Careful with missunderstanding the difference between a list of things and a list of desires'
            category='Category'
            imageUrl='/images/common/img-post3.png'
            link='/'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardBlog
            title='Organize your daily job enhance your life performance'
            category='Category'
            imageUrl='/images/common/img-post1.png'
            link='/'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardBlog
            title='Mark one activity as done makes your brain understands the power of doing'
            category='Category'
            imageUrl='/images/common/img-post2.png'
            link='/'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardBlog
            title='Careful with missunderstanding the difference between a list of things and a list of desires'
            category='Category'
            imageUrl='/images/common/img-post3.png'
            link='/'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardBlog
            title='Careful with missunderstanding the difference between a list of things and a list of desires'
            category='Category'
            imageUrl='/images/common/img-post3.png'
            link='/'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardBlog
            title='Careful with missunderstanding the difference between a list of things and a list of desires'
            category='Category'
            imageUrl='/images/common/img-post3.png'
            link='/'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardBlog
            title='Organize your daily job enhance your life performance'
            category='Category'
            imageUrl='/images/common/img-post1.png'
            link='/'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardBlog
            title='Careful with missunderstanding the difference between a list of things and a list of desires'
            category='Category'
            imageUrl='/images/common/img-post3.png'
            link='/'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
