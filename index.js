function searchLyrics() {
  const artist = document.getElementById("artist").value.trim();
  const title = document.getElementById("title").value.trim();

  if (artist === "" || title === "") {
    alert("Please enter both artist and song title.");
    return;
  }

  fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Lyrics not found!");
      }
      return response.json();
    })
    .then((data) => {
      displayLyrics(data.lyrics);
    })
    .catch((error) => {
      displayLyricsError(error.message);
    });
}

function displayLyrics(lyrics) {
  const lyricsContainer = document.getElementById("lyrics-container");
  lyricsContainer.innerHTML = `<pre>${lyrics}</pre>`;
}

function displayLyricsError(message) {
  const lyricsContainer = document.getElementById("lyrics-container");
  lyricsContainer.innerHTML = `<p>${message}</p>`;
}
