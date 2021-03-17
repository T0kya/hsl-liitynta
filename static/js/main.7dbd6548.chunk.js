(this["webpackJsonphsl-liitynta"]=this["webpackJsonphsl-liitynta"]||[]).push([[0],{112:function(n,e,t){"use strict";t.r(e);var i,r,c,a,o,s=t(0),l=t.n(s),u=t(30),d=t.n(u),j=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,125)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),i(n),r(n),c(n),a(n)}))},b=t(3),h=t(6),p=t(21),f=t(75),O=t.n(f),x=t(27),m=t(5),g=t(8),v=t(4),y=t(23),k=t.n(y),S=t(40),w=t(25),E=t.n(w),T=v.a.div(i||(i=Object(b.a)(["\n    display: inline-block;\n    position: absolute;\n    left: -10px;\n    top: 3px;\n    width: ","px;\n    height: ","px;\n    border-top: 1px solid ",";\n    border-right: 1px solid",";\n    transform:rotate(-135deg);\n    transition: all 0.2s ease-in;\n"])),(function(n){return n.theme.spacing.medium}),(function(n){return n.theme.spacing.medium}),(function(n){return n.color}),(function(n){return n.color})),A=t(2),I=v.a.div(r||(r=Object(b.a)(["\n    background-color: ",";\n    border: 1px solid ",";\n    border-radius: 4px;\n    box-shadow: 0px 8px 13px -3px rgba(0,0,0,0.20);\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.border})),C=v.a.div(c||(c=Object(b.a)(["\n    border-bottom: 1px solid ",";\n    padding: ","px;\n"])),(function(n){return n.theme.color.border}),(function(n){return n.theme.spacing.medium})),D=v.a.div(a||(a=Object(b.a)(["\n    padding: ","px;\n"])),(function(n){return n.theme.spacing.medium}));function F(n){var e=n.children,t=n.title;return Object(A.jsxs)(I,{children:[Object(A.jsx)(C,{children:Object(A.jsx)("h3",{children:t})}),Object(A.jsx)(D,{children:e})]})}var H,L=v.a.header(o||(o=Object(b.a)(["\n    padding: ","px;\n    background-color: ",";\n    color: ",";\n    display: flex;\n    align-items: center;\n"])),(function(n){return n.theme.spacing.large}),(function(n){return n.theme.color.primary}),(function(n){return n.theme.color.white}));function N(n){var e=n.children;return Object(A.jsx)(L,{children:e})}var _,R,U=Object(v.a)(x.b)(H||(H=Object(b.a)(["\n    color: ",';\n    text-decoration: none;\n    position: relative;\n    &:after {    \n        background: none repeat scroll 0 0 transparent;\n        bottom: -5px;\n        content: "";\n        display: block;\n        height: 2px;\n        left: 50%;\n        position: absolute;\n        background: ',";\n        transition: width 0.3s ease 0s, left 0.3s ease 0s;\n        width: 0;\n        }\n\n    &:hover {\n        &:after { \n        width: 100%; \n        left: 0; \n        }\n        & > * {\n            transform: rotate(-135deg) translate(2px, -2px)\n        }\n    }\n"])),(function(n){return n.color}),(function(n){return n.color})),M=t(122),Y={initial:{x:"100%",transition:{type:"tween",duration:.2}},in:{x:0,transition:{type:"tween",duration:.2}},out:{x:"-100%",transition:{type:"tween",duration:.2}}},z=v.a.h3(_||(_=Object(b.a)(["\n  margin: 0 auto;\n  padding: 0 10px;\n"]))),B=Object(v.a)(M.a.div)(R||(R=Object(b.a)(["\n  width: 90%;\n  margin: 1rem auto;\n  display: grid;\n  box-sizing: border-box;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: ","px;\n\n  @media(max-width: 485px) {\n    grid-template-columns: 1fr;\n  }\n"])),(function(n){return n.theme.spacing.large}));function P(){var n=Object(s.useState)(),e=Object(g.a)(n,2),t=e[0],i=e[1],r=Object(m.f)().id;Object(s.useEffect)((function(){k.a.get("https://p.hsl.fi/api/v1/facilities/".concat(r,".json")).then((function(n){i(n.data)})).catch((function(n){console.log(n)})).then((function(){}))}),[]);var c=Object(h.h)();return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(N,{children:[Object(A.jsxs)(U,{color:c.color.white,to:"/",children:[Object(A.jsx)(T,{color:c.color.white}),"Takaisin"]}),Object(A.jsx)(z,{children:t?t.name.fi:Object(A.jsx)(E.a,{})})]}),Object(A.jsx)(M.a.div,{initial:"initial",animate:"in",exit:"out",variants:Y,children:Object(A.jsxs)(B,{children:[Object(A.jsx)(F,{title:"Aukioloajat",children:t?Object(A.jsxs)(A.Fragment,{children:[t.openingHours.byDayType.BUSINESS_DAY&&Object(A.jsxs)("p",{children:[Object(A.jsx)("strong",{children:"Arkip\xe4iv\xe4t:"})," ",t.openingHours.byDayType.BUSINESS_DAY.from," - ",t.openingHours.byDayType.BUSINESS_DAY.until]}),t.openingHours.byDayType.SATURDAY&&Object(A.jsxs)("p",{children:[Object(A.jsx)("strong",{children:"Lauantai:"})," ",t.openingHours.byDayType.SATURDAY.from," - ",t.openingHours.byDayType.SATURDAY.until]}),t.openingHours.byDayType.SUNDAY&&Object(A.jsxs)("p",{children:[Object(A.jsx)("strong",{children:"Sunnuntai:"})," ",t.openingHours.byDayType.SUNDAY.from," - ",t.openingHours.byDayType.SUNDAY.until]})]}):Object(A.jsx)(E.a,{})}),0!==(null===t||void 0===t?void 0:t.services.length)&&Object(A.jsx)(A.Fragment,{children:t?Object(A.jsx)(F,{title:"Palvelut",children:Object(A.jsx)("ul",{children:t.services.map((function(n){return Object(A.jsx)("li",{children:Object(A.jsx)(S.b,{text:n})},n)}))})}):Object(A.jsx)(E.a,{})}),"CUSTOM"===(null===t||void 0===t?void 0:t.pricingMethod)&&Object(A.jsxs)(F,{title:"Pys\xe4k\xf6intihinnasto",children:[t.pricing.map((function(n){return Object(A.jsxs)("p",{children:[" ",Object(A.jsx)(S.b,{text:n.capacityType}),": ",n.price.fi]},n.capacityType)})),Object(A.jsx)("p",{children:Object(A.jsx)("strong",{children:" Maksutavat: "})}),Object(A.jsx)("ul",{children:t.paymentInfo.paymentMethods.map((function(n){return Object(A.jsx)("li",{children:Object(A.jsx)(S.b,{text:n})},n)}))})]})]})})]})}var G=t(41),K=t.n(G),J=t(47),V=t(48),W=t(7),q=t(119),Q=t(124),X=t(120),Z=t(121),$=t(13),nn=t(39);var en=Object(nn.a)("div",{target:"emb2msa2"})({name:"bjn8wh",styles:"position:relative"}),tn=Object(nn.a)("input",{target:"emb2msa1"})({name:"109bpo7",styles:"border:0;clip:rect(0 0 0 0);clippath:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px"}),rn=Object(nn.a)("div",{target:"emb2msa0"})("display:flex;cursor:pointer;align-items:center;justify-content:center;width:40px;height:40px;background-color:",(function(n){return n.checked?n.theme.color.primary:n.theme.color.white}),";border-radius:50%;border:2px solid ",(function(n){return n.theme.color.primary}),";transition:all 150ms;color:",(function(n){return n.checked?n.theme.color.white:n.theme.color.primary}),";font-size:0.8rem;text-align:center;");function cn(n){var e=n.checked,t=n.children,i=Object($.a)(n,["checked","children"]);return Object(A.jsxs)(en,{children:[Object(A.jsx)(tn,Object(W.a)({type:"checkbox",defaultChecked:e},i)),Object(A.jsx)(rn,{checked:e,children:t})]})}var an,on,sn,ln,un,dn=t(117),jn=t(118),bn=t(9),hn=t.n(bn),pn=t(59),fn=t.n(pn),On=t(115),xn=t(116),mn=v.a.div(an||(an=Object(b.a)(["\n  position: relative;\n  \n  border-radius: 50% 50% 50% 0;\n  border: 4px solid ",";\n  width: 20px;\n  height: 20px;\n  transform: rotate(-45deg);\n  background-color: white;\n\n  &::after {\n    position: absolute;\n  content: '';\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  top: 50%;\n  left: 50%;\n  margin-left: -5px;\n  margin-top: -5px;\n  background-color: ",";\n  }\n"])),(function(n){return n.color}),(function(n){return n.color}));function gn(n){var e=n.marker,t=n.details,i=Object(h.h)(),r=Object(s.useState)([]),c=Object(g.a)(r,2),a=c[0],o=c[1],l=Object(s.useState)(),u=Object(g.a)(l,2),d=u[0],j=u[1];var b=hn.a.divIcon({className:"custom-icon",html:fn.a.renderToString(Object(A.jsx)(mn,{color:i.color.primary}))}),p=hn.a.divIcon({className:"custom-icon",html:fn.a.renderToString(Object(A.jsx)(mn,{color:i.color.grey}))}),f=d;return Object(A.jsx)(dn.a,{position:[e.location.bbox[1],e.location.bbox[0]],icon:t&&t.openingHours.openNow?b:p,eventHandlers:{click:function(){var n;o([]),n=e.id,k.a.get("https://p.hsl.fi/api/v1/facilities/".concat(n,"/utilization.json")).then((function(n){o(n.data)})).catch((function(n){console.log(n)})).then((function(){})),j(void 0),t&&function(n){Object(On.a)(new Date)?j(n.SATURDAY):Object(xn.a)(new Date)&&j(n.SUNDAY),j(n.BUSINESS_DAY)}(t.openingHours.byDayType)}},children:Object(A.jsxs)(jn.a,{closeOnClick:!1,children:[Object(A.jsx)("h4",{children:e.name.fi}),f&&Object(A.jsxs)("span",{children:["Avoinna t\xe4n\xe4\xe4n: ",null===f||void 0===f?void 0:f.from," - ",null===f||void 0===f?void 0:f.until]}),Object(A.jsx)("br",{}),"Paikkoja yhteens\xe4: ",null===t||void 0===t?void 0:t.builtCapacity.CAR,0!==a.length&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("br",{}),Object(A.jsxs)("span",{children:["Paikkoja vapaana: ",a[0].spacesAvailable]})," "]}),Object(A.jsx)("p",{children:Object(A.jsx)(x.b,{to:"/asema/".concat(e.id),children:"Katso lis\xe4tiedot"})})]})})}var vn=v.a.div(on||(on=Object(b.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n"]))),yn=Object(v.a)(q.a)(sn||(sn=Object(b.a)(["\n    width: 100%;\n    height: 100%;\n    .leaflet-div-icon {\n        background-color: transparent;\n        background: transparent;\n        border: 0;\n    }\n\n"]))),kn=v.a.div(ln||(ln=Object(b.a)(["\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: rgba(255,255,255,0.7);\n  padding: ","px;\n  z-index: 999;\n"])),(function(n){return n.theme.spacing.large})),Sn=v.a.div(un||(un=Object(b.a)(["\n  display:flex;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n\n  & > * {\n    margin-top: ","px;\n  }\n"])),(function(n){return n.theme.spacing.medium}));function wn(n){var e=n.markers,t=Object(s.useState)(null),i=Object(g.a)(t,2),r=i[0],c=i[1],a=Object(s.useRef)(!0),o=Object(s.useState)({"12H":!1,247:!1,CUSTOM:!1}),l=Object(g.a)(o,2),u=l[0],d=l[1],j=Object(s.useState)(!1),b=Object(g.a)(j,2),h=b[0],p=b[1],f=Object(s.useState)([]),O=Object(g.a)(f,2),x=O[0],m=O[1],v=Object(s.useState)(e),y=Object(g.a)(v,2),S=y[0],w=y[1],T=function(n){!function(n){var e=Object.keys(n).filter((function(e){return n[e]}));m(e),d(n)}(Object(W.a)(Object(W.a)({},u),{},Object(V.a)({},n.target.name,!u[n.target.name])))},I=Object(s.useCallback)((function(){if(0===x.length&&!h)return e;if(h){var n=null===r||void 0===r?void 0:r.filter((function(n){return n.openingHours.openNow})).map((function(n){return n.id}));return 0!==x.length?e.filter((function(e){return null===n||void 0===n?void 0:n.some((function(n){return e.id===n}))})).filter((function(n){return x.some((function(e){return n.pricingMethod.includes(e)}))})):e.filter((function(e){return null===n||void 0===n?void 0:n.some((function(n){return e.id===n}))}))}return e.filter((function(n){return x.some((function(e){return n.pricingMethod.includes(e)}))}))}),[x,r,h]);Object(s.useEffect)((function(){var n=e.map((function(n){return k.a.get("https://p.hsl.fi/api/v1/facilities/".concat(n.id,".json")).then((function(n){return n.data}))}));n&&Promise.all(n).then((function(n){if(!a.current)return null;c(n)}))}),[]),Object(s.useEffect)((function(){return function(){a.current=!1}}),[]),Object(s.useEffect)((function(){var n=I();w(n)}),[x,h]);return Object(A.jsxs)(vn,{children:[Object(A.jsxs)(kn,{children:[Object(A.jsx)("h3",{children:"Maksuton:"}),Object(A.jsxs)(Sn,{children:[Object(A.jsx)("label",{children:Object(A.jsx)(cn,{name:"12H",checked:u["12H"],onChange:T,children:"12h"})}),Object(A.jsx)("label",{children:Object(A.jsx)(cn,{name:"247",checked:u[247],onChange:T,children:"24h"})})]}),Object(A.jsx)(Sn,{children:r?Object(A.jsx)("label",{children:Object(A.jsx)(cn,{name:"open",checked:h,onChange:function(){p(!h)},children:Object(A.jsx)("span",{children:"Auki nyt"})})}):Object(A.jsx)(E.a,{circle:!0,width:40,height:40})})]}),Object(A.jsxs)(yn,{center:[60.402778,25.029167],zoom:11,children:[Object(A.jsx)(Q.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(A.jsx)(X.a,{pathOptions:{color:"purple"},children:S&&S.map((function(n){var e=null===r||void 0===r?void 0:r.find((function(e){return e.id===n.id}));return Object(A.jsxs)("div",{children:[Object(A.jsx)(gn,{details:e,marker:n}),Object(A.jsx)(Z.a,{bounds:[[n.location.bbox[1],n.location.bbox[0]],[n.location.bbox[3],n.location.bbox[2]]]},n.id)]},n.id)}))})]})]})}var En=t(37);function Tn(n){return{success:!0,value:n}}function An(n){return{success:!1,error:n}}function In(){return Cn.apply(this,arguments)}function Cn(){return(Cn=Object(J.a)(K.a.mark((function n(){var e;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,k.a.get("https://p.hsl.fi/api/v1/facilities.json");case 3:return e=n.sent,n.abrupt("return",Tn(e.data));case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",An(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}var Dn=t(24),Fn=t(50),Hn={facilities:[],isLoading:!0,isError:!1};var Ln,Nn=Object(Dn.combineReducers)({facilities:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Hn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_FACILITIES":return Object(Fn.a)(n,(function(n){n.isLoading=!0}));case"FETCH_FACILITIES_SUCCESS":return Object(Fn.a)(n,(function(n){n.facilities=e.payload.response.results,n.isLoading=!1,n.isError=!1}));case"FETCH_FACILITIES_FAILURE":return Object(Fn.a)(n,(function(n){n.isLoading=!1,n.isError=!0}));default:return n}}}),_n=En.c,Rn={initial:{x:"-100%",transition:{type:"tween",duration:.2}},in:{x:0,transition:{type:"tween",duration:.2}},out:{x:"100%",transition:{type:"tween",duration:.2}}},Un=v.a.div(Ln||(Ln=Object(b.a)(["\n  width: 100%;\n  height: 90vh;\n"])));function Mn(){var n=Object(En.b)(),e=_n((function(n){return n.facilities})),t=e.facilities,i=e.isLoading,r=e.isError;return Object(s.useEffect)((function(){function e(){return(e=Object(J.a)(K.a.mark((function e(){var t;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"FETCH_FACILITIES"}),e.next=3,In();case 3:(t=e.sent).success?n({type:"FETCH_FACILITIES_SUCCESS",payload:{response:t.value}}):n({type:"FETCH_FACILITIES_FAILURE"});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}0===t.length&&function(){e.apply(this,arguments)}()}),[n]),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(N,{children:Object(A.jsx)("h2",{children:"Liitynt\xe4pys\xe4k\xf6intiparkkipaikat"})}),Object(A.jsxs)(M.a.div,{initial:"initial",animate:"in",exit:"out",variants:Rn,children:[i&&Object(A.jsx)(E.a,{width:"100%",height:700}),r&&"Jotain meni vikaan",!i&&!r&&Object(A.jsx)(Un,{children:Object(A.jsx)(wn,{markers:t})})]})]})}var Yn=t(123);function zn(){return Object(A.jsx)(x.a,{children:Object(A.jsx)(Yn.a,{children:Object(A.jsxs)(m.c,{location:location,children:[Object(A.jsx)(m.a,{path:"/asema/:id",component:P}),Object(A.jsx)(m.a,{path:"/",component:Mn})]},location.pathname)})})}var Bn,Pn={color:{primary:"#1b8185",grey:"#9e9e9e",white:"#ffffff",border:"#d4d4d4"},spacing:{small:4,medium:8,large:16}};function Gn(){return Object(A.jsxs)(h.d,{theme:Pn,children:[Object(A.jsx)(p.Global,{styles:Object(p.css)(Bn||(Bn=Object(b.a)(["\n         ","\n          body {\n          font-family: 'Nunito', sans-serif;\n          font-size: 16px;\n          h1,h2,h3, h4 {  \n            font-family: 'Raleway', sans-serif;\n            margin-bottom: 0.3rem;\n          }\n          h1 {\n            font-size: 2rem;\n          }\n          h2 {\n            font-size: 1.6rem;\n          }\n          h3 {\n            font-size: 1.4rem;\n          }\n          h4 {\n            font-size: 1.2rem;\n          }\n          strong {\n            font-weight: 700;\n          }\n          li {\n            list-style: circle;\n            margin-left: 16px;\n          }\n          p {\n            font-family: 'Nunito', sans-serif;\n            margin-bottom: 4px;\n          }\n        }\n      "])),O.a)}),Object(A.jsx)(zn,{})]})}var Kn=t(77),Jn=Object(Dn.createStore)(Nn,Object(Kn.composeWithDevTools)(Object(Dn.applyMiddleware)()));d.a.render(Object(A.jsx)(l.a.Fragment,{children:Object(A.jsx)(En.a,{store:Jn,children:Object(A.jsx)(S.a,{language:"fi",translation:{COINS:{fi:"K\xe4teinen"},NOTES:{fi:"Seteli"},DEBITCARD:{fi:"Maksukortti"},OTHER:{fi:"Muu"},CAR:{fi:"Auto"},DISABLED:{fi:"Inva"},ELECTRIC_CAR:{fi:"S\xe4hk\xf6auto"},LIGHTING:{fi:"Valaistus"},COVERED:{fi:"Katettu"},SURVEILLANCE_CAMERAS:{fi:"Kameravalvonta"},PAYMENT_AT_GATE:{fi:"Maksu portille"},ENGINE_IGNITION_AID:{fi:"K\xe4ynnistysapu"},BICYCLE_FRAME_LOCK:{fi:"Polkupy\xf6r\xe4n runkolukkoteline"}},children:Object(A.jsx)(Gn,{})})})}),document.getElementById("root")),j()}},[[112,1,2]]]);
//# sourceMappingURL=main.7dbd6548.chunk.js.map