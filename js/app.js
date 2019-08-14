function watchProjectsButton() {
  $('.projects-button').click(function () {
    clearPage();
    displayProjects();
  });
}

function displayProjects() {
  $('.container').append(`
    <div class="projects">
      <h1>Projects</h1>
      <div class="card">
        <a href="https://fierce-cliffs-97625.herokuapp.com/" target="_blank"><img class="image" src="images/mytube.png"></a>
        <div class="card-container">
          <h2>MyTube</h2>
          <p>Create a profile and save your favorite youtube videos to your dashboard. Add, view, update, or delete at any time!</p>
          <h2>Technology Used</h2>
          <p>HTML, CSS, JavaScript, jQuery, Node.js, MongoDB, React, Redux</p>
          <a href="https://fierce-cliffs-97625.herokuapp.com/" target="_blank"><button type="button" class="btn-dark">Live Demo</button></a>
          <a href="https://github.com/sanadler/mytube-client/" target="_blank"><button type="button" class="btn-light">Front End</button></a>
          <a href="https://github.com/sanadler/mytube-server" target="_blank"><button type="button" class="btn-dark">Back End</button></a>
        </div>
      </div>
      <div class="card">
        <a href="https://secret-lowlands-51033.herokuapp.com/" target="_blank"><img class="image" src="images/beatles.png"></a>
        <div class="card-container">
          <h2>The Beatles Song Log</h2>
          <p>View a log of The Beatles songs. Find out information about the song and update if need be. Delete a song, view lyrics, and add a song. If you're a Beatles nerd this is the site for you! </p>
          <h2>Technology Used</h2>
          <p>HTML, CSS, JavaScript, jQuery, Node.js, MongoDB</p>
          <a href="https://secret-lowlands-51033.herokuapp.com/" target="_blank"><button type="button" class="btn-dark">Live Demo</button></a>
          <a href="https://github.com/sanadler/beatles-fullstack-capstone" target="_blank"><button type="button" class="btn-light">Code</button></a>
        </div>
      </div>
      <div class="card">
        <a href="https://sanadler.github.io/pokedex-api-capstone/" target="_blank"><img class="image" src="images/pokedex.png"></a>
        <div class="card-container">
          <h2>Pokedex</h2>
          <p>View and search from hundreds of Pokemon! Find out different facts about each pokemon, for example what type they are!</p>
          <h2>Technology Used</h2>
          <p>HTML, CSS, JavaScript, jQuery</p>
          <a href="https://sanadler.github.io/pokedex-api-capstone/" target="_blank"><button type="button" class="btn-dark">Live Demo</button></a>
          <a href="https://github.com/sanadler/pokedex-api-capstone/" target="_blank"><button type="button" class="btn-light">Code</button></a>
        </div>
      </div>
    </div>`)
}

function clearPage() {
  $('.container').empty();
}

watchProjectsButton();