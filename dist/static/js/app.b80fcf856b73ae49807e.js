webpackJsonp([1],{"1/j7":function(t,s){},"9M+g":function(t,s){},AS96:function(t,s){},Jmt5:function(t,s){},N48D:function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("7+uW"),e=a("NYxO"),o=a("mtWM"),c=a.n(o),r=a("Rf8U"),n=a.n(r);i.default.use(e.a),i.default.use(n.a,c.a);var l=new e.a.Store({state:{productsPicks:"",productsNews:"",signinChange:!1,addCartClassic1:"",addCartNews1:"",ab1:"",abab1:""},mutations:{addCart1:function(t,s){t.productsPicks[s].total>=t.productsPicks[s].num&&(t.productsPicks[s].cart+=t.productsPicks[s].num),t.productsPicks[s].total>=t.productsPicks[s].num&&(t.productsPicks[s].total-=t.productsPicks[s].num),0==t.productsPicks[s].total&&(t.productsPicks[s].sale="OUT OF STOCK")},addCart2:function(t,s){t.productsNews[s].total>=t.productsNews[s].num&&(t.productsNews[s].cart+=t.productsNews[s].num),t.productsNews[s].total>=t.productsNews[s].num&&(t.productsNews[s].total-=t.productsNews[s].num),0==t.productsNews[s].total&&(t.productsNews[s].sale="OUT OF STOCK")},productsPicks:function(t,s){var a;a=s.map(function(t){return t.nums=1,t}),t.productsPicks=a},productsNews:function(t,s){var a;a=s.map(function(t){return t.nums=1,t}),t.productsNews=a},signinChange:function(t,s){t.signinChange=s},addCartClassic1:function(t,s){t.addCartClassic1=s},addCartNews1:function(t,s){t.addCartNews1=s},ab1:function(t,s){t.ab1=s},abab1:function(t,s){t.abab1=s}},actions:{wineProductsPicks:function(t){c.a.get("https://vue-course-api.hexschool.io/api/wine5/products").then(function(s){t.commit("productsPicks",s.data.products)})},wineProductsNews:function(t){c.a.get("https://vue-course-api.hexschool.io/api/wine52/products").then(function(s){t.commit("productsNews",s.data.products)})},addCartClassic:function(t,s){c.a.post("https://vue-course-api.hexschool.io/api/wine5/cart",{data:s}).then(function(s){t.commit("addCartClassic1",s.data)})},addCartNews:function(t,s){c.a.post("https://vue-course-api.hexschool.io/api/wine52/cart",{data:s}).then(function(s){t.commit("addCartNews1",s.data.carts)})},ab:function(t){c.a.get("https://vue-course-api.hexschool.io/api/wine5/cart").then(function(s){t.commit("ab1",s.data.data.carts),console.log("12345",s.data.data.carts)})},abab:function(t){c.a.get("https://vue-course-api.hexschool.io/api/wine52/cart").then(function(s){t.commit("abab1",s.data.data.carts),console.log("54321",s.data.data.carts)})}}}),d=a("/ocq"),u={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("b-navbar",{staticClass:"header_navabar",attrs:{toggleable:"lg",type:"dark",variant:"info"}},[a("b-navbar-brand",[a("h1",[a("router-link",{attrs:{to:"/"}},[t._v("Wine Space")])],1)]),t._v(" "),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}},[a("i",{staticClass:"fas fa-bars menu_color"})]),t._v(" "),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto navbar_right"},[a("b-nav-item",{attrs:{right:""}},[a("router-link",{attrs:{to:"/"}},[t._v("首頁")])],1),t._v(" "),a("b-nav-item",{attrs:{right:""}},[a("router-link",{attrs:{to:"/productslist"}},[t._v("商品")])],1),t._v(" "),a("b-nav-item",{attrs:{right:""}},[a("router-link",{directives:[{name:"show",rawName:"v-show",value:0==t.logInOrOut,expression:"logInOrOut == false"}],attrs:{to:"/login"}},[t._v("Login")]),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:1==t.logInOrOut,expression:"logInOrOut == true"}]},[t._v("Logout")])],1)],1)],1),t._v(" "),a("div",[a("b-dropdown",{attrs:{size:"lg",variant:"link","toggle-class":"text-decoration-none","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("i",{staticClass:"fas fa-shopping-cart",on:{click:t.aa}})]},proxy:!0}])},[t._v(" "),a("p",{staticStyle:{"text-align":"center"}},[t._v("Classic")]),t._v(" "),t._l(t.ab2,function(s,i){return a("b-dropdown-item",{key:i,attrs:{href:"#"}},[a("span",[t._v(t._s(s.product.title))]),t._v(" "),a("span",[t._v("$"+t._s(s.product.price))])])}),t._v(" "),a("p",{staticStyle:{"text-align":"center"}},[t._v("New")]),t._v(" "),t._l(t.abab2,function(s,i){return a("b-dropdown-item",{key:i,attrs:{href:"#"}},[a("span",[t._v(t._s(s.product.title))]),t._v(" "),a("span",[t._v("$"+t._s(s.product.price))])])})],2)],1)],1)],1)},staticRenderFns:[]};var v=a("VU/8")({name:"Navbar",methods:{aa:function(){this.$store.dispatch("ab"),this.$store.dispatch("abab")}},computed:{logInOrOut:function(){return this.$store.state.signinChange},ab2:function(){return this.$store.state.ab1},abab2:function(){return this.$store.state.abab1}}},u,!1,function(t){a("cj3T")},"data-v-65faf4a5",null).exports,_={name:"Header",components:{Navbar:v},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}}},p={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("header",[a("div",{staticClass:"carousel"},[a("navbar"),t._v(" "),a("div",[a("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:2e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(s){t.slide=s},expression:"slide"}},[a("b-carousel-slide",{staticClass:"carousel_img",attrs:{"img-src":"https://i.imgur.com/6x0J234.jpg"}}),t._v(" "),a("b-carousel-slide",{staticClass:"carousel_img",attrs:{"img-src":"https://i.imgur.com/TBHJmjv.jpg"}}),t._v(" "),a("b-carousel-slide",{staticClass:"carousel_img",attrs:{"img-src":"https://i.imgur.com/NCbpT18.jpg"}})],1)],1)],1)])},staticRenderFns:[]};var m=a("VU/8")(_,p,!1,function(t){a("qRhz")},"data-v-0d034212",null).exports,f={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"introduction_top"},[a("b-row",[a("b-col",{staticClass:"introduction_top_div p-2",attrs:{cols:"12",lg:"4"}},[a("i",{staticClass:"fas fa-wine-glass-alt"}),t._v(" "),a("div",{staticClass:"detail"},[a("h4",[t._v("酒品")]),t._v(" "),a("p",[t._v("最棒的酒款")])])]),t._v(" "),a("b-col",{staticClass:"introduction_top_div p-2",attrs:{cols:"12",lg:"4"}},[a("i",{staticClass:"fas fa-comment-dollar"}),t._v(" "),a("div",{staticClass:"detail"},[a("h4",[t._v("滿額")]),t._v(" "),a("p",[t._v("購滿"),a("span",[t._v("$2,000")]),t._v(" 就可免運")])])]),t._v(" "),a("b-col",{staticClass:"introduction_top_div p-2",attrs:{cols:"12",lg:"4"}},[a("i",{staticClass:"fas fa-truck"}),t._v(" "),a("div",{staticClass:"detail"},[a("h4",[t._v("寄送服務")]),t._v(" "),a("p",[t._v("恆溫的寄送服務")])])])],1)],1)},staticRenderFns:[]};var h={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"introduction_bottom"},[a("b-row",[a("b-col",{staticClass:"introduction_bottom_div",attrs:{cols:"12 mb-5",xl:"3",md:"6 mb-0",sm:"12"}},[a("img",{staticStyle:{width:"100%",height:"500px"},attrs:{src:"https://i.imgur.com/74Ix92a.jpg",alt:""}}),t._v(" "),a("div",[a("h5",[t._v("Lorem")]),t._v(" "),a("p",[t._v("恆溫的寄送服務")])])]),t._v(" "),a("b-col",{staticClass:"introduction_bottom_div",attrs:{cols:"12 mb-5",xl:"3",md:"6 mb-0",sm:"12"}},[a("img",{staticStyle:{width:"100%",height:"500px"},attrs:{src:"https://i.imgur.com/7KWIixk.jpg",alt:""}}),t._v(" "),a("div",[a("h5",[t._v("Lorem")]),t._v(" "),a("p",[t._v("恆溫的寄送服務")])])]),t._v(" "),a("b-col",{staticClass:"introduction_bottom_div",attrs:{cols:"12 mb-5",xl:"3",md:"6 mb-0",sm:"12"}},[a("img",{staticStyle:{width:"100%",height:"500px"},attrs:{src:"https://i.imgur.com/7utTzva.jpg",alt:""}}),t._v(" "),a("div",[a("h5",[t._v("Lorem")]),t._v(" "),a("p",[t._v("恆溫的寄送服務")])])]),t._v(" "),a("b-col",{staticClass:"introduction_bottom_div",attrs:{cols:"12 mb-5",xl:"3",md:"6 mb-0",sm:"12"}},[a("img",{staticStyle:{width:"100%",height:"500px"},attrs:{src:"https://i.imgur.com/64BxYpv.jpg",alt:""}}),t._v(" "),a("div",[a("h5",[t._v("Lorem")]),t._v(" "),a("p",[t._v("恆溫的寄送服務")])])])],1)],1)},staticRenderFns:[]};var g={name:"App",components:{MainIntroductionTop:a("VU/8")({name:"MainIntroductionTop"},f,!1,function(t){a("eFbt")},"data-v-12b35023",null).exports,MainIntroductionbottom:a("VU/8")({name:"MainIntroductionbottom"},h,!1,function(t){a("yUKz")},"data-v-722b5dbd",null).exports}},C={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"introduction"},[s("MainIntroductionTop"),this._v(" "),s("b-row",{staticClass:"justify-content-center"},[s("b-col",{attrs:{cols:"5"}},[s("hr")])],1),this._v(" "),s("MainIntroductionbottom")],1)},staticRenderFns:[]};var b=a("VU/8")(g,C,!1,function(t){a("VwXp")},"data-v-59118a2f",null).exports,w={name:"Products",data:function(){return{recentPage:1,recentPage2:1,ClassicNum:1}},mounted:function(){this.$store.dispatch("wineProductsPicks"),this.$store.dispatch("wineProductsNews")},methods:{before:function(){this.recentPage-=1,this.recentPage<=0&&(this.recentPage=1)},after:function(){this.recentPage+=1,this.recentPage>=3&&(this.recentPage=2)},beforeNews:function(){this.recentPage2-=1,this.recentPage2<=0&&(this.recentPage2=1)},afterNews:function(){this.recentPage2+=1,this.recentPage2>=3&&(this.recentPage2=2)},addCart1:function(t,s){var a={};a.product_id=t,a.qty=s,this.$store.dispatch("addCartClassic",a)},addCart2:function(t,s){var a={};a.product_id=t,a.qty=s,console.log(a),this.$store.dispatch("addCartNews",a)}},computed:{productsPicks:function(){return this.$store.state.productsPicks},productsNews:function(){return this.$store.state.productsNews}}},k={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"products_picks"},[a("b-row",{staticClass:"top"},[a("b-col",{attrs:{cols:"11"}},[a("h2",[t._v("Classic")])]),t._v(" "),a("b-col",{staticClass:"page justify-content-center mb-4",attrs:{cols:"1"}},[a("div",[a("i",{staticClass:"fas fa-angle-left",on:{click:t.before}})]),t._v(" "),a("div",[a("i",{staticClass:"fas fa-angle-right",on:{click:t.after}})])])],1),t._v(" "),a("b-row",t._l(t.productsPicks,function(s){return t.recentPage==s.unit?a("b-col",{key:s.num,staticClass:"introduction_bottom_div",attrs:{cols:"12 mb-5",md:"6",lg:"3"}},[a("div",{staticClass:"wine"},[a("div",{staticClass:"product_top"},[a("div",{staticClass:"product_left",staticStyle:{width:"60%"}},[a("h5",[t._v(t._s(s.title))]),t._v(" "),a("p",[t._v(t._s(s.category))]),t._v(" "),a("div",{staticClass:"year"},[a("div",{staticClass:"am"},[a("p",{staticClass:"title"},[t._v("AM")]),t._v(" "),a("p",[t._v("85")])]),t._v(" "),a("div",{staticClass:"ws"},[a("p",{staticClass:"title"},[t._v("WS")]),t._v(" "),a("p",[t._v("100")])])]),t._v(" "),a("div",{staticClass:"sale_price"},[a("div",{staticClass:"sale"},[t._v("＄"+t._s(s.origin_price))]),t._v(" "),a("div",{staticClass:"price"},[t._v("＄"+t._s(s.price))])])]),t._v(" "),a("div",{staticClass:"product_right",staticStyle:{width:"30%"}},[a("img",{attrs:{src:s.image,alt:"product"}})]),t._v(" "),a("div",{staticClass:"product_top_detail"},[a("div",{staticClass:"product_top_detail_inner"},[a("p",[t._v("經典")])])])]),t._v(" "),a("div",{staticClass:"product_bottom"},[a("div",{staticClass:"cart_num_out"},[a("select",{directives:[{name:"model",rawName:"v-model",value:s.nums,expression:"product1.nums"}],staticClass:"cart_num",on:{change:function(a){var i=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(s,"nums",a.target.multiple?i:i[0])}}},t._l(10,function(s){return a("option",{key:s,domProps:{value:s}},[t._v(t._s(s))])}),0),t._v(" "),a("button",{on:{click:function(a){return t.addCart1(s.id,s.nums)}}},[t._v("Add to cart")])])])])]):t._e()}),1)],1),t._v(" "),a("div",{staticClass:"products_news"},[a("b-row",{staticClass:"top"},[a("b-col",{attrs:{cols:"11"}},[a("h2",[t._v("New")])]),t._v(" "),a("b-col",{staticClass:"page justify-content-center mb-4",attrs:{cols:"1"}},[a("div",[a("i",{staticClass:"fas fa-angle-left",on:{click:t.beforeNews}})]),t._v(" "),a("div",[a("i",{staticClass:"fas fa-angle-right",on:{click:t.afterNews}})])])],1),t._v(" "),a("b-row",t._l(t.productsNews,function(s){return t.recentPage2==s.unit?a("b-col",{key:s.num,staticClass:"introduction_bottom_div",attrs:{cols:"12 mb-5",md:"6",lg:"3"}},[a("div",{staticClass:"wine"},[a("div",{staticClass:"product_top"},[a("div",{staticClass:"product_left",staticStyle:{width:"60%"}},[a("h5",[t._v(t._s(s.title))]),t._v(" "),a("p",[t._v(t._s(s.category))]),t._v(" "),a("div",{staticClass:"year"},[a("div",{staticClass:"am"},[a("p",{staticClass:"title"},[t._v("AM")]),t._v(" "),a("p",[t._v("85")])]),t._v(" "),a("div",{staticClass:"ws"},[a("p",{staticClass:"title"},[t._v("WS")]),t._v(" "),a("p",[t._v("100")])])]),t._v(" "),a("div",{staticClass:"sale_price"},[a("div",{staticClass:"sale"},[t._v("＄"+t._s(s.origin_price))]),t._v(" "),a("div",{staticClass:"price"},[t._v("＄"+t._s(s.price))])])]),t._v(" "),a("div",{staticClass:"product_right",staticStyle:{width:"30%"}},[a("img",{attrs:{src:s.image,alt:"product"}})]),t._v(" "),a("div",{staticClass:"product_top_detail"},[a("div",{staticClass:"product_top_detail_inner"},[a("p",[t._v("新款")])])])]),t._v(" "),a("div",{staticClass:"product_bottom"},[a("div",{staticClass:"cart_num_out"},[a("select",{directives:[{name:"model",rawName:"v-model",value:s.nums,expression:"product2.nums"}],staticClass:"cart_num",on:{change:function(a){var i=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(s,"nums",a.target.multiple?i:i[0])}}},t._l(10,function(s){return a("option",{key:s,domProps:{value:s}},[t._v(t._s(s))])}),0),t._v(" "),a("button",{on:{click:function(a){return t.addCart2(s.id,s.nums)}}},[t._v("Add to cart")])])])])]):t._e()}),1)],1)])},staticRenderFns:[]};var P=a("VU/8")(w,k,!1,function(t){a("1/j7")},"data-v-2eeee104",null).exports,N={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("footer",[a("div",{staticClass:"footer_top"},[a("div",{staticClass:"footer_top_left"},[a("a",{attrs:{href:"##"}},[t._v("Wine Space")]),t._v(" "),a("p",{staticClass:"copyright"},[t._v("© 2020 Happy Wine")])]),t._v(" "),a("div",{staticClass:"footer_top_right"},[a("p",[t._v("contact")]),t._v(" "),a("p",[t._v("Email : XXX@gmail.com")]),t._v(" "),a("p",[t._v("mobile : 09XX-XXX-XXX")])])])])}]};var y=a("VU/8")({name:"Footer"},N,!1,function(t){a("fO0u")},"data-v-e80425e8",null).exports,x={name:"App",components:{Header:m,MainIntroduction:b,Products:P,Footer:y}},S={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("Header"),this._v(" "),s("main",[s("div",{staticClass:"container"},[s("MainIntroduction"),this._v(" "),s("Products")],1)]),this._v(" "),s("Footer")],1)},staticRenderFns:[]};var $=a("VU/8")(x,S,!1,function(t){a("AS96")},null,null).exports,O={name:"Login",components:{Navbar:v},data:function(){return{user:{username:"",password:""},changeComponent:"form",answer:"",notSuccess:"",isLoading:!1}},methods:{signin:function(){var t=this,s=this;s.axios.post("https://vue-course-api.hexschool.io/signin",s.user).then(function(a){1==a.data.success?(t.$router.push("/"),t.$store.commit("signinChange",!0)):0==a.data.success&&(s.notSuccess="沒有登入成功")})}}},F={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticStyle:{margin:"0"}},[a("header",[a("Navbar",{staticStyle:{margin:"0"}}),t._v(" "),a("div",{staticClass:"header_background"})],1),t._v(" "),a("div",{staticClass:"form_outer"},["form"==t.changeComponent?a("form",[a("div",{staticClass:"form_inner"},[a("div",[a("label",{attrs:{for:"email"}},[t._v("登入信箱 ： ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],attrs:{type:"text",id:"email",placeholder:"請輸入登入信箱"},domProps:{value:t.user.username},on:{input:function(s){s.target.composing||t.$set(t.user,"username",s.target.value)}}})]),t._v(" "),a("div",[a("label",{attrs:{for:"password"}},[t._v("密碼 : ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",id:"password",placeholder:"請輸入密碼"},domProps:{value:t.user.password},on:{input:function(s){s.target.composing||t.$set(t.user,"password",s.target.value)}}})]),t._v(" "),a("div",[a("button",{attrs:{type:"submit"},on:{click:function(s){return s.preventDefault(),t.signin(s)}}},[t._v("登入")]),t._v(" "),a("p",[t._v(t._s(t.notSuccess))])])])]):t._e()])])},staticRenderFns:[]};var j=a("VU/8")(O,F,!1,function(t){a("N48D")},"data-v-5a98a952",null).exports,A={name:"Productslist",components:{Navbar:v,Products:P,Footer:y},mounted:function(){this.$store.dispatch("wineProductsPicks"),this.$store.dispatch("wineProductsNews")},computed:{productsPicks:function(){return this.$store.state.productsPicks},productsNews:function(){return this.$store.state.productsNews}}},M={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("header",[a("Navbar"),t._v(" "),a("div",{staticClass:"header_img"})],1),t._v(" "),a("main",[a("div",{staticClass:"container"},[a("div",{staticClass:"products_picks"},[a("b-row",{staticClass:"top"},[a("b-col",{attrs:{cols:"12"}},[a("h2",[t._v("Classic")])])],1),t._v(" "),a("b-row",t._l(t.productsPicks,function(s){return a("b-col",{key:s.num,staticClass:"introduction_bottom_div",attrs:{cols:"12 mb-5",md:"6",lg:"3"}},[a("div",{staticClass:"wine"},[a("div",{staticClass:"product_top"},[a("div",{staticClass:"product_left",staticStyle:{width:"60%"}},[a("h5",[t._v(t._s(s.title))]),t._v(" "),a("p",[t._v(t._s(s.category))]),t._v(" "),a("div",{staticClass:"year"},[a("div",{staticClass:"am"},[a("p",{staticClass:"title"},[t._v("AM")]),t._v(" "),a("p",[t._v("85")])]),t._v(" "),a("div",{staticClass:"ws"},[a("p",{staticClass:"title"},[t._v("WS")]),t._v(" "),a("p",[t._v("100")])])]),t._v(" "),a("div",{staticClass:"sale_price"},[a("div",{staticClass:"sale"},[t._v("＄"+t._s(s.origin_price))]),t._v(" "),a("div",{staticClass:"price"},[t._v("＄"+t._s(s.price))])])]),t._v(" "),a("div",{staticClass:"product_right",staticStyle:{width:"30%"}},[a("img",{attrs:{src:s.image,alt:"product"}})])]),t._v(" "),a("div",{staticClass:"product_bottom"},[a("div",{staticClass:"cart_num_out"},[a("select",{staticClass:"cart_num"},t._l(10,function(s){return a("option",[t._v(t._s(s))])}),0),t._v(" "),a("button",{on:{click:function(s){return t.addCart1()}}},[t._v("Add to cart")])])])])])}),1)],1),t._v(" "),a("div",{staticClass:"products_news"},[a("b-row",{staticClass:"top"},[a("b-col",{attrs:{cols:"12"}},[a("h2",[t._v("New")])])],1),t._v(" "),a("b-row",t._l(t.productsNews,function(s){return a("b-col",{key:s.num,staticClass:"introduction_bottom_div",attrs:{cols:"12 mb-5",md:"6",lg:"3"}},[a("div",{staticClass:"wine"},[a("div",{staticClass:"product_top"},[a("div",{staticClass:"product_left",staticStyle:{width:"60%"}},[a("h5",[t._v(t._s(s.title))]),t._v(" "),a("p",[t._v(t._s(s.category))]),t._v(" "),a("div",{staticClass:"year"},[a("div",{staticClass:"am"},[a("p",{staticClass:"title"},[t._v("AM")]),t._v(" "),a("p",[t._v("85")])]),t._v(" "),a("div",{staticClass:"ws"},[a("p",{staticClass:"title"},[t._v("WS")]),t._v(" "),a("p",[t._v("100")])])]),t._v(" "),a("div",{staticClass:"sale_price"},[a("div",{staticClass:"sale"},[t._v("＄"+t._s(s.origin_price))]),t._v(" "),a("div",{staticClass:"price"},[t._v("＄"+t._s(s.price))])])]),t._v(" "),a("div",{staticClass:"product_right",staticStyle:{width:"30%"}},[a("img",{attrs:{src:s.image,alt:"product"}})])]),t._v(" "),a("div",{staticClass:"product_bottom"},[a("div",{staticClass:"cart_num_out"},[a("select",{staticClass:"cart_num"},t._l(10,function(s){return a("option",[t._v(t._s(s))])}),0),t._v(" "),a("button",{on:{click:function(s){return t.addCart2()}}},[t._v("Add to cart")])])])])])}),1)],1)])]),t._v(" "),a("Footer")],1)},staticRenderFns:[]};var I=a("VU/8")(A,M,!1,function(t){a("hCSW")},"data-v-4787490c",null).exports;i.default.use(d.a);var U=new d.a({routes:[{path:"/",name:"App",component:$},{path:"/productslist",name:"Productslist",component:I},{path:"/login",name:"Login",component:j}]}),E=a("Tqaz");a("Jmt5"),a("9M+g");i.default.use(e.a),i.default.use(n.a,c.a),i.default.use(E.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:U,store:l,components:{App:$},template:"<router-view></router-view>"})},VwXp:function(t,s){},cj3T:function(t,s){},eFbt:function(t,s){},fO0u:function(t,s){},hCSW:function(t,s){},qRhz:function(t,s){},yUKz:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.b80fcf856b73ae49807e.js.map