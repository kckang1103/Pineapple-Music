(this["webpackJsonppineapple-music"]=this["webpackJsonppineapple-music"]||[]).push([[0],{108:function(e,t,n){},143:function(e,t,n){},144:function(e,t,n){},152:function(e,t,n){},154:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){},176:function(e,t){},195:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(44),r=n.n(s),i=(n(143),n(48)),o=n(26),l=(n(144),n(2));var u=function(e){e.type;var t=e.placeholder;return Object(l.jsx)("div",{children:Object(l.jsx)("input",{className:"input",placeholder:t&&t,type:"text"})})},j=n(0),d=n.n(j),p=n(5),b=n(251),h=n(15),O=n(76),m=n(28),x=n(83),f=Object(O.a)({apiKey:"AIzaSyB_IknUnLChJp9vG9kip0_Xu1YaqKed2Sk",authDomain:"pineapple-music-1ea51.firebaseapp.com",projectId:"pineapple-music-1ea51",storageBucket:"pineapple-music-1ea51.appspot.com",messagingSenderId:"171412581022",appId:"1:171412581022:web:bd4f9b6de4f7de0c17a98f",measurementId:"G-QZK0B417MX"}),v=Object(m.b)(),g=Object(x.c)(f),w=a.a.createContext();function y(){return Object(c.useContext)(w)}function k(e){var t=e.children,n=Object(c.useState)(),a=Object(h.a)(n,2),s=a[0],r=a[1];function i(){return(i=Object(p.a)(d.a.mark((function e(t,n){var c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(m.a)(v,t,n),e.prev=1,e.next=4,Object(x.a)(Object(x.b)(g,"users"),{uid:"testUID",SpotifyToken:"testToken"});case 4:a=e.sent,console.log("Doc written w/ ID: ",a.id),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error("Error adding doc: ",e.t0);case 11:return e.abrupt("return",c);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}Object(c.useEffect)((function(){return v.onAuthStateChanged((function(e){r(e)}))}),[]);var o={currentUser:s,signup:function(e,t){return i.apply(this,arguments)},login:function(e,t){return Object(m.e)(v,e,t)},logout:function(){return Object(m.f)(v)}};return Object(l.jsx)(w.Provider,{value:o,children:t})}var P=function(){var e=y().logout,t=Object(o.g)();function n(){return(n=Object(p.a)(d.a.mark((function n(){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e();case 3:t.push("/login"),n.next=8;break;case 6:n.prev=6,n.t0=n.catch(0);case 8:case"end":return n.stop()}}),n,null,[[0,6]])})))).apply(this,arguments)}return Object(l.jsx)(b.a,{variant:"link",onClick:function(){return n.apply(this,arguments)},children:"Log out"})};var N=function(){return Object(l.jsxs)("div",{className:"my-account",children:[Object(l.jsxs)("form",{className:"change-password-f",children:[Object(l.jsx)("h1",{children:"Change Password"}),Object(l.jsx)(u,{placeholder:"New Password",type:"password"}),Object(l.jsx)(u,{placeholder:"Confirm Password",type:"password"}),Object(l.jsx)("button",{children:"Submit"})]}),Object(l.jsx)(P,{})]})},S=n.p+"static/media/pineapple-supply-co-KvbCXEllJss-unsplash.dfc7890a.jpg";var C=function(){return Object(l.jsx)("div",{className:"home",children:Object(l.jsx)("h1",{children:"Home"})})};n(152);var U=n(120),I=n.n(U),R=n(122),L=n.n(R),M=n(121),E=n.n(M),D=n(73),A=n.n(D),z=[{title:"Home",icon:Object(l.jsx)(I.a,{}),link:"/Pineapple-Music"},{title:"Search",icon:Object(l.jsx)(A.a,{}),link:"/Pineapple-Music/search"},{title:"Group Session",icon:Object(l.jsx)(E.a,{}),link:"/Pineapple-Music/creategroup"},{title:"My Account",icon:Object(l.jsx)(L.a,{}),link:"/Pineapple-Music/myaccount"},{title:"Profile",icon:Object(l.jsx)(A.a,{}),link:"/Pineapple-Music/profilepicture"},{title:"Song",icon:Object(l.jsx)(A.a,{}),link:"/Pineapple-Music/song"},{title:"Visualizer",icon:Object(l.jsx)(A.a,{}),link:"/Pineapple-Music/visual"}];var F=function(){return Object(l.jsx)("div",{className:"Navbar",children:Object(l.jsx)("ul",{className:"NavbarList",children:z.map((function(e,t){return Object(l.jsxs)("li",{className:"row",id:window.location.pathname==e.link?"active":"",onClick:function(){window.location.pathname=e.link},children:[" ",Object(l.jsxs)("div",{id:"icon",children:[" ",e.icon]})," ",Object(l.jsx)("div",{id:"title",children:e.title})]},t)}))})})},B=n(256),W=n(258),_=n(250),T=n(259),q=n(246),G=n(260),V=n(123),H=n.n(V),K=n(252),Z=n(254),Q=n(255),J=n(257);var X=function(e){var t=e.props,n=t.title,c=t.imageUrl,a=t.username,s=t.createdAt,r=t.sessionId;return Object(l.jsxs)(K.a,{sx:{maxWidth:345},children:[Object(l.jsx)(Z.a,{component:"img",height:"140",image:c,alt:"group session image"}),Object(l.jsxs)(Q.a,{children:[Object(l.jsx)(B.a,{gutterBottom:!0,variant:"h5",component:"div",children:n}),Object(l.jsxs)(B.a,{variant:"body2",color:"text.secondary",children:["Owner: ",a]}),Object(l.jsxs)(B.a,{variant:"body2",color:"text.secondary",children:["Created at: ",s]})]}),Object(l.jsxs)(J.a,{children:[Object(l.jsx)(b.a,{size:"small",children:"Join"}),Object(l.jsxs)(b.a,{size:"small",children:["Session ID: ",r]})]})]})},Y=n(245);var $=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(B.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Create a new session"}),Object(l.jsxs)("form",{noValidate:!0,children:[Object(l.jsx)(Y.a,{required:!0,id:"name",name:"name",type:"name",label:"Name",variant:"filled",fullWidth:!0}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)(b.a,{type:"submit",variant:"contained",color:"primary",onClick:function(e){e.prevnetDefault()},children:"Create"})]})]})},ee={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};var te=function(){var e=Object(c.useState)(!1),t=Object(h.a)(e,2),n=t[0],a=t[1],s={title:"group session1",imageUrl:"https://image.spreadshirtmedia.com/image-server/v1/mp/products/T1459A839MPA3861PT28D1023062364FS1458/views/1,width=378,height=378,appearanceId=839,backgroundColor=F2F2F2/pineapple-listening-to-music-cartoon-sticker.jpg",username:"username1",createdAt:(new Date).toLocaleDateString(),sessionId:1234},r=[s,s,s,s,s];return Object(l.jsxs)("div",{children:[Object(l.jsx)(B.a,{component:"h1",variant:"h2",align:"center",color:"text.primary",gutterBottom:!0,children:"Group Listening"}),Object(l.jsx)(W.a,{maxWidth:"md",children:Object(l.jsxs)(_.a,{container:!0,alignItems:"center",justifyContent:"center",spacing:9,children:[Object(l.jsxs)(_.a,{justifyContent:"center",align:"center",item:!0,xs:12,sm:6,md:4,children:[Object(l.jsx)(T.a,{color:"primary",onClick:function(){return a(!0)},children:Object(l.jsx)(H.a,{sx:{fontSize:80}})}),Object(l.jsx)(q.a,{open:n,onClose:function(){return a(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(l.jsx)(G.a,{sx:ee,children:Object(l.jsx)($,{})})}),Object(l.jsx)("br",{}),"Create a new session"]}),r.map((function(e){return Object(l.jsx)(_.a,{item:!0,xs:12,sm:6,md:4,children:Object(l.jsx)(X,{props:e})},e)}))]})})]})},ne=n(248),ce="b85b37966e894d9cb8eb8d776047f000",ae="https://accounts.spotify.com/authorize",se="http://localhost:3000/Pineapple-Music",re=["user-read-currently-playing","user-read-playback-state"].join("%20"),ie=function(e){return e.substring(1).split("&").reduce((function(e,t){var n=t.split("="),c=Object(h.a)(n,2),a=c[0],s=c[1];return e[a]=s,e}),{})};var oe=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=Object(c.useRef)(),a=y(),s=a.signup,r=(a.currentUser,Object(c.useState)("")),u=Object(h.a)(r,2),j=u[0],O=u[1],m=Object(c.useState)(!1),x=Object(h.a)(m,2),f=x[0],v=x[1],g=Object(o.g)();function w(){return(w=Object(p.a)(d.a.mark((function c(a){return d.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(a.preventDefault(),t.current.value===n.current.value){c.next=3;break}return c.abrupt("return",O("Passwords do not match"));case 3:if(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e.current.value).toLowerCase())){c.next=6;break}return c.abrupt("return",O("Email not valid"));case 6:return c.prev=6,O(""),v(!0),window.location="".concat(ae,"?client_id=").concat(ce,"&redirect_uri=").concat(se,"&scope=").concat(re,"&response_type=token&show_dialog=true"),c.next=12,ie(window.location.hash);case 12:return c.sent,c.next=15,s(e.current.value,t.current.value);case 15:g.push("/"),c.next=21;break;case 18:c.prev=18,c.t0=c.catch(6),O("Failed to create an account");case 21:v(!1);case 22:case"end":return c.stop()}}),c,null,[[6,18]])})))).apply(this,arguments)}return Object(l.jsx)(W.a,{align:"center",justifyContent:"center",className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(l.jsxs)("div",{className:"w-100",style:{maxWidth:"400px"},children:[Object(l.jsx)(K.a,{children:Object(l.jsxs)(Q.a,{children:[Object(l.jsx)("h2",{className:"text-center mt-4",children:"Sign Up"}),j&&Object(l.jsx)(ne.a,{variant:"danger",children:j}),Object(l.jsx)(Y.a,{required:!0,id:"email",name:"email",type:"email",label:"Email",variant:"filled",inputRef:e,fullWidth:!0}),Object(l.jsx)(Y.a,{required:!0,id:"password",name:"password",type:"password",label:"Password",variant:"filled",inputRef:t,fullWidth:!0}),Object(l.jsx)(Y.a,{required:!0,id:"confirmPassword",name:"confirmPassword",type:"password",label:"ConfirmPassword",variant:"filled",inputRef:n,fullWidth:!0}),Object(l.jsx)(b.a,{disabled:f,className:"w-100",type:"submit",onClick:function(e){return w.apply(this,arguments)},children:"Sign Up"})]})}),Object(l.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(l.jsx)(i.b,{to:"/login",children:"Log In"})]})]})})};var le=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=y().login,a=Object(c.useState)(""),s=Object(h.a)(a,2),r=s[0],u=s[1],j=Object(c.useState)(!1),O=Object(h.a)(j,2),m=O[0],x=O[1],f=Object(o.g)();function v(){return(v=Object(p.a)(d.a.mark((function c(a){return d.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a.preventDefault(),c.prev=1,u(""),x(!0),c.next=6,n(e.current.value,t.current.value);case 6:f.push("/"),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(1),u("Failed to log in");case 12:x(!1);case 13:case"end":return c.stop()}}),c,null,[[1,9]])})))).apply(this,arguments)}return Object(l.jsx)(W.a,{align:"center",justifyContent:"center",className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(l.jsxs)("div",{className:"w-100",style:{maxWidth:"400px"},children:[Object(l.jsx)(K.a,{children:Object(l.jsxs)(Q.a,{children:[Object(l.jsx)("h2",{className:"text-center mt-4",children:"Log In"}),r&&Object(l.jsx)(ne.a,{variant:"danger",children:r}),Object(l.jsx)(Y.a,{required:!0,id:"email",name:"email",type:"email",label:"Email",variant:"filled",inputRef:e,fullWidth:!0}),Object(l.jsx)(Y.a,{required:!0,id:"password",name:"password",type:"password",label:"Password",variant:"filled",inputRef:t,fullWidth:!0}),Object(l.jsx)(b.a,{disabled:m,className:"w-100",type:"submit",onClick:function(e){return v.apply(this,arguments)},children:"Log In"})]})}),Object(l.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(l.jsx)(i.b,{to:"/signup",children:"Sign Up"})]}),Object(l.jsxs)("div",{className:"w-100 text-center mt-2",children:["Forgot Password? ",Object(l.jsx)(i.b,{to:"/resetpassword",children:"Reset Password"})]})]})})};var ue=function(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),n=t[0],a=t[1];return Object(l.jsxs)("div",{className:"input-container",children:[Object(l.jsx)("h1",{children:"Reset Password"}),Object(l.jsx)("input",{placeholder:"Email Address",type:"text",onChange:function(e){a(e.target.value)}}),Object(l.jsx)("button",{onClick:function(){var e=Object(m.b)(),t=n;if(console.warn(n),""!=n)try{Object(m.d)(e,t),window.alert("An email has been sent.")}catch(c){window.alert("There was an error.")}else window.alert("Please enter an email.")},children:"Confirmation Email"})]})};n(85),n(127);n(154);var je=function(){return Object(l.jsxs)("div",{className:"Player-Div",children:[Object(l.jsx)("button",{className:"Player",children:"Rewind"}),Object(l.jsx)("button",{className:"Player",children:"Play/Pause"}),Object(l.jsx)("button",{className:"Player",children:"Skip"})]})},de=(n(108),function(){return Object(l.jsxs)("div",{className:"Page",children:[Object(l.jsx)("img",{className:"Visual-Img",src:S,height:200,width:250}),Object(l.jsx)("text",{children:"Song Name Here"}),Object(l.jsx)(je,{})]})}),pe=n(4),be=n(7),he=n(12),Oe=n(13),me=(n(155),Object(O.a)({apiKey:"AIzaSyB_IknUnLChJp9vG9kip0_Xu1YaqKed2Sk",authDomain:"pineapple-music-1ea51.firebaseapp.com",projectId:"pineapple-music-1ea51",storageBucket:"pineapple-music-1ea51.appspot.com",messagingSenderId:"171412581022",appId:"1:171412581022:web:bd4f9b6de4f7de0c17a98f",measurementId:"G-QZK0B417MX"}),Object(m.b)(),null),xe=null,fe=Object(m.b)(),ve=function(e){Object(he.a)(n,e);var t=Object(Oe.a)(n);function n(e){var c;return Object(pe.a)(this,n),(c=t.call(this,e)).state={picture:!1,src:!1},Object(m.c)(fe,(function(e){e?(me=fe.currentUser,null!=(xe=me.photoURL)&&c.setState({src:xe})):console.log("NOT CORRECT")})),c}return Object(be.a)(n,[{key:"handlePictureSelected",value:function(e){var t=e.target.files[0],n=URL.createObjectURL(t);xe=n,Object(m.g)(fe.currentUser,{photoURL:xe}).then((function(){console.log("PROFILE UPDATED"),console.log(me.photoURL)})).catch((function(e){console.log("PROFILE NOT UPDATED")})),this.setState({picture:t,src:n})}},{key:"render",value:function(){return console.log("HELLO@"),console.log(this.state.src),Object(l.jsxs)("div",{className:"profile-header",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("text",{className:"text",children:"Upload Profile Image"}),Object(l.jsx)("input",{type:"file",onChange:this.handlePictureSelected.bind(this)})]}),Object(l.jsx)("div",{className:"image-container",children:Object(l.jsx)("img",{src:this.state.src,className:"App-logo"})})]})}}]),n}(a.a.Component),ge=(n(156),n(157),n(124)),we=n.n(ge),ye=n(125),ke=n.n(ye);function Pe(e){var t=e.track;e.chooseTrack;return Object(l.jsxs)("div",{className:"d-flex m-2 align-items-center",style:{cursor:"pointer"},children:[Object(l.jsx)("img",{src:t.albumUrl,style:{height:"64px",width:"64px"}}),Object(l.jsxs)("div",{className:"ml-3",children:[Object(l.jsx)("div",{children:t.title}),Object(l.jsx)("div",{className:"text-muted",children:t.artist})]})]})}var Ne=new(n(158))({clientId:"477666821b8941c4bd163b4ff55ed9af",clientSecret:"5a9f7c25c73a46ca958cf138c64f1297",redirectUri:"localhost:3000/Pineapple-Music"});var Se=function(e){var t=e.placeholder,n=e.spotifyData;e.authorized,console.log(n);var a=Object(c.useState)([]),s=Object(h.a)(a,2),r=s[0],i=s[1],o=Object(c.useState)(""),u=Object(h.a)(o,2),j=u[0],d=u[1],p=Object(c.useState)([]),b=Object(h.a)(p,2),O=b[0],m=b[1],x="BQBdR3UjvW8zYpbrOLSPd9taFSv8uHdHavHpJZ6StDPg1pSlR0sdFGbsPTm38V1XUMcxnUWtOfqe5Bbmuc5fqf6DUpM4pWUqfe3voZGR3qnAQAKHG35hFV-tPLsSVyj-3iUxsxM3P0cleWUBr9tvMRkzXVWPticEau1mmdi1GG5FG_mFECzYgDx979ZCvYQ6ZFkxNodiekzV_1mx1EeBh2LEibLgeVEjab3L0MxW4UcChb_BzGcdUtANrBO1yWBR9x_QVgZF4KVathktiqzFn802hFj7URPWjcQQ6p4o4ovvflPL2r6x";return Object(c.useEffect)((function(){Ne.setAccessToken(x)}),[x]),Object(c.useEffect)((function(){if(!j)return m([]);Ne.searchTracks(j).then((function(e){m(e.body.tracks.items.map((function(e){var t=e.album.images.reduce((function(e,t){return t.height<e.height?t:e}),e.album.images[0]);return{artist:e.artists[0].name,title:e.name,uri:e.uri,albumUrl:t.url}})))}))}),[j,x]),Object(l.jsxs)("div",{className:"search",children:[Object(l.jsxs)("div",{className:"searchInputs",children:[Object(l.jsx)("input",{type:"text",placeholder:t,value:j,onChange:function(e){var t=e.target.value;d(t)}}),Object(l.jsx)("div",{className:"searchIcon",children:0===r.length?Object(l.jsx)(we.a,{}):Object(l.jsx)(ke.a,{id:"clearBtn",onClick:function(){i([]),d("")}})})]}),0!=O.length&&Object(l.jsx)("div",{className:"dataResult",children:O.slice(0,10).map((function(e){return Object(l.jsx)(Pe,{track:e},e.uri)}))})]})},Ce=["user-read-currently-playing","user-read-playback-state"].join("%20"),Ue=function(){window.location="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("477666821b8941c4bd163b4ff55ed9af","&redirect_uri=").concat("http://localhost:3000/Pineapple-Music","&scope=").concat(Ce,"&response_type=token&show_dialog=true")};var Ie=function(){var e=Object(c.useState)(!0),t=Object(h.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)({}),r=Object(h.a)(s,2),i=r[0],o=r[1];return Object(c.useEffect)((function(){var e;window.location.hash&&(o((e=window.location.hash,e.substring(1).split("&").reduce((function(e,t){var n=t.split("="),c=Object(h.a)(n,2),a=c[0],s=c[1];return e[a]=s,e}),{})).access_token),console.log(i),a(!1))}),[n]),Object(l.jsxs)("div",{className:"SearchPage",children:[Object(l.jsx)(Se,{placeholder:"Enter a song name...",spotifyData:i,authorized:n}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)(b.a,{variant:"outlined",color:"primary",onClick:Ue,children:"Login to Spotify"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{})]})};var Re=function(){return Object(l.jsx)("div",{className:"Page",children:"This is visualizer page"})};var Le=function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)(k,{children:[Object(l.jsxs)(o.d,{children:[Object(l.jsx)(o.b,{path:"/signup",component:oe}),Object(l.jsx)(o.b,{path:"/login",component:le}),Object(l.jsx)(o.b,{path:"/visual",component:Re}),Object(l.jsx)(o.b,{path:"/resetpassword",component:ue})]}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(F,{}),Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)(o.d,{children:[Object(l.jsx)(o.b,{exact:!0,path:"/Pineapple-Music",component:C}),Object(l.jsx)(o.b,{path:"/Pineapple-Music/search",component:Ie}),Object(l.jsx)(o.b,{path:"/Pineapple-Music/creategroup",component:te}),Object(l.jsx)(o.b,{path:"/Pineapple-Music/myaccount",component:N}),Object(l.jsx)(o.b,{path:"/Pineapple-Music/profilepicture",component:ve}),Object(l.jsx)(o.b,{path:"/Pineapple-Music/song",component:de})]})})]})]})})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(Le,{})}),document.getElementById("root"))}},[[195,1,2]]]);
//# sourceMappingURL=main.cb96ee5e.chunk.js.map