(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(t,e,s){t.exports={notificationMessage:"NotificationMessage_notificationMessage__2PwHi"}},17:function(t,e,s){},19:function(t,e,s){"use strict";s.r(e);var i=s(1),c=s.n(i),n=s(5),a=s.n(n),o=(s(17),s(6)),r=s(3),j=s(7),l=s(8),d=s(12),u=s(11),b=s(2),h=s.n(b),O=s(0),m=function(t){var e=t.good,s=t.neutral,i=t.bad,c=t.totalFeedback,n=t.positiveFeedback;return Object(O.jsxs)("div",{className:h.a.statisticsContainer,children:[Object(O.jsx)("h2",{children:"Statistics"}),Object(O.jsxs)("ul",{className:h.a.statisticsList,children:[Object(O.jsxs)("li",{className:h.a.statisticsListItem,children:["Good: ",e]}),Object(O.jsxs)("li",{className:h.a.statisticsListItem,children:["Neutral: ",s]}),Object(O.jsxs)("li",{className:h.a.statisticsListItem,children:["Bad: ",i]}),Object(O.jsxs)("li",{className:h.a.statisticsListItem,children:["Total Feedback: ",c]}),Object(O.jsxs)("li",{className:h.a.statisticsListItem,children:["Positive Feedback: ",n,"%"]})]})]})},f=s(9),x=s.n(f),p=function(t){var e=t.Function,s=t.ButtonType;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("button",{type:"button",className:x.a.optionButton,onClick:function(t){e(s)},children:s})})},k=function(t){var e=t.state,s=t.increment,i=Object.keys(e);return Object(O.jsx)("div",{children:i.map((function(t){return Object(O.jsx)(p,{ButtonType:t,Function:s},t)}))})},v=s(10),g=s.n(v),F=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("span",{className:g.a.notificationMessage,children:"No feedback given"})})},N=function(t){Object(d.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(j.a)(this,s);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.increment=function(e){t.setState((function(t){return Object(r.a)({},e,t[e]+1)}))},t}return Object(l.a)(s,[{key:"render",value:function(){Object.keys(this.state);var t=Object.values(this.state).reduce((function(t,e){return t+e}),0),e=Math.round(this.state.good/t*100);return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h1",{children:"Please leave feedback"}),Object(O.jsx)("div",{children:Object(O.jsx)(k,{increment:this.increment,state:this.state})}),t>0?Object(O.jsx)(m,Object(o.a)({totalFeedback:t,positiveFeedback:e},this.state)):Object(O.jsx)(F,{})]})}}]),s}(i.Component);a.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root"))},2:function(t,e,s){t.exports={statisticsList:"FeedBackStatistics_statisticsList__37YAZ",statisticsListItem:"FeedBackStatistics_statisticsListItem__2qYr5"}},9:function(t,e,s){t.exports={optionButton:"FeedBackButtons_optionButton__3Y4XM"}}},[[19,1,2]]]);
//# sourceMappingURL=main.3ac8866e.chunk.js.map