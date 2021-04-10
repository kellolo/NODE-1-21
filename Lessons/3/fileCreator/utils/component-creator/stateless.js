module.exports = name => {
  return `
    import React from 'react';
    import './style.scss';

    export default props => {
      const {  } = props;
      return <div className="${ name }">

      </div>;
    }
  `;
};