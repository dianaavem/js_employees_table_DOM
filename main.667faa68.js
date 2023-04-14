parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return o(e)||a(e)||t(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}function a(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return r(e)}function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}var i,l,c=document.querySelector("body"),s=document.querySelector("thead"),u=document.querySelector("tbody"),d=e(u.rows),p=4,f=18,m=90,v=1e3,b=-1,y=!0;function h(n,t,a){function o(e){return+e.slice(1).split(",").join("")}d.sort(function(e,a){var r=e.children[n].innerHTML,i=a.children[n].innerHTML;switch(t){case"Name":case"Position":case"Office":return r.localeCompare(i);case"Age":return r-i;case"Salary":return o(r)-o(i)}}),a&&d.reverse(),u.append.apply(u,e(d))}c.style.userSelect="none",s.addEventListener("click",function(e){var n=e.target.closest("th"),t=n.cellIndex;h(t,n.innerText,b===t),b=b===t?-1:t}),u.addEventListener("click",function(e){var n=e.target.closest("tr");d.forEach(function(e){e.removeAttribute("class")}),n.classList.add("active")});var g=document.createElement("form");function S(e,n,t,a,o){var r=document.createElement("div"),i=document.createElement("h2"),l=document.createElement("p");r.style.top="".concat(e,"px"),r.style.right="".concat(n,"px"),i.innerText=t,l.innerText=a,r.classList.add("notification",o),r.setAttribute("data-qa","notification"),i.classList.add("title"),r.append(i,l),document.body.append(r),setTimeout(function(){r.remove()},v)}function T(e){e.get("name").trim().length<p||/\d/.test(e.get("name"))?(S(450,10,"ERROR","Name value has less than 4 letters or numbers!"),i=!1):e.get("age")<f||e.get("age")>m?(S(450,10,"ERROR","Age value is less than 18 or more than 90!"),i=!1):i=!0}function E(e,n){switch(e){case 0:case 1:(/\d/.test(n.value)||n.value.trim().length<p)&&(y=!1,S(450,10,"ERROR","Value has less than 4 letters or include numbers!"));break;case 3:if(n.value<18||n.value>90){if(""===n.value)return void(y=!1);y=!1,S(450,10,"ERROR","The age must be 18+ and less than 90.")}break;case 4:if(+n.value<=0){if(""===n.value)return void(y=!1);y=!1,S(450,10,"ERROR","Salary must be more than 0!")}}}function L(e,n){if(!n)return""===e.firstChild.value?void(e.innerHTML=l.data):C(e);switch(e.cellIndex){case 4:e.innerHTML="".concat((+e.firstChild.value).toLocaleString("en-US",{style:"currency",currency:"USD"}).slice(0,-3)),S(450,10,"SUCCESS","Table was successfully changed!");break;case 0:case 1:case 3:e.innerHTML=e.firstChild.value,S(450,10,"SUCCESS","Table was successfully changed!")}l=null}function w(){y=!0}function C(e){if(l={element:e,data:e.innerHTML},2===e.cellIndex){var n=document.createElement("select");n.className="cell-input",n.innerHTML='\n      <option value="Choose office" selected disabled>Choose office</option>\n      <option value="Tokyo">Tokyo</option>\n      <option value="Singapore">Singapore</option>\n      <option value="London">London</option>\n      <option value="New York">New York</option>\n      <option value="Edinburgh">Edinburgh</option>\n      <option value="San Francisco">San Francisco</option>\n    ',e.innerHTML="",e.append(n),n.focus(),n.onblur=function(){var t=n.selectedIndex;e.innerHTML=n[t].value,0===n.selectedIndex&&(e.innerHTML=l.data),S(450,10,"SUCCESS","Table was successfully changed!")},n.onkeydown=function(e){"Enter"===e.key&&n.onblur()}}else{var t=document.createElement("input");switch(t.className="cell-input",t.innerHTML=e.innerHTML,e.innerHTML="",e.append(t),t.focus(),e.cellIndex){case 0:case 1:t.setAttribute("type","text");break;case 3:case 4:t.setAttribute("type","number")}t.onblur=function(n){E(e.cellIndex,t),L(l.element,y),w()},t.onkeydown=function(e){"Enter"===e.key&&t.onblur()}}}g.classList.add("new-employee-form"),g.innerHTML='\n  <label> Name:\n    <input type="text" name = "name" data-qa="name" required>\n  </label>\n  <label> Position:\n    <input type="text" name = "position" data-qa="position">\n  </label>\n  <label> Office:\n    <select name = "office" data-qa="office" required>\n      <option value="" selected disabled>Choose office</option>\n      <option value="Tokyo">Tokyo</option>\n      <option value="Singapore">Singapore</option>\n      <option value="London">London</option>\n      <option value="New York">New York</option>\n      <option value="Edinburgh">Edinburgh</option>\n      <option value="San Francisco">San Francisco</option>\n    </select>\n  </label>\n  <label> Age:\n    <input type="number" name = "age" data-qa="age" required>\n  </label>\n  <label> Salary:\n    <input type="number" name = "salary" data-qa="salary" required>\n  </label>\n  <button type="submit">Save to table</button>\n',c.append(g),g.addEventListener("submit",function(e){var n=new FormData(g),t=n.get("salary"),a=t;t.length>3&&(a=t.slice(0,-3)+","+t.slice(-3,t.length));var o="$".concat(a);if(e.preventDefault(),T(n),i){var r=u.insertRow();r.insertCell(0).innerText=n.get("name"),r.insertCell(1).innerText=n.get("position"),r.insertCell(2).innerText=n.get("office"),r.insertCell(3).innerText=n.get("age"),r.insertCell(4).innerText=o,d.push(r),g.reset(),S(450,10,"SUCCESS!","New employee is successfully added to the table!")}}),u.addEventListener("dblclick",function(e){var n=e.target.closest("td"),t=document.querySelector(".cell-input");if(t)return S(450,10,"ERROR","You must finished current cell!"),C(t.parentElement);n&&C(n)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.667faa68.js.map