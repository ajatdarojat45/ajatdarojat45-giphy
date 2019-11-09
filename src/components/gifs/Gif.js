import React from 'react';
import PropsTypes from 'prop-types'

var inputValue = ''

const Gif = props => {
  function onKeywordChange() {
    var value = document.getElementById('q-search').value;
    props.onKeywordChange(value);
  }

  function handleSubmit(e){
    props.onSubmitClick(e)
    inputValue = props.keyword;
  }
  

  return (
    <div>
      <div className="konten">
        <div className="toolBar">
          {
            props.isDark? 
            <span onClick={() => props.onToggleThemeClick(false)} className="theme">⚪️ Light</span> 
            : 
            <span onClick={() => props.onToggleThemeClick(true)} className="theme">⚫️ Dark</span>
          }
        </div>
        <div className="serach">
          <form className="input" onSubmit={(e) => handleSubmit(e)}>
            <input type="text" id="q-search" aria-label="for submit" onChange={() => onKeywordChange()} autoComplete="off" required="requaired"/>
            <button type="submit" id="submit" aria-label="for submit"><i className="fa fa-search"></i></button>
          </form>
        </div>
        <div className="toolBar">
          <div className="sort">
            <button id="btn-trending" className={"button " + (props.gifs.length > 1 && props.search === false ? 'active' : null)} onClick={() => props.onTrendingButtonClick()}>
                Trending
            </button>
            <button id="btn-random" className={"button " + (props.gifs.length === 1 ? 'active' : null)} onClick={() => props.onRandomButtonClick()}>
                Random
            </button>
          </div>
          <div className="togglePlay">
              {
                props.play === true ? 
                <button id="btn-play" className="button" onClick={() => props.onTogglePlayPauseClick()}>
                  <i className="fa fa-pause"> </i> Pause
                </button>
                : 
                <button id="btn-play" className="button" onClick={() => props.onTogglePlayPauseClick()}>
                  <i className="fa fa-play"></i> Play
                </button>
              }
          </div>
        </div>
        <div className="content-list">
          {
            props.gifs && props.gifs.map((gif, index) => {
              return (
              <div className="list-container flat-link" key={index}>
                {
                  props.play && props.play === true ?
                  <img className="img-content" src={gif.images && gif.images.original.webp} alt=""/>
                  : <img className="img-content" src={gif.images && gif.images.original_still.url} alt=""/>
                }
              </div>
              )
            })
          }
        </div>
        {
          props.gifs.length !== 1 && props.search === false?
          <ul className="roolBar">
            <li key="1" onClick={() => props.onPaginationButtonClick('trending', 1)} className={"pagination " + (props.page === 1 ? 'active' : '')}>1</li>
            <li key="2" onClick={() => props.onPaginationButtonClick('trending', 2)} className={"pagination " + (props.page === 2 ? 'active' : '')}>2</li>
            <li key="3" onClick={() => props.onPaginationButtonClick('trending', 3)} className={"pagination " + (props.page === 3 ? 'active' : '')}>3</li>
            <li key="4" onClick={() => props.onPaginationButtonClick('trending', 4)} className={"pagination " + (props.page === 4 ? 'active' : '')}>4</li>
          </ul> : null
        }
      </div>
    </div>
  )
}

Gif.PropsTypes = {
  gifs: PropsTypes.array.isRequired,
  play: PropsTypes.bool.isRequired,
  search: PropsTypes.bool.isRequired,
  page: PropsTypes.number.isRequired,
  keyword: PropsTypes.string.isRequired,
  isDark: PropsTypes.bool.isRequired,

  onRandomButtonClick: PropsTypes.func.isRequired,
  onTrendingButtonClick: PropsTypes.func.isRequired,
  onPaginationButtonClick: PropsTypes.func.isRequired,
  onKeywordChange: PropsTypes.func.isRequired,
  onSubmitClick: PropsTypes.func.isRequired,
  onTogglePlayPauseClick: PropsTypes.func.isRequired,
  onToggleThemeClick: PropsTypes.func.isRequired,
}

export default Gif