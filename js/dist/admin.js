module.exports=function(t){var e={};function r(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}([function(t,e){t.exports=flarum.core.compat["components/SettingsModal"]},function(t,e){t.exports=flarum.core.compat["components/Switch"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["components/Select"]},function(t,e,r){"use strict";r.r(e);var s=r(0),n=r.n(s),o=r(1),i=r.n(o),a=r(2),p=r.n(a);class l extends p.a{init(){this.key=this.props.key,this.cast=this.props.cast||(t=>t)}setting(){return app.modal.component.setting(this.key)}getValue(){return this.cast(this.setting()())}}class c extends l{view(){return i.a.component({state:!!this.getValue(),children:this.props.label||this.props.children,onchange:this.setting()})}}class u extends l{view(){const t=Object.assign({},this.props),e=this.props.label||this.props.children;return t.className="FormControl "+(t.className||""),t.value=this.getValue(),t.onchange=t.onchange||m.withAttr("value",this.setting()),t.simple?m("input",t):m("div.Form-group",[m("label",e),m("input",t)])}}class f extends u{init(){u.prototype.init.call(this),this.cast=(t=>Number(t)),this.props.type="number"}}r(3);const d={boolean:c,string:u,integer:f,number:f};class h extends n.a{init(){this.props.items=Array.from(this.props.items||[]),this.settings={},this.setting=this.setting.bind(this),this.props.onsaved&&(this.onsaved=this.props.onsaved.bind(this))}className(){return[this.props.className,this.props.size&&`Modal--${this.props.size}`].filter(Boolean).join(" ")}title(){return this.props.title}form(){return this.props.form||[...this.props.items].map(t=>!t||"div"===t.tag||t.attrs&&t.attrs.className&&t.attrs.className.contains("Form-group")?t:m("div.Form-group",t))}static createItemsFromValidationRules(t,e,r){const s=[];for(const n in t){const o=e+n.toLowerCase(),i=t[n].split("|"),a=i.find(t=>d[t])||"string",p=a&&d[a]||u,l=i.includes("required"),c=r&&(app.translator.trans[`${r}${n.toLowerCase()}-label`]||n)||n,f=app.translator.translations[`${r}${n.toLowerCase()}-description`];s.push(m.prop(`div.Form-group${l?".required":""}`,["boolean"!==a&&m("label",c),p.component({type:a,key:o,required:l,children:c,simple:!0}),f&&m("span",f)]))}return s}}app.initializers.add("fof/sentry",function(){app.extensionSettings["fof-sentry"]=function(){return app.modal.show(new h({title:"FriendsOfFlarum Sentry",type:"small",items:[m(u,{key:"fof-sentry.dsn",type:"url"},app.translator.trans("fof-sentry.admin.settings.dsn_label")),m(c,{key:"fof-sentry.browser_errors",cast:Number},app.translator.trans("fof-sentry.admin.settings.browser_errors_label"))]}))}})}]);
//# sourceMappingURL=admin.js.map