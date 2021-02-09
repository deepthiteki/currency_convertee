var base = "";
var basecurrency=0;
function run(){
var sel = document.getElementById("dropdown");

base = sel.value;





  
fetch("https://api.exchangeratesapi.io/latest")
  .then((res) => res.json())
  .then((data) => {
    
    data.rates["EUR"] = 1;
  
    
    document.getElementById("usd1").innerHTML=((data.rates["USD"]/data.rates[base]).toFixed(4));

    document.getElementById("eur1").innerHTML=((data.rates["EUR"]/data.rates[base]).toFixed(4));
    document.getElementById("jpy1").innerHTML=((data.rates["JPY"]/data.rates[base]).toFixed(4));
    document.getElementById("gbp1").innerHTML=((data.rates["GBP"]/data.rates[base]).toFixed(4));
    document.getElementById("aud1").innerHTML=((data.rates["AUD"]/data.rates[base]).toFixed(4));
    document.getElementById("inr1").innerHTML=((data.rates["INR"]/data.rates[base]).toFixed(4));
    
    
    
    
  })
  .catch((err) => console.log(err));
}