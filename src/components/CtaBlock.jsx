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
      <form className={`${block}__form`} noValidate>
        <div className={`${block}__form-container`}>
          <div className={`${block}__email-input-container`}>
            <input
              type="email"
              className={`${block}__email-input`}
              placeholder="email@example.com"
            />
            <p className={`${block}__error-msg ${block}__error-msg--hidden`}>
              {errorText}
            </p>
          </div>
          <input
            type="submit"
            value={btnText}
            className={`${block}__submit-input`}
          />
        </div>
      </form>
    </div>
  );
};

export default CtaBlock;
