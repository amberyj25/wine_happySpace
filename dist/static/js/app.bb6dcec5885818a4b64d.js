webpackJsonp([1],{"0IeQ":function(t,e,a){t.exports=a.p+"static/img/introduction4.9091390.jpg"},"3mpG":function(t,e){},"9M+g":function(t,e){},BUvP:function(t,e,a){t.exports=a.p+"static/img/introduction1.93738a1.jpg"},F2Yc:function(t,e){},Jmt5:function(t,e){},Jqiq:function(t,e){},KSES:function(t,e){},KoX2:function(t,e,a){t.exports=a.p+"static/img/introduction2.1b70d77.jpg"},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n=a("NYxO"),r=a("mtWM"),i=a.n(r),c=a("Rf8U"),o=a.n(c);s.default.use(n.a),s.default.use(o.a,i.a);var u=new n.a.Store({state:{orgProductsClassic:[],orgProductsNews:[],checkSignIn:!1,addCartClassic:[],addCartNews:[],currentShoppingCartClassic:[],currentShoppingCartNew:[]},mutations:{getOrgProductsClassic:function(t,e){e.map(function(t){return t.productNum=1,t}),t.orgProductsClassic=e},getOrgProductsNews:function(t,e){e.map(function(t){return t.productNum=1,t}),t.orgProductsNews=e},checkSignIn:function(t,e){t.checkSignIn=e},addCartClassic:function(t,e){t.addCartClassic=e},addCartNews:function(t,e){t.addCartNews=e},getCurrentShoppingCartClassic:function(t,e){t.currentShoppingCartClassic=e},getCurrentShoppingCartNew:function(t,e){t.currentShoppingCartNew=e}},actions:{getOrgProductsClassic:function(t){i.a.get("https://vue-course-api.hexschool.io/api/wine5/products").then(function(e){t.commit("getOrgProductsClassic",e.data.products)})},getOrgProductsNews:function(t){i.a.get("https://vue-course-api.hexschool.io/api/wine52/products").then(function(e){t.commit("getOrgProductsNews",e.data.products)})},addCartClassic:function(t,e){var a=this;i.a.post("https://vue-course-api.hexschool.io/api/wine5/cart",{data:e}).then(function(e){a.dispatch("getCurrentShoppingCartClassic"),t.commit("addCartClassic",e.data)})},addCartNews:function(t,e){var a=this;i.a.post("https://vue-course-api.hexschool.io/api/wine52/cart",{data:e}).then(function(e){a.dispatch("getCurrentShoppingCartNew"),t.commit("addCartNews",e.data.data)})},getCurrentShoppingCartClassic:function(t){i.a.get("https://vue-course-api.hexschool.io/api/wine5/cart").then(function(e){t.commit("getCurrentShoppingCartClassic",e.data.data.carts)})},getCurrentShoppingCartNew:function(t){i.a.get("https://vue-course-api.hexschool.io/api/wine52/cart").then(function(e){t.commit("getCurrentShoppingCartNew",e.data.data.carts)})},deleteProductsClassic:function(t,e){var a=this;i.a.delete("https://vue-course-api.hexschool.io/api/wine5/cart/"+e).then(function(){return a.dispatch("getCurrentShoppingCartClassic")})},deleteProductsNew:function(t,e){var a=this;i.a.delete("https://vue-course-api.hexschool.io/api/wine52/cart/"+e).then(function(){return a.dispatch("getCurrentShoppingCartNew")})},signOutChange:function(t){i.a.post("https://vue-course-api.hexschool.io/logout").then(function(e){t.commit("checkSignIn",!1)})}}}),l=a("/ocq"),d=a("Dd8w"),p=a.n(d),h={name:"ShoppingCart",data:function(){return{classicProductData:[],newProductData:[],totalDataLength:""}},computed:p()({},Object(n.c)(["currentShoppingCartClassic","currentShoppingCartNew"]),{getClassicProducts:function(){return this.currentShoppingCartClassic},getNewProducts:function(){return this.currentShoppingCartNew},shoppingItemsLength:function(){return this.totalDataLength}}),watch:{currentShoppingCartClassic:function(){this.getShoppingCartClassic(),this.getTotalNumData()},currentShoppingCartNew:function(){this.getShoppingCartNew(),this.getTotalNumData()}},mounted:function(){this.getShoppingCartClassic(),this.getShoppingCartNew(),this.getTotalNumData()},methods:p()({},Object(n.b)(["getCurrentShoppingCartClassic","getCurrentShoppingCartNew"]),{getTotalNumData:function(){this.totalDataLength=this.classicProductData.length+this.newProductData.length},getShoppingCartClassic:function(){this.classicProductData=this.currentShoppingCartClassic},getShoppingCartNew:function(){this.newProductData=this.currentShoppingCartNew},deleteClassicProduct:function(t){this.$store.dispatch("deleteProductsClassic",t)},deleteNewProduct:function(t){this.$store.dispatch("deleteProductsNew",t)},changePageToCheckout:function(){this.$router.push("/checkout")}})},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shopping_cart_root"},[a("b-dropdown",{attrs:{id:"dropdown-right",right:"",text:"Right align",size:"lg",variant:"link","toggle-class":"text-decoration-none","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("i",{staticClass:"fas fa-shopping-cart"}),t._v(" "),a("b-badge",{attrs:{variant:"primary"}},[t._v(t._s(t.shoppingItemsLength))])]},proxy:!0}])},[t._v(" "),a("p",{staticClass:"title"},[t._v("已選購 Classic 商品")]),t._v(" "),t._l(t.getClassicProducts,function(e,s){return a("b-dropdown-item",{key:"classicProduct"+s,staticClass:"content",attrs:{href:"#"}},[a("div",{staticClass:"content_item"},[a("span",[t._v(t._s(e.product.title))]),t._v(" "),a("span",[t._v(t._s(e.qty)+"瓶")]),t._v(" "),a("span",[t._v("$"+t._s(e.qty*e.product.price))]),t._v(" "),a("span",{staticClass:"deleteIcon",on:{click:function(a){return a.preventDefault(),t.deleteClassicProduct(e.id)}}},[a("i",{staticClass:"far fa-trash-alt"})])]),t._v(" "),a("hr")])}),t._v(" "),a("p",{staticClass:"title"},[t._v("已選購 New 商品")]),t._v(" "),t._l(t.getNewProducts,function(e,s){return a("b-dropdown-item",{key:"newProduct"+s,staticClass:"content",attrs:{href:"#"}},[a("div",{staticClass:"content_item"},[a("span",[t._v(t._s(e.product.title))]),t._v(" "),a("span",[t._v(t._s(e.qty)+"瓶")]),t._v(" "),a("span",[t._v("$"+t._s(e.qty*e.product.price))]),t._v(" "),a("span",{staticClass:"deleteIcon",on:{click:function(a){return a.preventDefault(),t.deleteNewProduct(e.id)}}},[a("i",{staticClass:"far fa-trash-alt"})])]),t._v(" "),a("hr")])}),t._v(" "),a("div",{staticClass:"checkout"},[a("div",{staticClass:"btn",on:{click:t.changePageToCheckout}},[t._v("結帳")])])],2)],1)},staticRenderFns:[]};var g={name:"Navbar",components:{ShoppingCart:a("VU/8")(h,v,!1,function(t){a("Jqiq")},"data-v-09423459",null).exports},data:function(){return{checkSignInData:!1}},computed:p()({},Object(n.c)(["checkSignIn"]),{checkLogIn:function(){return this.checkSignIn}}),methods:p()({},Object(n.b)(["signOutChange"]),{signOut:function(){this.signOutChange()}})},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{staticClass:"navabar_root",attrs:{toggleable:"lg"}},[a("b-navbar-brand",{staticClass:"brand_name"},[a("h1",[a("router-link",{attrs:{to:"/"}},[t._v("Wine Space")])],1)]),t._v(" "),a("b-navbar-toggle",{staticClass:"navigation_btn_rwd",attrs:{target:"nav-collapse"}},[a("i",{staticClass:"fas fa-bars"})]),t._v(" "),a("b-collapse",{staticClass:"navigation_content",attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto navigation_content_right"},[a("b-nav-item",{attrs:{right:""}},[a("router-link",{attrs:{to:"/"}},[t._v("首頁")])],1),t._v(" "),a("b-nav-item",{attrs:{right:""}},[a("router-link",{attrs:{to:"/productsPage"}},[t._v("商品")])],1),t._v(" "),a("b-nav-item",{attrs:{right:""}},[!1===t.checkLogIn?a("router-link",{attrs:{to:"/login"}},[t._v("Login")]):a("p",{on:{click:t.signOut}},[t._v("Logout")])],1)],1)],1),t._v(" "),a("ShoppingCart")],1)},staticRenderFns:[]};var m=a("VU/8")(g,C,!1,function(t){a("gdYi")},"data-v-48eb7c16",null).exports,_={name:"carousel",data:function(){return{carouselContentData:[{id:1,img:"https://i.imgur.com/6x0J234.jpg"},{id:2,img:"https://i.imgur.com/TBHJmjv.jpg"},{id:3,img:"https://i.imgur.com/NCbpT18.jpg"}],currentCarouselContentId:1}},computed:{carouselContent:function(){var t=this;return this.carouselContentData.filter(function(e){return e.id===t.currentCarouselContentId})}},mounted:function(){this.timer()},methods:{timer:function(){var t=this;return setInterval(function(){t.getData()},3e3)},getData:function(){this.currentCarouselContentId!==this.carouselContentData.length?this.currentCarouselContentId+=1:this.currentCarouselContentId=1},changeTab:function(t){this.currentCarouselContentId=t}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.carouselContent,function(e,s){return a("div",{key:s,staticClass:"carousel_img"},[a("img",{staticClass:"carousel_img_content",attrs:{src:e.img,alt:"carousel_img"}}),t._v(" "),a("div",{staticClass:"carousel_alltabs"},t._l(t.carouselContentData.length,function(e){return a("i",{key:e,class:{fas:!0,"fa-circle":!0,fa_circle_style:t.currentCarouselContentId===e},on:{click:function(a){return t.changeTab(e)}}})}),0)])}),0)},staticRenderFns:[]};var w={name:"HeaderNavbarAndCarousel",components:{Navbar:m,Carousel:a("VU/8")(_,f,!1,function(t){a("lS9k")},"data-v-18941cde",null).exports}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("Navbar"),this._v(" "),e("Carousel")],1)},staticRenderFns:[]};var N=a("VU/8")(w,b,!1,function(t){a("F2Yc")},"data-v-77767670",null).exports,P={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"service"},[a("b-row",t._l(t.serviceContent,function(e,s){return a("b-col",{key:s,attrs:{cols:"12",lg:"4"}},[a("i",{class:e.style}),t._v(" "),a("div",{staticClass:"detail"},[a("h4",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.description))])])])}),1)],1)},staticRenderFns:[]};var S=a("VU/8")({name:"Service",data:function(){return{serviceContent:[{title:"酒品",description:"最棒的酒款",style:"fas fa-wine-glass-alt"},{title:"滿額",description:"購滿$2,000就可免運",style:"fas fa-comment-dollar"},{title:"寄送服務",description:"恆溫的寄送服務",style:"fas fa-truck"}]}}},P,!1,function(t){a("bSCx")},"data-v-6cbaeb7b",null).exports,k=a("BUvP"),D=a.n(k),y=a("KoX2"),x=a.n(y),$=a("cvXP"),A=a.n($),I=a("0IeQ"),O=a.n(I),F={name:"DeliverInfo",data:function(){return{deliverContent:[{title:"Lorem",description:"恆溫的寄送服務",img:D.a},{title:"滿額",description:"購滿$2,000就可免運",img:x.a},{title:"寄送服務",description:"恆溫的寄送服務",img:A.a},{title:"寄送服務",description:"恆溫的寄送服務",img:O.a}]}}},R={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"deliver_info"},[a("b-row",t._l(t.deliverContent,function(e,s){return a("b-col",{key:s,staticClass:"content",attrs:{cols:"12 mb-5",xl:"3",md:"6 mb-0",sm:"12"}},[a("img",{attrs:{src:e.img,alt:"image"}}),t._v(" "),a("div",[a("h5",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.description))])])])}),1)],1)},staticRenderFns:[]};var T={name:"Introduction",components:{Service:S,DeliverInfo:a("VU/8")(F,R,!1,function(t){a("Ndb9")},"data-v-b6b6a7d6",null).exports}},j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"introduction"},[e("Service"),this._v(" "),e("b-row",{staticClass:"justify-content-center"},[e("b-col",{attrs:{cols:"5"}},[e("hr")])],1),this._v(" "),e("DeliverInfo")],1)},staticRenderFns:[]};var E=a("VU/8")(T,j,!1,function(t){a("3mpG")},"data-v-779e113a",null).exports,U={name:"Products",data:function(){return{currentClassicPage:1,currentNewPage:1,classicData:{},newData:{},classicAndNewData:[]}},computed:p()({},Object(n.c)(["orgProductsClassic","orgProductsNews"]),{categoryProducts:function(){return this.getCategoryProducts()}}),watch:{orgProductsClassic:function(){this.classicData.title="classic",this.classicData.data=this.orgProductsClassic.filter(function(t){return t.num<5}),this.classicAndNewData.push(this.classicData)},orgProductsNews:function(){this.newData.title="new",this.newData.data=this.orgProductsNews.filter(function(t){return t.num<5}),this.classicAndNewData.push(this.newData)},currentClassicPage:function(){switch(this.classicAndNewData=[],this.currentClassicPage){case 1:this.classicData.data=this.orgProductsClassic.filter(function(t){return t.num<5});break;case 2:this.classicData.data=this.orgProductsClassic.filter(function(t){return t.num>4&&t.num<9})}this.classicAndNewData.push(this.classicData),this.classicAndNewData.push(this.newData)},currentNewPage:function(){switch(this.classicAndNewData=[],this.currentNewPage){case 1:this.newData.data=this.orgProductsNews.filter(function(t){return t.num<5});break;case 2:this.newData.data=this.orgProductsNews.filter(function(t){return t.num>4&&t.num<9})}this.classicAndNewData.push(this.classicData),this.classicAndNewData.push(this.newData)}},mounted:function(){this.getOrgProductsClassic(),this.getOrgProductsNews(),this.getCurrentShoppingCartClassic(),this.getCurrentShoppingCartNew()},methods:p()({},Object(n.b)(["getOrgProductsClassic","getOrgProductsNews","getCurrentShoppingCartClassic","getCurrentShoppingCartNew"]),{getPreviousPage:function(t){switch(t){case"classic":if(1===this.currentClassicPage)return;this.currentClassicPage-=1;break;case"new":if(1===this.currentNewPage)return;this.currentNewPage-=1}},getNextPage:function(t){switch(t){case"classic":if(2===this.currentClassicPage)return;this.currentClassicPage+=1;break;case"new":if(2===this.currentNewPage)return;this.currentNewPage+=1}},addCart:function(t,e,a){var s={product_id:e,qty:a};switch(t.split("")[0]){case"A":case"B":this.$store.dispatch("addCartClassic",s);break;case"V":this.$store.dispatch("addCartNews",s)}},getCategoryProducts:function(){return this.classicAndNewData}})},V={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"products_classic"},t._l(t.categoryProducts,function(e,s){return a("div",{key:s,staticClass:"products"},[a("b-row",{staticClass:"top"},[a("b-col",{attrs:{cols:"11"}},[a("h2",[t._v(t._s(e.title))])]),t._v(" "),a("b-col",{staticClass:"page justify-content-center mb-4",attrs:{cols:"1"}},[a("div",[a("i",{staticClass:"fas fa-angle-left",on:{click:function(a){return t.getPreviousPage(e.title)}}})]),t._v(" "),a("div",[a("i",{staticClass:"fas fa-angle-right",on:{click:function(a){return t.getNextPage(e.title)}}})])])],1),t._v(" "),a("b-row",t._l(e.data,function(e,s){return a("b-col",{key:s,staticClass:"products",attrs:{cols:"12 mb-5",md:"6",lg:"3"}},[a("div",{staticClass:"wine"},[a("div",{staticClass:"introduction"},[a("div",{staticClass:"product_left"},[a("h5",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.category))]),t._v(" "),a("div",{staticClass:"year"},[a("div",{staticClass:"am"},[a("p",{staticClass:"title"},[t._v("AM")]),t._v(" "),a("p",[t._v("85")])]),t._v(" "),a("div",{staticClass:"ws"},[a("p",{staticClass:"title"},[t._v("WS")]),t._v(" "),a("p",[t._v("100")])])]),t._v(" "),a("div",{staticClass:"sale_price"},[a("div",{staticClass:"sale"},[t._v("＄"+t._s(e.price))]),t._v(" "),a("div",{staticClass:"price"},[t._v("＄"+t._s(e.origin_price))])])]),t._v(" "),a("div",{staticClass:"product_right"},[a("img",{attrs:{src:e.image,alt:"product"}})]),t._v(" "),a("div",{staticClass:"product_top_detail"},[a("div",{staticClass:"product_top_detail_inner"},[a("p",[t._v("經典")])])])]),t._v(" "),a("div",{staticClass:"product_bottom"},[a("div",{staticClass:"cart_num_out"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.productNum,expression:"product.productNum"}],staticClass:"cart_num",on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(e,"productNum",a.target.multiple?s:s[0])}}},t._l(10,function(e,s){return a("option",{key:s,domProps:{value:e}},[t._v(t._s(e))])}),0),t._v(" "),a("button",{on:{click:function(a){return t.addCart(e.title,e.id,e.productNum)}}},[t._v("Add to cart")])])])])])}),1)],1)}),0)])},staticRenderFns:[]};var X=a("VU/8")(U,V,!1,function(t){a("iRgB")},"data-v-6bd84575",null).exports,q={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"content"},[a("div",{staticClass:"content_left"},[a("a",{attrs:{href:"##"}},[t._v("Wine Space")]),t._v(" "),a("p",{staticClass:"copyright"},[t._v("Copyright © 2020 Happy Wine")])]),t._v(" "),a("div",{staticClass:"content_right"},[a("p",[t._v("contact")]),t._v(" "),a("p",[t._v("Email : XXX@gmail.com")]),t._v(" "),a("p",[t._v("mobile : 09XX-XXX-XXX")])])])])}]};var B=a("VU/8")({name:"Footer"},q,!1,function(t){a("vwPB")},"data-v-903352f0",null).exports,H={name:"App",components:{HeaderNavbarAndCarousel:N,Introduction:E,Products:X,Footer:B}},L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("HeaderNavbarAndCarousel"),this._v(" "),e("main",[e("div",{staticClass:"container"},[e("Products"),this._v(" "),e("Introduction")],1)]),this._v(" "),e("Footer")],1)},staticRenderFns:[]};var M=a("VU/8")(H,L,!1,function(t){a("h1MT")},"data-v-55f570d8",null).exports,J={name:"HeaderNavbar",components:{Navbar:m}},W={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("Navbar")],1)},staticRenderFns:[]};var Y=a("VU/8")(J,W,!1,function(t){a("y4nF")},"data-v-1b0ea690",null).exports,K={name:"Login",components:{HeaderNavbar:Y},data:function(){return{user:{username:"",password:""},notSuccess:""}},methods:{signin:function(){var t=this;this.axios.post("https://vue-course-api.hexschool.io/signin",this.user).then(function(e){switch(e.data.success){case!0:t.$router.push("/"),t.$store.commit("checkSignIn",!0);break;case!1:t.notSuccess="沒有登入成功"}})}}},z={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"outer"},[a("HeaderNavbar"),t._v(" "),a("div",{staticClass:"form_outer"},[a("form",[a("div",[a("div",[a("label",{attrs:{for:"email"}},[t._v("登入信箱 ：")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.user.username,expression:"user.username",modifiers:{trim:!0}}],attrs:{type:"text",id:"email",placeholder:"請輸入登入信箱"},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),a("div",[a("label",{attrs:{for:"password"}},[t._v("密碼 :")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.user.password,expression:"user.password",modifiers:{trim:!0}}],attrs:{type:"password",id:"password",placeholder:"請輸入密碼"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),a("div",[a("button",{attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.signin(e)}}},[t._v("登入")]),t._v(" "),a("p",[t._v(t._s(t.notSuccess))])])])])])],1)},staticRenderFns:[]};var G=a("VU/8")(K,z,!1,function(t){a("sTso")},"data-v-3db15580",null).exports,Q={name:"ProductsPage",components:{HeaderNavbar:Y,Footer:B},data:function(){return{wineCategory:["New酒品","Classic酒品","全部酒品"],categoryRender:"New酒品",classicAndNewData:[]}},computed:p()({},Object(n.c)(["orgProductsClassic","orgProductsNews"]),{categoryProducts:function(){return this.getCategoryProducts()}}),watch:{orgProductsClassic:function(){var t={title:"classic"};t.data=this.orgProductsClassic,this.classicAndNewData.push(t)},orgProductsNews:function(){var t={title:"new"};t.data=this.orgProductsNews,this.classicAndNewData.push(t)}},mounted:function(){this.getOrgProductsClassic(),this.getOrgProductsNews(),this.getCurrentShoppingCartClassic(),this.getCurrentShoppingCartNew()},methods:p()({},Object(n.b)(["getOrgProductsClassic","getOrgProductsNews","getCurrentShoppingCartClassic","getCurrentShoppingCartNew"]),{addCart:function(t,e,a){var s={product_id:e,qty:a};switch(t.split("")[0]){case"A":case"B":this.$store.dispatch("addCartClassic",s);break;case"V":this.$store.dispatch("addCartNews",s)}},getCategory:function(t){switch(t){case"New酒品":this.categoryRender="New酒品";break;case"Classic酒品":this.categoryRender="Classic酒品";break;case"全部酒品":this.categoryRender="全部酒品"}},getCategoryProducts:function(){switch(this.categoryRender){case"New酒品":return this.classicAndNewData.filter(function(t){return"new"===t.title});case"Classic酒品":return this.classicAndNewData.filter(function(t){return"classic"===t.title});case"全部酒品":return this.classicAndNewData}}})},Z={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("HeaderNavbar",{staticClass:"header_img"}),t._v(" "),a("main",{staticClass:"container"},[a("div",{staticClass:"filter"},[a("h5",{staticClass:"category"},[t._v("酒品分類")]),t._v(" "),t._l(t.wineCategory,function(e,s){return a("div",{key:s},[a("p",{class:{filter_category:t.categoryRender===e},on:{click:function(a){return t.getCategory(e)}}},[t._v(t._s(e))])])})],2),t._v(" "),a("div",{staticClass:"products_outer"},t._l(t.categoryProducts,function(e,s){return a("div",{key:s,staticClass:"products"},[a("b-row",{staticClass:"top"},[a("b-col",{attrs:{cols:"12"}},[a("h2",[t._v(t._s(e.title))])])],1),t._v(" "),a("b-row",t._l(e.data,function(e,s){return a("b-col",{key:s,staticClass:"product",attrs:{cols:"12 mb-5",md:"6",lg:"3"}},[a("div",{staticClass:"wine"},[a("div",{staticClass:"product_top"},[a("div",{staticClass:"product_left"},[a("h5",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.category))]),t._v(" "),a("div",{staticClass:"year"},[a("div",{staticClass:"am"},[a("p",{staticClass:"title"},[t._v("AM")]),t._v(" "),a("p",[t._v("85")])]),t._v(" "),a("div",{staticClass:"ws"},[a("p",{staticClass:"title"},[t._v("WS")]),t._v(" "),a("p",[t._v("100")])])]),t._v(" "),a("div",{staticClass:"sale_price"},[a("div",{staticClass:"sale"},[t._v("＄"+t._s(e.price))]),t._v(" "),a("div",{staticClass:"price"},[t._v("＄"+t._s(e.origin_price))])])]),t._v(" "),a("div",{staticClass:"product_right"},[a("img",{attrs:{src:e.image,alt:"product"}})])]),t._v(" "),a("div",{staticClass:"product_bottom"},[a("div",{staticClass:"cart_num_out"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.productNum,expression:"product.productNum"}],staticClass:"cart_num",on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(e,"productNum",a.target.multiple?s:s[0])}}},t._l(10,function(e,s){return a("option",{key:s,domProps:{value:e}},[t._v(t._s(e))])}),0),t._v(" "),a("button",{on:{click:function(a){return t.addCart(e.title,e.id,e.productNum)}}},[t._v("Add to cart")])])])])])}),1)],1)}),0)]),t._v(" "),a("Footer")],1)},staticRenderFns:[]};var tt=a("VU/8")(Q,Z,!1,function(t){a("oikd")},"data-v-0c542235",null).exports,et={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._l(t.categoryProducts,function(e,s){return a("div",{key:s},[a("h1",[t._v(t._s(e.title))]),t._v(" "),a("table",[t._m(0,!0),t._v(" "),t._l(e.data,function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(e.product.title))]),t._v(" "),a("td",[t._v(t._s(e.qty)+"瓶")]),t._v(" "),a("td",[t._v(t._s(e.product.price))]),t._v(" "),a("td",[t._v("$"+t._s(e.total))])])})],2)])}),t._v(" "),a("div",{staticClass:"total"},[a("h1",[t._v("total")]),t._v(" "),a("div",{staticClass:"totalContent"},[a("span",[t._v("總計 : ")]),t._v(" "),a("span",[t._v(t._s(t.totalPrice))])])]),t._v(" "),a("div",{staticClass:"submit"},t._l(t.submitBtn,function(e,s){return a("div",{key:s,class:e.class,on:{click:function(a){return t.changePage(e)}}},[t._v(t._s(e.title))])}),0)],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("品名")]),this._v(" "),e("th",[this._v("數量")]),this._v(" "),e("th",[this._v("單價")]),this._v(" "),e("th",[this._v("總額")])])}]};var at={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("form",[a("label",{attrs:{for:"name"}},[t._v("姓名 :")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],attrs:{type:"text",id:"name",placeholder:"請輸入姓名"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"email"}},[t._v("信箱 :")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.phone,expression:"user.phone"}],attrs:{type:"text",id:"email",placeholder:"ex.amber@gmail.com"},domProps:{value:t.user.phone},on:{input:function(e){e.target.composing||t.$set(t.user,"phone",e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"phone_number"}},[t._v("手機號碼 :")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.phoneNumber,expression:"user.phoneNumber"}],attrs:{type:"text",id:"phone_number",placeholder:"ex.0989-768-701"},domProps:{value:t.user.phoneNumber},on:{input:function(e){e.target.composing||t.$set(t.user,"phoneNumber",e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"address"}},[t._v("地址 :")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.address,expression:"user.address"}],attrs:{type:"text",id:"address",placeholder:"ex.台中市....."},domProps:{value:t.user.address},on:{input:function(e){e.target.composing||t.$set(t.user,"address",e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"message"}},[t._v("備註 :")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.user.message,expression:"user.message"}],attrs:{rows:"5",cols:"50",id:"message"},domProps:{value:t.user.message},on:{input:function(e){e.target.composing||t.$set(t.user,"message",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"submit"},t._l(t.submitBtn,function(e,s){return a("div",{key:s,class:e.class,on:{click:function(a){return t.changePage(e)}}},[t._v(t._s(e.title))])}),0)])},staticRenderFns:[]};var st={name:"Checkout",components:{Navbar:m,CheckoutShoppingCartContent:a("VU/8")({name:"CheckoutShoppingCartContent",props:["classicProductData","newProductData"],data:function(){return{classicData:{},newData:{},classicAndNewData:[],submitBtn:[{title:"繼續購物",class:"btn_shopping"},{title:"確認訂購",class:"btn_submit"}]}},computed:{categoryProducts:function(){return this.getCategoryProducts()},totalPrice:function(){return this.getTotalPrice()}},watch:{classicProductData:function(){this.classicData.title="classic (經典款)",this.classicData.data=this.classicProductData,this.classicAndNewData.push(this.classicData)},newProductData:function(){this.newData.title="new (新款)",this.newData.data=this.newProductData,this.classicAndNewData.push(this.newData)}},methods:{getCategoryProducts:function(){return this.classicAndNewData},getTotalPrice:function(){var t=[];return this.classicProductData.forEach(function(e){return t.push(e.total)}),this.newProductData.forEach(function(e){return t.push(e.total)}),t.reduce(function(t,e,a,s){return t+e},0)},changePage:function(t){switch(t.title){case"繼續購物":this.$router.push("/");break;case"確認訂購":this.$emit("changeComponent","CheckoutCustomerForm")}}}},et,!1,function(t){a("zKCI")},"data-v-e3b53930",null).exports,CheckoutCustomerForm:a("VU/8")({name:"CheckoutCustomerForm",data:function(){return{user:{name:"",email:"",phoneNumber:"",address:"",message:""},submitBtn:[{title:"上一步",class:"btn_Previous"},{title:"送出訂單",class:"btn_submit"}]}},methods:{changePage:function(t){switch(t.title){case"上一步":this.$emit("changeComponent","CheckoutShoppingCartContent")}}}},at,!1,function(t){a("jAYg")},"data-v-06527f94",null).exports},data:function(){return{componentTab:"CheckoutShoppingCartContent",checkoutSopItem:[{title:"1.確認購物車內容",component:"CheckoutShoppingCartContent"},{title:"2.輸入收件人資料",component:"CheckoutCustomerForm"}]}},computed:p()({},Object(n.c)(["currentShoppingCartClassic","currentShoppingCartNew"]),{classicProductData:function(){return this.currentShoppingCartClassic},newProductData:function(){return this.currentShoppingCartNew},changeTab:function(){return this.componentTab},checkoutSop:function(){return this.checkoutSopItem}}),watch:{componentTab:function(){this.getCurrentShoppingCartClassic(),this.getCurrentShoppingCartNew()}},mounted:function(){this.getCurrentShoppingCartClassic(),this.getCurrentShoppingCartNew()},methods:p()({},Object(n.b)(["getCurrentShoppingCartClassic","getCurrentShoppingCartNew"]),{changeComponent:function(t){this.componentTab=t}})},nt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"nav_bar_root"},[a("Navbar")],1),t._v(" "),a("div",{staticClass:"container"},[a("h1",[t._v("結帳")]),t._v(" "),a("div",{staticClass:"checkout_sop"},t._l(t.checkoutSop,function(e,s){return a("div",{key:s,staticClass:"checkout_sop_item",class:{bgColor:t.changeTab===e.component}},[a("h2",[t._v(" "+t._s(e.title)+" ")])])}),0),t._v(" "),a("div",{staticClass:"checkout_sop_content"},[a(t.changeTab,{tag:"component",attrs:{classicProductData:t.classicProductData,newProductData:t.newProductData},on:{changeComponent:t.changeComponent}})],1)])])},staticRenderFns:[]};var rt=a("VU/8")(st,nt,!1,function(t){a("KSES")},"data-v-53564ffe",null).exports;s.default.use(l.a);var it=new l.a({routes:[{path:"/",name:"App",component:M},{path:"/productsPage",name:"ProductsPage",component:tt},{path:"/login",name:"Login",component:G},{path:"/checkout",name:"Checkout",component:rt}]}),ct=a("Tqaz");a("Jmt5"),a("9M+g");s.default.use(ct.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:it,store:u,components:{App:M},template:"<router-view></router-view>"})},Ndb9:function(t,e){},bSCx:function(t,e){},cvXP:function(t,e,a){t.exports=a.p+"static/img/introduction3.8d90c87.jpg"},gdYi:function(t,e){},h1MT:function(t,e){},iRgB:function(t,e){},jAYg:function(t,e){},lS9k:function(t,e){},oikd:function(t,e){},sTso:function(t,e){},vwPB:function(t,e){},y4nF:function(t,e){},zKCI:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.bb6dcec5885818a4b64d.js.map