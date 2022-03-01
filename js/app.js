const searchBtn = document.getElementById('search-btn').addEventListener('click',()=>{
  const searchField= document.getElementById('search-field');
//Error Handling
const errorHandling= document.getElementById('error-message')
if(searchField.value=''){
  errorHandling.innerText='Please type your product name.';
}
  const searchApi=()=>{
    const url=(`https://openapi.programming-hero.com/api/phones?search=${searchField.value}`)
    fetch(url)
    .then(res=>res.json())
    .then(data=>searchResult(data.data))
  }
  searchApi()
  //display Result Show
  const searchResult=data=>{
    const displayShow= document.getElementById('result-container')
    data.forEach(element => {
      // console.log(element)
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML = `
        <div class="card shadow border-0 p-2">
            <img src="${element.image}" " class="card-img-top mx-auto" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.brand}</h5>
                <p class="card-text">${element.phone_name}</p>
                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#resultpopup" onclick="serchResultDetaile(${element.brand}
                })">More Details</button>
            </div>
        </div>
      `
      displayShow.appendChild(div)
    });
  }
})
const serchResultDetaile=searchId=>{
  const url=(`https://openapi.programming-hero.com/api/phone/${slug}`)
  console.log(url)

}