(this.webpackJsonplist=this.webpackJsonplist||[]).push([[0],{14:function(e,t,a){e.exports=a(27)},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(6),c=a.n(r),l=(a(19),a(11)),s=a(7),o=a(8),u=a(2),m=a(13),d=a(12),h=(a(20),a(21),a(9));var p=function(e){var t=e.items.map((function(t){return i.a.createElement("div",{className:"list",key:t.key},i.a.createElement("p",null,i.a.createElement("input",{type:"text",id:t.key,value:t.text,onChange:function(a){e.setUpdate(a.target.value,t.key)}}),i.a.createElement("span",null,i.a.createElement(h.a,{className:"faicons",icon:"trash",onClick:function(){return e.deleteItem(t.key)}}))))}));return i.a.createElement("div",null,t)},v=a(3),f=a(10);v.b.add(f.a);var k=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={items:[],currentItem:{text:"",key:""}},n.handleInput=n.handleInput.bind(Object(u.a)(n)),n.addItem=n.addItem.bind(Object(u.a)(n)),n.deleteItem=n.deleteItem.bind(Object(u.a)(n)),n.setUpdate=n.setUpdate.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"handleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(console.log(t),""!==t.text){var a=[].concat(Object(l.a)(this.state.items),[t]);this.setState({items:a,currentItem:{text:"",key:""}})}}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"setUpdate",value:function(e,t){var a=this.state.items;a.map((function(a){a.key===t&&(a.text=e)})),this.setState({items:a})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Yap\u0131lacaklar Listesi"),i.a.createElement("hr",null),i.a.createElement("header",null,i.a.createElement("form",{id:"to-do-form",onSubmit:this.addItem},i.a.createElement("input",{type:"text",placeholder:"Buraya Yaz\u0131n",value:this.state.currentItem.text,onChange:this.handleInput}),i.a.createElement("button",{type:"submit"},"Ekle"))),i.a.createElement(p,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate}))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.478eeea3.chunk.js.map