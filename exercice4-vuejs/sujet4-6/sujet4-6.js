/* Nom : Grollier
Prenom :  Théo
Groupe : 4
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


    Vue.component('chats', {
        template: `
            <div class="card">
         <div class="card-image">
            <img src="/../assets/images/{{data.src}}">
            <span class="card-title"> {{data.id}} </span>
        </div>
        <div class="card-action">
            <a href="">This is a link</a>
        </div>
    </div>`








    });