// document.querySelector(".dropdown").addEventListener("click", function () {
//   document.querySelector(".options").style.display = "block";
// });

// document.querySelector(".options").addEventListener("click", function () {
//   document.querySelector(".options").style.display = "none";
// });
// let a = document.getElementById("cars");
// let value = a.value;

// for (var i = 0; i < value; i++) {
//   // document.querySelectorAll("option")[i].addEventListener("click", function () {
//   //   console.log("qwe");
//   // });
//   console.log("asd");
// }
//
// function abc() {
//   const x = document.getElementById("cars").value;
//   console.log(x);
// }

// const x = document.querySelector("#cars");
// document.getElementById("cars").addEventListener("change", function (a) {
//   console.log(a);
// });
// const Cat = {
//   name: "Whiskers",
//   age: 3,
//   breed: "Siamese",
//   color: "Cream",
// };
// console.log(Cat);
// document.querySelector("h1").innerText = "Name:" + Cat.name;
// document.querySelector("h2").innerText = "Age:" + Cat.age;
// document.querySelector("h3").innerText = "Breed:" + Cat.breed;
// document.querySelector("h4").innerText = "Color:" + Cat.color;
// country();
// async function country() {
//   try {
//     const fetchCountry = await fetch(`https://restcountries.eu/rest/v2/all`);
//     if (!fetchCountry.ok) {
//       return console.log("Sorry, not working");
//     }
//     console.log(fetchCountry);
//     const countryObject = await fetchCountry.json();
//     const countryContainer = countryObject.name;
//     //
//     // countryObject.map(function (value) {
//     //   const countryName = document.createElement("option");
//     //   countryName.innerText = value.name;
//     //   document.querySelector("select").appendChild(countryName);
//     // });
//   } catch (error) {
//     console.log(error);
//   }
// }
async function country() {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/all`);
    if (!res.ok) {
      return console.log("Sorry, not working");
    }
    const obj = await res.json();
    const sortedNames = obj.sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );
    const selectId = document.querySelector("#country");
    obj.forEach((country) => {
      const option = document.createElement("option");
      //  console.log((option.value = country.name));
      option.value = country.name;
      option.innerText = country.name.common;
      selectId.appendChild(option);
    });
  } catch (error) {
    console.log(error);
  }
}
country();
