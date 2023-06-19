window.addEventListener("mousemove", function(details)
{
    document.getElementById('main-img').style.transform=`translate(-40%,-120%) translate(${details.clientX*.05}px, ${details.clientY*.05}px)`;
    document.querySelector('h1').style.transform=` translate(${1 - details.clientX*.05}px, ${1 - details.clientY*.05}px)`;
    // console.log(details.clientX,details.clientY);
})