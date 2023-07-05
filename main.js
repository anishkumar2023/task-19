let section=document.getElementById("section")
let button=document.createElement("button")
section.appendChild(button)
button.innerHTML="click it"
button.setAttribute("onclick","show()")

 
let value=[{no:1},{no:2},{no:3},{no:4},{no:5},{no:6},{no:7}]

function show(){  
let name=value.map((e)=>{
	let ul=document.getElementById("ul")
	let li=document.createElement("li")
	li.innerHTML=e.no
	ul.appendChild(li)

})

 }
