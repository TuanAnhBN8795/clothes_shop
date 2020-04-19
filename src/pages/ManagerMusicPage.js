import React, { Component } from 'react'
import { connect } from 'react-redux'
import ManagerMusicForm from '../components/ManagerForm';
import { addNewMusic } from '../action';

class ManagerMusicPage extends Component{
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(values) {
    console.log('values =====>', values);
    const { title, artist, music } = values;
    this.props.dispatch(addNewMusic(title, artist, music));
  };

  render() {
    return (
      <div>
        <h3>Manager Music</h3>
        <ManagerMusicForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default connect()(ManagerMusicPage);
