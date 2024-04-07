document.addEventListener("DOMContentLoaded", function () {
  const genreSelect = document.getElementById("genre-select");
  const moviesList = document.getElementById("movies-list");

  // Function to fetch movie data from the JSON file
  async function fetchMovies() {
    try {
      const response = await fetch("movies.json");
      const moviesData = await response.json();
      return moviesData;
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }

// Function to generate movie cards based on the selected genre
function renderMovies(genre) {
  moviesList.innerHTML = ""; // Clear existing movie list

  fetchMovies().then(moviesData => {
    moviesData.forEach(movie => {
      if (genre === "all" || movie.genre.toLowerCase() === genre) {
        const movieCard = `
          <div class="movie-card">
            <img src="${movie.imageUrl}" alt="${movie.title}">
            <div class="movie-details">
              <h2>${movie.title}</h2>
              <p><strong>Director:</strong> ${movie.director}</p>
              <p><strong>Release Year:</strong> ${movie.releaseYear}</p>
              <p><strong>Genre:</strong> ${movie.genre}</p>
              <p><strong>Classification:</strong> ${movie.classification}</p>
              <p><strong>Plot:</strong> ${movie.plot}</p>
            </div>
          </div>
        `;
        moviesList.innerHTML += movieCard;
      }
    });
  });
}


  // Event listener for genre select change
  genreSelect.addEventListener("change", function () {
    const selectedGenre = genreSelect.value.toLowerCase();
    renderMovies(selectedGenre);
  });

  // Initial rendering of movies (all genres)
  renderMovies("all");
});
