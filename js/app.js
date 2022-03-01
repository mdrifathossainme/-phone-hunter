const search = document.getElementById('search-btn').addEventListener('click', () => {
  const searchValue = document.getElementById('search-field')
  const apiSource = () => {
    const url = (`https://openapi.programming-hero.com/api/phones?search=${searchValue.value}`);
    fetch(url)
      .then(res => res.json())
      .then(data => searchResult(data.data))
  }
  apiSource();
  const searchResult = (result) => {
    const displayShow = document.getElementById('result-container')
    result.forEach(element => {
      // console.log(element)
      const div = document.createElement('div')
      div.classList.add('col')
      div.innerHTML=`<div class="card shadow border-0 p-2">
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
});
    const phoneDetails=(phoneID)=>{
      const url=`https://openapi.programming-hero.com/api/phone/${phoneID}`
      fetch(url)
      .then(res=>res.json())
      .then((data)=>popUpResult(data.data))
    };
    const popUpResult=popUpDetails=>{
      const popUpshow = document.getElementById("popupDisplay");
      const div = document.createElement("div");
      div.classList.add("row", "g-0", 'responsive');
      div.innerHTML = `
          <div class="col-md-4" style="background-image:url('${popUpDetails.image}');background-repeat: no-repeat; background-position: center center; background-size: fit;">
              <div style="height:300px"></div>
          </div>
          <div class="col-md-8">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <div class="card-body text-start">
                  <h3 class="card-title">Brand: <span>${popUpDetails.brand}</h3>
                  <p>Model Name: ${popUpDetails.name}</p>
                  <p>Storage: ${popUpDetails.mainFeatures.storage}</p>
                  <p>${popUpDetails.name}</p>
                  <p>${popUpDetails.name}</span><span>${popUpDetails.name}</p>
              </div>
          </div>
      `;
    
      popUpshow.textContent = "";
      popUpshow.appendChild(div);
    };
    
   