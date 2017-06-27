var playlist = { kanye: "all falls down" };


function updatePlaylist (obj, key, value) {
  return Object.assign(obj, { [key]: value })
}


function removeFromPlaylist (playlist, artistName) {
  return delete playlist[artistName];
}
