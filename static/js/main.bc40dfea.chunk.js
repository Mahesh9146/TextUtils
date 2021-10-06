(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),r=a(15),n=a.n(r),o=(a(22),a(10)),l=(a(23),a(0));function i(e){var t={color:"dark"===e.mode?"white":"#042743",backgroundColor:"dark"===e.mode?"#042743":"white"};return Object(l.jsxs)("div",{className:"container ",style:t,children:[Object(l.jsx)("h1",{className:"container my-3",children:"About Us"}),Object(l.jsxs)("div",{className:"accordion",style:t,id:"accordionExample",children:[Object(l.jsxs)("div",{className:"accordion-item",children:[Object(l.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(l.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:t,children:Object(l.jsx)("strong",{children:"Analyze your text"})})}),Object(l.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(l.jsx)("div",{className:"accordion-body",style:t,children:"textutils gives you a way to analyze your text quickly and efficiently. it counts words,characters,you can copy your text"})})]}),Object(l.jsxs)("div",{className:"accordion-item",children:[Object(l.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(l.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:t,children:Object(l.jsx)("strong",{children:"Free to use"})})}),Object(l.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(l.jsx)("div",{className:"accordion-body",style:t,children:"TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text.Textutils report number of words and characters in the text.thus it is suitable for writing word and characters with limit."})})]}),Object(l.jsxs)("div",{className:"accordion-item",children:[Object(l.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(l.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:t,children:Object(l.jsx)("strong",{children:" Browser compatible"})})}),Object(l.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(l.jsx)("div",{className:"accordion-body",style:t,children:"This word counter software works in any browsers such as chrome,mozilla firebox,microsoft edge,internet explorer,safari.it suits to count characters in facebook,instagram,blog,books,pdf document,essays,etc"})})]})]}),Object(l.jsx)("div",{className:"container my-3"})]})}var d=a(9);function b(e){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(d.b,{className:"navbar-brand",to:"/",children:e.title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(d.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link",href:"/about",children:e.About})})]}),Object(l.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.togglemode}),Object(l.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"EnableDarkMode"})]})]})]})})}function h(e){var t=Object(c.useState)(""),a=Object(o.a)(t,2),s=a[0],r=a[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(l.jsx)("label",{htmlFor:"myBox ",className:"form-label",children:Object(l.jsx)("h2",{children:e.heading})}),Object(l.jsx)("textarea",{className:"form-control ",id:"myBox",rows:"8",value:s,onChange:function(e){r(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"#042743"}}),Object(l.jsx)("button",{disabled:0===s.length,className:"btn btn-primary my-2 mx-1",onClick:function(){var t=s.toUpperCase();r(t),e.showAlert("your text is converted to uppercase!","success")},children:"ConvertToUppercase"}),Object(l.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=s.toLowerCase();r(t),e.showAlert("your text is converted to lowercase!","success")},children:"ConvertToLowercase"}),Object(l.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){r(""),e.showAlert("your text is cleared!","success")},children:"ClearText"}),Object(l.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=document.getElementById("myBox");t.Select(),navigator.clipboard.writeText(t.value),e.showAlert("your text is copied!","success")},children:"CopyText"})]})}),Object(l.jsxs)("div",{className:"container my-2",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(l.jsx)("h2",{children:"Your Text summary"}),Object(l.jsxs)("p",{children:[s.split(/\s+/).filter((function(e){return 0!==e.length})).length," ","words and",s.length," characters"]}),Object(l.jsxs)("p",{children:[.008*s.split(" ").length," Minutes to read"]}),Object(l.jsx)("h2",{children:"Preview"}),Object(l.jsx)("p",{children:s.lenght>0?s:"Nothing to preview"})]})]})}var j=function(e){return Object(l.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(l.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(l.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," : ",e.alert.msg]})})},m=a(2);var u=function(){var e=Object(c.useState)("light"),t=Object(o.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)(null),n=Object(o.a)(r,2),u=n[0],x=n[1],p=function(e,t){x({msg:e,type:t}),setTimeout((function(){x(null)}),2e3)};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(d.a,{children:[Object(l.jsx)(b,{title:"Textutils",About:"About",mode:a,togglemode:function(){"light"===a?(s("dark"),document.body.style.backgroundColor="#042743",p("Dark mode has been enabled","success")):(s("light"),document.body.style.backgroundColor="white",p("Light mode has been enabled","success"))}}),Object(l.jsx)(j,{alert:u}),Object(l.jsx)("div",{className:"container my3",children:Object(l.jsxs)(m.c,{children:[Object(l.jsx)(m.a,{exact:!0,path:"/about",children:Object(l.jsx)(i,{mode:a})}),Object(l.jsx)(m.a,{exact:!0,path:"/",children:Object(l.jsx)(h,{heading:"TextUtils-Word Counter,Character Counter",mode:a,showAlert:p})})]})})]})})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),r(e),n(e)}))};n.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),x()}},[[30,1,2]]]);
//# sourceMappingURL=main.bc40dfea.chunk.js.map