import React from 'react';
import './incon.scss';
class Incon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.onToggleColor = this.onToggleColor.bind(this);
  }

  handleToggle() {
    this.setState((prevState) => ({
      isChecked: !prevState.isChecked,
    }));
  }

  onToggleColor() {
    const resetcolor = document.querySelector('.admin-right');
    resetcolor.style.backgroundColor = this.state.isChecked ? 'white':'rgba(52, 53,65, 1)' ;

  }

  componentDidMount() {
    const onoffcolor = document.getElementById('toggleButton');
    onoffcolor.addEventListener('click', this.onToggleColor);
  }

  componentWillUnmount() {
    const onoffcolor = document.getElementById('toggleButton');
    onoffcolor.removeEventListener('click', this.onToggleColor);
  }

  render() {
    const { isChecked } = this.state;

    return (
      <div className="toggle-container">
        <label className="switch">
          <input
            type="checkbox"
            id="toggleButton"
            checked={isChecked}
            onChange={this.handleToggle}
          />
          <span className="slider"></span>
        </label>
      </div>
    );
  }
}

export default Incon;
