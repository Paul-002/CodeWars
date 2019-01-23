function songDecoder(song) {
  return song.replace(/WUB/g, ' ').replace(/\s+/g, ' ').trim();
}

var result = songDecoder("AWUBWUBWUBBWUBWUBWUBC");
console.log(result);