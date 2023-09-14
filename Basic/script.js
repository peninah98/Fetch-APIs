// const container = document.getElementById("container")
const image = document.getElementById("image")
// const name = document.getElementById("name")
// const emogi = document.getElementById("emogi")

// function fetchUsers (){
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         return response.json()
//         })
//       .then((data) => data.message);
// }


// const fetchPhotos = fetch("https://jsonplaceholder.typicode.com/photos");
// const fetchEmogi = fetch( "https://emoji-api.com/emojis?access_key=bd1bac8372b0d8510e1f7b4ccd60b40b22f85430");

// Promise.all([fetchPhotos,fetchUsers,fetchEmogi]).then((values)=>{
//     return Promise.all(values.map(r =>r.json))
// }).then(([users,photos,emogi])=>{
//     console.log(users)
//     console.log(photos)
//     console.log(emogi)
// }).catch(e =>{
//     console.log("cought")
//     console.log(e)
// })


async function logphotos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos = await response.json();
  console.log(photos);
  let holder = " ";

    // photos.map((photo) => {
    //     holder += `<div class="cards">
    //     <img src=${photo.url} alt=${photo.title}>
    //     <p>${photo.url}</p>
    //     <p>${photo.title}</p>
    //     </div>`;

        
    //   });
      

    for (let i = 0; i < 21; i++) {
      const photo = photos[i]; // Get the photo at the current index

      holder += `<div class="cards">
    <img src="${photo.url}" alt="${photo.title}">
    <p>${photo.url}</p>
    <p>${photo.title}</p>
  </div>`;
    }
  
  
  image.innerHTML = holder;
  
  // 
  // 
}

logphotos()





// async function githubUsers() {
//   let response = await fetch("https://api.github.com/users");
//   console.log(response);
//   let data = await response.json();
//   console.log(data);
//   console.log(data[0].avatar_url);
//   let display = " ";
//   data.map((values) => {
//     display += ` <div class="cards">
//             <img src=${values.avatar_url} alt=${values.login}>
//             <h1>${values.login}</h1>
//         </div>`;
//   });
//   document.getElementById("root").innerHTML = display;
//   const displayMessage = await new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000);
//     console.log("All data is being displayed");
//   });
//   document.getElementById("title").textContent = displayMessage;
// }

// githubUsers();
