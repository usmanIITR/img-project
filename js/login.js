const client_id = "Tm3HosWalwv6u2659Z2NNJVrix9dzlakb24ITtvV";
// const client_secret = "FkEK5CHn68xv0sBolyS14oUTJsbHPL0Jsowi8TJU895tPj05gC16cr1pIHF6ycDOPbwYOqCokmda7wX5osYfEGn4zVrcV8563pecjggHE 7b1rARQG4jbbuiKEzF6s9zu";
function redirector() {
    const url = "https://channeli.in/oauth/authorise/?client_id=" + client_id;    
    window.location = url;
}