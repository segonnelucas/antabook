import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ moreClass, transitionTime, label, ...props }) => {

  return (
    <button
      type="button"
      data-timing={transitionTime + "s"}
      style={{marginRight: transitionTime + 'em'}}
      className={moreClass ? 'button ' + moreClass : 'button'}
      {...props}
    >
      <span>{label}</span>
    </button>
  );
};

Button.propTypes = {
  /**
   * Transition duration
   */
  transitionTime: PropTypes.number.isRequired,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  transitionTime: 0.25
};
