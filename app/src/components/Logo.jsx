import React, { Component } from 'react';

export default class Logo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
            <img className="rc-logo" {...this.props} />
      </div>
    );
  }
}
Logo.propTypes = {
    src: React.PropTypes.string.isRequired
};
Logo.defaultProps = {
    src: "https://facebook.github.io/react/img/logo.svg"
};

