module.exports = {
  Query: {
    artists: (_, __, { dataSources }) => {
      return dataSources.musicService.getArtists()
    },
    songs: (_, __, { dataSources }) => {
      return dataSources.musicService.getSongs()
    },
    song: (_, { id }, { dataSources }) => {
      return dataSources.musicService.getSong(id)
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
  },
  Mutation: {
    addArtist: (_, { input }, { dataSources }) => {
      return dataSources.musicService.addArtist(input.name)
    }
  }
}
