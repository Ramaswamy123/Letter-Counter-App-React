import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    const letter = event.target.value
    this.setState({searchInput: letter})
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="heading">Calculate the Letters you entered</h1>
          <label className="para" htmlFor="phrase-text">
            Enter the phrase
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter the phrase"
            className="input"
            id="phrase-text"
            value={searchInput}
            onChange={this.onChangeInput}
          />
          <p className="letters-count">No.of letters: {searchInput.length}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="image"
          alt="letters calculator"
        />
      </div>
    )
  }
}
export default LettersCalculator
