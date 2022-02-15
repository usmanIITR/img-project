const client_id = "Tm3HosWalwv6u2659Z2NNJVrix9dzlakb24ITtvV";
const client_secret = "FkEK5CHn68xv0sBolyS14oUTJsbHPL0Jsowi8TJU895tPj05gC16cr1pIHF6ycDOPbwYOqCokmda7wX5osYfEGn4zVrcV8563pecjggHE 7b1rARQG4jbbuiKEzF6s9zu";
const authorization_code = window.location.search.split('&')[0].replace('?code=','');
console.log(authorization_code);
const grant_type = "authorization_code";
const redirect_uri = "http://localhost:8080/";
const data = "client_id="+client_id+"&client_secret="+client_secret+"&grant_type="+grant_type+"&redirect_uri="+redirect_uri+"&code="+authorization_code;
const retreive_token_uri = "https://channeli.in/open_auth/token/";
const http = new XMLHttpRequest();
http.open("POST", retreive_token_uri);
http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
http.send(data);
http.onreadystatechange = () =>{
    if(http.readyState===XMLHttpRequest.DONE && http.status===200){
        console.log(http.responseText);
    }
};