(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,a){},12:function(t,e,a){t.exports=a(19)},19:function(t,e,a){"use strict";a.r(e);var n=a(8),o=a(1),l=a(2),r=a(5),i=a(3),c=a(4),u=a(0),s=a.n(u),m=a(11),p=a.n(m),f=(a(10),a(6)),d=function(t){function e(){return Object(o.a)(this,e),Object(r.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return s.a.createElement("table",{className:"zui-table"},s.a.createElement(h,null),s.a.createElement(b,{data:this.props.data,removeStock:this.props.removeStock}))}}]),e}(u.Component),h=function(){return s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Symbol"),s.a.createElement("th",null,"Value"),s.a.createElement("th",null,"Quantity"),s.a.createElement("th",null,"Total value"),s.a.createElement("th",null)))},b=function(t){var e=t.data.map(function(e,a){var n=(parseFloat(e.quantity)*e.value).toFixed(2);return s.a.createElement("tr",{key:a},s.a.createElement("td",null,e.symbol),s.a.createElement("td",null,e.value),s.a.createElement("td",null,e.quantity),s.a.createElement("td",null,n),s.a.createElement("td",null,s.a.createElement("button",{onClick:function(){return t.removeStock(a)}},"X")))});return s.a.createElement("tbody",null,e)},v=d,y=a(7),E=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(r.a)(this,Object(i.a)(e).call(this,t))).handleChange=function(t){a.setState(Object(y.a)({},t.target.name,t.target.value))},a.submitForm=function(){""===a.state.symbol||""===a.state.quantity||isNaN(a.state.quantity)||(a.props.handleSubmit(a.state),a.setState(a.initialState))},a.initialState={symbol:"",value:parseFloat("0.00"),quantity:""},a.state=a.initialState,a}return Object(c.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return s.a.createElement("form",{className:"stock-form"},s.a.createElement("label",null,"Symbol:"),s.a.createElement("input",{type:"text",name:"symbol",className:"symbol-input-field",value:this.state.symbol,onChange:this.handleChange}),s.a.createElement("label",null,"Quantity:"),s.a.createElement("input",{type:"text",name:"quantity",className:"quantity-input-field",value:this.state.quantity,onChange:this.handleChange}),s.a.createElement("input",{type:"button",value:"Add",onClick:this.submitForm}))}}]),e}(u.Component),S="R2XFYH8AEAQTGTHE",O=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(r.a)(this,Object(i.a)(e).call(this,t))).removeStock=function(t){a.setState({data:a.state.data.filter(function(e,a){return a!==t})})},a.handleSubmit=function(t){var e=Object(f.a)(Object(f.a)(a)),o="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=".concat(t.symbol,"&outputsize=compact&apikey=").concat(S),l=new XMLHttpRequest;l.open("GET",o,!0),l.onload=function(a){if(4===l.readyState)if(200===l.status){var o=JSON.parse(l.responseText)["Time Series (Daily)"];if("undefined"!==typeof o){var r=Object.keys(o);t.value=parseFloat(o[r[0]]["4. close"]).toFixed(2),t.symbol=t.symbol.toUpperCase();var i=e.state.data,c=!1;i.forEach(function(e){e.symbol===t.symbol&&(c=!0,e.value=t.value,e.quantity=t.quantity)}),c||(i=[].concat(Object(n.a)(e.state.data),[t])),i.length<=50&&e.setState({data:i}),e.props.updateStockCookie(e.props.name,i)}}else console.error(l.statusText)},l.send()},a.totalStockValue=function(){for(var t=0,e=a.state.data,n=0;n<e.length;n++)t+=parseFloat(e[n].value)*parseInt(e[n].quantity);return t.toFixed(2)},a.state={data:t.data,submitted:!1},a}return Object(c.a)(e,t),Object(l.a)(e,[{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var t=this;return s.a.createElement("div",{className:"portfolio-element"},s.a.createElement("div",{className:"portfolio-header"},s.a.createElement("p",{className:"portfolio-name"},this.props.name),s.a.createElement("button",{onClick:function(){return t.props.removePortfolio(t.props.name)}},"X")),s.a.createElement(v,{data:this.state.data,removeStock:this.removeStock}),s.a.createElement("p",{className:"total-sum"},"Total value of ",this.props.name,": ",this.totalStockValue()),s.a.createElement(E,{handleSubmit:this.handleSubmit}))}}]),e}(u.Component),k=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(r.a)(this,Object(i.a)(e).call(this,t))).handleChange=function(t){a.setState(Object(y.a)({},t.target.name,t.target.value))},a.submitForm=function(){""!==a.state.name&&(a.props.handleSubmit(a.state),a.setState(a.initialState))},a.initialState={name:"",data:[]},a.state=a.initialState,a}return Object(c.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"portfolio-form"},s.a.createElement("form",{onSubmit:function(t){t.preventDefault()}},s.a.createElement("label",null,"Name:"),s.a.createElement("input",{type:"text",name:"name",className:"name-input-field",value:this.state.name,onChange:this.handleChange}),s.a.createElement("input",{type:"button",value:"Add portfolio",onClick:this.submitForm})))}}]),e}(u.Component);function j(t,e,a){var n,o=new Date;o.setTime(o.getTime()+31536e4),n="; expires="+o.toUTCString(),document.cookie=t+"="+(e||"")+n+"; path=/"}var g=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(r.a)(this,Object(i.a)(e).call(this,t))).removePortfolio=function(t){a.setState({portfolios:a.state.portfolios.filter(function(e){return e.name!==t})})},a.handleSubmit=function(t){if(a.state.portfolios.length<10){var e=!1;if(a.state.portfolios.forEach(function(a){a.name===t.name&&(e=!0)}),!e){var o=[].concat(Object(n.a)(a.state.portfolios),[t]);a.setState({portfolios:o})}}},a.updateStockCookie=function(t,e){for(var n=a.state.portfolios,o=0;o<n.length;o++)n[o].name===t&&(n[o].data=e);j("portfolios",JSON.stringify(n))},a.state={portfolios:t.data},a}return Object(c.a)(e,t),Object(l.a)(e,[{key:"componentDidUpdate",value:function(){j("portfolios",JSON.stringify(this.state.portfolios))}},{key:"render",value:function(){var t=this,e=this.state.portfolios.map(function(e){return s.a.createElement(O,{name:e.name,data:e.data,key:e.name,removePortfolio:t.removePortfolio,updateStockCookie:t.updateStockCookie})});return s.a.createElement("div",{className:"global"},s.a.createElement(k,{handleSubmit:this.handleSubmit}),s.a.createElement("div",{className:"portfolios-container"},e))}}]),e}(u.Component),C=function(t){for(var e=t+"=",a=document.cookie.split(";"),n=0;n<a.length;n++){for(var o=a[n];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(e))return o.substring(e.length,o.length)}return null}("portfolios");C=null==C?[]:JSON.parse(C),p.a.render(s.a.createElement(g,{data:C}),document.getElementById("root"))}},[[12,2,1]]]);
//# sourceMappingURL=main.49fecc96.chunk.js.map