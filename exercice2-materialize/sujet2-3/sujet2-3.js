/* Nom : GROLLIER
Prenom : Théo  
Groupe : 4
*/

var a = document.getElementById("menu");
a.addEventListener('click', function() {
    var elems = document.querySelectorAll('.nav');
    var instances = M.Nav.init(elems, {});
    var elemTap = document.querySelector('.tap-target');
    var instancesTap = M.TapTarget.init(elemTap, {});
    instancesTap.open()

  });

  

