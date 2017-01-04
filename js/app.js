$(function () {

console.log('it works');

/* --- dropdown_menu --- */

var button = document.querySelector('#menu_mobile');
console.log(button);

var list = document.querySelector('.nav-content');
console.log(list);

var a = document.querySelectorAll('.links');
console.log(a);




for( i=0; i<a.length; i++) {
          a[i].addEventListener('click', function() {
              list.style.display = 'none';
          });
        }

        button.addEventListener('click', function() { //na guzik nadaje klikanie


            var parent = this.childNode;
            console.log(parent);

            if (list.style.display == 'none') {
            list.style.display = 'block';
        } else if (list.style.display = 'block') {
            list.style.display = 'none';
        } else {
            list.style.display = 'none';
        }

        });

});
