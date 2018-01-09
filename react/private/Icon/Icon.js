import styles from './Icon.less';

import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

export default function Icon({
  markup,
  className,
  svgClassName,
  ...restProps
}) {
  const svgWithClasses = markup.replace(
    '<svg ',
    `<svg class="${classnames(styles.svg, svgClassName)}" `
  );
  const combinedProps = {
    ...restProps,
    className: classnames(styles.root, className)
  };

  return (
    <span
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: svgWithClasses }}
      {...combinedProps}
    />
  );
}

Icon.propTypes = {
  markup: PropTypes.string.isRequired,
  svgClassName: PropTypes.string,
  className: PropTypes.string
};

Icon.defaultProps = {
  svgClassName: '',
  className: ''
};
