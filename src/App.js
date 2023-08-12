import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      subject: {title: 'WEB', sub: 'world wide web!'},
      welcome: {title: 'Welcome', desc: 'Hello, React!!'},
      contents: [
        {id: 1, title: 'HTML', desc: 'HTML is HyperText Markup Language.'},
        {id: 2, title: 'CSS', desc: 'CSS is for design.'},
        {id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive.'}
      ]
    };
  }

  render() {
    console.log("App render");
    let _title, _desc = null;
    
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    
    console.log('render', this);  // this는 App을 가리킴

    return (
      <div className="App">
        {/* <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub} />         */}
        <header>
          <h1><a href='/' onClick={function(e){
            console.log(e);
            e.preventDefault();             // 이벤트의 기본적인 동작 방법을 취소
            // 함수 안에서 this를 사용하면 아무 값도 나오지 않음
            // this.state.mode = 'welcome';  // 이렇게 하면 render() 함수가 호출되지 않음
            this.setState({                 // state 값을 바꿀 때는 setState() 함수를 사용해야 함
              mode: 'welcome'               // state 값을 바꾸고 나면 render() 함수를 호출함
            });
            //bind() 함수를 사용하면 this를 사용할 수 있음
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <TOC data = {this.state.contents} />
        <Content title={_title} desc={_desc}/>
      </div>
    );
  }
}

export default App;
