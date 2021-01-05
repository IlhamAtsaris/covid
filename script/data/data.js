fetch("https://indonesia-covid-19.mathdro.id/api/provinsi/")
.then((response)=> response.json())
.then((response) => {
   const data = response.data
    data.map((value)=>{
      if (value.provinsi=="Banten"){
      const kasuspositif = value.kasusPosi;
      const sembuh = value.kasusSemb;
      const meninggal = value.kasusMeni;
      const daerah = value.provinsi

    document.querySelector(".kasus-positif").innerHTML = kasuspositif;
    document.querySelector(".selesai-sembuh").innerHTML = sembuh;
    document.querySelector(".kasus-meninggal").innerHTML = meninggal;
    document.querySelector(".provinsi").innerHTML = daerah;
          }
      })
  }).catch((err)=>{
  alert(err);
});


fetch("https://data.covid19.go.id/public/api/update.json?update")
    .then((response)=> response.json())
    .then((response)=>{
        const data = response.update.penambahan
        const total_cases = data.jumlah_positif;
        const total_death = data.jumlah_meninggal;
        const total_sembuh = data.jumlah_sembuh;

        document.querySelector(".cases").innerHTML = total_cases;
        document.querySelector(".meninggal").innerHTML = total_death;
        document.querySelector(".sembuh").innerHTML = total_sembuh;

    })


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
