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
    src: "https://external-lhr3-1.xx.fbcdn.net/safe_image.php?d=AQA5SRgxgPFpIM6K&url=https%3A%2F%2Fscontent-lhr3-1.xx.fbcdn.net%2Ft39.2365-6%2F11057038_1603675009889853_2020621244_n.png"
};

