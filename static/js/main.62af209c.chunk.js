(window.webpackJsonpyahtzee=window.webpackJsonpyahtzee||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(10),i=n.n(a),c=(n(16),n(1)),l=n(5),s=n(3),u=n(2),d=n(4),f=n(7),h=n(8),p=n(6),v=(n(17),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(p.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(){this.props.handleClick(this.props.idx)}},{key:"render",value:function(){var e=this.props,t=e.numberWords,n=e.locked,r=e.val,a=e.disabled,i=e.rolling,c="Die fas fa-4x fa-dice-".concat(t[r-1]," ");return n&&(c+="Die-locked"),i&&(c+="Die-rolling"),o.a.createElement("i",{className:c,onClick:this.handleClick,disabled:a})}}]),t}(r.Component));v.defaultProps={numberWords:["one","two","three","four","five","six"],val:3};var m=v,b=(n(18),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Dice"},this.props.dice.map((function(t,n){return o.a.createElement(m,{handleClick:e.props.handleClick,val:t,locked:e.props.locked[n],idx:n,key:n,disabled:e.props.disabled,rolling:e.props.rolling&&!e.props.locked[n]})})))}}]),t}(r.Component)),O=(n(19),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.score,n=e.name,r=e.description,a=e.doScore,i=void 0!==t;return o.a.createElement("tr",{className:"RuleRow RuleRow-".concat(i?"disabled":"active"),onClick:i?null:a},o.a.createElement("td",{className:"RuleRow-name"},n),o.a.createElement("td",{className:"RuleRow-score"},i?t:r))}}]),t}(r.Component)),g=(n(20),function(){function e(t){Object(c.a)(this,e),Object.assign(this,t)}return Object(l.a)(e,[{key:"sum",value:function(e){return e.reduce((function(e,t){return e+t}))}},{key:"freq",value:function(e){var t=new Map,n=!0,r=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var c=a.value;t.set(c,(t.get(c)||0)+1)}}catch(l){r=!0,o=l}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return Array.from(t.values())}},{key:"count",value:function(e,t){return e.filter((function(e){return e===t})).length}}]),e}()),j=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).evalRoll=function(e){return n.val*n.count(e,n.val)},n}return Object(d.a)(t,e),t}(g),y=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).evalRoll=function(e){return n.freq(e).some((function(e){return e>=n.count}))?n.sum(e):0},n}return Object(d.a)(t,e),t}(g),k=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).evalRoll=function(e){var t=n.freq(e);return t.includes(2)&&t.includes(3)?n.score:0},n}return Object(d.a)(t,e),t}(g),w=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).evalRoll=function(e){var t=new Set(e);return 4!==t.size||(t.has(1)||t.has(2))&&(t.has(1)||t.has(6))&&(t.has(5)||t.has(6))?0:n.score},n}return Object(d.a)(t,e),t}(g),S=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).evalRoll=function(e){var t=new Set(e);return 5!==t.size||t.has(1)&&t.has(6)?0:n.score},n}return Object(d.a)(t,e),t}(g),E=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).evalRoll=function(e){return 5===n.freq(e)[0]?n.score:0},n}return Object(d.a)(t,e),t}(g),R=new j({val:1,description:"1 point per 1"}),C=new j({val:2,description:"2 points per 2"}),A=new j({val:3,description:"3 points per 3"}),N=new j({val:4,description:"4 points per 4"}),L=new j({val:5,description:"5 points per 5"}),T=new j({val:6,description:"6 points per 6"}),x=new y({count:3,description:"Sum of 3 same dices"}),z=new y({count:4,description:"Sum of 4 same dices"}),K=new k({score:25,description:"25 points"}),P=new w({score:30,description:"30 points"}),D=new S({score:40,description:"40 points"}),W=new E({score:50,description:"50 points"}),M=new y({count:0,description:"Sum of all dice"}),G=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(p.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(){this.props.reset()}},{key:"getTotalScore",value:function(){var e=this.props.scores,t=0;for(var n in e)e[n]&&(t+=e[n]);return t}},{key:"playAgain",value:function(){var e=this.props.scores,t=0;for(var n in e)e[n]>=0&&(t+=1);return t}},{key:"render",value:function(){var e=this.props,t=e.scores,n=e.doScore;return o.a.createElement("div",{className:"ScoreTable"},o.a.createElement("section",{className:"ScoreTable-section"},o.a.createElement("h2",null,"Upper"),o.a.createElement("table",{cellSpacing:"0"},o.a.createElement("tbody",null,o.a.createElement(O,{name:"Ones",score:t.ones,description:R.description,doScore:function(e){return n("ones",R.evalRoll)}}),o.a.createElement(O,{name:"Twos",score:t.twos,description:C.description,doScore:function(e){return n("twos",C.evalRoll)}}),o.a.createElement(O,{name:"Threes",score:t.threes,description:A.description,doScore:function(e){return n("threes",A.evalRoll)}}),o.a.createElement(O,{name:"Fours",score:t.fours,description:N.description,doScore:function(e){return n("fours",N.evalRoll)}}),o.a.createElement(O,{name:"Fives",score:t.fives,description:L.description,doScore:function(e){return n("fives",L.evalRoll)}}),o.a.createElement(O,{name:"Sixes",score:t.sixes,description:T.description,doScore:function(e){return n("sixes",T.evalRoll)}})))),o.a.createElement("section",{className:"ScoreTable-section ScoreTable-section-lower"},o.a.createElement("h2",null,"Lower"),o.a.createElement("table",{cellSpacing:"0"},o.a.createElement("tbody",null,o.a.createElement(O,{name:"Three of Kind",score:t.threeOfKind,description:x.description,doScore:function(e){return n("threeOfKind",x.evalRoll)}}),o.a.createElement(O,{name:"Four of Kind",score:t.fourOfKind,description:z.description,doScore:function(e){return n("fourOfKind",z.evalRoll)}}),o.a.createElement(O,{name:"Full House",score:t.fullHouse,description:K.description,doScore:function(e){return n("fullHouse",K.evalRoll)}}),o.a.createElement(O,{name:"Small Straight",score:t.smallStraight,description:P.description,doScore:function(e){return n("smallStraight",P.evalRoll)}}),o.a.createElement(O,{name:"Large Straight",score:t.largeStraight,description:D.description,doScore:function(e){return n("largeStraight",D.evalRoll)}}),o.a.createElement(O,{name:"Yahtzee",score:t.yahtzee,description:W.description,doScore:function(e){return n("yahtzee",W.evalRoll)}}),o.a.createElement(O,{name:"Chance",score:t.chance,description:M.description,doScore:function(e){return n("chance",M.evalRoll)}})))),o.a.createElement("h2",null,"Total Score: ",this.getTotalScore()," "),13===this.playAgain()&&o.a.createElement("button",{onClick:this.handleClick,className:"playAgain"},"Play Again"))}}]),t}(r.Component);n(21);function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(n,!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=5,B=3,J=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={dice:Array.from({length:F}),locked:Array(F).fill(!1),rollsLeft:B,rolling:!1,scores:{ones:void 0,twos:void 0,threes:void 0,fours:void 0,fives:void 0,sixes:void 0,threeOfKind:void 0,fourOfKind:void 0,fullHouse:void 0,smallStraight:void 0,largeStraight:void 0,yahtzee:void 0,chance:void 0}},n.roll=n.roll.bind(Object(p.a)(n)),n.doScore=n.doScore.bind(Object(p.a)(n)),n.toggleLocked=n.toggleLocked.bind(Object(p.a)(n)),n.animateRoll=n.animateRoll.bind(Object(p.a)(n)),n.reset=n.reset.bind(Object(p.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"reset",value:function(){this.setState({dice:Array.from({length:F}),locked:Array(F).fill(!1),rollsLeft:B,scores:{ones:void 0,twos:void 0,threes:void 0,fours:void 0,fives:void 0,sixes:void 0,threeOfKind:void 0,fourOfKind:void 0,fullHouse:void 0,smallStraight:void 0,largeStraight:void 0,yahtzee:void 0,chance:void 0}}),this.animateRoll()}},{key:"animateRoll",value:function(){var e=this;this.setState({rolling:!0},(function(){return setTimeout(e.roll,1e3)}))}},{key:"roll",value:function(e){this.setState((function(e){return{dice:e.dice.map((function(t,n){return e.locked[n]?t:Math.ceil(6*Math.random())})),locked:e.rollsLeft>1?e.locked:Array(F).fill(!0),rollsLeft:e.rollsLeft-1,rolling:!1}}))}},{key:"toggleLocked",value:function(e){this.state.rollsLeft>0&&!this.state.rolling&&this.setState((function(t){return{locked:[].concat(Object(h.a)(t.locked.slice(0,e)),[!t.locked[e]],Object(h.a)(t.locked.slice(e+1)))}}))}},{key:"doScore",value:function(e,t){var n=this;this.setState((function(r){return{scores:q({},r.scores,Object(f.a)({},e,t(n.state.dice))),rollsLeft:B,locked:Array(F).fill(!1)}})),this.animateRoll()}},{key:"rollingMessage",value:function(){return["0 rolls left","1 roll left","2 rolls left","Round start"][this.state.rollsLeft]}},{key:"componentDidMount",value:function(){this.animateRoll()}},{key:"render",value:function(){var e=this.state,t=e.dice,n=e.locked,r=e.rollsLeft,a=e.rolling,i=e.scores;return o.a.createElement("div",{className:"Game"},o.a.createElement("header",{className:"Game-header"},o.a.createElement("h1",{className:"App-title"},"Yahtzee!"),o.a.createElement("section",{className:"Game-dice-section"},o.a.createElement(b,{dice:t,locked:n,handleClick:this.toggleLocked,disabled:0===r,rolling:a}),o.a.createElement("div",{className:"Game-button-wrapper"},o.a.createElement("button",{className:"Game-reroll",disabled:n.every((function(e){return e}))||a,onClick:this.animateRoll},this.rollingMessage())))),o.a.createElement(G,{doScore:this.doScore,scores:i,reset:this.reset}))}}]),t}(r.Component),U=(n(22),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(J,null))}}]),t}(r.Component)),Y=(n(23),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function I(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(U,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/yahtzee",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/yahtzee","/service-worker.js");Y?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):I(e)}))}}()}],[[11,1,2]]]);
//# sourceMappingURL=main.62af209c.chunk.js.map