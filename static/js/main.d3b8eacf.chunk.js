(this.webpackJsonpgobang=this.webpackJsonpgobang||[]).push([[0],{18:function(n,r,t){},21:function(n,r,t){"use strict";t.r(r);var e=t(1),c=t(0),u=t(9),i=t.n(u),a=(t(18),t(7)),o=t(2),l=t(3);function b(){var n=Object(o.a)([""]);return b=function(){return n},n}function f(){var n=Object(o.a)(["\n  background-color: white;\n"]);return f=function(){return n},n}function j(){var n=Object(o.a)(["\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background-color: black;\n  box-sizing: border-box;\n  box-shadow: 1px 1px 1px 1px rgba(50, 50, 50, 0.3);\n"]);return j=function(){return n},n}function s(){var n=Object(o.a)([""]);return s=function(){return n},n}function d(){var n=Object(o.a)(["\nmargin: 20px 0;\n"]);return d=function(){return n},n}function h(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return h=function(){return n},n}var v=l.a.div(h()),x=l.a.button(d()),m=l.a.div(s()),O=l.a.div(j()),p=Object(l.a)(O)(f()),g=l.a.div(b());function k(n){var r=n.row,t=n.column,c=n.children;return Object(e.jsx)("div",{row:r,column:t,className:"square",children:c},t)}function w(n){return n.map.map((function(n,r){var t=r;return Object(e.jsx)(m,{row:r,children:n.map((function(n,r){return Object(e.jsx)(k,{row:t,column:r,children:null===n?null:"0"===n?Object(e.jsx)(O,{}):Object(e.jsx)(p,{})},r)}))},r)}))}function N(){window.location.reload()}function y(n){var r=n.map,t=n.handleClick;return Object(e.jsxs)(v,{children:[Object(e.jsx)("h1",{children:"React Gomoku"}),Object(e.jsx)(g,{id:"board",onClick:function(n){t(n.target)},children:Object(e.jsx)(w,{map:r})}),Object(e.jsx)(x,{onClick:N,children:"\u518d\u73a9\u4e00\u6b21"})]})}var A=[],C=!0,B=!1;function E(){var n=Object(c.useState)(Array(19).fill(Array(19).fill(null))),r=Object(a.a)(n,2),t=r[0],u=r[1];function i(n,r,e,c){for(var u=0;u<4;){var i=n+e,a=r+c;if(i<0||i>18||a<0||a>18)break;if(null===t[i][a]||t[i][a]!==t[n][r])break;u+=1,n=i,r=a}return u}return Object(c.useEffect)((function(){if(0!==A.length){var n=C?"White":"Black";(function(n){if(0!==n.length){var r=Object(a.a)(n[n.length-1],2),t=r[0],e=r[1];return i(t,e,1,0)+i(t,e,-1,0)>=4||i(t,e,0,1)+i(t,e,0,-1)>=4||i(t,e,1,-1)+i(t,e,-1,1)>=4||i(t,e,-1,-1)+i(t,e,1,1)>=4}})(A)&&(B=!0,alert("".concat(n," is winner")))}})),Object(e.jsx)(y,{map:t,handleClick:function(n){if(!B){var r=[n.getAttribute("row"),n.getAttribute("column")],e=r[0],c=r[1];null===e||null===c||t[e][c]||(A.push([Number(e),Number(c)]),u(t.map((function(n,r){return r!==Number(e)?n:n.map((function(n,r){if(n)return n;if(r===Number(c)){var t=C?"0":"1";return C=!C,t}return n}))}))))}}})}i.a.render(Object(e.jsx)(E,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.d3b8eacf.chunk.js.map