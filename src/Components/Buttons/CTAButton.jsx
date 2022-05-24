import { Link } from "react-router-dom";

// Available modifiers: --primary; --secondary;
// See _buttons.scss

function CTAButton({ modifier, destination, text, htmlTag }) {
  return (
    <>
      {htmlTag === "link" ? (
        <Link to={destination} className={`btn btn--${modifier}`}>
          {text}
        </Link>
      ) : (
        <button className={`btn btn--${modifier}`}>{text}</button>
      )}
    </>
  );
}

export default CTAButton;
