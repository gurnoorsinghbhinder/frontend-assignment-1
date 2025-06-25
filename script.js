const openBtn=document.getElementById("openModalBtn")
const closeBtn=document.getElementById("cross")
const modal=document.getElementById("modal")

openBtn.onclick=()=>{
    modal.style.display="flex";
}

closeBtn.onclick=()=>{
    modal.style.display="none";
}

window.onclick=(e)=>{
    if (e.target==modal){
        modal.style.display="none";
    }
}

