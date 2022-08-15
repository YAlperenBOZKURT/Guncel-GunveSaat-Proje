// Fonksiyonda kullanmak için tanımladık
let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
let Name = prompt("Adınız Nedir?");
let myName = document.querySelector("#myName");

if(Name){
    myName.innerHTML = `${Name} `
}else{
    alert("Bir isim giriniz.")
     // Eğer isim girmezlerse sayfayı yeniletmek için
    location.reload();
}

// Aşağıdaki Fonksiyona gün ve saati tanımlıyoruz. 
function clockFunction(){
    let dateTime= new Date();
    // datetime.getday() => 0-6 arasında sayı alıyor o yüzden yukarıda günleri tanımladık
    let day = days[dateTime.getDay()];
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    document.querySelector("#myClock").innerHTML= `${hrs}: ${min}: ${sec}  ${day}`
}
    // Fonksiyonun 1 saniyede 1 çağrılmasını istiyoruz böylece süre güncel olacak
    setInterval(clockFunction, 1000);