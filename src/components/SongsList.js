import React from 'react'
import Song from './Song.js'

const SongsList = (props) => {
  const songNodes = props.songs.map((song, index) => {
    return (
      <Song key={ song.id.attributes["im:id"] }

      >
      { song.title.label }
      </Song>
    )
  })

  return (
    <ol>
      {songNodes}
    </ol>
  )
}

export default SongsList;
