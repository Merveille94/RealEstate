import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ content = "Learn More", bg = "bg-customGreen"}) => {
  return (
    <a href="#">
      <button type="submit" className={`rounded-md ${bg} text-slate-100 text-sm px-4 py-3`}>
        {content}
      </button>
    </a>
  );
}

Button.propTypes = {
  content: PropTypes.string,
  bg: PropTypes.string,
};

export default Button;
