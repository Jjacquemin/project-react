import React, {Component} from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      searchText: '', 
      placeHolder: 'Tapez votre film...' ,
      intervalBeforeReqest: 1000,
      lockRequest: false
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-8 input-group">
          <input type="text" className="form-control input-lg" onChange = { this.handleChange.bind(this) } placeholder = { this.state.placeHolder }/>
          <span className="input-group-btn">
            <button className="btn btn-secondary" onClick={this.handleOnClick.bind(this)}>Go</button>
          </span>
        </div>
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
    if (!this.state.lockRequest) {
      this.setState({lockRequest:true})
      setTimeout(function(){this.search()}.bind(this),this.state.intervalBeforeReqest)
    }
  }
  handleOnClick(event){
    this.search()
  }
  search() {
    this.props.callback(this.state.searchText)
    this.setState({lockRequest:false})
  }
}

export default SearchBar
