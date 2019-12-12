(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{180:function(e,t,a){e.exports=a(395)},185:function(e,t,a){},215:function(e,t,a){},395:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),s=a.n(o),c=(a(185),a(44)),i=a(45),u=a(47),l=a(46),p=a(48),d=a(71),m=a(51),h=a(88),f=a(18),v=a.n(f),g="http://localhost:3000",b="http://mockserver-quantv.herokuapp.com",y=a(39),x=a.n(y),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).verifyToken=function(){var e;return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=localStorage.getItem("accessToken")){t.next=3;break}return t.abrupt("return",a.setState({isLogin:!1}));case 3:return t.prev=3,t.next=6,v.a.awrap(x()({url:g+"/me",method:"GET",headers:{authorization:"Bearer "+e}}));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(3),localStorage.removeItem("accessToken"),t.abrupt("return",a.setState({isLogin:!1}));case 12:case"end":return t.stop()}}),null,null,[[3,8]])},a.state={isLogin:!!localStorage.getItem("accessToken")},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.verifyToken()}},{key:"render",value:function(){var e=this,t=this.props,a=t.component,n=Object(h.a)(t,["component"]);return this.state.isLogin?"/"===this.props.from?r.a.createElement(m.a,{to:this.props.to,key:this.props.location.pathname,render:function(t){return r.a.createElement(a,e.props)}}):r.a.createElement(m.b,Object.assign({},n,{key:this.props.location.pathname,render:function(t){return r.a.createElement(a,e.props)}})):r.a.createElement(m.a,{to:{pathname:"/login",state:{from:this.props.location}}})}}]),t}(r.a.Component),w=Object(m.g)(E),k=function(e){var t=e.component,a=Object(h.a)(e,["component"]);return r.a.createElement(m.b,Object.assign({},a,{render:function(e){return null===localStorage.getItem("accessToken")?r.a.createElement(t,e):r.a.createElement(m.a,{to:{pathname:"/address",state:{from:e.location}}})}}))},O=(a(207),a(167)),j=(a(209),a(168)),S=(a(98),a(40)),P=(a(211),a(94)),I=(a(213),a(128)),T=a(58),D=(a(215),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).onChangeInput=function(e){return function(t){var n;a.setState((n={},Object(T.a)(n,e,t.target.value),Object(T.a)(n,"disabled",!1),Object(T.a)(n,"".concat(e,"Err"),""),Object(T.a)(n,"message",""),n))}},a.onBlur=function(e){return function(){var t;if(!a.state[e]&&!a.state["".concat(e,"Err")])return a.setState((t={},Object(T.a)(t,"".concat(e,"Err"),"Please input your "+e),Object(T.a)(t,"disabled",!0),t))}},a.login=function(){var e;return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.state.username&&a.state.password){t.next=2;break}return t.abrupt("return",a.setState({disabled:!0}));case 2:return t.prev=2,t.next=5,v.a.awrap(x()({url:g+"/login",method:"POST",data:{username:a.state.username,password:a.state.password}}));case 5:200===(e=t.sent).status&&(localStorage.setItem("accessToken",e.data.token),a.setState({isLogin:!0})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),a.setState({message:"Username or password not match"});case 12:case"end":return t.stop()}}),null,null,[[2,9]])},a.state={username:"",password:"",disabled:!1},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.isLogin?r.a.createElement(m.a,{to:{pathname:"/address",state:{from:this.props.location}}}):r.a.createElement(O.a,{gutter:[16,16],style:{display:"flex",justifyContent:"center",paddingTop:"5%",height:"100vh",width:"100%"}},r.a.createElement(j.a,{span:8},r.a.createElement("div",{style:{fontSize:40,padding:20,textAlign:"center"}},"Demo Aimesoft"),r.a.createElement("div",{style:{padding:"0 20px"}},r.a.createElement("label",{htmlFor:""},"Username"),r.a.createElement(P.a.Item,{help:this.state.usernameErr},r.a.createElement(I.a,{onChange:this.onChangeInput("username"),onBlur:this.onBlur("username")})),r.a.createElement("label",{htmlFor:""},"Password"),r.a.createElement(P.a.Item,{help:this.state.passwordErr},r.a.createElement(I.a.Password,{onChange:this.onChangeInput("password"),onBlur:this.onBlur("password")})),r.a.createElement(P.a.Item,{help:this.state.message,className:"login_submit"},r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},r.a.createElement(S.a,{type:"primary",onClick:this.login,disabled:this.state.disabled},"Login"))))))}}]),t}(r.a.Component)),C=Object(m.g)(D),L=(a(394),a(127)),R=[{title:"Province",dataIndex:"name",key:"name"},{title:"Population",dataIndex:"population",key:"population",width:"30%"}],_=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).getListProvinces=function(){var e,t,n,r;return v.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,v.a.awrap(x()({url:b+"/get_provinces",method:"GET"}));case 3:return e=o.sent,t=e.data.map((function(e){return a.getProvincePopulation(e.id)})),o.next=7,v.a.awrap(Promise.all(t));case 7:n=o.sent,r=e.data.map((function(e,t){return{key:e.id,name:e.name,population:n[t],districts:[]}})),a.setState({datasource:r,loading:!1}),o.next=14;break;case 12:o.prev=12,o.t0=o.catch(0);case 14:case"end":return o.stop()}}),null,null,[[0,12]])},a.getProvincePopulation=function(e){var t;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,v.a.awrap(x()({url:"".concat(b,"/province_population?province_id=").concat(e),method:"GET"}));case 3:return t=a.sent,a.abrupt("return",t.data.population);case 7:a.prev=7,a.t0=a.catch(0);case 9:case"end":return a.stop()}}),null,null,[[0,7]])},a.getDistrictPopulation=function(e,t){var a;return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.a.awrap(x()({url:"".concat(b,"/district_population?province_id=").concat(e,"&district_id=").concat(t),method:"GET"}));case 3:return a=n.sent,n.abrupt("return",a.data.population);case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),null,null,[[0,7]])},a.getDistrict=function(e){var t;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,v.a.awrap(x()({url:b+"/get_districts?province_id="+e,method:"GET"}));case 3:return t=a.sent,a.abrupt("return",t.data);case 7:a.prev=7,a.t0=a.catch(0);case 9:case"end":return a.stop()}}),null,null,[[0,7]])},a.onExplandedProvince=function(e,t){var n,r,o,s,c,i,u;return v.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(n=a.state.expandedRowKeys,!e){l.next=18;break}if(n.push(t.key),!a.state.getedDistrict.includes(t.key)){l.next=5;break}return l.abrupt("return",a.setState({expandedRowKeys:n}));case 5:return a.setState({loading:!0}),l.next=8,v.a.awrap(a.getDistrict(t.key));case 8:return r=l.sent,o=r.map((function(e){return a.getDistrictPopulation(t.key,e.id)})),l.next=12,v.a.awrap(Promise.all(o));case 12:return s=l.sent,c=r.map((function(e,t){return{key:e.id,name:e.name,population:s[t]}})),i=a.state.datasource.map((function(e){return e.key===t.key&&(e.districts=c),e})),(u=a.state.getedDistrict).push(t.key),l.abrupt("return",a.setState({expandedRowKeys:n,datasource:i,getedDistrict:u,loading:!1}));case 18:return n.splice(n.indexOf(t.key),1),l.abrupt("return",a.setState({expandedRowKeys:n}));case 20:case"end":return l.stop()}}))},a.state={expandedRowKeys:[],datasource:[],loading:!0,getedDistrict:[]},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getListProvinces()}},{key:"render",value:function(){return r.a.createElement("div",{style:{width:"60%",margin:"auto"}},r.a.createElement(L.a,{loading:this.state.loading,columns:R,dataSource:this.state.datasource,onExpand:this.onExplandedProvince,expandedRowKeys:this.state.expandedRowKeys,expandedRowRender:function(e){return r.a.createElement(L.a,{columns:[{title:"District",dataIndex:"name",key:"name"},{title:"Population",dataIndex:"population",key:"population",width:"30%"}],dataSource:e.districts,pagination:!1})}}))}}]),t}(r.a.Component),B=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(m.d,null,r.a.createElement(w,{exact:!0,path:"/",component:_}),r.a.createElement(k,{exact:!0,path:"/login",component:C}),r.a.createElement(w,{exact:!0,path:"/address",component:_}),r.a.createElement(m.b,{exact:!0,path:"*",component:function(e){return r.a.createElement("div",null,"Not found")}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[180,1,2]]]);
//# sourceMappingURL=main.258d34f5.chunk.js.map