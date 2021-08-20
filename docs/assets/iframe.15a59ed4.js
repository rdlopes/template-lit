var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o;import{s as a,r as s,e as i,h as l,T as c,n as p,a as m,b as d,c as u,d as f,f as b,l as g,g as h,i as y,j as v,k as w,m as x,o as k,p as O,q as _,t as S,u as j}from"./vendor.3e29a3e4.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();a({version:"experimental",tags:[{name:"footer-atom",path:"./src/atoms/footer/footer.atom.ts",attributes:[{name:"author",type:"string",default:'"a dev"'},{name:"link",type:"string",default:'"#"'}],properties:[{name:"styles",type:"CSSResult",default:'"css`\\n      :host {\\n        display: block;\\n        --icon-size: 12px;\\n        --button-font-size: 12px;\\n      }\\n\\n      #banner {\\n        display: flex;\\n        width: 100%;\\n        align-items: center;\\n        gap: 1rem;\\n      }\\n\\n      #heart {\\n        color: #B30000;\\n      }\\n    `"'},{name:"author",attribute:"author",type:"string",default:'"a dev"'},{name:"link",attribute:"link",type:"string",default:'"#"'}]},{name:"navbar-atom",path:"./src/atoms/navbar/navbar.atom.ts",attributes:[{name:"brand",type:"string",default:'"App template"'}],properties:[{name:"styles",type:"CSSResult",default:'"css`\\n      :host {\\n        display: block;\\n      }\\n    `"'},{name:"brand",attribute:"brand",type:"string",default:'"App template"'}]},{name:"main-molecule",path:"./src/molecules/main/main.molecule.ts",properties:[{name:"styles",type:"CSSResult",default:'"css`\\n      :host {\\n        display: block;\\n      }\\n    `"'}]},{name:"home-page",path:"./src/pages/home/home.page.ts",properties:[{name:"styles",type:"CSSResult",default:'"css`\\n    :host {\\n      flex: 1;\\n      display: flex;\\n      flex-direction: column;\\n      gap: 1rem;\\n    }\\n\\n    main {\\n      flex: 1;\\n      margin: 1rem 2rem;\\n      display: flex;\\n      justify-content: center;\\n      align-items: center;\\n    }\\n\\n    #main-content {\\n      max-width: 800px;\\n    }\\n  `"'}]}]});var T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:{backgrounds:{default:"light"},actions:{argTypesRegex:"^on[A-Z].*"},controls:{expanded:!0,exclude:["styles"],matchers:{color:/(background|color)$/i,date:/Date$/}}}}),E=Object.defineProperty,P=Object.getOwnPropertyDescriptor,L=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?P(t,r):t,s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&E(t,r,a),a};let z=class extends l{constructor(){super(...arguments),this.author="a dev",this.link="#"}render(){return c`
            <wl-divider></wl-divider>
            <wl-banner>
                <wl-button id="banner" flat inverted @click="${this.onClick}">
                    <code>/* crafted with </code>
                    <wl-icon id="heart">favorite</wl-icon>
                    <code>by ${this.author} */</code>
                </wl-button>
            </wl-banner>
        `}onClick(){this.link&&(window.location.href=this.link)}};z.styles=s`
      :host {
        display: block;
        --icon-size: 12px;
        --button-font-size: 12px;
      }

      #banner {
        display: flex;
        width: 100%;
        align-items: center;
        gap: 1rem;
      }

      #heart {
        color: #B30000;
      }
    `,L([i({type:String})],z.prototype,"author",2),L([i({type:String})],z.prototype,"link",2),z=L([p("footer-atom")],z);const C=(({author:e,link:t})=>c`
  <footer-atom .author="${e}" .link="${t}"></footer-atom>
`).bind({});C.args={author:"A Storybook enthusiast"};var A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{title:"Atoms / Footer",component:"footer-atom",argTypes:{}},Light:C,__namedExportsOrder:["Light"]}),M=Object.defineProperty,$=Object.getOwnPropertyDescriptor,D=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?$(t,r):t,s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&M(t,r,a),a};let N=class extends l{constructor(){super(...arguments),this.brand="App template"}render(){return c`
            <wl-nav>
                <div slot="left">
                    <wl-button slot="left" fab flat inverted>
                        <wl-icon alt="menu">menu</wl-icon>
                    </wl-button>
                </div>
                <h1 slot="title">${this.brand}</h1>
                <div slot="right">
                    <wl-button fab flat inverted>
                        <wl-icon id="heart">help</wl-icon>
                    </wl-button>
                </div>
            </wl-nav>
        `}};N.styles=s`
      :host {
        display: block;
      }
    `,D([i({type:String})],N.prototype,"brand",2),N=D([p("navbar-atom")],N);const q=(({brand:e})=>c`
    <navbar-atom .brand="${e}"></navbar-atom>
`).bind({});q.args={brand:"Storybook Template"};var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{title:"Atoms / Navigation Bar",component:"navbar-atom",argTypes:{}},Light:q,__namedExportsOrder:["Light"]}),B=Object.defineProperty,I=Object.getOwnPropertyDescriptor;let H=class extends l{render(){return c`
            <wl-text size="large">Pig cow kielbasa pastrami. Drumstick pastrami prosciutto beef ribs cow shank, capicola
                ham turkey. Ham hock alcatra drumstick rump pork belly.
            </wl-text>
            <wl-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur illo iusto molestiae! Ab
                dolores eos fuga, laudantium omnis sed sit temporibus voluptatibus.
            </wl-text>
            <wl-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, dolorem doloremque eos
                excepturi explicabo ipsum laboriosam maiores nam nesciunt odit optio quae quibusdam rerum soluta sunt
                tempore vitae voluptate voluptatem.
            </wl-text>
        `}};H.styles=s`
      :host {
        display: block;
      }
    `,H=((e,t,r,o)=>{for(var n,a=o>1?void 0:o?I(t,r):t,s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&B(t,r,a),a})([p("main-molecule")],H);const W=(({})=>c`
  <main-molecule></main-molecule>
`).bind({});W.args={},W.parameters={controls:{hideNoControlsWarning:!0}};var F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{title:"Molecules / Main Content",component:"main-molecule",argTypes:{}},Transparent:W,__namedExportsOrder:["Transparent"]}),J=Object.defineProperty,K=Object.getOwnPropertyDescriptor;let Z=class extends l{render(){return c`
      <header role="banner">
        <navbar-atom></navbar-atom>
      </header>
      <main role="main">
        <main-molecule id="main-content"></main-molecule>
      </main>
      <footer role="contentinfo">
        <footer-atom></footer-atom>
      </footer>
    `}};Z.styles=s`
    :host {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    main {
      flex: 1;
      margin: 1rem 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #main-content {
      max-width: 800px;
    }
  `,Z=((e,t,r,o)=>{for(var n,a=o>1?void 0:o?K(t,r):t,s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&J(t,r,a),a})([p("home-page")],Z);const G=(({})=>c`
  <home-page></home-page>
`).bind({});G.args={},G.parameters={controls:{hideNoControlsWarning:!0}};var Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{title:"Pages / Home",component:"home-page",argTypes:{}},Light:G,__namedExportsOrder:["Light"]});[T,y,v,w,x,k,O,_,S,j].forEach((e=>{Object.keys(e).forEach((a=>{const s=e[a];switch(a){case"args":case"argTypes":return g.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(s));case"decorators":return s.forEach((e=>b(e,!1)));case"loaders":return s.forEach((e=>f(e,!1)));case"parameters":return m(((e,a)=>{for(var s in a||(a={}))r.call(a,s)&&n(e,s,a[s]);if(t)for(var s of t(a))o.call(a,s)&&n(e,s,a[s]);return e})({},s),!1);case"argTypesEnhancers":return s.forEach((e=>u(e)));case"argsEnhancers":return s.forEach((e=>d(e)));case"globals":case"globalTypes":{const e={};return e[a]=s,m(e,!1)}default:return console.log(a+" was not supported :( !")}}))})),h((()=>[A,R,F,Q].filter((e=>e.default))),{hot:!1},!1);
//# sourceMappingURL=iframe.15a59ed4.js.map
