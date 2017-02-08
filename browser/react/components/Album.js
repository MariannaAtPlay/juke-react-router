import React from 'react';
import Songs from '../components/Songs';
import axios from 'axios'
import { convertAlbum } from '../utils';

export default class Album extends React.Component {

  componentDidMount(){
    const albumId = this.props.params.albumId;
    const selectAlbum = this.props.selectAlbum;

    selectAlbum(albumId)

  }


  render() {
    console.log('in Album props ', this.props)
    return (
      <div className="album">
        <div>
          <h3>{ this.props.album.name }</h3>
          <img src={ this.props.album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          songs={this.props.album.songs}
          currentSong={this.props.currentSong}
          isPlaying={this.props.isPlaying}
          toggleOne={this.props.toggleOne} />
      </div>
    );
  }
}


