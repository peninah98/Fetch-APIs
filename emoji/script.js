const img = document.getElementById('pic')

img.addEventListener("mousemove", (e) => {
  img.style.top = e.pageY + "px";
  img.style.left = e.pageX + "px";
});


fetch("https://api.github.com/users")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log("Request Failed", err));


 
  // async function getJSON() {
  //   let url = "https://api.github.com/users";
  //   try {
  //     let response = await fetch(url);
  //     return await response.json();
  //   } catch (error) {
  //     console.log("Request Failed", error);
  //   }
  // }

  // getJSON()