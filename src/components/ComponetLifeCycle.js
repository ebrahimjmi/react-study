import React, { Component } from 'react'

export default class ComponetLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
    console.log('component will mount')
  }
  componentDidMount() {
   setTimeout(() => {
    this.setState({favoritecolor: "yellow"})
   }, 2000)
    console.log('component did mount')
  }
  render() {
    console.log('render')
    return (
      <h4>My Favorite Color is {this.state.favoritecolor}</h4>
    )
  }
}
