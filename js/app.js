// see more Button 
function SeeMore(remove, add) {
  const seeMore = document.getElementById("seeMore");
  seeMore.classList.remove(remove);
  seeMore.classList.add(add);
}
// spinner
function spinnerAdd(remove, add) {
  const spinner = document.getElementById("spinner");
  spinner.classList.remove(remove);
  spinner.classList.add(add);
}

const search = document.getElementById('search-btn').addEventListener('click', () => {
  const searchValue = document.getElementById('search-field')
  
// erroe Show 
  const error = document.getElementById('error')
  if (searchValue.value == '') {
    error.innerText = "Please type to something for searching"
  } else {
    error.innerText = "";

    spinnerAdd("d-none", "d-block");

    //Api Source
    const apiSource = () => {
      const url = (`https://openapi.programming-hero.com/api/phones?search=${searchValue.value}`);
      fetch(url)
        .then((res) => res.json())
        .then((data) => searchResult(data))
    };
    apiSource();
   
    // get Api Serach Result 
    const searchResult = (result) => {
      const getResult = result.data.slice(0, 20); 
      if(getResult.length===20){
        SeeMore( "d-none","d-block",)
      }
      else{
        SeeMore( "d-block","d-none")
      }
      const displayShow = document.getElementById('result-container')

      spinnerAdd("d-block", "d-none");
      let resultCount = document.getElementById("count");
      if (getResult.length > 1) {
        resultCount.innerHTML = `${getResult.length} results found for "<strong>${searchValue.value}</strong>"`;
      } else if (getResultt.length == 1) {
        resultCount.innerHTML = `${getResult.length} result found for "<strong>${searchValue.value}</strong>" `;
      }

      searchValue.value = "";
      displayShow.textContent = "";

      //loop Api Serach Result
      getResult.forEach(element => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `<div class="card shadow border-0 p-2">
        <img src="${element.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${element.brand}</h5>
            <p class="card-text">${element.phone_name}</p>
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#meal-details" onclick='phoneDetails("${element.slug}")'>More Details</button>
        </div>
        </div>      
            `
        displayShow.appendChild(div);
      });
    }
  }

});

// get Api Id 
const phoneDetails = (phoneID) => {
  const url = `https://openapi.programming-hero.com/api/phone/${phoneID}`
  fetch(url)
    .then(res => res.json())
    .then((data) => popUpResult(data.data))
};

// set PopUp

const popUpResult = popUpDetails => {
  const popUpshow = document.getElementById("popupDisplay");
  const div = document.createElement("div");
  div.classList.add("row", "g-0", 'responsive');
  div.innerHTML = `
          <div class="col-md-4" style="background-image:url('${popUpDetails.image}');background-repeat: no-repeat; background-position: center center; background-size: auto;">
              <div style="height:auto"></div>
          </div>
          <div class="col-md-8">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <div class="card-body text-start">
                  <h3 class="card-title">Brand: <span>${popUpDetails.brand}</h3>
                  <p>Model Name:<spsn class="releaseDate"> ${popUpDetails.name}</span></p>
                  <p>ReleaseDate:<spsn class="releaseDate"> ${popUpDetails.releaseDate ? popUpDetails.releaseDate:'Release date not available'} </spsn></p>
                  <p>DisplaySize: ${popUpDetails.mainFeatures.displaySize}</p>
                  <p >chipSet: ${popUpDetails.mainFeatures.chipSet}</p> 
                  <p>Memory: ${popUpDetails.mainFeatures.memory}</p>
                  <p class="none">Sensors: ${popUpDetails.mainFeatures.sensors}</p>
                  <p class="none"> Bluetooth: ${popUpDetails.others.Bluetooth}</p>
                  <p class="none" >GPS: ${popUpDetails.others.GPS}</p>
                  <p class="none">NFC: ${popUpDetails.others.NFC}</p>
                  <p class="none">Radio: ${popUpDetails.others.Radio}</p>
                  <p class="none">USB: ${popUpDetails.others.USB}</p>
                  <p class="none">WLAN: ${popUpDetails.others.WLAN}</p>
                     
      `;

  popUpshow.textContent = "";
  popUpshow.appendChild(div);
};


function massage(){
  alert('sorry bro, I can not fix this function, please tell me, how can fix this function, when I click see more button the all result show in display')
}