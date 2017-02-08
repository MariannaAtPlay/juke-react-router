import React from 'react';
import { Link } from 'react-router';

class Artist extends React.Component {

    componentDidMount(){
        const artistId = this.props.params.artistId;
        const selectArtist = this.props.selectArtist;


        selectArtist(artistId)

    }

//{this.props.selectedArtist.artist.name}
    render() {
        const artist = this.props.selectedArtist.artist;
        const albums = this.props.selectedArtist.albums;
        const songs = this.props.selectedArtist.songs;
        console.log('inside Artist component ', this.props);
        return (
            <div>
                <h3>{artist && artist.name}</h3>
                <h4>ALBUMS</h4>

                <h4>SONGS</h4>
            </div>
        );
    }
}

export default Artist;