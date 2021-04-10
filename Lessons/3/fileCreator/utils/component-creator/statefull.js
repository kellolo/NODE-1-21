module.exports = name => {
  return `
    import React, { Component } from 'react';
    import './style.scss';

    export default class ${ name } extends Component {
      constructor(props) {
        super(props);

        this.state = {

        };
      }

      render() {
        const {  } = this.props;
        const {  } = this.state;

        
        return <div className="${ name }">

        </div>;
      }
    }
  `;
};