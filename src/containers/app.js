import React, {Component} from 'react'
import SearchBar from '../components/search-bar'
import VideoList from './video-list'
import VideoDetail from '../components/video-detail'
import Video from '../components/video'
import axios from 'axios'
import '../style/style.css'

const API_END_POINT = 'https://api.themoviedb.org/3/'
const POPULAR_MOVIES_URL = 'discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images'
const API_KEY = 'api_key=25574e6cf05efdc183382e06af719cfc'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { movieList: {}, currentMovie: {} }
  }
  UNSAFE_componentWillMount() {
    this.initMovies()
  }
  initMovies(){
    axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`)
      .then(function(response){
        this.setState({movieList:response.data.results.slice(1,6),currentMovie:response.data.results[0]}, function(){
          this.applyVideoToCurrentMovie()
        })
        // on affecte le plus populaire au film courant et les 5 suivants dans la liste des 5 films
        // on va chercher la vidéo du film le plus populaire
      }.bind(this))
  }
  applyVideoToCurrentMovie(){
    axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?append_to_response=videos&include_adult=false&${API_KEY}`)
      .then(function(response){
        const youtubeKey = response.data.videos.results[0].key
        let newCurrentMovieState = this.state.currentMovie
        newCurrentMovieState.videoId = youtubeKey
        this.setState({currentMovie : newCurrentMovieState})
      }.bind(this))
  }
  render() {
    // render déclenché trop tôt par rapport à la requête, on doit s'assurer que la liste est renseignée pour afficher la video list
    const renderVideoList = () => {
      if (this.state.movieList.length>=5) {
        return <VideoList movieList={this.state.movieList}/>
      }
    }
    return (
      <div>
        <div className="search_bar">
          <SearchBar/>
        </div>
        <div className="row">
          <div className="col-md-8">
            <Video videoId={this.state.currentMovie.videoId}/>
            <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview}/>
          </div>
          <div className="col-md-4">
            {renderVideoList()}
          </div>
        </div>
      </div>
    ) 
  }
}

export default App
