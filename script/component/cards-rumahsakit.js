class CardRumahSakit extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    .rumah-sakit {
        margin-top: 70px;
    }
    </style>
    <section class="rumah-sakit">
       <div class="container">
         <div class="row">
           <div class="col-lg-1"></div>
           <div class="col-lg-10 mb-5">
             <div class="card">
               <div class="card-body">
                 <h5 class="card-title mt-3">
                   Daftar Rumah Sakit Rujukan Di Banten
                 </h5>
                 <p class="card-text mt-3">
                   Berikut ini adalah rumah sakit yang menjadi rujukan untuk
                   pasien dengan status Pasien dalam Pengawasan. Anda harus
                   mengunjungi fasilitas kesehatan terdekat terlebih dahulu
                   seperti klinik/rumah sakit umum sebelum akhirnya dapat dirujuk
                   ke rumah sakit khusus di bawah ini.
                 </p>
                 <div class="row">
                   <div class="col-lg-4">
                     <h6>RSUD Banten</h6>
                     <p>Jalan Syeh Nawawi Al Bantani, cipocok Jaya Serang</p>
                     <a href="tel:8490911" class="bg-info mt-n4">(0254) 8490911</a>
                     <a href="https://rsud.bantenprov.go.id" class="bg-success"
                       target="_blank">https://rsud.bantenprov.go.id</a>
                   </div>
                   <div class="col-lg-4 mt-3 mt-sm-3 mt-md-3 mt-lg-0">
                     <h6>RSUD Balaraja</h6>
                     <p>Jalan Rumah Sakit Umum No. 1, Kotabaru Serang</p>
                     <a href="tel:29508250" class="bg-info mt-n4">(021) 29508250</a>
                     <a href="http://www.rsudbalaraja.com/" class="bg-success"
                       target="_blank">http://www.rsudbalaraja.com/</a>
                   </div>
                   <div class="col-lg-4 mt-3 mt-sm-3 mt-md-3 mt-lg-0">
                     <h6>RSUD Kabupaten Tangerang</h6>
                     <p>Jalan Jend.Ahmad Yani No.9, Sukaasih,Tangerang</p>
                     <div class="col-lg-12">
                       <a href="082112971403" class="bg-info mt-n4">082112971403</a>
                     </div>
                     <div class="col-lg-12">
                       <a href="https://rsud-tangerangkab.id/" class="bg-success"
                         target="_blank">https://rsud-tangerangkab.id/</a>
                     </div>
                   </div>
                 </div>
                 <div class="d-flex justify-content-center">
                   <a href="#"><button type="button" class="btn btn-outline-success btn-sm mt-3">
                       Lihat Rumah Sakit Lainnya
                     </button></a>
                 </div>
               </div>
             </div>
           </div>
           <div class="col-lg-1"></div>
         </div>
       </div>
     </section>`;
  }
}

customElements.define("card-rumahsakit", CardRumahSakit);
