import React, {Component} from 'react';
import SongsList from '../components/SongsList.js'

class Top20Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"

    fetch(url)
      .then(res => res.json())
      .then(songs => this.setState({ songs: songs.feed.entry }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <SongsList songs={ this.state.songs }/>
    )
  }
}

export default Top20Container;
