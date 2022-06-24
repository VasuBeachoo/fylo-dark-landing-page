import { useState } from "react";

const CtaBlock = ({
  block,
  headingText,
  paragraphText,
  errorText,
  btnText,
}) => {
  const [validity, setValidity] = useState(true);

  function handleSubmit(e) {
    const input = document.querySelector(`.${block}__email-input`);
    if (input.value === "" || !input.validity.valid) {
      e.preventDefault();
      setValidity(false);
    } else {
      setValidity(true);
    }
  }

  return (
    <div className={`${block}__container`}>
      <h3 className={`${block}__heading`}>{headingText}</h3>
      <p className={`${block}__paragraph`}>{paragraphText}</p>
      <form
        className={`${block}__form`}
        onSubmit={(e) => handleSubmit(e)}
        noValidate
      >
        <div className={`${block}__form-container`}>
          <div className={`${block}__email-input-container`}>
            <input
              type="email"
              className={`${block}__email-input ${block}__email-input--${
                validity ? "valid" : "invalid"
              }`}
              placeholder="email@example.com"
            />
            <p
              className={`${block}__error-msg ${block}__error-msg--${
                validity ? "hidden" : "visible"
              }`}
            >
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
