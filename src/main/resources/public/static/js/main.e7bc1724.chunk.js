(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},28:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(18),r=c.n(n),i=(c(25),c(26),c(8)),j=c.n(i),l=c(10),m=c(11),o=c(2),d=c(6),h=(c(28),c(0)),u=function(e){var t=e.teamName,c=e.match;if(!c)return null;var a=c.team1===t?c.team2:c.team1,s="/teams/".concat(a),n=t===c.winner;return Object(h.jsxs)("div",{className:n?"MatchDetailCard won-card":"MatchDetailCard lost-card",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"vs",children:"VS"}),Object(h.jsx)("h1",{children:Object(h.jsx)(d.b,{to:s,children:a})}),Object(h.jsx)("h2",{className:"match-date",children:c.date}),Object(h.jsxs)("h3",{className:"match-venue",children:["at ",c.venue]}),Object(h.jsxs)("h3",{className:"match-result",children:[c.winner," won by ",c.resulMargin," ",c.result]})]}),Object(h.jsxs)("div",{className:"additional-details",children:[Object(h.jsx)("h3",{children:"First Innings"}),Object(h.jsx)("p",{children:c.team1}),Object(h.jsx)("h3",{children:"Sceond Innings"}),Object(h.jsx)("p",{children:c.team2}),Object(h.jsx)("h3",{children:"Man of the match"}),Object(h.jsx)("p",{children:c.playerOfMatch}),Object(h.jsx)("h3",{children:"Umpires"}),Object(h.jsxs)("p",{children:[c.umpire1,",",c.umpire2]})]})]})},b=(c(35),function(e){var t=e.match,c=e.teamName,a=t.team1===c?t.team2:t.team1,s="/teams/".concat(a),n=c===t.winner;return t?Object(h.jsxs)("div",{className:n?"MatchSmallCard won-card":"MatchSmallCard lost-card",children:[Object(h.jsx)("span",{children:"VS"}),Object(h.jsx)("h3",{children:Object(h.jsxs)(d.b,{to:s,children:[" ",a]})}),Object(h.jsxs)("p",{className:"match-result",children:[t.winner," won by ",t.resulMargin," ",t.result]})]}):null}),O=c(20),x=(c(36),c.p+"static/media/kkr.791fb2b2.png"),f=c.p+"static/media/mi.a1124d8d.png",N=c.p+"static/media/sh.6f954b1d.png",p=c.p+"static/media/rcb.f10a6a63.png",v=c.p+"static/media/csk.59638b71.png",g=function(){var e=Object(a.useState)({matches:[]}),t=Object(m.a)(e,2),c=t[0],s=t[1],n=Object(o.f)().teamName;return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team/").concat(n));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),c&&c.teamName?Object(h.jsxs)("div",{className:"TeamPage",children:[Object(h.jsxs)("div",{className:"team-name-section",children:[function(){switch(n){case"Kolkata Knight Riders":return Object(h.jsx)("img",{className:"icon",alt:"logo",src:x});case"Mumbai Indians":return Object(h.jsx)("img",{className:"icon",alt:"logo",src:f});case"Royal Challengers Bangalore":return Object(h.jsx)("img",{className:"icon",alt:"logo",src:p});case"Chennai Super Kings":return Object(h.jsx)("img",{className:"icon",alt:"logo",src:v});case"Sunrisers Hyderabad":return Object(h.jsx)("img",{className:"icon",alt:"logo",src:N});default:return Object(h.jsx)("div",{className:"icon"})}}(),Object(h.jsx)("h1",{className:"team-name",children:c.teamName})]}),Object(h.jsxs)("div",{className:"win-loss-section",children:["Wins/Losses",Object(h.jsx)(O.PieChart,{data:[{title:c.totalMatches+" Losses",value:c.totalMatches,color:"#a34d5d"},{title:c.totalWins+" Wins",value:c.totalWins,color:"#4da375"}]}),";"]}),Object(h.jsxs)("div",{className:"match-detail-section",children:[Object(h.jsx)("h3",{children:"Lateste Matches"}),Object(h.jsx)(u,{teamName:c.teamName,match:c.matches[0]})]}),c.matches.slice(1).map((function(e){return Object(h.jsx)(b,{teamName:c.teamName,match:e},e.id)})),Object(h.jsx)("div",{className:"more-link",children:Object(h.jsx)("a",{href:"/teams/".concat(n,"/matches/2020"),children:" More > "})})]}):Object(h.jsx)("h1",{children:"Team Not Found"})},w=(c(37),function(e){for(var t=e.teamName,c=[],a="2008";a<="2020";a++)c.push(a);return Object(h.jsx)("ol",{className:"YearSelector",children:c.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(d.b,{to:"/teams/".concat(t,"/matches/").concat(e),children:e})},e)}))})}),M=(c(38),function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),c=t[0],s=t[1],n=Object(o.f)(),r=n.teamName,i=n.year;return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team/").concat(r,"/matches?year=").concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r,i]),Object(h.jsxs)("div",{className:"MatchPage",children:[Object(h.jsxs)("div",{className:"year-selector",children:[Object(h.jsx)("h3",{children:"Select Year"}),Object(h.jsx)(w,{teamName:r})]}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("h1",{children:[r," matches in ",i]}),c.map((function(e){return Object(h.jsx)(u,{teamName:r,match:e},e.id)}))]})]})}),S=(c(39),function(e){var t=e.teamName;return Object(h.jsxs)("div",{className:"TeamTile",children:[Object(h.jsx)("h1",{children:Object(h.jsx)(d.b,{to:"/teams/".concat(t),children:t})}),function(){switch(t){case"Kolkata Knight Riders":return Object(h.jsx)("img",{className:"kkr",alt:"logo",src:x});case"Mumbai Indians":return Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)("img",{className:"mi",alt:"logo",src:f})});case"Royal Challengers Bangalore":return Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)("img",{className:"mi",alt:"logo",src:p})});case"Chennai Super Kings":return Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)("img",{className:"mi",alt:"logo",src:v})});case"Sunrisers Hyderabad":return Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)("img",{className:"mi",alt:"logo",src:N})});default:return Object(h.jsx)("div",{className:"icon"})}}()]})}),y=(c(40),function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(h.jsxs)("div",{className:"HomePage",children:[Object(h.jsx)("div",{className:"header-section",children:Object(h.jsx)("h1",{className:"app-name",children:"IPL Dashboard"})}),Object(h.jsx)("div",{className:"team-grid",children:c.map((function(e){return Object(h.jsx)(S,{teamName:e.teamName},e.id)}))})]})});var k=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(d.a,{children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/teams/:teamName/matches/:year",children:Object(h.jsx)(M,{})}),Object(h.jsx)(o.a,{path:"/teams/:teamName",children:Object(h.jsx)(g,{})}),Object(h.jsx)(o.a,{path:"/",children:Object(h.jsx)(y,{})})]})})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root")),C()}},[[41,1,2]]]);
//# sourceMappingURL=main.e7bc1724.chunk.js.map