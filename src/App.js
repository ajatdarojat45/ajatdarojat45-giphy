import React, {Component} from 'react';
import '../src/assets/css/gif.css'
import Gif from './components/gifs/Gif';
import axios from 'axios';

class App extends Component {
  constructor (props){
    super(props)
    this.state = {
      apiKey: 'api_key=exrDmJlcqkjSLUwHLf5YHYX7Kr9uJRI5',
      apiUrl: 'https://api.giphy.com/v1/gifs/',
      initGifs: [],
      gifs: [],
      sort: 'trending',
      search: false,
      keyword: '',
      page: 1,
      play: true,
      isDark: false,
      dataPerPage: 10,
    }
  }

  componentDidMount(){
    this.handleFetchData('trending')
    if(localStorage.getItem('preferredTheme') === 'dark') {
      this.setDarkMode(true)
    }
  }

  handleFetchData(sort){
    axios.get(`${this.state.apiUrl}${this.state.sort}?${this.state.apiKey}&limit=200&rating=G`)
    .then(response => {     
      if (this.state.sort === 'trending') {        
        this.setState({initGifs: response.data.data, sort: sort});        
        return 'trending';
      }else{
        let gifs = [];
        gifs.push(response.data.data);
        this.setState({gifs: gifs, sort: sort});
      }
    })
    .then((sort) => {
      this.handlePageChange(sort, 1)
    })
    .catch(error => {
      throw(error);
    });
  }

  handleRandomButtonClick(){
    this.handleFetchData('random');
  }

  handleTrendingButtonClick(){
    this.handlePageChange('trending', 1)
  }

  handlePageChange(sort, page){        
    if (sort === 'trending') {
      var gifs = [];
      var startPage = (this.state.dataPerPage*page) - this.state.dataPerPage;
      var endPage   =  this.state.dataPerPage*page;
      for (let i = startPage; i < endPage; i++) {
        gifs.push(this.state.initGifs[i]);
      }          
      this.setState({gifs: gifs, page: page, search: false});  
    }
  }

  handleKeywordChange(q){
    this.setState({keyword: q})    
  }

  handleSubmit(e){
    e.preventDefault();
    const keyword = this.state.keyword;
    axios.get(`${this.state.apiUrl}search?q=${keyword}&${this.state.apiKey}`)
    .then(response => {    
      this.setState({gifs: response.data.data, search: true})
    })
    .catch(error => {
      throw(error);
    });
  }

  handleTogglePlayPauseClick(){
    this.setState({play: !this.state.play})
  }

  setDarkMode(isDark) {
    if(isDark) {
      localStorage.setItem('preferredTheme', 'dark');
    } else {
      localStorage.removeItem('preferredTheme');
    }
    document.body.classList.toggle("darkmode");
    this.setState({isDark: isDark})
  }

  render() {
    return (
      <div className="container">
        <Gif 
          gifs={this.state.gifs} 
          page={this.state.page}
          keyword={this.state.keyword}
          search={this.state.search}
          play={this.state.play}
          isDark={this.state.isDark}
          onRandomButtonClick={() => this.handleRandomButtonClick()} 
          onTrendingButtonClick={() => this.handleTrendingButtonClick()} 
          onPaginationButtonClick={(sort, page) => this.handlePageChange(sort, page)}
          onKeywordChange={(q) => this.handleKeywordChange(q)}
          onSubmitClick={(q) => this.handleSubmit(q)}
          onTogglePlayPauseClick={() => this.handleTogglePlayPauseClick()}
          onToggleThemeClick={(isDark) => this.setDarkMode(isDark)}
        />
      </div>
    );
  }
}

export default App;
