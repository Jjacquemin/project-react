import React, {Component} from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { searchText:'', placeHolder:'Tapez votre film...' }
  }
  render() {
    return (
      <div>
        <input onChange = { this.handleChange.bind(this) } placeholder = { this.state.placeHolder }/>
      </div>
    )
  }
  handleChange(event){
    // on ne peut pas mettre à jour le state directement
    // this.state.searchText = event.target.value
    // il faut utiliser setState
    // attention handleChange n'a pas le state en this, il faut binder lors de l'appel dans onChange
    this.setState({ searchText: event.target.value })
    // déclenche un render qui ne raffraichira que la partie modifiée par le setState donc uniquement <p></p>
  }
}

export default SearchBar
