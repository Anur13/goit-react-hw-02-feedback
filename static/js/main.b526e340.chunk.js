(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(t,e,s){},18:function(t,e,s){"use strict";s.r(e);var n=s(1),i=s.n(n),a=s(5),c=s.n(a),o=(s(16),s(10)),r=s(6),l=s(7),d=s(11),u=s(9),b=s(3),j=s.n(b),h=s(2),m=s.n(h),f=s(0),O=function(t){var e=t.good,s=t.neutral,n=t.bad,i=t.totalFeedback,a=t.positiveFeedback;return Object(f.jsxs)("div",{className:m.a.statisticsContainer,children:[Object(f.jsx)("h2",{children:"Statistics"}),Object(f.jsxs)("ul",{className:m.a.statisticsList,children:[Object(f.jsxs)("li",{className:m.a.statisticsListItem,children:["Good: ",e]}),Object(f.jsxs)("li",{className:m.a.statisticsListItem,children:["Neutral: ",s]}),Object(f.jsxs)("li",{className:m.a.statisticsListItem,children:["Bad: ",n]}),Object(f.jsxs)("li",{className:m.a.statisticsListItem,children:["Total Feedback: ",i]}),Object(f.jsxs)("li",{className:m.a.statisticsListItem,children:["Positive Feedback: ",a,"%"]})]})]})},p=s(8),x=s.n(p),N=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("span",{className:x.a.notificationMessage,children:"No feedback given"})})},k=function(t){Object(d.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(r.a)(this,s);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={good:0,neutral:0,bad:0},t.incrementGood=function(e){t.setState((function(t){return{good:t.good+1}}))},t.incrementNeutral=function(e){t.setState((function(t){return{neutral:t.neutral+1}}))},t.incrementBad=function(e){t.setState((function(t){return{bad:t.bad+1}}))},t}return Object(l.a)(s,[{key:"render",value:function(){var t=Object.values(this.state).reduce((function(t,e){return t+e}),0),e=Math.round(this.state.good/t*100);return Object(f.jsxs)("div",{className:j.a.container,children:[Object(f.jsx)("h1",{children:"Please leave feedback"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{type:"button",className:j.a.optionButton,onClick:this.incrementGood,children:"Good"}),Object(f.jsx)("button",{type:"button",className:j.a.optionButton,onClick:this.incrementNeutral,children:"Neutral"}),Object(f.jsx)("button",{type:"button",className:j.a.optionButton,onClick:this.incrementBad,children:"Bad"})]}),t>0?Object(f.jsx)(O,Object(o.a)({totalFeedback:t,positiveFeedback:e},this.state)):Object(f.jsx)(N,{})]})}}]),s}(n.Component);var v=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(k,{})})};c.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root"))},2:function(t,e,s){t.exports={statisticsList:"FeedBackStatistics_statisticsList__2HrUf",statisticsListItem:"FeedBackStatistics_statisticsListItem__1TAXo"}},3:function(t,e,s){t.exports={optionButton:"Button_optionButton__3ngzp",container:"Button_container__wVZ0u"}},8:function(t,e,s){t.exports={notificationMessage:"NotificationMessage_notificationMessage__2QqJc"}}},[[18,1,2]]]);
//# sourceMappingURL=main.b526e340.chunk.js.map