const Testimonial = ({
  block = "testimonials",
  testimonialText,
  imgSrc,
  imgAlt,
  authorName,
  authorTitle,
}) => {
  return (
    <div className={`${block}__testimonial`}>
      <p className={`${block}__testimonial-paragraph`}>{testimonialText}</p>
      <div className={`${block}__author`}>
        <img src={imgSrc} alt={imgAlt} className={`${block}__img`} />
        <div className={`${block}__info`}>
          <p className={`${block}__name`}>{authorName}</p>
          <p className={`${block}__title`}>{authorTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
