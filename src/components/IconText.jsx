const IconText = ({ block, iconSrc, iconAlt, paragraphText }) => {
  return (
    <div className={`${block}__icon-text-container`}>
      <img src={iconSrc} alt={iconAlt} className={`${block}__icon`} />
      <p className={`${block}__paragraph`}>{paragraphText}</p>
    </div>
  );
};

export default IconText;
