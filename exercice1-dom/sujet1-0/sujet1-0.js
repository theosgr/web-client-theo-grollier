/* Nom : GROLLIER
Prenom : Théo
Groupe : Groupe 4
*/
let data = [];
for(let i = 0;  i<5; i++)
    data.push({
        id: i,
        src:"cat"+i+".jpg",
        title: "Chat "+i
    })
for(let i = 0;  i<5; i++)
    data.push({
        id: i+5,
        src:"nightlife"+i+".jpg",
        title: "Nuit "+i
    })
window.addEventListener("load", () => {
    const display = document.querySelector("#display"); 
    data.forEach(chats => {
        let div = document.createElement('div');
        div.setAttribute("class", "col m2");
        div.innerHTML = `
        <div class="card">
         <div class="card-image">
            <img src="/../assets/images/${chats.src}">
            <span class="card-title"> ${chats.id} </span>
        </div>
        <div class="card-action">
            <a href="">This is a link</a>
        </div>
    </div>`

    div.querySelector('a').addEventListener("click",()=>{
        document.getElementById("#card-image").remove();
    });

    display.appendChild(div);
    
    })
})