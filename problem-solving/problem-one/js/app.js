
// one
async function fetchAndDisplayAlbums() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const albums = await response.json();
      
      const today = new Date().getDay();
      const isOddDay = today === 0 || today === 2 || today === 4 || today === 6;
  
      const filteredAlbums = albums.filter(album => {
        const isOddId = album.id % 2 === 1;
        console.log(isOddDay && isOddId) || (!isOddDay && !isOddId);
      });
  
      const albumsContainer = document.getElementById('albums-container');
      albumsContainer.innerHTML = ''; // Clear previous content
      
      filteredAlbums.forEach(album => {
        const albumElement = document.createElement('div');
        albumElement.classList.add('album');
        if ((album.albumId + album.id) % 2 === 0) {
          albumElement.classList.add('pink-border');
        }
        
        const image = document.createElement('img');
        image.src = album.thumbnailUrl;
        albumElement.appendChild(image);
        
        albumsContainer.appendChild(albumElement);
      });
    } catch (error) {
      console.error('Error fetching and displaying albums:', error);
    }
  }
  
  fetchAndDisplayAlbums();

// two

var headers = ['ID', 'Name', 'User', 'Status'];
var statusOptions = ['Active', 'Inactive', 'Suspend'];
var table = document.getElementById('box');
var headerRow = document.getElementById('header-row');
var body = document.getElementById('body');

function getRandomStatus() {
  return statusOptions[Math.floor(Math.random() * statusOptions.length)];
}

function generateRandomData() {
  var rowData = {
    ID: Math.floor(Math.random() * 1000),
    Name: 'Name ' + Math.floor(Math.random() * 100),
    User: 'User ' + Math.floor(Math.random() * 100),
    Status: getRandomStatus()
  };
  return rowData;
}

function tableGeneration() {
  // Create header cells
  headers.forEach(function(headerText) {
    var th = document.createElement('th');
    th.appendChild(document.createTextNode(headerText));
    headerRow.appendChild(th);
  });

  // Update table every 5 seconds
  setInterval(function() {
    var newRow = document.createElement('tr');
    var data = generateRandomData();
    headers.forEach(function(header) {
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(data[header]));
      newRow.appendChild(cell);
    });
    body.appendChild(newRow);
  }, 5000);
}

tableGeneration();

