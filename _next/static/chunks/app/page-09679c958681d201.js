(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7434:function(e,t,a){Promise.resolve().then(a.bind(a,6428))},6428:function(e,t,a){"use strict";a.d(t,{default:function(){return s}});var n=a(7437),o=a(2265),i=a(6648);let l=[{className:"MainTitle",text:"Lorem ipsum",type:"textComponent"},{altText:"Treehouse image",imageClassName:"TreehouseImage",imageUrl:"/Treehouse.png",scrollingEffect:e=>({top:"".concat(-(.3*e),"px")}),type:"imageComponent"},{className:"TextBox",style:{top:"100vh"},text:"consectetur adipiscing elit, sed do eiusmod tempor ♡",type:"textComponent"},{altText:"Hot air balloon image (Pexels, Don Hainzl)",imageClassName:"HotAirBalloonImage",imageUrl:"/HotAirBalloon.png",scrollingEffect:e=>({top:"".concat(-(.2*e)+100,"vh"),left:"".concat(.1*e,"%")}),type:"imageComponent"},{hasClockImage:!0,imageClassName:"ClockImage",imageUrl:"/Clock.png",style:{top:"175vh"},text:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",type:"imageAndTextComponent"},{className:"TextBox",style:{top:"250vh"},text:"Duis aute irure dolor in reprehenderit?",type:"textComponent"},{altText:"Treebranch image",imageClassName:"TreeBranchImage",imageUrl:"/TreeBranch.png",scrollingEffect:e=>({top:"".concat(-(.05*e)+100,"vh")}),type:"imageComponent"},{style:{top:"280vh"},textOne:"Voluptate velit esse cillum dolore.",textOneHeader:"Duis aute",textThree:"Sunt in culpa qui officia deserunt.",textThreeHeader:"Reprehenderit",textTwo:"Fugiat nulla pariatur.",textTwoHeader:"Irure dolor",type:"threeChildSplitComponent"},{altText:"Selective Focus Photography of Yellow Car Toy (Pexels, hosein ashrafosadat)",hasCarImage:!0,imageClassName:"CarImage",imageUrl:"/Car.png",style:{top:"340vh"},text:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",type:"imageAndTextComponent"},{className:"TextBox",style:{top:"410vh"},text:"culpa qui officia...",type:"textComponent"},{altText:"Grass image",imageClassName:"GrassImage",imageUrl:"/Grass.png",type:"imageComponent"},{altText:"Social icon image",imageOneLink:"kristopherpepperuk@gmail.com",imageOneURL:"/Envelope.png",imageThreeLink:"https://www.linkedin.com/in/kristopher-pepper-824184136/",imageThreeURL:"/LinkedIn.png",imageTwoLink:"https://github.com/KrisHHFI",imageTwoURL:"/GitHub.png",type:"footerIcons"}];var s=()=>{let[e,t]=(0,o.useState)(0),a="/NextJS-Tailwind-CSS-Site";return(0,o.useEffect)(()=>{let e=()=>{t(window.scrollY)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,n.jsx)("main",{children:l.map((t,o)=>{switch(t.type){case"textComponent":return(0,n.jsx)("div",{className:t.className,style:t.style,children:t.text},o);case"imageAndTextComponent":return(0,n.jsxs)("div",{className:"ImageAndTextBox",style:t.style,children:[(0,n.jsx)("div",{className:"ImageAndTextBoxImageContainer",children:(0,n.jsx)(i.default,{src:"".concat(a).concat(t.imageUrl),alt:t.altText||"Image",className:"".concat(t.imageClassName," ").concat(t.hasClockImage?"shake-animation":""," ").concat(t.hasCarImage?"revving-animation":""),width:500,height:500})}),(0,n.jsx)("div",{className:"ImageAndTextBoxChild",children:t.text})]},o);case"threeChildSplitComponent":return(0,n.jsxs)("div",{className:"threeChildSplitComponent",style:t.style,children:[(0,n.jsxs)("div",{className:"threeChildSplitComponentChild",children:[(0,n.jsx)("div",{className:"threeChildSplitComponentHeader",children:t.textOneHeader}),t.textOne]}),(0,n.jsxs)("div",{className:"threeChildSplitComponentChild",children:[(0,n.jsx)("div",{className:"threeChildSplitComponentHeader",children:t.textTwoHeader}),t.textTwo]}),(0,n.jsxs)("div",{className:"threeChildSplitComponentChild",children:[(0,n.jsx)("div",{className:"threeChildSplitComponentHeader",children:t.textThreeHeader}),t.textThree]})]},o);case"imageComponent":let l=t.scrollingEffect?t.scrollingEffect(e):{};return(0,n.jsx)(i.default,{src:"".concat(a).concat(t.imageUrl),alt:t.altText||"Image",className:t.imageClassName,style:l,width:500,height:500},o);case"footerIcons":return(0,n.jsxs)("div",{className:"footerIcons",style:t.style,children:[(0,n.jsx)("a",{className:"footerIconLink",href:"mailto:".concat(t.imageOneLink),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(i.default,{src:"".concat(a).concat(t.imageOneURL),alt:t.altText||"Image",className:"footerIcon",width:500,height:500},o)}),(0,n.jsx)("a",{className:"footerIconLink",href:"".concat(a).concat(t.imageTwoLink),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(i.default,{src:"".concat(a).concat(t.imageTwoURL),alt:t.altText||"Image",className:"footerIcon",width:500,height:500},o)}),(0,n.jsx)("a",{className:"footerIconLink",href:"".concat(a).concat(t.imageThreeLink),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(i.default,{src:"".concat(a).concat(t.imageThreeURL),alt:t.altText||"Image",className:"footerIcon",width:500,height:500},o)})]},o);default:return null}})})}}},function(e){e.O(0,[648,971,23,744],function(){return e(e.s=7434)}),_N_E=e.O()}]);