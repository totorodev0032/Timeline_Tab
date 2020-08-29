import React, { Component } from 'react';
import './App.css';
import level1logo from './assets/Level1.jpg';
import live from './assets/live.jpg';
import hustle from './assets/hustle.jpg';
import code from './assets/code.jpg';
import event from './assets/event.jpg';
import lecture from './assets/class.jpg';


class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLectureOpen: true,
       isLiveOpen: false,
       isScrumOpen: false,
       isDataOpen: false,
       isEventOpen: false
    }
  }
  
  showLectureBox() {
    this.setState({
      isLectureOpen: true,  isLiveOpen: false,
      isScrumOpen: false,
      isDataOpen: false,
      isEventOpen: false
    })
  }

  showLiveBox() {
    this.setState({
      isLectureOpen: false,  isLiveOpen: true,
      isScrumOpen: false,
      isDataOpen: false,
      isEventOpen: false
    })
  }

  showScrumBox() {
    this.setState({
      isLectureOpen: false,  isLiveOpen: false,
      isScrumOpen: true,
      isDataOpen: false,
      isEventOpen: false
    })
  }

  showDataBox() {
    this.setState({
      isLectureOpen: false,  isLiveOpen: false,
      isScrumOpen: false,
      isDataOpen: true,
      isEventOpen: false
    })
  }

  showEventBox() {
    this.setState({
      isLectureOpen: false,  isLiveOpen: false,
      isScrumOpen: false,
      isDataOpen: false,
      isEventOpen: true
    })
  }
  render() {
    return (
      <div className = "root-container">
        <div className = "tab-controller-container">
          <div className ={(this.state.isLectureOpen ? "selected-controller":"tab-controller")}  id = "first" onClick = {this.showLectureBox.bind(this)}>
              Lectures
          </div>
          <div className = {(this.state.isLiveOpen ? "selected-controller":"tab-controller")}  onClick = {this.showLiveBox.bind(this)}>
            Live-Code
          </div>
          <div className = {(this.state.isScrumOpen ? "selected-controller":"tab-controller")} onClick = {this.showScrumBox.bind(this)}>
            Scrum
          </div>
          <div className ={(this.state.isDataOpen ? "selected-controller":"tab-controller")}   id = "needspace" onClick = {this.showDataBox.bind(this)}>
            Data Structures and Algorithm
          </div>
          <div className = {(this.state.isEventOpen ? "selected-controller":"tab-controller")}  id = "last"  onClick = {this.showEventBox.bind(this)}>
            Events
          </div>
        </div>
        <div className = "content-box">
            {this.state.isLectureOpen && <Level image = {lecture} title = "Talks and Workshops" time = "7:30pm - 9:00pm" desc = "Be inspired and get priceless advice from successful entrepreneurs invited for exclusive talks." />}
            {this.state.isLiveOpen && <Level  image = {live} title = "Live Code" time = "4:30pm - 7:00pm" desc = "Study the problems of the day, and provide an preview of potential lessons during live programming sessions." />}
            {this.state.isScrumOpen && <Level image = {hustle} title = "Hustle" time = "2:30pm - 4:00pm" desc = "Regular Stand-up with your peers to study the day's resources before beginning instruction." />}
            {this.state.isDataOpen && <Level  image = {code} title = "Data Structure & Algo" time = "10:30am - 1:00pm" desc = "Live content, algo tips-tricks, problem solving." />}
            {this.state.isEventOpen && <Level  image = {event} title = "Events" time = "10:30pm - 1:00am" desc = "Live content, algo tips-tricks, problem solving." />}
        </div>
      </div>
    )
  }
}

const Level = (props) => {
  return(
    <div className = "Level1-container">
      <div className = "left">
        <img src = {props.image}/>
      </div>
      <div className = "right">
        <p> {props.title} </p>
        <p> {props.time} </p>
        <p> {props.desc} </p>
      </div>
    </div>
  )
}

export default App
