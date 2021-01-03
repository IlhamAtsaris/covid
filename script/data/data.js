fetch("https://indonesia-covid-19.mathdro.id/api/provinsi/")
  .then((response) => response.json())
  .then((response) => {
    const data = response.data[13];
    const kasuspositif = data.kasusPosi;
    const sembuh = data.kasusSemb;
    const meninggal = data.kasusMeni;

    document.querySelector(".kasus-positif").innerHTML = kasuspositif;
    document.querySelector(".selesai-sembuh").innerHTML = sembuh;
    document.querySelector(".kasus-meninggal").innerHTML = meninggal;
  })
  .catch((error) => {
    alert(error);
  });

fetch("https://api.thevirustracker.com/free-api?countryTotal=ID")
  .then((response) => response.json())
  .then((response) => {
    const data = response.countrydata[0];
    const total_cases = data.total_cases;
    const total_sembuh = data.total_recovered;
    const total_death = data.total_deaths;
    const new_cases = data.total_new_cases_today;
    const new_death = data.total_new_deaths_today;

    document.querySelector(".cases").innerHTML = total_cases;
    document.querySelector(".kasus_baru").innerHTML = new_cases;
    document.querySelector(".sembuh").innerHTML = total_sembuh;
    document.querySelector(".meninggal").innerHTML = total_death;
    document.querySelector(".baru").innerHTML = new_death;
  })
  .catch((error) => {
    alert(error);
  });

/// Berita

// fetch(
//   "http://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=77f6f07d2af34d22b0e3c00f65c85587"
// )
//   .then((response) => {
//     return response.json();
//   })
//   .then((responseJson) => {
//     const data = responseJson.articles;
//     let cards = "";
//     data.forEach(function (m) {
//       const corona = m.title.includes("Covid");
//       const covid = m.title.includes("Corona" || "Covid");
//       if (corona) {
//         cards += `<div class="col-md-4 my-5">
//           <div class="card">
//           <img class="card-img-top" src="${m.urlToImage}">
//           <div class="card-body">
//           <h5 class="card-title">${m.title}</h5>
//           <p>${m.description}<P>
//           <a href="${m.url}" target="_blank"  class="btn btn-outline-success btn-sm">Baca Selengkapnya</a>
//           </div>
//           </div>
//           </div>`;
//       } else {
//       }
//       if (covid) {
//         cards += `<div class="col-md-4 my-5">
//           <div class="card">
//           <img class="card-img-top" src="${m.urlToImage}">
//           <div class="card-body">
//           <h5 class="card-title">${m.title}</h5>
//           <p>${m.description}<P>
//           <a href="${m.url}" target="_blank"  class="btn btn-outline-success btn-sm">Baca Selengkapnya</a>
//           </div>
//           </div>
//           </div>`;
//       } else {
//       }
//     });

//     const beritacontainer = document.querySelector(".berita-container");
//     beritacontainer.innerHTML = cards;
//   })
//   .catch((error) => {
//     alert(error);
//   });
