const Link = ({ block, text }) => {
  return (
    <a href="/" className={`${block}__link`}>
      {text}
    </a>
  );
};

export default Link;
