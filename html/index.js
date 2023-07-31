var welcomeName= document.querySelector("#welcomeName")
welcomeName.innerHTML=`welcome ${window.localStorage.getItem("userName")}`
