(this.webpackJsonpdevfinder=this.webpackJsonpdevfinder||[]).push([[0],{1:function(A,e,t){A.exports={grid:"ResultField_grid__3JpIe","profile-picture":"ResultField_profile-picture__22UVt","profile-info":"ResultField_profile-info__3_97E",username:"ResultField_username__1-AH0","join-date":"ResultField_join-date__35wAZ","profile-bio":"ResultField_profile-bio__1fs6G","profile-card":"ResultField_profile-card__3Wg-9","profile-link":"ResultField_profile-link__2jO9C","flex-column":"ResultField_flex-column__Qyu7t","text-important":"ResultField_text-important__lN4Gc","text-blue":"ResultField_text-blue__1TWmQ","text-green":"ResultField_text-green__sTDvH","text-secondary":"ResultField_text-secondary__2tLJW","flex-evenly":"ResultField_flex-evenly__3WzuH","link-icon":"ResultField_link-icon__3OJjZ","search-user__text":"ResultField_search-user__text__21jPZ","text-red":"ResultField_text-red__3ry9a"}},11:function(A,e,t){A.exports={container:"DevFinder_container__1hkR4","margin-top":"DevFinder_margin-top__JxWvI"}},12:function(A,e,t){A.exports={title:"Title_title__3oPy-",black:"Title_black__2tFd3"}},13:function(A,e,t){A.exports={"theme-button":"ThemeButton_theme-button__3otSl","white-theme":"ThemeButton_white-theme__2-CO7"}},14:function(A,e,t){A.exports={button:"button_button__2U09D","white-theme":"button_white-theme__2F--D"}},15:function(A,e,t){A.exports={"search-input":"TransparentInput_search-input__26UmW",gray:"TransparentInput_gray__2ZGv2"}},16:function(A,e,t){A.exports={card:"Card_card__2jaun","white-background":"Card_white-background__a9Eyb"}},17:function(A,e,t){A.exports={"card-secondary":"CardSecondary_card-secondary__1v375","white-background":"CardSecondary_white-background__1n6ed"}},27:function(A,e,t){A.exports={header:"Header_header__KajLK"}},28:function(A,e,t){A.exports={"input-content":"InputField_input-content__20RUs","white-background":"InputField_white-background__1i5yu"}},34:function(A,e,t){},56:function(A,e,t){"use strict";t.r(e);var c=t(26),n=t.n(c),a=(t(34),t(4)),r=t.n(a),i=t(8),s=t(5),l=t(2),o=t.n(l),h=t(11),g=t.n(h),d=t(27),M=t.n(d),u=t(12),m=t.n(u),Q=t(0),j=function(A){var e=A.title,t=Object(l.useContext)(nA);return Object(Q.jsx)("h1",{className:"".concat(m.a.title," ").concat(t?"":m.a.black),children:e})},B=t(13),x=t.n(B),b=t.p+"static/media/icon-moon.cce754ce.svg",p=t.p+"static/media/icon-sun.f28a8996.svg",k=function(A){var e=A.title,t=A.toggleThemeClick,c=Object(l.useContext)(nA);return Object(Q.jsxs)("button",{className:"".concat(x.a["theme-button"]," ").concat(c?"":"".concat(x.a["white-theme"])),onClick:t,children:[Object(Q.jsx)("p",{children:e}),Object(Q.jsx)("img",{src:c?p:b,alt:"theme icon"})]})},w=function(A){var e=A.toggleThemeClick,t=Object(l.useContext)(nA);return Object(Q.jsxs)("div",{className:M.a.header,children:[Object(Q.jsx)(j,{title:"devfinder"}),Object(Q.jsx)(k,{toggleThemeClick:e,title:t?"LIGHT":"DARK"})]})},C=t(28),I=t.n(C),_=t.p+"static/media/icon-search.0cc0c984.svg",O=t.p+"static/media/icon-search-green.daf90300.png",G=function(){var A=Object(l.useContext)(nA);return Object(Q.jsx)("div",{children:Object(Q.jsx)("img",{style:{width:"24px",height:"24px"},src:A?_:O,alt:"Search Icon"})})},f=t(14),J=t.n(f),v=function(A){var e=A.text,t=A.onHandleClick,c=Object(l.useContext)(nA);return Object(Q.jsx)("button",{className:"".concat(J.a.button," ").concat(c?"":J.a["white-theme"]),onClick:t,children:e})},Y=t(15),E=t.n(Y),T=function(A){var e=A.placeholder,t=A.value,c=A.onHandleChange,n=Object(l.useContext)(nA);return Object(Q.jsx)("div",{className:"".concat(E.a["search-input"]," ").concat(n?"":E.a.gray),children:Object(Q.jsx)("input",{onChange:function(A){c(A.target.value)},type:"text",value:t,placeholder:e})})},N=t(16),F=t.n(N),y=function(A){var e=A.children,t=Object(l.useContext)(nA);return Object(Q.jsx)("div",{className:"".concat(F.a.card," ").concat(t?"":F.a["white-background"]),children:e})},R=function(A){var e=A.onHandleSearchUser,t=Object(l.useState)(""),c=Object(s.a)(t,2),n=c[0],a=c[1];return Object(Q.jsx)(y,{children:Object(Q.jsxs)("div",{className:"".concat(I.a["input-content"]),children:[Object(Q.jsx)(G,{}),Object(Q.jsx)(T,{value:n,onHandleChange:function(A){a(A)},placeholder:"Github username..."}),Object(Q.jsx)(v,{onHandleClick:function(){e(n)},text:"Search"})]})})},D=t(1),U=t.n(D),S=(t.p,t(17)),H=t.n(S),L=function(A){var e=A.children,t=Object(l.useContext)(nA);return Object(Q.jsx)("div",{className:"".concat(H.a["card-secondary"]," ").concat(t?"":H.a["white-background"]),children:e})},P=t.p+"static/media/map-white.fde29cac.png",V=t.p+"static/media/map-gray.83f07aae.png",z=t.p+"static/media/twitter-white.cc4a74fc.png",Z=t.p+"static/media/twitter-gray.21c2b871.png",W=t.p+"static/media/link-white.ad70c34f.png",K=t.p+"static/media/link-gray.1303ad89.png",X=t(10),q=t.n(X),$=function(A){var e=A.split("T")[0];return q()(e,"YYYY.MM.DD").format("MMMM Do YYYY")},AA=function(A){var e=A.user,t=A.noUser,c=Object(l.useContext)(nA),n=function(A,e){return A?Object(Q.jsx)("p",{children:A}):Object(Q.jsx)("p",{className:U.a["text-secondary"],children:e})};return e?Object(Q.jsx)(y,{children:Object(Q.jsxs)("div",{className:U.a.grid,children:[Object(Q.jsx)("div",{className:U.a["profile-picture"],children:Object(Q.jsx)("img",{alt:"profile-image",src:e.avatar_url})}),Object(Q.jsxs)("div",{className:U.a["profile-info"],children:[Object(Q.jsxs)("div",{className:U.a.username,children:[Object(Q.jsx)("p",{className:U.a["text-important"],children:e.name}),Object(Q.jsx)("p",{className:c?U.a["text-blue"]:U.a["text-green"],children:"@".concat(e.login)})]}),Object(Q.jsx)("div",{className:U.a["join-date"],children:Object(Q.jsx)("p",{children:"Joined ".concat($(e.created_at))})})]}),Object(Q.jsx)("div",{className:U.a["profile-bio"],children:n(e.bio,"User has no bio")}),Object(Q.jsx)("div",{className:U.a["profile-card"],children:Object(Q.jsx)(L,{children:Object(Q.jsxs)("div",{className:U.a["flex-evenly"],children:[Object(Q.jsxs)("div",{className:U.a["flex-column"],children:[Object(Q.jsx)("p",{className:U.a["text-secondary"],children:"Repos"}),Object(Q.jsx)("p",{className:U.a["text-important"],children:e.public_repos})]}),Object(Q.jsxs)("div",{className:U.a["flex-column"],children:[Object(Q.jsx)("p",{className:U.a["text-secondary"],children:"Followers"}),Object(Q.jsx)("p",{className:U.a["text-important"],children:e.followers})]}),Object(Q.jsxs)("div",{className:U.a["flex-column"],children:[Object(Q.jsx)("p",{className:U.a["text-secondary"],children:"Following"}),Object(Q.jsx)("p",{className:U.a["text-important"],children:e.following})]})]})})}),Object(Q.jsxs)("div",{className:U.a["profile-link"],children:[Object(Q.jsxs)("div",{className:U.a["link-icon"],children:[Object(Q.jsx)("img",{alt:"location-icon",src:c?P:V}),n(e.location,"Location not available.")]}),Object(Q.jsxs)("div",{className:U.a["link-icon"],children:[Object(Q.jsx)("img",{alt:"link-icon",src:c?W:K}),n(e.blog,"Blog not available.")]}),Object(Q.jsxs)("div",{className:U.a["link-icon"],children:[Object(Q.jsx)("img",{alt:"twitter-icon",src:c?z:Z}),n(e.twitter_username,"Twitter not available.")]}),Object(Q.jsxs)("div",{className:U.a["link-icon"],children:[Object(Q.jsx)("img",{alt:"building-icon",src:c?"data:image/png;base64,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":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAgMAAACJFjxpAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEUAAAB8g5QAAAA755jLAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQflCxcEAygp0i1DAAABg0lEQVR42u3awQ2EIBBAUShi+6EI6b+VPe9GCCKJOr5/IwR9V0ZTOtKnnm479EIAAAAAAAAAAAAAAAAAAIC7A8rImQwAAAAAAAAAAAAAAAAAEBkwEwAAAAAAAAAAAAAAAABALEAZORN6PgAAAAAAAAAAAAAAAAAAMBMAAAAAAAAAAAAAAAAAwMMBC7QAAAAAAAAAAAAAAAAAALcH7J861Pb7qMYSAAAAAAAAAAAAAAAAAOBFgMYuAAAAAAAAAAAAAAAAAMCLAJdfzwEAAAAAAAAAAAAAAAAAzgFKGih3AQ0eAAAAAAAAAAAAAAAAAMBTADPFmg8AAAAAAAAAAAAAAAAAAJQ0UOj5AAAAAAAAAAAAAAAAAADATLHmAwAAAAAAAAAAAAAAAAAACwCNXQAAAAAAAAAAAAAAAACApwBKGqj/8fryX7sBAAAAAAAAAAAAAAAAAJYA8tByH1D3dwEAAAAAAAAAAAAAAAAA7gOo3dYD/gMAAAAAAAAAAAAAAAAAuBzwBYvoLWz+chD0AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTExLTIzVDA0OjAzOjQwKzAwOjAw+wFCdgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0xMS0yM1QwNDowMzo0MCswMDowMIpc+soAAAAASUVORK5CYII="}),n(e.company,"Company not available.")]})]})]})}):Object(Q.jsx)(y,{children:t?Object(Q.jsx)("p",{className:"".concat(U.a["search-user__text"]," ").concat(U.a["text-red"]),children:"Username not found."}):Object(Q.jsx)("p",{className:"".concat(U.a["search-user__text"]),children:"Please search a user."})})},eA=t(29),tA=t.n(eA).a.create({baseURL:"https://api.github.com"}),cA=function(){var A=Object(i.a)(r.a.mark((function A(e){var t;return r.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,tA.get("users/".concat(e));case 3:return t=A.sent,A.abrupt("return",t.data);case 7:return A.prev=7,A.t0=A.catch(0),A.abrupt("return",A.t0.response.data);case 10:case"end":return A.stop()}}),A,null,[[0,7]])})));return function(e){return A.apply(this,arguments)}}(),nA=o.a.createContext(),aA=function(){var A=Object(l.useState)(!0),e=Object(s.a)(A,2),t=e[0],c=e[1],n=Object(l.useState)(),a=Object(s.a)(n,2),o=a[0],h=a[1],d=Object(l.useState)(!1),M=Object(s.a)(d,2),u=M[0],m=M[1],j=function(){var A=Object(i.a)(r.a.mark((function A(e){var t;return r.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,cA(e);case 2:(t=A.sent).message?(h(),m(!0)):h(t);case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}();return Object(l.useEffect)((function(){document.body.style.backgroundColor=t?"#141d2f":"#FEFBF3"}),[t]),Object(Q.jsx)(nA.Provider,{value:t,children:Object(Q.jsxs)("div",{className:"".concat(g.a.container," ").concat(g.a["margin-top"]),children:[Object(Q.jsx)(w,{toggleThemeClick:function(){c((function(A){return!A}))}}),Object(Q.jsx)(R,{onHandleSearchUser:j}),Object(Q.jsx)(AA,{noUser:u,user:o})]})})},rA=function(){return Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsx)(aA,{})})};n.a.render(Object(Q.jsx)(rA,{}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.5c0192af.chunk.js.map