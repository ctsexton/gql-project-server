module.exports = {
  Query: {
    artists: (_, __, { dataSources }) => {
      return dataSources.musicService.getArtists()
    },
    songs: (_, __, { dataSources }) => {
      return dataSources.musicService.getSongs()
    }
  },
  Artist: {
    songs: (parent, _, { dataSources }) => {
      return dataSources.musicService.getArtistSongs(parent.id)
    }
  },
  Song: {
    artist: (parent, _, { dataSources }) => {
      return dataSources.musicService.getSongArtist(parent.id)
    },
    collaborators: (parent, _, { dataSources }) => {
      return dataSources.musicService.getSongCollaborators(parent.id)
    }
  },
  Collaborator: {
    artist: (parent, _, { dataSources }) => {
      return dataSources.musicService.getCollaboratorArtist(parent.id)
    }
  }
}
