const Feature = ({
  block = "feature",
  imgSrc,
  imgAlt,
  headingText,
  paragraphText,
}) => {
  return (
    <div className={`${block}__feature`}>
      <img src={imgSrc} alt={imgAlt} className={`${block}__img`} />
      <h3 className={`${block}__heading`}>{headingText}</h3>
      <p className={`${block}__paragraph`}>{paragraphText}</p>
    </div>
  );
};

export default Feature;
