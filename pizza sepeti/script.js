let pizzaboyutları=["küçükboy","50","ortaboy","75","büyükboy","100","süperboy","125"];
let küçükboy=["ketçap","15","köfte","25","haldal","20"];
let ortaboy=["mayonez","5","turşu","10","ketçap","20"];
let büyükboy=["sucuk","10","kaşar","10","haldal","5"];
let süperboy=["kaşar","15","sucuk","10","yeşil zeytin","5"];

let i;
let pizzaAciklama,pizzaSecenek;
let eklenecekler=[];
let fiyatlar=[];
let listeSepet=document.getElementById("sepetpizza");
let toplamTutar=0;
const kod="pizza123";
for(i=0;i<document.getElementsByName("kategori").length;i++)
{
    document.getElementsByName("kategori")[i].addEventListener("change",pizzaGetir);

} 
function olustur(){
    pizzaAciklama=document.createElement("label");
    pizzaSecenek=document.createElement("input");
    document.getElementById("pizzaPanel").appendChild(pizzaAciklama);
    document.getElementById("pizzaPanel").appendChild(pizzaSecenek);
    pizzaSecenek.type="checkbox";
    pizzaSecenek.setAttribute("name","pizza");
    pizzaAciklama.setAttribute("for","pizza");
    pizzaAciklama.setAttribute("class","pizza");
}  


function pizzaGetir(){
    const silinecekler = document.getElementById("pizzaPanel");
    while (silinecekler.hasChildNodes()) {
      silinecekler.removeChild(silinecekler.firstChild);
    }

    if(document.getElementById("kategoripizzaboyutları").checked)
    {
        for(i=0;i<pizzaboyutları.length;i=i+2)
        {
            olustur();
            pizzaSecenek.value=pizzaboyutları[i+1];
            pizzaAciklama.innerHTML=pizzaboyutları[i]; 
        }
    }
    else if(document.getElementById("kategoriküçükboy").checked)
    {
        for(i=0;i<küçükboy.length;i=i+2)
        {
        olustur();
        pizzaSecenek.value=küçükboy[i+1];
        pizzaAciklama.innerHTML=küçükboy[i];
        }
    }
    else if(document.getElementById("kategoriortaboy").checked)
    {
        for(i=0;i<ortaboy.length;i=i+2)
        {
        olustur();
        pizzaSecenek.value=ortaboy[i+1];
        pizzaAciklama.innerHTML=ortaboy[i];
        }
    }
    else if(document.getElementById("kategoribüyükboy").checked)
    {
        for(i=0;i<büyükboy.length;i=i+2)
        {
        olustur();
        pizzaSecenek.value=büyükboy[i+1];
        pizzaAciklama.innerHTML=büyükboy[i];
        }
    }
    else if(document.getElementById("kategorisüperboy").checked)
    {
        for(i=0;i<süperboy.length;i=i+2)
        {
        olustur();
        pizzaSecenek.value=süperboy[i+1];
        pizzaAciklama.innerHTML=süperboy[i];
        }
    }
}
function sepeteEkle(){
    const listepizzaFiyat=document.getElementsByName("pizza");
    const listepizzaAd=document.getElementsByClassName("pizza"); 
    let adet=document.getElementById("pizzaAdet").value;
    eklenecekler=[];
    fiyatlar=[];  
 
    for(i=0;i<listepizzaFiyat.length;i++){
        if(listepizzaFiyat[i].checked){
            toplamTutar+=(Number(listepizzaFiyat[i].value)*adet);
            eklenecekler.push(listepizzaAd[i].innerHTML);
            fiyatlar.push(listepizzaFiyat[i].value);
        }
    }
    console.log(eklenecekler);
    console.log(fiyatlar);
    for(i=0;i<adet;i++)
    {
        let sepeteEklenecekpizza;
        for(let j=0;j<eklenecekler.length;j++){
            sepeteEklenecekpizza=document.createElement("option");
            listeSepet.options.add(sepeteEklenecekpizza);
            sepeteEklenecekpizza.text=eklenecekler[j];
            sepeteEklenecekpizza.value=fiyatlar[j];
        } 
              /*
        eklenecekler.forEach(element => {
            sepeteEklenecekpizza=document.createElement("option");
            listeSepet.options.add(sepeteEklenecekpizza);
            sepeteEklenecekpizza.text=element;
            sepeteEklenecekpizza.value="Fiyat?";
        });
                */
    }

    document.getElementById("sepetTutar").innerHTML=toplamTutar+" TL";
}

function sepettenCikar(){
    let seciliIndeks=listeSepet.selectedIndex;
    let silinecekpizzaFiyati=listeSepet.options[seciliIndeks].value;
    listeSepet.options.remove(seciliIndeks);
    toplamTutar=toplamTutar-silinecekpizzaFiyati;
    document.getElementById("sepetTutar").innerHTML=toplamTutar+" TL";
}
function sepetiBosalt(){
    document.querySelectorAll('#sepetpizza option').forEach(eleman => eleman.remove());
    toplamTutar=0;
    document.getElementById("sepetTutar").innerHTML=toplamTutar+" TL";

}
function koduEkle(){
    let girilenKod=document.getElementById("txtIndirim").value;
    if(girilenKod == kod)
    {
        if(toplamTutar>=150)
        {
            toplamTutar=toplamTutar-75;
            
            document.getElementById("sepetTutar").innerHTML=toplamTutar+" TL";
            document.getElementById("sonuc").innerHTML="İndirim uygulandı.";
            document.getElementById("txtIndirim").disabled=true;
            document.getElementById("txtIndirim").value="";
        }
        else{
            document.getElementById("sonuc").innerHTML="Girdiğiniz kod için minimum sepet tutarı 50 TL olmalıdır!";
        }
    }
    else{
        document.getElementById("sonuc").innerHTML="Geçerli bir kod girmediniz!";
    }
}