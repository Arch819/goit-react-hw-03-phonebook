import { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={onChange} />
      </label>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
