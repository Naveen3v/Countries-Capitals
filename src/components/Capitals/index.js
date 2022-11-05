import './index.css'
import {Component} from 'react'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeOptionId: countryAndCapitalsList[0].id}

  country = id => {
    switch (id) {
      case countryAndCapitalsList[0].id:
        return countryAndCapitalsList[0].country
      case countryAndCapitalsList[1].id:
        return countryAndCapitalsList[1].country
      case countryAndCapitalsList[2].id:
        return countryAndCapitalsList[2].country
      case countryAndCapitalsList[3].id:
        return countryAndCapitalsList[3].country
      case countryAndCapitalsList[4].id:
        return countryAndCapitalsList[4].country
      default:
        return null
    }
  }

  changeSortBy = event => {
    this.setState({activeOptionId: event.target.value})
  }

  render() {
    const {activeOptionId} = this.state
    return (
      <div className="container">
        <div className="inner">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="select">
            <select value={activeOptionId} onChange={this.changeSortBy}>
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id} className="option">
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para"> is capital of which country?</p>
          </div>
          <p className="hidden">{this.country(activeOptionId)}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
