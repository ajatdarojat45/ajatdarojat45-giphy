(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(46)},23:function(e,t,n){},24:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(11),r=n.n(o),c=(n(23),n(12)),l=n(13),s=n(15),u=n(14),d=n(16),g=(n(24),n(1)),h=n.n(g),m=function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:"konten"},i.a.createElement("div",{className:"toolBar"},e.isDark?i.a.createElement("span",{onClick:function(){return e.onToggleThemeClick(!1)},className:"theme"},"\u26aa\ufe0f Light"):i.a.createElement("span",{onClick:function(){return e.onToggleThemeClick(!0)},className:"theme"},"\u26ab\ufe0f Dark")),i.a.createElement("div",{className:"serach"},i.a.createElement("form",{className:"input",onSubmit:function(t){return function(t){e.onSubmitClick(t),e.keyword}(t)}},i.a.createElement("input",{type:"text",id:"q-search","aria-label":"for submit",onChange:function(){return function(){var t=document.getElementById("q-search").value;e.onKeywordChange(t)}()},autoComplete:"off",required:"requaired"}),i.a.createElement("button",{type:"submit",id:"submit","aria-label":"for submit"},i.a.createElement("i",{className:"fa fa-search"})))),i.a.createElement("div",{className:"toolBar"},i.a.createElement("div",{className:"sort"},i.a.createElement("button",{id:"btn-trending",className:"button "+(e.gifs.length>1&&!1===e.search?"active":null),onClick:function(){return e.onTrendingButtonClick()}},"Trending"),i.a.createElement("button",{id:"btn-random",className:"button "+(1===e.gifs.length?"active":null),onClick:function(){return e.onRandomButtonClick()}},"Random")),i.a.createElement("div",{className:"togglePlay"},!0===e.play?i.a.createElement("button",{id:"btn-play",className:"button",onClick:function(){return e.onTogglePlayPauseClick()}},i.a.createElement("i",{className:"fa fa-pause"}," ")," Pause"):i.a.createElement("button",{id:"btn-play",className:"button",onClick:function(){return e.onTogglePlayPauseClick()}},i.a.createElement("i",{className:"fa fa-play"})," Play"))),i.a.createElement("div",{className:"content-list"},e.gifs&&e.gifs.map(function(t,n){return i.a.createElement("div",{className:"list-container flat-link",key:n},e.play&&!0===e.play?i.a.createElement("img",{className:"img-content",src:t.images&&t.images.original.webp,alt:""}):i.a.createElement("img",{className:"img-content",src:t.images&&t.images.original_still.url,alt:""}))})),1!==e.gifs.length&&!1===e.search?i.a.createElement("ul",{className:"roolBar"},i.a.createElement("li",{key:"1",onClick:function(){return e.onPaginationButtonClick("trending",1)},className:"pagination "+(1===e.page?"active":"")},"1"),i.a.createElement("li",{key:"2",onClick:function(){return e.onPaginationButtonClick("trending",2)},className:"pagination "+(2===e.page?"active":"")},"2"),i.a.createElement("li",{key:"3",onClick:function(){return e.onPaginationButtonClick("trending",3)},className:"pagination "+(3===e.page?"active":"")},"3"),i.a.createElement("li",{key:"4",onClick:function(){return e.onPaginationButtonClick("trending",4)},className:"pagination "+(4===e.page?"active":"")},"4")):null))};m.PropsTypes={gifs:h.a.array.isRequired,play:h.a.bool.isRequired,search:h.a.bool.isRequired,page:h.a.number.isRequired,keyword:h.a.string.isRequired,isDark:h.a.bool.isRequired,onRandomButtonClick:h.a.func.isRequired,onTrendingButtonClick:h.a.func.isRequired,onPaginationButtonClick:h.a.func.isRequired,onKeywordChange:h.a.func.isRequired,onSubmitClick:h.a.func.isRequired,onTogglePlayPauseClick:h.a.func.isRequired,onToggleThemeClick:h.a.func.isRequired};var f=m,k=n(4),p=n.n(k),y=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={apiKey:"api_key=exrDmJlcqkjSLUwHLf5YHYX7Kr9uJRI5",apiUrl:"https://api.giphy.com/v1/gifs/",initGifs:[],gifs:[],sort:"trending",search:!1,keyword:"",page:1,play:!0,isDark:!1,dataPerPage:10},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.handleFetchData("trending"),"dark"===localStorage.getItem("preferredTheme")&&this.setDarkMode(!0)}},{key:"handleFetchData",value:function(e){var t=this;p.a.get("".concat(this.state.apiUrl).concat(this.state.sort,"?").concat(this.state.apiKey,"&limit=200&rating=G")).then(function(n){if("trending"===t.state.sort)return t.setState({initGifs:n.data.data,sort:e}),"trending";var a=[];a.push(n.data.data),t.setState({gifs:a,sort:e})}).then(function(e){t.handlePageChange(e,1)}).catch(function(e){throw e})}},{key:"handleRandomButtonClick",value:function(){this.handleFetchData("random")}},{key:"handleTrendingButtonClick",value:function(){this.handlePageChange("trending",1)}},{key:"handlePageChange",value:function(e,t){if("trending"===e){for(var n=[],a=this.state.dataPerPage*t-this.state.dataPerPage,i=this.state.dataPerPage*t,o=a;o<i;o++)n.push(this.state.initGifs[o]);this.setState({gifs:n,page:t,search:!1})}}},{key:"handleKeywordChange",value:function(e){this.setState({keyword:e})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=this.state.keyword;p.a.get("".concat(this.state.apiUrl,"search?q=").concat(n,"&").concat(this.state.apiKey)).then(function(e){t.setState({gifs:e.data.data,search:!0})}).catch(function(e){throw e})}},{key:"handleTogglePlayPauseClick",value:function(){this.setState({play:!this.state.play})}},{key:"setDarkMode",value:function(e){e?localStorage.setItem("preferredTheme","dark"):localStorage.removeItem("preferredTheme"),document.body.classList.toggle("darkmode"),this.setState({isDark:e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container"},i.a.createElement(f,{gifs:this.state.gifs,page:this.state.page,keyword:this.state.keyword,search:this.state.search,play:this.state.play,isDark:this.state.isDark,onRandomButtonClick:function(){return e.handleRandomButtonClick()},onTrendingButtonClick:function(){return e.handleTrendingButtonClick()},onPaginationButtonClick:function(t,n){return e.handlePageChange(t,n)},onKeywordChange:function(t){return e.handleKeywordChange(t)},onSubmitClick:function(t){return e.handleSubmit(t)},onTogglePlayPauseClick:function(){return e.handleTogglePlayPauseClick()},onToggleThemeClick:function(t){return e.setDarkMode(t)}}))}}]),t}(a.Component),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(i.a.createElement(y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");v?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):C(t,e)})}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.b4dc7f3f.chunk.js.map