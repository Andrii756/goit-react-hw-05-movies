"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[176],{689:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r=t(152),a=t(791),i=t(871),c=t(861),o=t(757),s=t.n(o);function u(){return(u=(0,c.Z)(s().mark((function n(e){var t,r,a,i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"d783920aea034ba2adae6031a0bf96c0",t="https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),r="?api_key=".concat("d783920aea034ba2adae6031a0bf96c0","&language=en-US&page=1"),n.next=5,fetch("".concat(t).concat(r));case 5:return a=n.sent,n.next=8,a.json();case 8:return i=n.sent,n.abrupt("return",i);case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var d,h,p,f,l=function(n){return u.apply(this,arguments)},v=t(70),x=t(168),g=t(499),m=t(624),b=g.Z.ul(d||(d=(0,x.Z)([""]))),Z=g.Z.li(h||(h=(0,x.Z)(["\n  border: 1px solid ",";\n  border-radius: 5px;\n  padding: 15px;\n  margin-bottom: 15px;\n"])),m.Fd),w=g.Z.h2(p||(p=(0,x.Z)(["\n  color: ",";\n  margin-bottom: 15px;\n"])),m.NN),j=g.Z.p(f||(f=(0,x.Z)(["\n  line-height: 2;\n"]))),_=t(184);var k=function(n){var e=n.reviews;return(0,_.jsx)(v.Z,{isPadding:!0,children:(0,_.jsx)(b,{children:e.map((function(n){var e=n.id,t=n.author,r=n.text;return(0,_.jsxs)(Z,{children:[(0,_.jsx)(w,{children:t}),(0,_.jsx)(j,{children:r})]},e)}))})})};var y=function(){var n=(0,i.UO)().movieId,e=(0,a.useState)(null),t=(0,r.Z)(e,2),c=t[0],o=t[1];return(0,a.useEffect)((function(){l(n).then((function(n){var e=n.results,t=[];e.map((function(n){var e={id:n.id,author:n.author,text:n.content};return t.push(e)})),o(t)}))}),[n]),c&&c.length>0?(0,_.jsx)(k,{reviews:c}):(0,_.jsx)(v.Z,{isPadding:!0,children:(0,_.jsx)("h2",{children:"We don't have any reviews for this movie."})})}}}]);
//# sourceMappingURL=review-view.88f8bc5f.chunk.js.map