import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {lettersCount: 0, searchInput: ''}

  onLettersCount = event => {
    const count = event.target.value.length
    this.setState({lettersCount: count, searchInput: event.target.value})
  }

  onClickCount = () => {
    this.setState({lettersCount: 0, searchInput: ''})
  }

  render() {
    const {lettersCount, searchInput} = this.state
    return (
      <div className="app-container ">
        <div className="card-container">
          <div className="text-container">
            <h1 className="title">Calculate the Letters you enter</h1>
            <div>
              <label htmlFor="Enter-the-phrase" className="search-title">
                Enter the phrase
              </label>
              <br />
              <input
                id="Enter-the-phrase"
                className="search"
                type="text"
                placeholder="Enter the phrase"
                value={searchInput}
                onChange={this.onLettersCount}
              />
            </div>
            <p className="phrase-count" onClick={this.onClickCount}>
              No.of letters: {lettersCount}
            </p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
