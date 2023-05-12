import{r as D}from"./index-8db94870.js";import{P as o}from"./index-1fc0ca9a.js";var N={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P=D,j=Symbol.for("react.element"),q=Symbol.for("react.fragment"),C=Object.prototype.hasOwnProperty,w=P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$={key:!0,ref:!0,__self:!0,__source:!0};function O(t,e,a){var s,n={},d=null,m=null;a!==void 0&&(d=""+a),e.key!==void 0&&(d=""+e.key),e.ref!==void 0&&(m=e.ref);for(s in e)C.call(e,s)&&!$.hasOwnProperty(s)&&(n[s]=e[s]);if(t&&t.defaultProps)for(s in e=t.defaultProps,e)n[s]===void 0&&(n[s]=e[s]);return{$$typeof:j,type:t,key:d,ref:m,props:n,_owner:w.current}}u.Fragment=q;u.jsx=O;u.jsxs=O;N.exports=u;var R=N.exports;const i=R.jsx,h=R.jsxs;function k({task:{id:t,title:e,state:a},onArchiveTask:s,onPinTask:n}){return h("div",{className:`list-item ${a}`,children:[h("label",{htmlFor:"checked","aria-label":`archiveTask-${t}`,className:"checkbox",children:[i("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${t}`,checked:a==="TASK_ARCHIVED"}),i("span",{className:"checkbox-custom",onClick:()=>s(t)})]}),i("label",{htmlFor:"title","aria-label":e,className:"title",children:i("input",{type:"text",value:e,readOnly:!0,name:"title",placeholder:"Input title",style:{textOverflow:"ellipsis"}})}),a!=="TASK_ARCHIVED"&&i("button",{className:"pin-button",onClick:()=>n(t),id:`pinTask-${t}`,"aria-label":`pinTask-${t}`,children:i("span",{className:"icon-star"})},`pinTask-${t}`)]})}k.propTypes={task:o.shape({id:o.string.isRequired,title:o.string.isRequired,state:o.string.isRequired}),onArchiveTask:o.func,onPinTask:o.func};k.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{type:{name:"shape",value:{id:{name:"string",description:"Id of the task",required:!0},title:{name:"string",description:"Title of the task",required:!0},state:{name:"string",description:"Current state of the task",required:!0}}},required:!1,description:"Composition of the task"},onArchiveTask:{type:{name:"func"},required:!1,description:"Event to change the task to archived"},onPinTask:{type:{name:"func"},required:!1,description:"Event to change the task to pinned"}}};const K={component:k,title:"Task",tags:["autodocs"]},r={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},c={args:{task:{...r.args.task,state:"TASK_PINNED"}}},l={args:{task:{...r.args.task,state:"TASK_ARCHIVED"}}},L="This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!",p={args:{task:{...r.args.task,title:L}}};var f,g,T;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX"
    }
  }
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var _,v,y;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED"
    }
  }
}`,...(y=(v=c.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var x,b,S;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED"
    }
  }
}`,...(S=(b=l.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var I,A,E;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      title: longTitleString
    }
  }
}`,...(E=(A=p.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const F=["Default","Pinned","Archived","LongTitle"],B=Object.freeze(Object.defineProperty({__proto__:null,Archived:l,Default:r,LongTitle:p,Pinned:c,__namedExportsOrder:F,default:K},Symbol.toStringTag,{value:"Module"}));export{r as D,k as T,h as a,B as b,i as j};
//# sourceMappingURL=Task.stories-2298b2b2.js.map
