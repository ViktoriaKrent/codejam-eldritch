(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var r;e.g.importScripts&&(r=e.g.location+"");var n=e.g.document;if(!r&&n&&(n.currentScript&&(r=n.currentScript.src),!r)){var c=n.getElementsByTagName("script");c.length&&(r=c[c.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=r+"../"})();const r={brown1:e.p+"assets/MythicCards/brown/brown1.png",brown2:e.p+"assets/MythicCards/brown/brown2.png",brown3:e.p+"assets/MythicCards/brown/brown3.png",brown4:e.p+"assets/MythicCards/brown/brown4.png",brown5:e.p+"assets/MythicCards/brown/brown5.png",brown6:e.p+"assets/MythicCards/brown/brown6.png",brown7:e.p+"assets/MythicCards/brown/brown7.png",brown8:e.p+"assets/MythicCards/brown/brown8.png",brown9:e.p+"assets/MythicCards/brown/brown9.png",brown10:e.p+"assets/MythicCards/brown/brown10.png",brown11:e.p+"assets/MythicCards/brown/brown11.png",brown12:e.p+"assets/MythicCards/brown/brown12.png",brown13:e.p+"assets/MythicCards/brown/brown13.png",brown14:e.p+"assets/MythicCards/brown/brown14.png",brown15:e.p+"assets/MythicCards/brown/brown15.png",brown16:e.p+"assets/MythicCards/brown/brown16.png",brown17:e.p+"assets/MythicCards/brown/brown17.png",brown18:e.p+"assets/MythicCards/brown/brown18.png",brown19:e.p+"assets/MythicCards/brown/brown19.png",brown20:e.p+"assets/MythicCards/brown/brown20.png",brown21:e.p+"assets/MythicCards/brown/brown21.png"},n=[{id:"brown1",cardFace:r.brown1,difficulty:"normal",color:"brown"},{id:"brown2",cardFace:r.brown2,difficulty:"normal",color:"brown"},{id:"brown3",cardFace:r.brown3,difficulty:"normal",color:"brown"},{id:"brown4",cardFace:r.brown4,difficulty:"normal",color:"brown"},{id:"brown5",cardFace:r.brown5,difficulty:"normal",color:"brown"},{id:"brown6",cardFace:r.brown6,difficulty:"hard",color:"brown"},{id:"brown7",cardFace:r.brown7,difficulty:"hard",color:"brown"},{id:"brown8",cardFace:r.brown8,difficulty:"hard",color:"brown"},{id:"brown9",cardFace:r.brown9,difficulty:"hard",color:"brown"},{id:"brown10",cardFace:r.brown10,difficulty:"hard",color:"brown"},{id:"brown11",cardFace:r.brown11,difficulty:"easy",color:"brown"},{id:"brown12",cardFace:r.brown12,difficulty:"easy",color:"brown"},{id:"brown13",cardFace:r.brown13,difficulty:"easy",color:"brown"},{id:"brown14",cardFace:r.brown14,difficulty:"easy",color:"brown"},{id:"brown15",cardFace:r.brown15,difficulty:"normal",color:"brown"},{id:"brown16",cardFace:r.brown16,difficulty:"normal",color:"brown"},{id:"brown17",cardFace:r.brown17,difficulty:"normal",color:"brown"},{id:"brown18",cardFace:r.brown18,difficulty:"normal",color:"brown"},{id:"brown19",cardFace:r.brown19,difficulty:"normal",color:"brown"},{id:"brown20",cardFace:r.brown20,difficulty:"normal",color:"brown"},{id:"brown21",cardFace:r.brown21,difficulty:"easy",color:"brown"}],c={blue1:e.p+"assets/MythicCards/blue/blue1.png",blue2:e.p+"assets/MythicCards/blue/blue2.png",blue3:e.p+"assets/MythicCards/blue/blue3.png",blue4:e.p+"assets/MythicCards/blue/blue4.png",blue5:e.p+"assets/MythicCards/blue/blue5.png",blue6:e.p+"assets/MythicCards/blue/blue6.png",blue7:e.p+"assets/MythicCards/blue/blue7.png",blue8:e.p+"assets/MythicCards/blue/blue8.png",blue9:e.p+"assets/MythicCards/blue/blue9.png",blue10:e.p+"assets/MythicCards/blue/blue10.png",blue11:e.p+"assets/MythicCards/blue/blue11.png",blue12:e.p+"assets/MythicCards/blue/blue12.png"},o=[{id:"blue1",cardFace:c.blue1,difficulty:"hard",color:"blue"},{id:"blue2",cardFace:c.blue2,difficulty:"hard",color:"blue"},{id:"blue3",cardFace:c.blue3,difficulty:"easy",color:"blue"},{id:"blue4",cardFace:c.blue4,difficulty:"easy",color:"blue"},{id:"blue5",cardFace:c.blue5,difficulty:"easy",color:"blue"},{id:"blue6",cardFace:c.blue6,difficulty:"hard",color:"blue"},{id:"blue7",cardFace:c.blue7,difficulty:"normal",color:"blue"},{id:"blue8",cardFace:c.blue8,difficulty:"hard",color:"blue"},{id:"blue9",cardFace:c.blue9,difficulty:"normal",color:"blue"},{id:"blue10",cardFace:c.blue10,difficulty:"easy",color:"blue"},{id:"blue11",cardFace:c.blue11,difficulty:"normal",color:"blue"},{id:"blue12",cardFace:c.blue12,difficulty:"normal",color:"blue"}],a={green1:e.p+"assets/MythicCards/green/green1.png",green2:e.p+"assets/MythicCards/green/green2.png",green3:e.p+"assets/MythicCards/green/green3.png",green4:e.p+"assets/MythicCards/green/green4.png",green5:e.p+"assets/MythicCards/green/green5.png",green6:e.p+"assets/MythicCards/green/green6.png",green7:e.p+"assets/MythicCards/green/green7.png",green8:e.p+"assets/MythicCards/green/green8.png",green9:e.p+"assets/MythicCards/green/green9.png",green10:e.p+"assets/MythicCards/green/green10.png",green11:e.p+"assets/MythicCards/green/green11.png",green12:e.p+"assets/MythicCards/green/green12.png",green13:e.p+"assets/MythicCards/green/green13.png",green14:e.p+"assets/MythicCards/green/green14.png",green15:e.p+"assets/MythicCards/green/green15.png",green16:e.p+"assets/MythicCards/green/green16.png",green17:e.p+"assets/MythicCards/green/green17.png",green18:e.p+"assets/MythicCards/green/green18.png"},s=[{id:"green1",cardFace:a.green1,difficulty:"easy",color:"green"},{id:"green2",cardFace:a.green2,difficulty:"hard",color:"green"},{id:"green3",cardFace:a.green3,difficulty:"hard",color:"green"},{id:"green4",cardFace:a.green4,difficulty:"hard",color:"green"},{id:"green5",cardFace:a.green5,difficulty:"hard",color:"green"},{id:"green6",cardFace:a.green6,difficulty:"hard",color:"green"},{id:"green7",cardFace:a.green7,difficulty:"normal",color:"green"},{id:"green8",cardFace:a.green8,difficulty:"normal",color:"green"},{id:"green9",cardFace:a.green9,difficulty:"normal",color:"green"},{id:"green10",cardFace:a.green10,difficulty:"normal",color:"green"},{id:"green11",cardFace:a.green11,difficulty:"normal",color:"green"},{id:"green12",cardFace:a.green12,difficulty:"easy",color:"green"},{id:"green13",cardFace:a.green13,difficulty:"normal",color:"green"},{id:"green14",cardFace:a.green14,difficulty:"normal",color:"green"},{id:"green15",cardFace:a.green15,difficulty:"normal",color:"green"},{id:"green16",cardFace:a.green16,difficulty:"easy",color:"green"},{id:"green17",cardFace:a.green17,difficulty:"easy",color:"green"},{id:"green18",cardFace:a.green18,difficulty:"easy",color:"green"}];alert("В данной работе прошу проверять только первого древнего и только средний уровень");let i=document.querySelector(".middle-level"),l=document.querySelector(".azathoth");l.addEventListener("click",(()=>l.classList.toggle("az_wh")));let d=document.querySelector(".shuffle__deck-container");function t(e){let r=JSON.parse(JSON.stringify(e));for(let e=r.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1)),c=r[e];r[e]=r[n],r[n]=c}return r}d.addEventListener("click",(()=>d.classList.toggle("b_color"))),i.addEventListener("click",(()=>i.classList.add("b_color")));let b=t(s),g=t(o),u=t(n),w=b.splice(0,1),p=b.splice(0,2),y=b.splice(0,2),f=u.splice(0,2),h=u.splice(0,3),F=u.splice(0,4),M=g.splice(0,1),C=g.splice(0,1),m=w.concat(f).concat(M),S=p.concat(h).concat(C),v=y.concat(F),k=t(m),_=t(S),L=[...t(v),..._,...k],q=(document.querySelector(".shuffle__deck-container"),document.querySelector(".deck__close")),E=document.querySelector(".card");document.querySelector(".deck"),q.addEventListener("click",(()=>{E.children[0]&&E.firstChild.remove(),function(){if(L.length>0){let e=L.pop();const r=new Image;E.append(r),r.classList.add("deck"),console.log(e),r.src=e.cardFace}else alert("Колода закончилась! \n Спасибо за внимание!")}()}))})();