webpackJsonp([8],{"EV+b":function(t,s,a){t.exports=a.p+"static/img/trophy.7e43c91.png"},T6gt:function(t,s){},V7n4:function(t,s){},q4lR:function(t,s,a){"use strict";var e=a("Xxa5"),i=a.n(e),n=a("exGp"),r=a.n(n),c=a("mtWM"),l=a.n(c),o={name:"banner",props:["val","type","event","save","hackid","load","edit"],data:function(){return{joins:[],addJoin:null,creator:null,files:null,idhack:"",img:""}},created:function(){this.loaded()},methods:{loaded:function(){var t=this;return r()(i.a.mark(function s(){var a,e;return i.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,l()("/auth/hackathon/url/"+t.$route.params.id,{method:"GET"});case 2:a=s.sent,e=a.data,t.idhack=e.data._id,t.joins=e.data.hakers,t.img=e.data.banner,t.user=JSON.parse(window.localStorage.getItem("user")),t.creator=t.creatorVerify(e.data.userId),t.addJoin=!0,t.verifyJoin();case 11:case"end":return s.stop()}},s,t)}))()},uploadBanner:function(){var t=this,s=document.querySelector("#fileBanner");s.click(),s.addEventListener("change",function(){t.files=this.files[0],t.updateImageBannerhackathon()})},updateImageBannerhackathon:function(){var t=this;return r()(i.a.mark(function s(){var a,e;return i.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return(a=new FormData).append("photo",t.files),s.next=4,l()("/auth/hackathon/update/banner/"+t.idhack,{method:"PUT",data:a});case 4:e=s.sent,e.data.success&&t.loaded();case 7:case"end":return s.stop()}},s,t)}))()},creatorVerify:function(t){return JSON.parse(window.localStorage.getItem("user"))._id===t},join:function(){var t=this;return r()(i.a.mark(function s(){var a,e;return i.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return(a=new FormData).append("userId",t.user._id),s.next=4,l()("/auth/hackathon/join/"+t.idhack,{method:"POST",data:a});case 4:e=s.sent,e.data.success&&(t.addJoin=!1);case 7:case"end":return s.stop()}},s,t)}))()},verifyJoin:function(){var t=this;this.joins.map(function(s){s===t.user._id&&(t.addJoin=!1)})}}},u={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"section"},[a("div",{staticClass:"banner",style:{backgroundImage:"url("+t.img+")"}},[t.edit?a("div",{staticClass:"changeImage",on:{click:function(s){t.uploadBanner()}}},[a("i",{staticClass:"fas fa-camera"})]):t._e(),t._v(" "),a("input",{attrs:{type:"file",name:"file",id:"fileBanner"}}),t._v(" "),a("div",{staticClass:"container-lg"},[a("div",{staticClass:"btn-holder"},[t.creator&&1==t.edit&&"organizer"===t.user.role?a("a",{staticClass:"btn btn-lg btn-green",on:{click:function(s){return s.preventDefault(),t.event(s)}}},[t._v(t._s(t.$t("publish")))]):t._e(),t._v(" "),0==t.creator&&t.addJoin?a("a",{staticClass:"btn btn-lg btn-blue",on:{click:function(s){return s.preventDefault(),t.join(s)}}},[t._v(t._s(t.$t("join")))]):t._e(),t._v(" "),!1===t.addJoin&&"hacker"===t.user.role?a("a",{staticClass:"btn btn-xs btn-black"},[t._v(t._s(t.$t("create_project")))]):t._e()])])]),t._v(" "),t.creator?a("div",{staticClass:"options"},[a("div",{staticClass:"container-lg"},[a("ul",[t.edit?a("li",[a("a",{attrs:{href:""},on:{click:function(s){return s.preventDefault(),t.save(s)}}},[t._v(t._s(t.$t("Save_Changes")))])]):a("li",[a("router-link",{attrs:{to:"/edit/"+this.$route.params.id}},[t._v(t._s(t.$t("Edit")))])],1)])])]):t._e(),t._v(" "),a("div",{staticClass:"space"})])},staticRenderFns:[]};var d=a("VU/8")(o,u,!1,function(t){a("T6gt")},"data-v-0234d5f0",null);s.a=d.exports},vkyI:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("Xxa5"),i=a.n(e),n=a("exGp"),r=a.n(n),c=a("mtWM"),l=a.n(c),o={middleware:"auth",components:{Banner:a("q4lR").a},metaInfo:function(){return{title:this.$t("home")}},data:function(){return{markers:[],latitud:null,longitud:null,hack:{info:{},user:{},tags:{}},hackers:[],projects:[]}},created:function(){this.load()},methods:{load:function(){var t=r()(i.a.mark(function t(){var s,a,e;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l()("/auth/hackathon/url/"+this.$route.params.id,{method:"GET"});case 2:return s=t.sent,a=s.data,this.hack.info=a.data,this.hack.tags=this.hack.info.type[0].split(","),t.next=8,l()("/auth/user/"+this.hack.info.userId,{method:"GET"});case 8:e=t.sent,this.hack.user=e.data,this.latitud=a.data.coordinates[0].latitude,this.longitud=a.data.coordinates[0].longitude,this.markers.push({position:{lat:a.data.coordinates[0].latitude,lng:a.data.coordinates[0].longitude}}),this.chargerHackers();case 14:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),publish:function(){var t=r()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l()("/auth/hackathon/publish/"+this.hack.info._id,{method:"put"});case 2:t.sent,this.$router.push({name:"welcome"});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),chargerHackers:function(){var t=r()(i.a.mark(function t(){var s=this;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.hack.info.hackers.map(function(t){l()("/auth/user/"+t).then(function(t){return s.hackers.push(t.data)})});case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),chargerProjects:function(){var t=r()(i.a.mark(function t(){var s=this;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.hack.info.hackers.map(function(t){l()("/auth/user/"+t).then(function(t){return s.hackers.push(t.data)})});case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},u={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("main",[a("Banner",{attrs:{val:"Publish",type:"success",event:t.publish,edit:!1}}),t._v(" "),a("section",{staticClass:"seccion"},[a("div",{staticClass:"container-lg"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3",attrs:{id:"aside"}},[a("div",{staticClass:"user_img mb-15"},[a("figure",{staticClass:"full"},[a("img",{attrs:{src:t.hack.info.photoPerfil,alt:""}})])]),t._v(" "),a("div",{staticClass:"user_info"},[a("h2",{staticClass:"subtitle mb-15"},[t._v(t._s(t.$t("Organizers")))]),t._v(" "),a("p",{staticClass:"asidep"},[t._v(t._s(this.hack.user.name))]),t._v(" "),a("a",{staticClass:"btn btn-sm btn-red mt-15 btn-organizer",attrs:{href:""}},[t._v(t._s(t.$t("Contact_Organizers")))])]),t._v(" "),0!=t.hackers.length?a("div",{staticClass:"hack-section mt-60"},[a("h2",{staticClass:"subtitle mb-15 subtitle-add"},[t._v(t._s(t.$t("Hackers"))+" "),a("span",[t._v(t._s(t.$t("See_all")))])]),t._v(" "),a("div",{staticClass:"row total"},t._l(t.hackers,function(t,s){return a("div",{key:s,staticClass:"col-md-4"},[a("figure",{staticClass:"full rounded"},[a("img",{attrs:{src:t.avatar,alt:t.name}})])])}))]):t._e(),t._v(" "),0!=t.projects.length?a("div",{staticClass:"hack-section mt-60"},[a("h2",{staticClass:"subtitle mb-15 subtitle-add"},[t._v(t._s(t.$t("Projects"))+" "),a("span",[t._v(t._s(t.$t("See_all")))])]),t._v(" "),a("div",{staticClass:"row total"},t._l(t.projects,function(t,s){return a("div",{key:s,staticClass:"col-md-4"},[a("figure",{staticClass:"full rounded"},[a("img",{attrs:{src:t.avatar,alt:t.name}})])])}))]):t._e()]),t._v(" "),a("div",{staticClass:"col-md-9",attrs:{id:"content"}},[a("h2",{staticClass:"title-2 mb-15"},[t._v(t._s(t.hack.info.title))]),t._v(" "),a("ul",{staticClass:"event-data"},[a("li",[a("span",{staticClass:"fa fa-clock"}),t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.hack.info.date)+"\n\t\t\t\t\t\t\t\t")]),t._v(" "),a("li",[a("span",{staticClass:"fa fa-map-marker-alt"}),t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.hack.info.address)+"\n\t\t\t\t\t\t\t\t")]),t._v(" "),a("li",[a("span",{staticClass:"fa fa-globe"}),t._v(" "),a("a",{attrs:{href:t.hack.info.linkreserv,target:"_blank"}},[t._v(t._s(t.hack.info.linkreserv))])])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"event-desc mt-30"},[a("h2",{staticClass:"subtitle mb-15"},[t._v(t._s(t.$t("Overvies")))]),t._v(" "),a("p",{staticClass:"pbody"},[t._v(t._s(t.hack.info.overvies))])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"event-desc mt-30"},[a("h2",{staticClass:"subtitle mb-15 subtitle-add"},[t._v(t._s(t.$t("Schedule")))]),t._v(" "),a("div",{staticClass:"row"},t._l(t.hack.info.shedule,function(s,e){return a("div",{key:e,staticClass:"col-md-4"},[a("br"),t._v(" "),a("h2",[t._v(t._s(s.title))]),t._v(" "),0==!t.hack.info.shedule.length?a("hr"):t._e(),t._v(" "),a("ul",t._l(s.hours,function(s,e){return a("li",{key:e},[t._v(t._s(s.hour)+" - "+t._s(s.description))])}))])}))]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"prizes mt-30 minH"},[a("h2",{staticClass:"subtitle mb-15 subtitle-add"},[t._v(t._s(t.$t("Prizes")))]),t._v(" "),a("div",{staticClass:"prizes row"},t._l(t.hack.info.prizes,function(s,e){return a("div",{key:e,staticClass:"col-md-4 prize-item"},[a("div",{staticClass:"cont"},[t._m(0,!0),t._v(" "),a("h3",[t._v(t._s(s.title))]),t._v(" "),a("p",{staticClass:"price"},[t._v(t._s(s.description))])])])}))]),t._v(" "),a("div",{staticClass:"hack-section mt-60"},[a("h2",{staticClass:"subtitle mb-15 subtitle-add"},[t._v(t._s(t.$t("Sponsors"))+" "+t._s(t.$t("Primarys")))]),t._v(" "),t._l(t.hack.info.sponsors,function(s,e){return a("figure",{key:e,staticClass:"full mt-15 col-md-4"},[a("img",{staticClass:"sponImg",attrs:{src:s.img,alt:s.title,title:s.title}}),a("h2",{staticClass:"text-center"},[a("b",[t._v(t._s(s.title))])])])})],2),t._v(" "),a("div",{staticClass:"hack-section mt-60"},[a("h2",{staticClass:"subtitle mb-15 subtitle-add"},[t._v(t._s(t.$t("Sponsors"))+" "+t._s(t.$t("Secondarys")))]),t._v(" "),t._l(t.hack.info.sponsors,function(s,e){return a("figure",{key:e,staticClass:"full mt-15 col-md-4"},[a("img",{staticClass:"sponImg",attrs:{src:s.img,alt:s.title,title:s.title}}),a("h2",{staticClass:"text-center"},[a("b",[t._v(t._s(s.title))])])])})],2),t._v(" "),a("div",{staticClass:"hack-section mt-60"},[a("h2",{staticClass:"subtitle mb-15 subtitle-add"},[t._v(t._s(t.$t("Others"))+" "+t._s(t.$t("Sponsors")))]),t._v(" "),t._l(t.hack.info.sponsors,function(s,e){return a("figure",{key:e,staticClass:"full mt-15 col-md-4"},[a("img",{staticClass:"sponImg",attrs:{src:s.img,alt:s.title,title:s.title}}),a("h2",{staticClass:"text-center"},[a("b",[t._v(t._s(s.title))])])])})],2),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"mt-30 minH",attrs:{id:"challenges"}},[a("h2",{staticClass:"subtitle mb-15 subtitle-add"},[t._v(t._s(t.$t("Challenges")))]),t._v(" "),a("br"),t._v(" "),a("ul",{staticClass:"challenges "},t._l(t.hack.info.challenge,function(s,e){return a("li",{key:e,staticClass:"challenge-item"},[a("h4",[a("i",{staticClass:"fas fa-circle"}),t._v(" "),a("b",[t._v(t._s(s.title))])]),t._v(" "),a("p",{staticClass:"pbody"},[t._v(t._s(s.description))])])}))]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"mt-30 judges minH"},[a("h2",{staticClass:"subtitle mb-15 subtitle-add"},[t._v(t._s(t.$t("Judges")))]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"row total"},t._l(t.hack.info.judges,function(s,e){return a("div",{key:e,staticClass:"col-md-4 judge-item"},[a("div",{staticClass:"cont"},[a("figure",{staticClass:"full mb-15"},[a("img",{attrs:{src:s.img,alt:"Usuario"}})]),t._v(" "),a("h3",[t._v(t._s(s.title))]),t._v(" "),a("p",{staticClass:"profesion"},[t._v(t._s(s.desc))])])])}))]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"judging-criteria mt-30 minH"},[a("h2",{staticClass:"subtitle mb-15 subtitle-add"},[t._v(t._s(t.$t("Judging_Criteria")))]),t._v(" "),a("br"),t._v(" "),a("ol",{staticClass:"criterial"},t._l(t.hack.info.critrials,function(s,e){return a("li",{key:e},[a("i",{staticClass:"fas fa-circle"}),t._v(" "+t._s(s.text))])}))]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"mt-30",attrs:{id:"tags"}},[a("h2",{staticClass:"subtitle mb-15 subtitle-add"},[t._v(t._s(t.$t("Tags")))]),t._v(" "),a("br"),t._v(" "),a("ul",{staticClass:"tags"},t._l(t.hack.tags,function(s,e){return a("li",{key:e,staticClass:"tags-links"},[t._v(t._s(s))])}))]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"map mt-30"},[a("h2",{staticClass:"subtitle mb-15 subtitle-add"},[t._v(t._s(t.$t("Maps")))]),t._v(" "),a("br"),t._v(" "),a("GmapMap",{staticStyle:{width:"100%",height:"300px"},attrs:{center:{lat:Number(t.latitud),lng:Number(t.longitud)},zoom:15,"map-type-id":"terrain"}},t._l(t.markers,function(s,e){return a("GmapMarker",{key:e,attrs:{position:s.position,clickable:!0,draggable:!0},on:{click:function(a){t.center=s.position}}})}))],1)])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("figure",{staticClass:"full mb-15"},[s("img",{attrs:{src:a("EV+b"),alt:"trophy"}})])}]};var d=a("VU/8")(o,u,!1,function(t){a("V7n4")},null,null);s.default=d.exports}});
//# sourceMappingURL=8.1e06bc1c727296ac9b25.js.map