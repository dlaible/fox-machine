import{R as e,B as t,H as a,a as l,S as r,C as o,T as c,b as n,c as s,d as i,e as f,f as m,g as p,h as d,i as h,m as u,j as E,I as x,k as y,l as g,n as b,o as z,p as M,q as v}from"./vendor.15914c7d.js";const w=t=>e.createElement(s,null,e.createElement(d,null,t.colorKey.name),e.createElement(d,null,t.colorKey.keyStr),e.createElement(d,{isNumeric:!0},t.colorKey.keyVal),e.createElement(d,{isNumeric:!0},e.createElement(p,{pr:"1",borderRightWidth:"3px",borderRightStyle:"solid",borderRightColor:t.colorKey.color},t.colorKey.color))),k=d=>{if(!d.show||!d.inputText)return null;const h=d.colorKeys.map((t=>e.createElement(w,{key:t.name,colorKey:t})));return e.createElement(t,{borderWidth:"3px",borderRadius:"lg",p:"4",borderColor:"whiteAlpha.50",mt:"3"},e.createElement(a,null,e.createElement(l,{size:"md",color:"gray.200"},"Debug data"),e.createElement(r,null),e.createElement(o,null,d.inputText)),e.createElement(c,{size:"sm",mt:"2"},e.createElement(n,null,e.createElement(s,null,e.createElement(i,null,"Name"),e.createElement(i,null,"Substring"),e.createElement(i,{isNumeric:!0},"Value"),e.createElement(i,{isNumeric:!0},"Color"))),e.createElement(f,null,h)),e.createElement(l,{mt:"4",size:"sm",color:"gray.200"},"Description"),e.createElement(m,{spacing:"2"},e.createElement(p,null,"This algorithm works by 1) converting the input string to a MD5 hash, 2) converting substrings of the hex MD5 hash to decimal values, and 3) choosing colors based on those decimal values. No random values are used, so a given string will always map to the same fox (akin to how Gravatar generates avatars). Multiple palettes of complimenting colors are used to ensure that foxes always look sharp (as opposed to random color generation that would include many ugly yellows 🤢)."),e.createElement(p,null,"There are ",e.createElement("b",null,"far")," fewer combinations of colors here than possible MD5 hashes, so there will be duplicates. That means don't go actually turning all your secret confidential information into cute foxes expecting the functionality typical of hashing. It's left as an exercise for the reader to go out and find one of these collisions 😉.")))},S=[["264653","2a9d8f","e9c46a","f4a261","e76f51"],["f72585","b5179e","7209b7","560bad","480ca8","3a0ca3","3f37c9","4361ee","4895ef","4cc9f0"],["03071e","370617","6a040f","9d0208","d00000","dc2f02","e85d04","f48c06","faa307","ffba08"],["d9ed92","b5e48c","99d98c","76c893","52b69a","34a0a4","168aad","1a759f","1e6091","184e77"],["f94144","f3722c","f8961e","f9844a","f9c74f","90be6d","43aa8b","4d908e","577590","277da1"],["590d22","800f2f","a4133c","c9184a","ff4d6d","ff758f","ff8fa3","ffb3c1","ffccd5","fff0f3"],["012a4a","013a63","01497c","014f86","2a6f97","2c7da0","468faf","61a5c2","89c2d9","a9d6e5"],["7400b8","6930c3","5e60ce","5390d9","4ea8de","48bfe3","56cfe1","64dfdf","72efdd","80ffdb"],["001219","005f73","0a9396","94d2bd","e9d8a6","ee9b00","ca6702","bb3e03","ae2012","9b2226"],["d8f3dc","b7e4c7","95d5b2","74c69d","52b788","40916c","2d6a4f","1b4332","081c15"]],K=(e,t,a,l)=>{const r={name:(o={name:e}).name||"",keyStr:o.keyStr||"",keyVal:o.keyVal||0,color:o.color||"#000000"};var o;return r.keyStr=l.substring(t,a+1),r.keyVal=C(r.keyStr),r},T=(e,t,a)=>{const l=S[e%S.length],r=t.map((e=>e.keyVal)),o=V(r,l);t.forEach(((e,t)=>{e.color=`#${o[t]}`,a.push(e)}))},C=e=>[...e].reduce(((e,t)=>e+parseInt(t,16)),0),V=(e,t)=>{if(e.length<=0||e.length>t.length)return[];const a=[...t];return e.map((e=>{const t=e%a.length,l=a[t];return a.splice(t,1),l}))},R=(e,t,a)=>{const l=t.find((t=>t.name===e));return l?l.color:a},I=e=>{const t=R("foxFace",e.colorKeys,"#eb874b"),a=R("foxEars",e.colorKeys,"#d26437"),l=R("foxEarsInside",e.colorKeys,"#b44632"),r=R("foxEarsInside",e.colorKeys,"#ebc9a0"),o=R("scoopTop",e.colorKeys,"#fdeaaf"),c=R("scoopLeft",e.colorKeys,"#b78358"),n=R("scoopRight",e.colorKeys,"#ee81a7"),s=R("bowlStripe1",e.colorKeys,"#80b9f9"),i=R("strawStripe1",e.colorKeys,"#f0b4a3");return h.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 639.21 533.12"},h.exports.createElement("path",{d:"M439.89 1.12a16.55 16.55 0 0122.55 16c-4.17 95.8-37.15 178.39-37.15 178.39l-124.56-87.4C350.39 48.34 410.51 12.34 439.89 1.12z",fill:a}),h.exports.createElement("path",{d:"M342.25 137.27c32.37-52.72 81.19-103 96.65-112 6.26-3.64 11.77 5.27 10.36 17-7.46 62.48-21 118.6-29.34 149.52z",fill:l}),h.exports.createElement("path",{d:"M72.11 1.12a16.55 16.55 0 00-22.55 16c4.17 95.8 37.15 178.39 37.15 178.39l124.56-87.4C161.61 48.34 101.51 12.34 72.11 1.12z",fill:a}),h.exports.createElement("path",{d:"M169.75 137.27c-32.37-52.72-81.19-103-96.65-112-6.27-3.64-11.77 5.27-10.36 17 7.46 62.48 21 118.6 29.34 149.52z",fill:l}),h.exports.createElement("ellipse",{cx:256,cy:472.87,rx:49.55,ry:33.03,fill:r}),h.exports.createElement("path",{d:"M198.19 464.61c-57.8-33-153.57-69-153.57-69l9.19-27.57c-3.87-1.84-30.41-2.19-53.81 5.73l24.77-41.29h173.42zM313.81 464.61c57.8-33 153.57-69 153.57-69l-9.19-27.57c3.87-1.84 30.41-2.19 53.81 5.73l-24.78-41.29H313.81z",fill:r}),h.exports.createElement("path",{d:"M256 92.99C376.26 87.66 479.72 213.6 511.63 371.9c.12.62.25 1.25.37 1.87 0 0-60.9-63-127-29.42-24.5 12.44-36.13 39.77-36.13 69.64 0 49.53-39.7 76.93-86.73 57.89a16.37 16.37 0 00-12.34 0c-47 19-86.73-8.36-86.73-57.89 0-29.87-11.64-57.2-36.13-69.64-66.07-33.55-127 29.42-127 29.42.12-.62.25-1.25.37-1.87C51.51 195.34 135.51 98.34 256 92.99z",fill:t}),h.exports.createElement("path",{d:"M169.29 324.22a29 29 0 01-28.9-28.9V278.8a29 29 0 0128.9-28.9 29 29 0 0128.9 28.9v16.54a29 29 0 01-28.9 28.88z",fill:"#4b3f4e"}),h.exports.createElement("path",{d:"M169.29 249.9a28.19 28.19 0 00-4.13.42v40.87a16.52 16.52 0 0033 0V278.8a29 29 0 00-28.87-28.9z",fill:"#5d5360"}),h.exports.createElement("circle",{cx:169.29,cy:270.55,r:12.39,fill:"#fff"}),h.exports.createElement("path",{d:"M342.71 324.22a29 29 0 01-28.9-28.88V278.8a29 29 0 0128.9-28.9 29 29 0 0128.9 28.9v16.54a29 29 0 01-28.9 28.88z",fill:"#4b3f4e"}),h.exports.createElement("path",{d:"M342.71 249.9a28.19 28.19 0 00-4.13.42v40.87a16.52 16.52 0 0033 0V278.8a29 29 0 00-28.87-28.9z",fill:"#5d5360"}),h.exports.createElement("circle",{cx:342.71,cy:270.55,r:12.39,fill:"#fff"}),h.exports.createElement("path",{d:"M247.74 472.65c.72-.27 1.43-.55 2.15-.84a16.54 16.54 0 0112.22 0c.72.29 1.43.57 2.15.84v-32.82h-16.52v32.82z",fill:a}),h.exports.createElement("path",{d:"M255.51 390.28c18.51 0 33.51 12.27 33.51 27.39 0 14.59-14.08 22.27-24.24 27.95a18.63 18.63 0 01-18.53 0c-10.16-5.68-24.25-13.36-24.25-27.95.01-15.12 15.02-27.39 33.51-27.39z",fill:"#5d5360"}),h.exports.createElement("path",{d:"M263.73 444.91c-10.16-7.3-24.22-17.17-24.22-35.93a36.26 36.26 0 014.27-16.87c-12.68 3.91-21.74 13.83-21.74 25.56 0 14.59 14.09 22.27 24.25 27.95a18.61 18.61 0 0018.52 0l.15-.08c-.45-.2-.84-.35-1.23-.63z",fill:"#4b3f4e"}),h.exports.createElement("path",{d:"M256 92.99l-7.25.15-8.87.58c-112.83 8.81-209 127-239.51 278.18-.12.62-.25 1.24-.37 1.87 0 0 49.15-50.77 107-36.79 7.27-205.64 135.56-243.99 149-243.99z",fill:a}),h.exports.createElement("path",{d:"M494.19 361.84l-76.6-132.68a7.62 7.62 0 00-10.42-2.82l-15.32 8.84a7.62 7.62 0 00-2.8 10.42l76.61 132.74a7.62 7.62 0 006.62 3.81 7.51 7.51 0 003.8-1l15.32-8.84a7.64 7.64 0 002.79-10.47z",fill:i}),h.exports.createElement("g",{opacity:.15},h.exports.createElement("path",{d:"M401.81 267.72l5.28 9.15 19.02-32.95-5.28-9.15-19.02 32.95zM440.24 268.39l-5.29-9.15-19.02 32.94 5.28 9.15 19.03-32.94zM454.36 292.85l-5.28-9.15-19.02 32.95 5.28 9.15 19.02-32.95zM468.48 317.32l-5.28-9.15-19.02 32.94 5.28 9.15 19.02-32.94zM482.61 341.78l-5.28-9.15-19.03 32.95 5.29 9.15 19.02-32.95z"})),h.exports.createElement("circle",{cx:515.91,cy:305.99,r:62.1,fill:o}),h.exports.createElement("path",{d:"M515.91 243.89c-1.38 0-2.75.05-4.11.14 28.65 2.12 51.3 29 51.3 61.95s-22.65 59.84-51.3 62c1.36.09 2.73.14 4.11.14a62.1 62.1 0 100-124.19z",opacity:.15}),h.exports.createElement("path",{d:"M528.68 379.53a62 62 0 01-12.77 37.72 61.53 61.53 0 01-4.21-6.25h-98.65a62.09 62.09 0 11115.63-31.47z",fill:c}),h.exports.createElement("path",{d:"M515.91 341.82a62 62 0 00-49.33-24.38c-1.85 0-3.69.09-5.5.24 14.92 1.58 28 10.7 36.63 24.14a70 70 0 0110.68 37.71 71.19 71.19 0 01-7.16 31.47h10.47a61.53 61.53 0 004.21 6.25 62.08 62.08 0 000-75.43z",opacity:.15}),h.exports.createElement("path",{d:"M392.61 411a11.19 11.19 0 0011.2 11.2h224.21a11.19 11.19 0 0011.19-11.2 11.19 11.19 0 00-11.19-11.19H403.81a11.19 11.19 0 00-11.2 11.19z",fill:"#e6eff5"}),h.exports.createElement("path",{d:"M628.02 399.81h-15.3a11.2 11.2 0 0111.2 11.19 11.2 11.2 0 01-11.2 11.2h15.3a11.19 11.19 0 0011.19-11.2 11.19 11.19 0 00-11.19-11.19z",opacity:.15}),h.exports.createElement("path",{d:"M587.51 533.11H444.27a12.79 12.79 0 01-12.52-10.2l-20.8-100.71h209.92l-20.8 100.71a12.79 12.79 0 01-12.56 10.2z",fill:s}),h.exports.createElement("path",{d:"M605.41 422.2l-20.8 100.71a12.77 12.77 0 01-12.52 10.2h15.42a12.79 12.79 0 0012.52-10.2l20.8-100.71z",opacity:.15}),h.exports.createElement("path",{fill:"#e6eff5",d:"M605.73 495.52l8.04-38.97H418.05l8.05 38.97h179.63z"}),h.exports.createElement("path",{opacity:.15,d:"M590.27 495.52h15.46l8.04-38.97h-15.45l-8.05 38.97z"}),h.exports.createElement("path",{d:"M627.34 379.53a62.1 62.1 0 10-120.83 20.27h30.12v37.38a9 9 0 0018 0v-6a9 9 0 1118 0v24.89a9 9 0 1018 0V399.8h33.31a61.8 61.8 0 003.4-20.27z",fill:n}),h.exports.createElement("path",{d:"M565.24 317.44c-1.36 0-2.71 0-4 .14 28.45 2.08 51 29 51 62a69.67 69.67 0 01-3 20.27h14.78a62.12 62.12 0 00-58.71-82.36z",opacity:.15}))},N=()=>{const[l,o]=h.exports.useState(!1),[c,n]=h.exports.useState([]),[s,i]=h.exports.useState(""),[f,m]=h.exports.useState("");h.exports.useEffect((()=>p(s)),[]);const p=e=>{if(0===e.length)return n([]),void m("");u(e).then((e=>{m(e),n((e=>{let t=[];if(32!==e.length)return t;let a=K("foxPalette",0,2,e);t.push(a);let l=[K("foxFace",3,4,e),K("foxEars",5,6,e),K("foxEarsInside",7,8,e),K("foxNeck",9,10,e)];return T(a.keyVal,l,t),a=K("scoopPalette",11,13,e),t.push(a),l=[K("scoopTop",14,15,e),K("scoopLeft",16,17,e),K("scoopRight",18,19,e)],T(a.keyVal,l,t),a=K("bowlPalette",20,21,e),t.push(a),l=[K("bowlStripe1",22,23,e),K("strawStripe1",24,25,e)],T(a.keyVal,l,t),t})(e))})).catch(console.error)};return e.createElement(e.Fragment,null,e.createElement(a,null,e.createElement(r,null),e.createElement(E,{isChecked:l,size:"sm",onChange:()=>o(!l)},"debug mode")),e.createElement(x,{mt:"1",size:"lg",focusBorderColor:"whiteAlpha.50",onChange:e=>{const t=e.currentTarget.value;i(t),p(t)},placeholder:"Type away...",variant:"filled",value:s}),e.createElement(y,{mt:"10"},e.createElement(t,{h:"300px",w:"350px"},e.createElement(I,{colorKeys:c}))),e.createElement(k,{show:l,inputText:f,colorKeys:c}))},D=[{title:"Maximum appeal",text:"Do you have hundreds of lame parking tickets 🚓 and bills lying all over the place? Not any more! Digitize those words right into foxes."},{title:"Words?",text:"Words? Those antiquated artifacts are practically useless. Pictures of colorful foxes eating delicious ice cream 🍦 are forever."},{title:"Taxes -> Faxes -> Foxes",text:"🧾 Taxes? Who needs 'em! Turn those 1080's into foxes, the IRS will understand."}],H=a=>e.createElement(t,{borderRadius:"lg",bg:"gray.700",px:"8",py:"4"},e.createElement(l,{size:"md"},a.data.title),e.createElement(p,{fontSize:"lg",mt:"1"},a.data.text)),W=()=>{const t=D.map(((t,a)=>e.createElement(H,{key:a,data:t})));return e.createElement(m,{spacing:"4",mt:"3"},t)},F=g({config:{initialColorMode:"dark",useSystemColorMode:!1},fonts:{heading:"Atkinson Hyperlegible",body:"Atkinson Hyperlegible"}});const A=()=>e.createElement(v,{fontSize:"sm",position:"fixed",left:"10px",bottom:"10px",colorScheme:"purple"},"5cc996f"),B=()=>e.createElement(z,{theme:F},e.createElement(M,{maxW:"container.md",my:"6"},e.createElement(y,null,e.createElement(l,{size:"4xl"},"fox machine 📠")),e.createElement(y,null,e.createElement(p,{fontSize:"lg"},"turn ur boring words into a ",e.createElement("i",null,"semi"),"-unique, cute fox")),e.createElement(N,null),e.createElement(W,null)),e.createElement(A,null));b.render(e.createElement(e.StrictMode,null,e.createElement(B,null)),document.getElementById("root"));
