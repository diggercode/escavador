function myFunction() {
    const c = document.querySelector('#code').value, 
    t = document.querySelector('#temp').value, e = document.querySelector('#ep').value, 
    http = "http://braintv.azureedge.net/", leng = document.querySelector('#lang').value;
    document.querySelector("#informa").innerHTML = `Você Está Assistindo ao Episódio ${e}`
    document.getElementById("myFrame").src = `${http}/${c}/${t}/${leng}/${e}.mp4`
}
