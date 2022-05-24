function ContentContainer({ styleClass, modifier, children }) {
  return (
    <div
      className={`content-container ${
        modifier ? `content-container--${modifier}` : ""
      }`}
    >
      <div
        className={`content-container__container ${
          styleClass ? styleClass : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default ContentContainer;
