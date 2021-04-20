const URL =
  "https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json";

  const numberOfColumns = 4;


//let photos =  null;

fetch(URL)
.then(response => onSuccessFetch(response))
.then(error => onErrorFetch(error));

const app = document.querySelector('#app')

const divRow = document.createElement('div'); //create a new div
divRow.className = 'row';

const columsArr = [];

const createColums = () => {
  for (let i = 0; i <= numberOfColumns - 1; i ++) {
  const divColumn = document.createElement('div');
  divColumn.className = 'column';
  divRow.appendChild(divColumn);
  columsArr.push(divColumn);
  }
  
}
createColums();

const onSuccessFetch = (resolve) => {
  resolve.json()
  .then((photos) => {
    for (indexOfThePhoto in photos) {
      console.log(photos[indexOfThePhoto].url, (indexOfThePhoto % 4) + 1);

      const img = document.createElement('img');
      img.src = photos[indexOfThePhoto].url;
      columsArr[indexOfThePhoto % numberOfColumns].appendChild(img);

      app.appendChild(divRow);
    }
  })
};

const onErrorFetch = (error) => {
  
}
