(this.webpackJsonpbeardmen=this.webpackJsonpbeardmen||[]).push([[0],{57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},99:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),a=c(20),r=c.n(a),i=c(5),o=(c(57),c(6)),l=c(7),j=(c(58),c(59),c(60),c(30)),u={TOGGLE_MENU:"TOGGLE_MENU",GET_CART:"GET_CART",ADD_TO_CART:"ADD_TO_CART",CLEAR_CART:"CLEAR_CART",REMOVE_CART:"REMOVE_CART",FETCH_CART_ERROR:"FETCH_CART_ERROR",FETCH_CART_SUCCESS:"FETCH_CART_SUCCESS"},d=function(e){return{type:u.ADD_TO_CART,payload:e}},b=c(1);var O=Object(i.b)(null,(function(e){return{addToCart:function(t){return e(d(t))},removeCart:function(t){return e(function(e){return{type:u.REMOVE_CART,payload:e}}(t))}}}))((function(e){var t=e.cartProduct,c=e.addToCart,n=e.removeCart,s=t.name,a=t.image,r=t.price,i=t.quantity;return Object(b.jsx)("div",{className:"cart",children:Object(b.jsxs)("div",{className:"cart__modal",children:[Object(b.jsx)("img",{className:"cart__img",src:a,alt:"products"}),Object(b.jsxs)("div",{className:"cart__items",children:[Object(b.jsx)("h1",{className:"cart__h1",children:s}),Object(b.jsxs)("span",{className:"cart__span",children:[i," x #",r]}),Object(b.jsx)("div",{children:Object(b.jsxs)("button",{className:"cart__btn",children:[Object(b.jsx)(j.a,{className:"icon__minus",onClick:function(){return n(t)}}),i,Object(b.jsx)(j.b,{className:"icon__plus",onClick:function(){return c(t)}})]})})]})]})})})),_=c(17),h=Object(_.a)([function(e){return e.cart}],(function(e){return e.cartProducts})),p=Object(_.a)([h],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),m=Object(_.a)([h],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)}));var x=Object(_.b)({cartProducts:h,total:m}),f=Object(i.b)(x)((function(e){var t=e.cartProducts,c=e.total,n=(e.product,Object(i.d)((function(e){return e.user})).userDetails);return Object(b.jsxs)("section",{className:"checkout",children:[Object(b.jsxs)("div",{className:"checkout__text",children:[Object(b.jsx)("h1",{className:"checkout__h1",children:"Your cart"}),Object(b.jsx)("p",{className:"checkout__p",children:"item ships at checkout"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"checkout__modal",children:[Object(b.jsx)("div",{children:t.length?t.map((function(e,t){return Object(b.jsx)(O,{cartProduct:e},e._id)})):Object(b.jsx)("p",{className:"checkout__p-text",children:"Your cart is empty"})}),Object(b.jsx)("div",{className:"checkout__span",children:Object(b.jsxs)("span",{children:["Total:#",c]})}),Object(b.jsx)("div",{className:"checkout-sm",children:n?Object(b.jsx)("button",{className:"checkout__btn",children:"CHECK OUT"}):Object(b.jsx)(l.a,{to:"/login"})})]}),Object(b.jsx)("hr",{})]})]})})),N=(c(63),[{title:"Home",path:"/"},{title:"Shop",path:"/shop"}]),g=(c(64),c(15));var v=Object(_.b)({productCount:p}),C=Object(i.b)(v)((function(e){var t=e.productCount;return Object(b.jsxs)("div",{children:[Object(b.jsx)(o.b,{to:"./checkout",children:Object(b.jsx)(g.d,{className:"icon__cart"})}),Object(b.jsx)("span",{className:"icon__number",children:t})]})})),S=c(13),R=c.n(S),E=c(19),T={SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_ERROR:"SIGN_UP_ERROR",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_ERROR:"SIGN_IN_ERROR"},y=c(18),U=c.n(y),k=function(){return function(){var e=Object(E.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("user"),localStorage.removeItem("cart"),t({type:T.SIGN_OUT_SUCCESS});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};var D=function(){var e=Object(i.c)(),t=Object(i.d)((function(e){return e.user})).userDetails;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("nav",{className:"nav",children:[Object(b.jsxs)("section",{className:"nav__links",children:[N.map((function(e,t){return Object(b.jsx)(o.c,{to:e.path,className:"nav__link",children:Object(b.jsx)("span",{children:e.title})},t)})),t?Object(b.jsx)(o.c,{to:"#signout",onClick:function(){e(k())},className:"nav__link",children:"Sign Out"}):Object(b.jsx)(o.c,{to:"/signup",className:"nav__link",children:"Sign Up"}),t?Object(b.jsx)(o.c,{to:"#",className:"nav__link",children:t.name.toUpperCase()}):Object(b.jsx)(o.c,{to:"/login",className:"nav__link",children:"Sign In"})]}),Object(b.jsx)("div",{className:"icon__shop",children:Object(b.jsx)(C,{})})]})})},P=c(16),I=(c(85),{GET_PRODUCT:"GET_PRODUCT",ADD_PRODUCT:"ADD_PRODUCT",UPDATE_PRODUCT:"UPDATE_PRODUCT",REMOVE_PRODUCT:"REMOVE_PRODUCT",FETCH_SUCCESS:"FETCH_SUCCESS",FETCH_ERROR:"FETCH_ERROR"});c(86);var A=Object(i.b)(null,(function(e){return{addToCart:function(t){return e(d(t))}}}))((function(e){var t=e.product,c=e.addToCart,n=t.name,s=t.image,a=t.price;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"product__container",children:Object(b.jsxs)("div",{className:"product__items",children:[Object(b.jsx)("a",{href:"/product/".concat(t._id),children:Object(b.jsx)("img",{className:"product__img",src:s,alt:n})}),Object(b.jsx)("a",{href:"/product/".concat(t._id),children:Object(b.jsx)("p",{className:"product__text",children:n})}),Object(b.jsxs)("p",{className:"product__text",children:["#",a]}),Object(b.jsx)("div",{className:"product__btn",children:Object(b.jsx)("button",{className:"products__btn",onClick:function(){return c(t)},children:"Add"})})]},t._id)})})}));c(87);var G=function(){return Object(b.jsx)("footer",{children:Object(b.jsx)("div",{className:"footer",children:Object(b.jsxs)("div",{className:"footer__icon",children:[Object(b.jsx)(g.g,{className:"icon__color"}),Object(b.jsx)(g.a,{className:"icon__color"}),Object(b.jsx)(g.f,{className:"icon__color"}),Object(b.jsx)(g.c,{className:"icon__color"})]})})})};c(88);function w(){return Object(b.jsx)("div",{className:"spinner__container",children:Object(b.jsx)("div",{className:"spinner__dual-ring"})})}var F=Object(i.b)((function(e){return{product:e.products}}),(function(e){return{getProduct:function(){return e(function(){var e=Object(E.a)(R.a.mark((function e(t){var c,n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.get("/api/products");case 3:c=e.sent,n=c.data,t({type:I.GET_PRODUCT,payload:n.data.products}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:I.FETCH_ERROR,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.getProduct,c=e.product,s=Object(n.useState)(!0),a=Object(P.a)(s,2),r=a[0],i=a[1];return Object(n.useEffect)((function(){i(!0),t(),i(!1)}),[t]),Object(b.jsxs)("aside",{children:[Object(b.jsx)("section",{className:"category",children:Object(b.jsx)("p",{children:"Shop"})}),r&&Object(b.jsx)(w,{}),Object(b.jsx)("div",{className:"shop__list",children:c?c.products.map((function(e){return Object(b.jsx)(A,{className:"shop__list",product:e},e._id)})):null}),Object(b.jsx)(G,{})]})}));c(89),c(90);var M=function(e){return Object(b.jsx)("button",{className:"custom__button",children:e.children})};c(100);var H=function(e){var t=Object(n.useState)(""),c=Object(P.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(""),j=Object(P.a)(r,2),u=j[0],d=j[1],O=Object(i.c)(),_=Object(i.d)((function(e){return e.user})),h=_.userDetails,p=_.error;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("section",{className:"signin__box",children:[p&&Object(b.jsx)("p",{className:"error__message",children:p}),Object(b.jsx)("h1",{className:"sign__h1",children:"Welcome back!"}),Object(b.jsx)("p",{className:"sign__p",children:"Please sign in below to continue"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O(function(e,t){return function(){var c=Object(E.a)(R.a.mark((function c(n){var s,a;return R.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,U.a.post("/api/users/login",{email:e,password:t});case 3:s=c.sent,a=s.data,n({type:T.SIGN_IN_SUCCESS,payload:a}),localStorage.setItem("userDetails",JSON.stringify(a)),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(0),n({type:T.SIGN_IN_ERROR,payload:c.t0.response&&c.t0.response.data.message?c.t0.response.data.message:c.t0.message});case 12:case"end":return c.stop()}}),c,null,[[0,9]])})));return function(e){return c.apply(this,arguments)}}()}(s,u)),a(""),d("")},children:[Object(b.jsxs)("section",{className:"signup__container",children:[Object(b.jsx)("div",{children:Object(b.jsx)("label",{htmlFor:"email",placeholder:"example@mail.com",children:"Email"})}),Object(b.jsx)("input",{type:"text",id:"email",value:s,onChange:function(e){return a(e.target.value)}})]}),Object(b.jsxs)("section",{className:"signup-container",children:[Object(b.jsx)("div",{children:Object(b.jsx)("label",{htmlFor:"password",placeholder:"*******",children:"Password"})}),Object(b.jsx)("input",{type:"password",id:"password",value:u,onChange:function(e){return d(e.target.value)}})]}),Object(b.jsx)("section",{className:"form__btn",children:h?Object(b.jsx)(l.a,{to:"/shop"}):Object(b.jsx)(M,{type:"submit",name:"button",children:"sign in"})})]}),Object(b.jsx)("section",{className:"forget__links"}),Object(b.jsx)("section",{className:"signup__link",children:Object(b.jsx)(o.b,{className:"forget__link",to:"/signup",children:"Not a member?Join us!"})})]}),Object(b.jsx)(G,{})]})};c(91);var L=function(e){var t=Object(n.useState)(""),c=Object(P.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(""),o=Object(P.a)(r,2),j=o[0],u=o[1],d=Object(n.useState)(""),O=Object(P.a)(d,2),_=O[0],h=O[1],p=Object(n.useState)(""),m=Object(P.a)(p,2),x=m[0],f=m[1],N=Object(i.c)(),g=Object(i.d)((function(e){return e.user})),v=g.userDetails,C=g.error;return Object(b.jsxs)("div",{className:"signup__box",children:[C&&Object(b.jsx)("p",{className:"error__message",children:C}),Object(b.jsxs)("div",{className:"signup__field",children:[Object(b.jsx)("p",{className:"signup__p",children:"Please sign in below to continue"}),Object(b.jsxs)("form",{className:"signup__form",onSubmit:function(e){e.preventDefault(),N(function(e,t,c,n){return function(){var s=Object(E.a)(R.a.mark((function s(a){var r,i;return R.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,U.a.post("/api/users/signup",{name:e,lastName:t,email:c,password:n});case 3:r=s.sent,i=r.data,a({type:T.SIGN_UP_SUCCESS,payload:i}),localStorage.setItem("userDetails",JSON.stringify(i)),s.next=12;break;case 9:s.prev=9,s.t0=s.catch(0),a({type:T.SIGN_UP_ERROR,payload:s.t0.response&&s.t0.response.data.message?s.t0.response.data.message:s.t0.message});case 12:case"end":return s.stop()}}),s,null,[[0,9]])})));return function(e){return s.apply(this,arguments)}}()}(s,j,_,x)),a(""),u(""),h(""),f("")},children:[Object(b.jsxs)("section",{className:"signup__container",children:[Object(b.jsx)("div",{children:Object(b.jsx)("label",{htmlFor:"name",children:"Name"})}),Object(b.jsx)("input",{type:"text",id:"name",value:s,onChange:function(e){return a(e.target.value)}})]}),Object(b.jsxs)("section",{className:"signup-container",children:[Object(b.jsx)("div",{children:Object(b.jsx)("label",{htmlFor:"lastname",children:"Last Name"})}),Object(b.jsx)("input",{type:"text",id:"lastname",value:j,onChange:function(e){return u(e.target.value)}})]}),Object(b.jsxs)("section",{className:"signup__container",children:[Object(b.jsx)("div",{children:Object(b.jsx)("label",{htmlFor:"email",children:"Email"})}),Object(b.jsx)("input",{type:"text",id:"email",value:_,onChange:function(e){return h(e.target.value)}})]}),Object(b.jsxs)("section",{className:"signup__container",children:[Object(b.jsx)("div",{children:Object(b.jsx)("label",{htmlFor:"password",children:"Password"})}),Object(b.jsx)("input",{type:"password",id:"password",value:x,onChange:function(e){return f(e.target.value)}})]}),Object(b.jsx)("section",{className:"signup__btn",children:v?Object(b.jsx)(l.a,{to:"/"}):Object(b.jsx)("button",{type:"submit",children:"Sign Up"})})]})]}),Object(b.jsx)(G,{})]})},q=(c(92),c.p+"static/media/sectionImg.8012b2e1.jpg"),V=c.p+"static/media/imageright.5d5a27cc.jpg";c(93);var J=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"section__right",children:[Object(b.jsxs)("div",{className:"section__right-text",children:[Object(b.jsxs)("h1",{className:"section__h1-right",children:["You get top-",Object(b.jsx)("br",{})," shelf products."]}),Object(b.jsxs)("ul",{className:"section__ul-right",children:[Object(b.jsx)("li",{children:"Fine products line"}),Object(b.jsx)("li",{children:"Made with premium ingredients"}),Object(b.jsx)("li",{children:"Mix and match to find your perfect routine"})]})]}),Object(b.jsx)("img",{className:"section__img-right",src:V,alt:""})]})})},Y=c.p+"static/media/imageleft.2bbd3ed7.jpg";c(94);var W=function(){return Object(b.jsxs)("div",{className:"section__left",children:[Object(b.jsx)("img",{className:"section__img-left",src:Y,alt:""}),Object(b.jsxs)("div",{className:"section__left-text",children:[Object(b.jsxs)("h1",{className:"section__h1-left",children:["You get top-",Object(b.jsx)("br",{})," shelf products."]}),Object(b.jsxs)("ul",{className:"section__ul-left",children:[Object(b.jsx)("li",{className:"section__li-left",children:"Fine products line"}),Object(b.jsx)("li",{className:"section__li-left",children:"Made with premium ingredients"}),Object(b.jsx)("li",{className:"section__li-left",children:"Mix and match to find your perfect routine"})]})]})]})};var B=function(){return Object(b.jsxs)("main",{children:[Object(b.jsx)("section",{className:"section__h1",children:Object(b.jsx)("h1",{children:"Another way to enjoy the best beard Products"})}),Object(b.jsxs)("section",{className:"section__main",children:[Object(b.jsxs)("section",{className:"section__container",children:[Object(b.jsxs)("h1",{className:"section__btn-h1",children:["Need a smooooth ",Object(b.jsx)("br",{})," shave?"]}),Object(b.jsxs)("p",{className:"section__btn-p",children:["Try our most popular starter set,",Object(b.jsx)("br",{})," and exprience the best in your product"]}),Object(b.jsx)("section",{className:"section__btn",children:Object(b.jsx)(o.b,{to:"/shop",children:Object(b.jsx)(M,{children:"Try for $10"})})})]}),Object(b.jsx)("section",{children:Object(b.jsx)("img",{className:"section__img",src:q,alt:""})})]}),Object(b.jsx)("div",{className:"section__h1",children:Object(b.jsx)("h1",{children:"Why join the Club"})}),Object(b.jsxs)("div",{className:"section__side",children:[Object(b.jsx)(J,{}),Object(b.jsx)(W,{})]})]})},K=(c(95),c.p+"static/media/headerimage.13cf3cb6.jpg");var $=function(e){return Object(b.jsxs)("header",{children:[Object(b.jsxs)("section",{className:"header",children:[Object(b.jsxs)("h1",{className:"header__h1",children:["HOW DO",Object(b.jsx)("br",{}),"YOU GET",Object(b.jsx)("br",{}),"INVOLVE"]}),Object(b.jsx)("p",{className:"header__p",children:"Tell us how you get invovle in grooming and well recommend the perfect products"}),Object(b.jsx)("section",{className:"header__btn",children:Object(b.jsx)(o.b,{to:"/shop",children:Object(b.jsx)(M,{children:"Shop Now"})})})]}),Object(b.jsx)("section",{children:Object(b.jsx)("img",{className:"header__img",src:K,alt:"HeaderImage"})})]})};var z=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)($,{}),Object(b.jsx)(B,{}),Object(b.jsx)(G,{})]})},Q=c(0);c(96);var X=Object(i.b)((function(e){return{hidden:e.cart.hidden}}),(function(e){return{toggleMenu:function(){return e({type:u.TOGGLE_MENU})}}}))((function(e){var t=e.toggleMenu,c=e.hidden,n=Object(i.c)(),s=Object(i.d)((function(e){return e.user})).userDetails;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g.b,{className:"sidenav__icon-bar",onClick:t}),c?null:Object(b.jsxs)("nav",{className:"sidenav__bar",children:[Object(b.jsx)(Q.b.Provider,{value:{className:"sidenav__icon-times"},children:Object(b.jsx)(g.e,{onClick:t})}),Object(b.jsxs)("section",{className:"sidenav__links",onClick:t,children:[N.map((function(e,t){return Object(b.jsx)(o.c,{to:e.path,className:"sidenav__link",children:Object(b.jsx)("span",{children:e.title})},t)})),s?Object(b.jsx)(o.c,{to:"#signout",onClick:function(){n(k())},className:"sidenav__link",children:"Sign Out"}):Object(b.jsx)(o.c,{to:"/signup",className:"sidenav__link",children:"Sign Up"}),s?Object(b.jsx)(o.c,{to:"#",className:"sidenav__link",children:s.name}):Object(b.jsx)(o.c,{to:"/login",className:"sidenav__link",children:"Sign In"})]})]})]})}));var Z=function(){return Object(b.jsx)(o.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(D,{}),Object(b.jsx)(X,{}),Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{exact:!0,path:"/",component:z}),Object(b.jsx)(l.b,{path:"/signup",component:L}),Object(b.jsx)(l.b,{path:"/login",component:H}),Object(b.jsx)(l.b,{path:"/shop",component:F}),Object(b.jsx)(l.b,{path:"/product/:id",component:A}),Object(b.jsx)(l.b,{path:"/checkout",component:f})]})]})})},ee=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,101)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))},te=c(44),ce=c(14),ne=c(45),se=c(46),ae=c(48),re=c(25),ie=c(47),oe=c.n(ie),le=c(3),je=c(26),ue=function(e,t){return e.find((function(e){return e._id===t._id}))?e.map((function(e){return e._id===t._id?Object(le.a)(Object(le.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(je.a)(e),[Object(le.a)(Object(le.a)({},t),{},{quantity:1})])},de=function(e,t){return 1===e.find((function(e){return e._id===t._id})).quantity?e.filter((function(e){return e._id!==t._id})):e.map((function(e){return e._id===t._id?Object(le.a)(Object(le.a)({},e),{},{quantity:e.quantity-1}):e}))},be={cartProducts:[],hidden:!0},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.TOGGLE_MENU:return Object(le.a)(Object(le.a)({},e),{},{hidden:!e.hidden});case u.ADD_TO_CART:case u.FETCH_CART_ERROR:return Object(le.a)(Object(le.a)({},e),{},{cartProducts:ue(e.cartProducts,t.payload)});case u.REMOVE_CART:return Object(le.a)(Object(le.a)({},e),{},{cartProducts:de(e.cartProducts,t.payload)});case u.CLEAR_CART:return Object(le.a)(Object(le.a)({},e),{},{cartProducts:e.cartProducts.filter((function(e){return e._id!==t.payload._id}))});default:return e}},_e={products:[],error:null},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I.GET_PRODUCT:case I.FETCH_SUCCESS:case I.FETCH_ERROR:return Object(le.a)(Object(le.a)({},e),{},{products:t.payload,error:t.payload});case I.ADD_PRODUCT:return Object(le.a)(Object(le.a)({},e),{},{products:[t.payload].concat(Object(je.a)(e.products))});case I.UPDATE_PRODUCT:var c=t.payload,n=c.id,s=c.data;return Object(le.a)(Object(le.a)({},e),{},{products:e.products.map((function(e){return e._id===n?e=s:null}))});case I.REMOVE_PRODUCT:return Object(le.a)(Object(le.a)({},e),{},{products:e.products.filter((function(e){return e.id!==t.payload}))});default:return e}},pe={users:null,user:{userDetails:localStorage.getItem("userDetails")?JSON.parse(localStorage.getItem("userDetails")):null},error:null,token:localStorage.getItem("token"),isAuthenticated:null},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T.SIGN_UP_SUCCESS:return localStorage.setItem("token",t.payload.token),Object(le.a)(Object(le.a)({},e),{},{users:t.payload,userDetails:t.payload.user,isAuthenticated:!0});case T.SIGN_UP_ERROR:return{error:t.payload};case T.SIGN_IN_SUCCESS:return localStorage.setItem("token",t.payload.token),Object(le.a)(Object(le.a)({},e),{},{users:t.payload,userDetails:t.payload.data.user,isAuthenticated:!0});case T.SIGN_IN_ERROR:return{error:t.payload};case T.SIGN_OUT_SUCCESS:return{};default:return e}},xe={key:"root",storage:oe.a,whitelist:["cart","user"]},fe=Object(ce.combineReducers)({cart:Oe,products:he,user:me}),Ne=Object(re.a)(xe,fe),ge=[ae.a,se.logger],ve=Object(ce.createStore)(Ne,Object(ne.composeWithDevTools)(ce.applyMiddleware.apply(void 0,ge))),Ce=Object(re.b)(ve);r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(i.a,{store:ve,children:Object(b.jsx)(te.a,{persistor:Ce,children:Object(b.jsx)(Z,{})})})}),document.getElementById("root")),ee()}},[[99,1,2]]]);
//# sourceMappingURL=main.24421d93.chunk.js.map