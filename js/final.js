function validEmail(e){return/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(e)}function validateHuman(e){if(e)return console.log("Robot Detected!"),!0;console.log("Welcome Human!")}function getFormData(){var e=document.getElementById("gform"),o=e.elements,t=Object.keys(o).filter(function(e){return"honeypot"!==o[e].name}).map(function(e){return void 0!==o[e].name?o[e].name:0<o[e].length?o[e].item(0).name:void 0}).filter(function(e,t,n){return n.indexOf(e)==t&&e}),a={};return t.forEach(function(e){a[e]=o[e].value;var t="";if("checkbox"===o[e].type)t=t+o[e].checked+", ",a[e]=t.slice(0,-2);else if(o[e].length)for(var n=0;n<o[e].length;n++)o[e].item(n).checked&&(t=t+o[e].item(n).value+", ",a[e]=t.slice(0,-2))}),a.formDataNameOrder=JSON.stringify(t),a.formGoogleSheetName=e.dataset.sheet||"responses",a.formGoogleSendEmail=e.dataset.email||"",console.log(a),a}function handleFormSubmit(e){e.preventDefault();var t=getFormData();if(t.email&&!validEmail(t.email)){var n=document.getElementById("email-invalid");if(n)return!(n.style.display="block")}else{var o=e.target.action,a=new XMLHttpRequest;a.open("POST",o),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.onreadystatechange=function(){console.log(a.status,a.statusText),console.log(a.responseText),document.getElementById("gform").style.display="none";var e=document.getElementById("thankyou_message");e&&(e.style.display="block")};var l=Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&");a.send(l)}}function loaded(){console.log("Contact form submission handler loaded successfully."),document.getElementById("gform").addEventListener("submit",handleFormSubmit,!1)}document.addEventListener("DOMContentLoaded",loaded,!1);var mixer=mixitup(".mixitup");$("#dn").click(),$(".owl-carousel").owlCarousel({loop:!0,dots:!0,nav:!0,navText:["",""],responsive:{600:{items:1},200:{items:1}}});