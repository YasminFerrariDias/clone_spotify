const searchInput = document.getElementById('search-input');
const resultArtis = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlist');

function requestApi(searchTerm) {
    const url = "http://localhost:300/artists?name_like=${searchTerm}"
    fetch(url)
        .then((response) => response.json());
        .then((result) => displayResults(result))
}

function displayResults() {
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name')
    const artistImage = document.getElementById('artist-img')

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtis.classList.remove('hidden');

}

document.addEventListener('input', function() {
     const searchTerm = searchInput.value.toLowerCase();
     if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtis.classList.remove('hidden');
        return;
     }

     requestApi(searchTerm);
});




