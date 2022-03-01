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
      console.log(element)
      const div = document.createElement('div')
      div.classList.add('col')
      div.innerHTML=`<div class="card shadow border-0 p-2">
      <img src="${element.image}" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">${element.brand}</h5>
          <p class="card-text">${element.phone_name}</p>
          <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#meal-details" onclick="phoneDetails(${element.slug})">More Details</button>
      </div>
      </div>      
          `
        displayShow.appendChild(div); 
    });
  }
});
    // const phoneDetails=(phoneID)=>{
    //   const url=`https://openapi.programming-hero.com/api/phone/${phoneID}`
    //   fetch(url)
    //   .then(res=>res.json())
    //   .then((data)=>console.log(data.status.brand))
    // };
   