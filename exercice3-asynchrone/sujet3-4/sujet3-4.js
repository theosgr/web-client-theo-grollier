/* Nom : GROLLIER
Prenom : Théo
Groupe : Groupe 4
*/

document.addEventListener('DOMContentLoaded',function(){
	const display = document.getElementById('display');
	const button = document.getElementById('boutton'); 
	const query = document.getElementById('search');

	var callBackGetSuccess = function (data) {
		 console.log(data);
		 var prod = data.products;
		 var html = "";
		 prod.forEach(element => {
			  html = html + element.image + '</br>';
		 }); 
		 display.innerHTML = html;
	}

	button.addEventListener('click',function() {
		 const APIKey = "14ccd817a2234816a3fd7d6003233a0c";
		 var search = query.value ;
		 var url = `https://api.spoonacular.com/food/products/search?query=${search}&apiKey=${APIKey}`;

		 $.get(url,callBackGetSuccess).done(function(){

		 })
		 .fail(function(){
			  alert("pb");
		 })
		 .always(function(){

		 });
	});
});