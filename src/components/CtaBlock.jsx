const CtaBlock = ({
  block,
  headingText,
  paragraphText,
  errorText,
  btnText,
}) => {
  return (
    <div className={`${block}__container`}>
      <h3 className={`${block}__heading`}>{headingText}</h3>
      <p className={`${block}__paragraph`}>{paragraphText}</p>
      <div className={`${block}__form-container`}>
        <form className={`${block}__form`} novalidate>
          <div className={`${block}__email-input-container`}>
            <input type="email" className={`${block}__email-input`} />
            <p className={`${block}__error-msg`}>{errorText}</p>
          </div>
          <input type="submit" value={btnText} className={`${block}__btn`} />
        </form>
      </div>
    </div>
  );
};

export default CtaBlock;
