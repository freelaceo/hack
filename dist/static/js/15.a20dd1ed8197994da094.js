webpackJsonp([15],{"1nv8":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("Xxa5"),i=s.n(e),n=s("exGp"),r=s.n(n),o=s("mtWM"),c=s.n(o),l={name:"projects",data:function(){return{info:null,hackers:[],addJoin:!0,user:null}},created:function(){this.load()},methods:{load:function(){var t=this;return r()(i.a.mark(function a(){var s,e;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c()("/auth/project/url/"+t.$route.params.id,{method:"GET"});case 2:s=a.sent,e=s.data,t.info=e.data,t.user=t.getTokenUser().user,t.chargerHackers(),t.verifyJoin();case 8:case"end":return a.stop()}},a,t)}))()},chargerHackers:function(){var t=r()(i.a.mark(function t(){var a=this;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.info.hackers.map(function(t){console.log(t),"undefined"!=t.projectId&&c()("/auth/user/"+t.projectId).then(function(t){return a.hackers.push(t.data)})});case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),joinentrepreneur:function(){var t=this;return r()(i.a.mark(function a(){return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:t.join("entrepreneur");case 1:case"end":return a.stop()}},a,t)}))()},joindev:function(){var t=this;return r()(i.a.mark(function a(){return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:t.join("developer");case 1:case"end":return a.stop()}},a,t)}))()},joinuxui:function(){var t=this;return r()(i.a.mark(function a(){return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:t.join("uxui");case 1:case"end":return a.stop()}},a,t)}))()},getTokenUser:function(){return{token:window.localStorage.getItem("token"),user:JSON.parse(window.localStorage.getItem("user"))}},verifyJoin:function(){var t=this;this.info.hackers.map(function(a){console.log("=>",a),a.projectId===t.user._id&&(t.addJoin=!1)})},join:function(t){var a=this;return r()(i.a.mark(function s(){var e,n;return i.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return(e=new FormData).append("userId",a.user._id),e.append("type",t),console.log(a.info._id),s.next=6,c()("/auth/project/join/"+a.info._id,{method:"POST",data:e});case 6:n=s.sent,n.data;case 8:case"end":return s.stop()}},s,a)}))()}}},u={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("section",{staticClass:"bg-up"},[s("div",{staticClass:"container-lg"},[s("div",{staticClass:"row min-h"},[s("div",{staticClass:"col-md-12 row"},[s("div",{staticClass:"info-project col-md-9"},[s("div",{staticClass:"user_img"},[s("figure",{staticClass:"full"},[s("img",{attrs:{src:t.info.image,alt:""}})])]),t._v(" "),s("div",{staticClass:"info"},[s("h1",{staticClass:"title-project"},[t._v(t._s(t.info.name))]),t._v(" "),s("br"),t._v(" "),s("p",[t._v(t._s(t.info.stract))]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"skills"},[s("ul",{staticClass:"tags"},t._l(t.info.skills,function(a,e){return s("li",{key:e},[t._v(t._s(a))])}))])])]),t._v(" "),s("div",{staticClass:"col-md-3 box-buton row relative float-right"},[s("div",{staticClass:"dropdown"},[t.addJoin&&t.info.hackers.length<=4?s("button",{staticClass:"btn btn-primari btn260",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n                                    "+t._s(t.$t("Join_projetc"))+"\n                                ")]):t._e(),t._v(" "),s("div",{staticClass:"dropdown-menu box-join ",attrs:{"aria-labelledby":"dropdownMenuButton"}},[s("h4",{staticClass:"how-to mb"},[s("strong",[t._v(t._s(t.$t("How_would_you_like_to_join")))])]),t._v(" "),s("form",{attrs:{action:""}},[s("div",{staticClass:"radio"},[s("label",[t._v("Developer"),s("input",{attrs:{type:"radio",name:"optradio"},on:{click:function(a){return a.preventDefault(),t.joindev(a)}}})])]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"radio"},[s("label",[t._v("UX/UI"),s("input",{attrs:{type:"radio",name:"optradio"},on:{click:function(a){return a.preventDefault(),t.joinuxui(a)}}})])]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"radio disabled"},[s("label",[t._v(t._s(t.$t("Entrepreneur"))),s("input",{attrs:{type:"radio",name:"optradio"},on:{click:function(a){return a.preventDefault(),t.joinentrepreneur(a)}}})])])])])])])])])])]),t._v(" "),s("div",{staticClass:"container-lg"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 row"},[s("div",{staticClass:"col-md-4"},[s("div",{attrs:{id:"social"}},[t.info.socials.twitter?s("a",{attrs:{href:t.project.socials.twitter}},[s("i",{staticClass:"social-icons fab fa-twitter"})]):t._e(),t._v(" "),t.info.socials.facebook?s("a",{attrs:{href:t.project.socials.facebook}},[s("i",{staticClass:"social-icons fab fa-facebook"})]):t._e(),t._v(" "),t.info.socials.linkedin?s("a",{attrs:{href:t.project.socials.linkedin}},[s("i",{staticClass:"social-icons fab fa-linkedin-in"})]):t._e(),t._v(" "),t.info.socials.other?s("a",{attrs:{href:t.project.socials.other}},[s("i",{staticClass:"social-icons fab fa-github"})]):t._e()]),t._v(" "),s("a",{attrs:{id:"liks",href:t.info.website}},[s("i",{staticClass:"fas fa-link",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.info.website))]),t._v(" "),t._m(0),t._v(" "),s("a",{staticClass:"btn btn-primari mt mb",attrs:{href:""}},[t._v("Send message")]),t._v(" "),s("hr")]),t._v(" "),s("div",{staticClass:"col-md-8"},[s("h2",{staticClass:"sub mt"},[t._v("Description")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v(t._s(t.info.description))]),t._v(" "),s("h2",{staticClass:"sub mt"},[t._v("Founders")]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"row"},t._l(t.hackers,function(a,e){return s("div",{key:e,staticClass:"col-md-4 text-center mt"},[s("div",{},[s("figure",{staticClass:"full"},[s("img",{staticClass:"round-img",attrs:{src:a.avatar,alt:a.name}})])]),t._v(" "),s("h3",{staticClass:"founder"},[t._v(t._s(a.name))])])})),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("h2",{staticClass:"sub mt"},[t._v("Feedback")]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"feedback"})])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"btn btn-secondari mt",attrs:{href:""}},[this._v("Upvote project "),a("span",{staticClass:"badge"},[this._v("0")])])}]};var d=s("VU/8")(l,u,!1,function(t){s("Zt/S")},"data-v-dcb32d80",null);a.default=d.exports},"Zt/S":function(t,a){}});
//# sourceMappingURL=15.a20dd1ed8197994da094.js.map