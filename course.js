async function localGetter(){
    let data=await localStorage.getItem("vid");
    document.querySelector(".fullscreen").innerHTML=`
    <iframe width="100%" height="100%" src="${data}" frameborder="0" allowfullscreen></iframe>`;
}
localGetter();