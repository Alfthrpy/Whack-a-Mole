const tanah = document.querySelectorAll(".tanah");
const tikus = document.querySelectorAll(".tikus");
const papan = document.querySelector(".papan-skor");

let tanahSebelumnya;
let flag;
let skor;

function randomDurasi(min,max){
    const waktu = Math.round(Math.random() * (max-min)+min);
    return waktu;
}

function randomTanah(tanah){
    const random = Math.floor(Math.random() * tanah.length);
    let rtanah = tanah[random];
    if(rtanah == tanahSebelumnya){
        randomTanah(tanah)
    }
    tanahSebelumnya = rtanah;
    return rtanah;
}


function munculkanTikus(tanah){
    const tanahRandom = randomTanah(tanah);
    tanahRandom.classList.add("muncul");
    const waktu = randomDurasi(300,1200)
    setTimeout(() => {
        tanahRandom.classList.remove("muncul");
        if(!flag){
            munculkanTikus(tanah);
        }
    }, waktu);
} 

function mulai(){
    flag = false;
    skor = 0;
    papan.textContent = skor;
    munculkanTikus(tanah)
    setTimeout(() => {
        flag = true;
    }, 10000);
}

function pukul(){
    skor += 1;
    papan.textContent = skor;
    this.parentNode.classList.remove("muncul");
}

tikus.forEach(t => {
    t.addEventListener('click',pukul);
})