import { SliderBlog } from '@/components/Slider/SliderBlog';
import './Blog.scss';

export function BlogSection() {
  return (
    <section className="blogSection">
      <div className="blogSection__container">
        <h2 className="blogSection__title">good thinks</h2>
        <SliderBlog />
      </div>
    </section>
  )
}
