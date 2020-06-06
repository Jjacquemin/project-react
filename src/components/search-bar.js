import React, {Component} from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { searchText:'', placeHolder:'Tapez votre film...' }
  }
  render() {
    return <input onChange = { this.handleChange } placeholder = { this.state.placeHolder }/>
  }
  handleChange(){
    console.log('Une saisie')
  }
}

export default SearchBar
