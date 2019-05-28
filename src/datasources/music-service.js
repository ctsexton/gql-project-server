const { DataSource } = require('apollo-datasource');

class MusicService extends DataSource {
  constructor() {
    super();
  }

  initialize() {}

  getArtists() {
    return new Promise(res => setTimeout(() => res(artists), 1000));
  }

  getArtist(artistId) {
    const artist = artists.find(artist => artist.id === artistId);
    return Promise.resolve(artist)
  }

  getArtistSongs(artistId) {
    const songIds = collaborations.filter(collab => collab.artistId === artistId).map(collab => collab.songId);
    const songsByArtist = songs.filter(song => songIds.includes(song.id));
    return Promise.resolve(songsByArtist)
  }

  getSongs() {
    return Promise.resolve(songs);
  }

  getSong(id) {
    const song = songs.find(song => song.id === id);
    return new Promise(res => setTimeout(() => res(song), 1000));
  }

  getSongArtist(songId) {
    const artistId = songs.find(song => song.id === songId).artist;
    const artist = artists.find(artist => artist.id === artistId);
    return Promise.resolve(artist);
  }

  getSongCollaborators(songId) {
    const collaborators = collaborations.filter(collab => collab.songId === songId);
    return Promise.resolve(collaborators)

  }

  getCollaboratorArtist(collabId) {
    const collab = collaborations.find(collab => collab.id === collabId);
    const artist = this.getArtist(collab.artistId);
    return Promise.resolve(artist);
  }

  addArtist(name) {
    const id = name.toLowerCase().replace(" ", "-")
    artists.push({ id: id, name: name });
    return this.getArtist(id);
  }

};

let artists = [
  {
    id: 'herbie-hancock',
    name: 'Herbie Hancock'
  },
  {
    id: 'elton-john',
    name: 'Elton John'
  },
  {
    id: 'joni-mitchell',
    name: 'Joni Mitchell'
  },
  {
    id: 'sting',
    name: 'Sting'
  }
];

let songs = [
  {
    id: 'tiny-dancer',
    name: 'Tiny Dancer',
    artist: 'elton-john'
  },
  {
    id: 'chameleon',
    name: 'Chameleon',
    artist: 'herbie-hancock'
  },
  {
    id: 'hejira',
    name: 'Hejira',
    artist: 'joni-mitchell'
  },
  {
    id: 'fields-of-gold',
    name: 'Fields Of Gold',
    artist: 'sting'
  }
];

let collaborations = [
  {
    id: 'herbie-hancock-tiny-dancer',
    artistId: 'herbie-hancock',
    songId: 'tiny-dancer',
    share: 0.25
  },
  {
    id: 'elton-john-tiny-dancer',
    artistId: 'elton-john',
    songId: 'tiny-dancer',
    share: 0.75
  },
  {
    id: 'herbie-hancock-chameleon',
    artistId: 'herbie-hancock',
    songId: 'chameleon',
    share: 0.8
  },
  {
    id: 'joni-mitchell-chameleon',
    artistId: 'joni-mitchell',
    songId: 'chameleon',
    share: 0.1
  },
  {
    id: 'sting-chameleon',
    artistId: 'sting',
    songId: 'chameleon',
    share: 0.1
  },
  {
    id: 'joni-mitchell-hejira',
    artistId: 'joni-mitchell',
    songId: 'hejira',
    share: 1
  },
  {
    id: 'elton-john-fields-of-gold',
    artistId: 'elton-john',
    songId: 'fields-of-gold',
    share: 0.33
  },
  {
    id: 'sting-fields-of-gold',
    artistId: 'sting',
    songId: 'fields-of-gold',
    share: 0.67
  }
]

module.exports = MusicService;
