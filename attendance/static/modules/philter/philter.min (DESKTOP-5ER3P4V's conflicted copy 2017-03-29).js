/* Philter v1.4.0 | (c) 2015-2016 Liudas Dzisevicius | MIT License */
!function(){"use strict";function t(){for(var t=0;t<this.filters.length;t++){if(this.options.tag)var e=document.querySelectorAll("[data-philter-"+this.filters[t]+"]");else var e=document.querySelectorAll("[data-"+this.filters[t]+"]");if(e)for(var r=0;r<e.length;r++)this.elements.indexOf(e[r])<0&&this.elements.push(e[r])}}function e(){for(var t=["",""],e="",i=0;i<this.elements.length;i++){for(var s=0;s<this.filters.length;s++){if(this.options.tag)var o=this.elements[i].getAttribute("data-philter-"+this.filters[s]);else var o=this.elements[i].getAttribute("data-"+this.filters[s]);o&&(e+=this.options.tag?"[data-philter-"+this.filters[s]+'="'+o+'"]':"[data-"+this.filters[s]+'="'+o+'"]',o=o.split(" "),o.unshift(this.filters[s]),t=r.call(this,t,o,n(o[0])))}""==this.transitionString?this.transitionString+=e:this.transitionString+=","+e,this.styleString+=e+"{filter:"+t[0]+";-webkit-filter:"+t[0]+";}",t[0]!=t[1]&&(this.styleString+=e+":hover{filter:"+t[1]+";-webkit-filter:"+t[1]+";}"),t=["",""],e=""}}function r(t,e,r){switch(e[0]){case"drop-shadow":t[0]=t[0]+e[0]+"("+e[1]+r+" "+e[2]+r+" "+e[3]+r+" rgba(0,0,0,"+.01*e[4]+")) ",e[5]&&e[6]&&e[7]&&e[8]?t[1]=t[1]+e[0]+"("+e[5]+r+" "+e[6]+r+" "+e[7]+r+" rgba(0,0,0,"+.01*e[8]+")) ":t[1]=t[1]+e[0]+"("+e[1]+r+" "+e[2]+r+" "+e[3]+r+" rgba(0,0,0,"+.01*e[4]+")) ";break;case"svg":t[0]=t[0]+"url("+r+e[1]+") ",e[2]?t[1]=t[1]+"url("+r+e[2]+") ":t[1]=t[1]+"url("+r+e[1]+") ";break;case"color":++this.filterCount.color,i.call(this,e[1],e[2],this.filterCount.color),t[0]=t[0]+"url("+r+"color-"+this.filterCount.color+") ",e[3]&&e[4]?(++this.filterCount.color,i.call(this,e[3],e[4],this.filterCount.color),t[1]=t[1]+"url("+r+"color-"+this.filterCount.color+") "):t[1]=t[1]+"url("+r+"color-"+this.filterCount.color+") ";break;case"vintage":0==this.filterCount["vintage-"+e[1]]&&s.call(this,e[1]),++this.filterCount["vintage-"+e[1]],t[0]=t[0]+"url("+r+"vintage-"+e[1]+") ",e[2]?(0==this.filterCount["vintage-"+e[2]]&&s.call(this,e[2]),++this.filterCount["vintage-"+e[1]],t[1]=t[1]+"url("+r+"vintage-"+e[2]+") "):t[1]=t[1]+"url("+r+"vintage-"+e[1]+") ";break;default:t[0]=t[0]+e[0]+"("+e[1]+r+") ",e[2]?t[1]=t[1]+e[0]+"("+e[2]+r+") ":t[1]=t[1]+e[0]+"("+e[1]+r+") "}return t}function i(t,e,r){var i=document.getElementById("svg");i||(i=document.createElement("div"),i.setAttribute("id","svg"),i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="0" height="0"><defs></defs></svg>',document.body.appendChild(i),i=document.getElementById("svg")),e=.01*e;var s=new XMLHttpRequest;s.open("GET",this.options.url+"/svg/color.svg"),s.send(null),s.onreadystatechange=function(){if(4===s.readyState)if(200===s.status){var n=s.response;if(n){n=n.replace("color","color-"+r),i.querySelector("defs").innerHTML+=n;var l=i.querySelector('filter[id="color-'+r+'"]').children[0];o(l,{"flood-opacity":e,"flood-color":t})}else console.error(this.errors.falsePath)}else 404===s.status&&console.error(this.errors.falsePath)}.bind(this)}function s(t){var e=document.getElementById("svg");e||(e=document.createElement("div"),e.setAttribute("id","svg"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="0" height="0"><defs></defs></svg>',document.body.appendChild(e),e=document.getElementById("svg"));var r=new XMLHttpRequest;r.open("GET",this.options.url+"/svg/vintage-"+t+".svg"),r.send(null),r.onreadystatechange=function(){if(4===r.readyState)if(200===r.status){var t=r.response;t?e.querySelector("defs").innerHTML+=t:console.error(this.errors.falsePath)}else 404===r.status&&console.error(this.errors.falsePath)}.bind(this)}function n(t){var e={blur:"px","hue-rotate":"deg","drop-shadow":"px",svg:"#",color:"#",vintage:"#","default":"%"};switch(t){case"blur":return e[t];case"hue-rotate":return e[t];case"drop-shadow":return e[t];case"svg":return e[t];case"color":return e[t];case"vintage":return e[t];default:return e["default"]}}function o(t,e){for(var r in e)t.setAttribute(r,e[r])}function l(t,e){var r;for(r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t}window.Philter=function(){var r={transitionTime:.5,url:"../js",tag:!0},i=document.createElement("style");this.errors={falsePath:"Philter Error: you probably didn't declare the right path to philter folder!"},this.filterCount={color:0,"vintage-1":0,"vintage-2":0,"vintage-3":0,"vintage-4":0,"vintage-5":0,"vintage-6":0},this.filters=["blur","grayscale","hue-rotate","saturate","sepia","contrast","invert","opacity","brightness","drop-shadow","svg","color","vintage"],this.elements=[],this.styleString="",this.transitionString="",arguments[0]&&"object"==typeof arguments[0]?this.options=l(r,arguments[0]):this.options=r,t.call(this),e.call(this),this.styleString+=this.transitionString+"{transition:filter "+this.options.transitionTime+"s,-webkit-filter "+this.options.transitionTime+"s;}#svg{height:0;}",i.innerHTML=this.styleString,document.head.appendChild(i)}}();
