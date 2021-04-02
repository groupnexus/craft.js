import{wrapHookToRecognizeElement as e,useCollector as t,RenderIndicator as n,getDOMInfo as r,deprecationWarning as o,useEffectOnce as a,ERROR_TOP_LEVEL_ELEMENT_NO_ID as i,ROOT_NODE as d,ERROR_DELETE_TOP_LEVEL_NODE as s,ERROR_INVALID_NODEID as c,ERROR_NOPARENT as u,DEPRECATED_ROOT_NODE as l,ERROR_MOVE_TOP_LEVEL_NODE as f,ERROR_MOVE_NONCANVAS_CHILD as p,ERROR_CANNOT_DRAG as v,ERROR_MOVE_TO_NONCANVAS_PARENT as h,ERROR_MOVE_INCOMING_PARENT as m,ERROR_MOVE_CANNOT_DROP as g,ERROR_MOVE_TO_DESCENDANT as y,ERROR_DUPLICATE_NODEID as N,ERROR_MOVE_OUTGOING_PARENT as E,ERROR_INVALID_NODE_ID as b,ERROR_DESERIALIZE_COMPONENT_NOT_IN_RESOLVER as O,ERROR_NOT_IN_RESOLVER as k,useMethods as C,ERROR_RESOLVER_NOT_AN_OBJECT as P}from"@craftjs/utils";export{ROOT_NODE}from"@craftjs/utils";import w,{createContext as j,useContext as T,useMemo as D,useRef as x,useEffect as I,useState as L,Children as q,Fragment as R}from"react";import S from"tiny-invariant";import M from"touch-dnd-custom-events";import{produce as z}from"immer";import A from"shortid";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var F=function(e,t){return(F=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function _(e,t){function n(){this.constructor=e}F(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var H=function(){return(H=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function W(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function J(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],i=0,d=a.length;i<d;i++,o++)r[o]=a[i];return r}var X=j(null),Y=function(){return T(X)},B=function(e,t,n){return[e,t,n]},V=function(){function e(e,t,n,r){var o=this;this.el=t,this.opts=n,this.handler=r,this.unsubscribe=e.subscribe((function(e){return{enabled:e.options.enabled}}),(function(e){var n=e.enabled;if(!document.body.contains(t))return o.remove(),o.unsubscribe();n?o.add():o.remove()}),!0)}return e.prototype.add=function(){var e=this,t=this.handler,n=t.init,r=t.events;this.cleanDOM=n&&n(this.el,this.opts),this.listenersToRemove=r&&r.map((function(t){var n=t[0],r=t[1],o=t[2],a=function(t){t.craft||(t.craft={blockedEvents:{},stopPropagation:function(){}}),function(e,t,n){for(var r=e.craft&&e.craft.blockedEvents[t]||[],o=0;o<r.length;o++){var a=r[o];if(n!==a&&n.contains(a))return!0}return!1}(t,n,e.el)||(t.craft.stopPropagation=function(){t.craft.blockedEvents[n]||(t.craft.blockedEvents[n]=[]),t.craft.blockedEvents[n].push(e.el)},r(t,e.opts))};return e.el.addEventListener(n,a,o),function(){return e.el.removeEventListener(n,a,o)}}))},e.prototype.remove=function(){this.cleanDOM&&(this.cleanDOM(),this.cleanDOM=null),this.listenersToRemove&&(this.listenersToRemove.forEach((function(e){return e()})),this.listenersToRemove=null)},e}(),G=function(){function t(e){this.wm=new WeakMap,this.store=e}return t.prototype.connectors=function(){var t=this,n=this.handlers()||{};return Object.keys(n).reduce((function(r,o){var a=n[o],i=a.init,d=a.events;return i||d?(r[o]=e((function(e,n){var r;if(e&&document.body.contains(e)){var a=t.wm.get(e);a&&a[o]||t.wm.set(e,H(H({},a),((r={})[o]=new V(t.store,e,n,{init:i,events:d}),r)))}else t.wm.delete(e)})),r):(r[o]=function(){},r)}),{})},t.getConnectors=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=new(this.bind.apply(this,J([void 0],e)));return n.connectors()},t}(),K=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return _(t,e),t.prototype.derive=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new(e.bind.apply(e,J([void 0,this.store,this],t)))},t}(G),Q=function(e){function t(t,n){var r=e.call(this,t)||this;return r.derived=n,r}return _(t,e),t}(G),U=function(e){var t=e.target.cloneNode(!0),n=e.target.getBoundingClientRect(),r=n.height;return t.style.width=n.width+"px",t.style.height=r+"px",t.style.position="fixed",t.style.left="-100%",t.style.top="-100%",document.body.appendChild(t),e.dataTransfer.setDragImage(t,0,0),t},Z=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return _(t,e),t.prototype.defineNodeEventListener=function(e,t,n){var r=this;return B(e,(function(e,n){n&&!r.store.query.node(n).get()||t(e,n)}),n)},t.prototype.handlers=function(){var e=this;return M(),{select:{init:function(){return function(){return e.store.actions.setNodeEvent("selected",null)}},events:[this.defineNodeEventListener("mousedown",(function(t,n){t.craft.stopPropagation(),e.store.actions.setNodeEvent("selected",n)}))]},hover:{init:function(){return function(){return e.store.actions.setNodeEvent("hovered",null)}},events:[this.defineNodeEventListener("mouseover",(function(t,n){t.craft.stopPropagation(),e.store.actions.setNodeEvent("hovered",n)}))]},drop:{events:[B("dragover",(function(e){e.craft.stopPropagation(),e.preventDefault()})),B("touchdragover",(function(e){e.craft.stopPropagation(),e.preventDefault()})),this.defineNodeEventListener("dragenter",(function(n,r){n.craft.stopPropagation(),n.preventDefault();var o=t.draggedElement;if(o){var a=o;o.rootNodeId&&(a=o.nodes[o.rootNodeId]);var i=e.store.query.getDropPlaceholder(a,r,{x:n.clientX,y:n.clientY});i&&(e.store.actions.setIndicator(i),t.indicator=i)}})),this.defineNodeEventListener("touchdragenter",(function(n,r){n.craft.stopPropagation(),n.preventDefault();var o=t.draggedElement;if(o){var a=o;o.rootNodeId&&(a=o.nodes[o.rootNodeId]);var i=e.store.query.getDropPlaceholder(a,r,{x:n.clientX,y:n.clientY});i&&(e.store.actions.setIndicator(i),t.indicator=i)}}))]},drag:{init:function(t,n){return e.store.query.node(n).isDraggable()?(t.setAttribute("draggable","true"),function(){return t.setAttribute("draggable","false")}):function(){}},events:[this.defineNodeEventListener("dragstart",(function(n,r){n.craft.stopPropagation(),e.store.actions.setNodeEvent("dragged",r),t.draggedElementShadow=U(n),t.draggedElement=r})),this.defineNodeEventListener("touchdragstart",(function(n,r){n.craft.stopPropagation(),e.store.actions.setNodeEvent("dragged",r),t.draggedElementShadow=U(n),t.draggedElement=r})),B("dragend",(function(t){t.craft.stopPropagation(),e.dropElement((function(t,n){e.store.actions.move(t,n.parent.id,n.index+("after"===n.where?1:0))}))})),B("touchend",(function(t){t.craft.stopPropagation(),e.dropElement((function(t,n){e.store.actions.move(t,n.parent.id,n.index+("after"===n.where?1:0))}))}))]},create:{init:function(e){return e.setAttribute("draggable","true"),function(){return e.removeAttribute("draggable")}},events:[B("dragstart",(function(n,r){n.craft.stopPropagation();var o=e.store.query.parseReactElement(r).toNodeTree();t.draggedElementShadow=U(n),t.draggedElement=o})),B("touchdragstart",(function(n,r){n.craft.stopPropagation();var o=e.store.query.parseReactElement(r).toNodeTree();t.draggedElementShadow=U(n),t.draggedElement=o})),B("dragend",(function(t){t.craft.stopPropagation(),e.dropElement((function(t,n){e.store.actions.addNodeTree(t,n.parent.id,n.index+("after"===n.where?1:0))}))})),B("touchend",(function(t){t.craft.stopPropagation(),e.dropElement((function(t,n){e.store.actions.addNodeTree(t,n.parent.id,n.index+("after"===n.where?1:0))}))}))]}}},t.prototype.dropElement=function(e){var n=t.draggedElement,r=t.draggedElementShadow,o=t.indicator;n&&o&&!o.error&&e(n,o.placement),r&&(r.parentNode.removeChild(r),t.draggedElementShadow=null),t.draggedElement=null,t.indicator=null,this.store.actions.setIndicator(null),this.store.actions.setNodeEvent("dragged",null)},t.indicator=null,t}(K),$=j({});function ee(e){var n=Y(),r=T($),o=t(r,e),a=D((function(){return n&&n.connectors()}),[n]);return H(H({},o),{connectors:a||{},inContext:!!r,store:r})}var te=function(e){var t,o,a,i,d,s,c,u,l=e.children,f=ee((function(e){return{indicator:e.events.indicator,indicatorOptions:e.options.indicator,handlers:e.handlers,handlersFactory:e.options.handlers}})),p=f.actions,v=f.indicator,h=f.indicatorOptions,m=f.store,g=f.handlers,y=f.handlersFactory,N=x(m);return N.current=m,I((function(){p.history.ignore().setState((function(e){return e.handlers=y(N.current)}))}),[p,y]),g?w.createElement(X.Provider,{value:g},v&&w.createElement(n,{style:H(H({},(t=v.placement,o=r(v.placement.parent.dom),a=v.placement.currentNode&&r(v.placement.currentNode.dom),i=0,d=0,s=0,c=0,u=t.where,a?a.inFlow?(s=a.outerWidth,c=2,i="before"===u?a.top:a.bottom,d=a.left):(s=2,c=a.outerHeight,i=130,d="before"===u?a.left:a.left+a.outerWidth):o&&(i=o.top+o.padding.top,d=o.left+o.padding.left,s=o.outerWidth-o.padding.right-o.padding.left-o.margin.left-o.margin.right,c=2),{top:i+"px",left:d+"px",width:s+"px",height:c+"px"})),{backgroundColor:v.error?h.error:h.success,transition:"0.2s ease-in"})}),l):null},ne=function(e){function t(t,n,r){var o=e.call(this,t,n)||this;return o.id=r,o}return _(t,e),t.prototype.handlers=function(){var e=this,t=this.derived.connectors();return{connect:{init:function(n){t.select(n,e.id),t.hover(n,e.id),t.drop(n,e.id),e.store.actions.setDOM(e.id,n)}},drag:{init:function(n){t.drag(n,e.id)}}}},t}(Q),re=w.createContext(null),oe=function(e){var t=e.id,n=e.related,r=void 0!==n&&n,o=e.children,a=Y(),i=ee((function(e){return{hydrationTimestamp:e.nodes[t]&&e.nodes[t]._hydrationTimestamp}})).hydrationTimestamp,d=D((function(){return a.derive(ne,t).connectors()}),[a,i,t]);return w.createElement(re.Provider,{value:{id:t,related:r,connectors:d}},o)};function ae(e){var t=T(re),n=t.id,r=t.related,o=t.connectors,a=ee((function(t){return n&&t.nodes[n]&&e&&e(t.nodes[n])})),i=a.actions,d=W(a,["actions","query"]),s=D((function(){return{setProp:function(e,t){t?i.history.throttle(t).setProp(n,e):i.setProp(n,e)},setCustom:function(e,t){t?i.history.throttle(t).setCustom(n,e):i.setCustom(n,e)},setHidden:function(e){return i.setHidden(n,e)}}}),[i,n]);return H(H({},d),{id:n,related:r,inNodeContext:!!t,actions:s,connectors:o})}function ie(e){var t=ae(e),n=t.id,r=t.related,a=t.actions,i=t.inNodeContext,d=t.connectors,s=W(t,["id","related","actions","inNodeContext","connectors"]);return H(H({},s),{actions:a,id:n,related:r,setProp:function(e){return o("useNode().setProp()",{suggest:"useNode().actions.setProp()"}),a.setProp(e)},inNodeContext:i,connectors:d})}var de=function(e){var t=e.render,n=ie().connectors;return"string"==typeof t.type?(0,n.connect)((0,n.drag)(w.cloneElement(t))):t},se=function(){var e=ae((function(e){return{type:e.data.type,props:e.data.props,nodes:e.data.nodes,hydrationTimestamp:e._hydrationTimestamp}})),t=e.type,n=e.props,r=e.nodes;return D((function(){var e=n.children;r&&r.length>0&&(e=w.createElement(w.Fragment,null,r.map((function(e){return w.createElement(ue,{id:e,key:e})}))));var o=w.createElement(t,n,e);return"string"==typeof t?w.createElement(de,{render:o}):o}),[t,n,e.hydrationTimestamp,r])},ce=function(){var e=ae((function(e){return{hidden:e.data.hidden}})).hidden,t=ee((function(e){return{onRender:e.options.onRender}})).onRender;return e?null:w.createElement(t,{render:w.createElement(se,null)})},ue=w.memo((function(e){return w.createElement(oe,{id:e.id},w.createElement(ce,null))})),le={is:"div",canvas:!1,custom:{},hidden:!1},fe={is:"type",canvas:"isCanvas"};function pe(e){var t=e.id,n=e.children,r=W(e,["id","children"]),o=H(H({},le),r),d=o.is,s=W(o,["is","custom","canvas"]),c=ee(),u=c.query,l=c.actions,f=ae((function(e){return{node:{id:e.id,data:e.data}}})),p=f.node,v=f.inNodeContext,h=L(null),m=h[0],g=h[1];return a((function(){S(!!t,i);var e=p.id,o=p.data;if(v){var a,c=o.linkedNodes&&o.linkedNodes[t]&&u.node(o.linkedNodes[t]).get();if(c&&c.data.type===d){a=c.id;var f=H(H({},c.data.props),s);l.history.ignore().setProp(a,(function(e){return Object.keys(f).forEach((function(t){return e[t]=f[t]}))}))}else{var h=w.createElement(pe,r,n),m=u.parseReactElement(h).toNodeTree();a=m.rootNodeId,l.history.ignore().addLinkedNodeFromTree(m,e,t)}g(a)}})),m?w.createElement(ue,{id:m}):null}var ve=function(){return o("<Canvas />",{suggest:"<Element canvas={true} />"})};function Canvas(e){var t=W(e,[]);return I((function(){return ve()}),[]),w.createElement(pe,H({},t,{canvas:!0}))}var he=function(e){var t=e.children,n=e.json,r=e.data,a=ee(),i=a.actions,s=a.query,c=L(null),u=c[0],l=c[1];n&&o("<Frame json={...} />",{suggest:"<Frame data={...} />"});var f=x({initialChildren:t,initialData:r||n});return I((function(){var e=f.current,t=e.initialChildren,n=e.initialData;if(n)i.history.ignore().deserialize(n);else if(t){var r=w.Children.only(t),o=s.parseReactElement(r).toNodeTree((function(e,t){return t===r&&(e.id=d),e}));i.history.ignore().addNodeTree(o)}l(w.createElement(ue,{id:d}))}),[i,s]),u},me=function(e){return W(e,["addLinkedNodeFromTree","setDOM","setNodeEvent","replaceNodes","reset"])};function ge(e){var t=ee(e),n=t.connectors,r=t.actions,o=W(t.query,["deserialize"]),a=t.store,i=W(t,["connectors","actions","query","store"]),d=me(r),s=D((function(){return H(H({},d),{history:H(H({},d.history),{ignore:function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return me((e=d.history).ignore.apply(e,t))},throttle:function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return me((e=d.history).throttle.apply(e,t))}})})}),[d]);return H({connectors:n,actions:s,query:o,store:a},i)}function ye(e){return function(t){return function(n){var r=e?ge(e):ge();return w.createElement(t,H({},r,n))}}}function Ne(e){return function(t){return function(n){var r=ie(e);return w.createElement(t,H({},r,n))}}}var Ee=function(e){return Object.fromEntries?Object.fromEntries(e):e.reduce((function(e,t){var n,r=t[0],o=t[1];return H(H({},e),((n={})[r]=o,n))}),{})},be=function(e,t){var n=t.name||t.displayName;if(t===Canvas)return"Canvas";if(e[n])return n;for(var r=0;r<Object.keys(e).length;r++){var o=Object.keys(e)[r];if(e[o]===t)return o}return"string"==typeof t?t:void 0},Oe=function(e,t){return"string"==typeof e?e:{resolvedName:be(t,e)}},ke=function(e,t){var n=e.type,r=e.isCanvas,o=e.props;return o=Object.keys(o).reduce((function(e,n){var r=o[n];return null==r||(e[n]="children"===n&&"string"!=typeof r?q.map(r,(function(e){return"string"==typeof e?e:ke(e,t)})):r.type?ke(r,t):r),e}),{}),{type:Oe(n,t),isCanvas:!!r,props:o}},Ce=A;function Pe(e,t){var n=e.data.type,r=e.id||Ce();return z({},(function(o){if(o.id=r,o._hydrationTimestamp=Date.now(),o.data=H({type:n,props:H({},e.data.props),name:"string"==typeof n?n:n.name,displayName:"string"==typeof n?n:n.name,custom:{},isCanvas:!1,hidden:!1,nodes:[],linkedNodes:{}},e.data),o.related={},o.events={selected:!1,dragged:!1,hovered:!1},o.rules=H({canDrag:function(){return!0},canDrop:function(){return!0},canMoveIn:function(){return!0},canMoveOut:function(){return!0}},n.craft&&n.craft.rules||{}),o.data.type===pe||o.data.type===Canvas){var a=o.data.type===Canvas,i=H(H({},le),o.data.props);Object.keys(le).forEach((function(e){o.data[fe[e]||e]=i[e],delete o.data.props[e]})),n=o.data.type,a&&(o.data.isCanvas=!0,ve())}if(t&&t(o),n.craft){o.data.props=H(H({},n.craft.props||n.craft.defaultProps||{}),o.data.props);var d=n.craft.displayName||n.craft.name;if(d&&(o.data.displayName=d),n.craft.isCanvas&&(o.data.isCanvas=o.data.isCanvas||n.craft.isCanvas),n.craft.rules&&Object.keys(n.craft.rules).forEach((function(e){["canDrag","canDrop","canMoveIn","canMoveOut"].includes(e)&&(o.rules[e]=n.craft.rules[e])})),n.craft.custom&&(o.data.custom=H(H({},n.craft.custom),o.data.custom)),n.craft.related){o.related={};var s={id:o.id,related:!0};Object.keys(n.craft.related).forEach((function(e){o.related[e]=function(){return w.createElement(oe,s,w.createElement(n.craft.related[e]))}}))}}}))}var we=function(e,t,n){var r=e.props,o=function(e,t){return"object"==typeof e&&e.resolvedName?"Canvas"===e.resolvedName?Canvas:t[e.resolvedName]:"string"==typeof e?e:null}(e.type,t);if(o){r=Object.keys(r).reduce((function(e,n){var o=r[n];return e[n]=null==o?null:"object"==typeof o&&o.resolvedName?we(o,t):"children"===n&&Array.isArray(o)?o.map((function(e){return"string"==typeof e?e:we(e,t)})):o,e}),{}),n&&(r.key=n);var a=H({},w.createElement(o,H({},r)));return H(H({},a),{name:be(t,a.type)})}},je=function(e,t){var n,r;if(t.length<1)return(n={})[e.id]=e,n;var o=t.map((function(e){return e.rootNodeId})),a=H(H({},e),{data:H(H({},e.data),{nodes:o})}),i=((r={})[e.id]=a,r);return t.reduce((function(t,n){var r,o=n.nodes[n.rootNodeId];return H(H(H({},t),n.nodes),((r={})[o.id]=H(H({},o),{data:H(H({},o.data),{parent:e.id})}),r))}),i)};function Te(e){var t=e&&e.options,n=function(){return Te(e)};return{getDropPlaceholder:function(t,o,a,i){if(void 0===i&&(i=function(t){return e.nodes[t.id].dom}),t!==o){var d="string"==typeof t&&e.nodes[t],s=e.nodes[o],c=n().node(s.id).isCanvas()?s:e.nodes[s.data.parent];if(c){var u=c.data.nodes||[],l=function(e,t,n,r){for(var o={parent:e,index:0,where:"before"},a=0,i=0,d=0,s=0,c=0,u=0,l=0,f=t.length;l<f;l++){var p=t[l];if(u=p.top+p.outerHeight,s=p.left+p.outerWidth/2,c=p.top+p.outerHeight/2,!(i&&p.left>i||d&&c>=d||a&&p.left+p.outerWidth<a))if(o.index=l,p.inFlow){if(r<c){o.where="before";break}o.where="after"}else r<u&&(d=u),n<s?(i=s,o.where="before"):(a=s,o.where="after")}return o}(c,u?u.reduce((function(t,n){var o=i(e.nodes[n]);if(o){var a=H({id:n},r(o));t.push(a)}return t}),[]):[],a.x,a.y),f=u.length&&e.nodes[u[l.index]],p={placement:H(H({},l),{currentNode:f}),error:!1};return d&&n().node(d.id).isDraggable((function(e){return p.error=e})),n().node(c.id).isDroppable(t,(function(e){return p.error=e})),p}}},getOptions:function(){return t},node:function(t){return function e(t,n){S("string"==typeof n,b);var r=t.nodes[n],a=function(n){return e(t,n)};return{isCanvas:function(){return!!r.data.isCanvas},isRoot:function(){return r.id===d},isLinkedNode:function(){return r.data.parent&&a(r.data.parent).linkedNodes().includes(r.id)},isTopLevelNode:function(){return this.isRoot()||this.isLinkedNode()},isDeletable:function(){return!this.isTopLevelNode()},isParentOfTopLevelNodes:function(){return r.data.linkedNodes&&Object.keys(r.data.linkedNodes).length>0},isParentOfTopLevelCanvas:function(){return o("query.node(id).isParentOfTopLevelCanvas",{suggest:"query.node(id).isParentOfTopLevelNodes"}),this.isParentOfTopLevelNodes()},get:function(){return r},ancestors:function(e){return void 0===e&&(e=!1),function n(r,o,a){void 0===o&&(o=[]),void 0===a&&(a=0);var i=t.nodes[r];return i?(o.push(r),i.data.parent?((e||!e&&0===a)&&(o=n(i.data.parent,o,a+1)),o):o):o}(r.data.parent)},descendants:function(e,r){return void 0===e&&(e=!1),function n(o,i,d){return void 0===i&&(i=[]),void 0===d&&(d=0),(e||!e&&0===d)&&t.nodes[o]?("childNodes"!==r&&a(o).linkedNodes().forEach((function(e){i.push(e),i=n(e,i,d+1)})),"linkedNodes"!==r&&a(o).childNodes().forEach((function(e){i.push(e),i=n(e,i,d+1)})),i):i}(n)},linkedNodes:function(){return Object.values(r.data.linkedNodes||{})},childNodes:function(){return r.data.nodes||[]},isDraggable:function(n){try{var o=r;return S(!this.isTopLevelNode(),f),S(e(t,o.data.parent).isCanvas(),p),S(o.rules.canDrag(o,a),v),!0}catch(e){return n&&n(e),!1}},isDroppable:function(e,n){var o="object"==typeof e&&!t.nodes[e.id],i=function(e){return"string"==typeof e?t.nodes[e]:e}(e),d=r;try{if("string"==typeof e&&S(!a(e).isTopLevelNode(),f),S(this.isCanvas(),h),S(d.rules.canMoveIn(i,d,a),m),S(i.rules.canDrop(d,i,a),g),o)return!0;var s=a(i.id).descendants(!0);S(!s.includes(d.id)&&d.id!==i.id,y);var c=i.data.parent&&t.nodes[i.data.parent];return S(c.data.isCanvas,p),S(c||!c&&!t.nodes[i.id],N),r!==c&&S(c.rules.canMoveOut(i,c,a),E),!0}catch(e){return n&&n(e),!1}},toSerializedNode:function(){return n=t.options.resolver,o=(e=r.data).type,a=e.props,i=e.isCanvas,d=W(e,["type","props","isCanvas","name"]),s=ke({type:o,isCanvas:i,props:a},n),H(H({},s),d);var e,n,o,a,i,d,s},toNodeTree:function(e){var t=J([n],this.descendants(!0,e)).reduce((function(e,t){return e[t]=a(t).get(),e}),{});return{rootNodeId:n,nodes:t}},decendants:function(e){return void 0===e&&(e=!1),o("query.node(id).decendants",{suggest:"query.node(id).descendants"}),this.descendants(e)},isTopLevelCanvas:function(){return!this.isRoot()&&!r.data.parent}}}(e,t)},getSerializedNodes:function(){var t=this,n=Object.keys(e.nodes).map((function(e){return[e,t.node(e).toSerializedNode()]}));return Ee(n)},serialize:function(){return JSON.stringify(this.getSerializedNodes())},parseReactElement:function(t){return{toNodeTree:function(r){var o=function(e,t){var n=e;return"string"==typeof n&&(n=w.createElement(R,{},n)),Pe({data:{type:n.type,props:H({},n.props)}},(function(e){t&&t(e,n)}))}(t,(function(t,n){var o=be(e.options.resolver,t.data.type);S(null!==o,k),t.data.displayName=t.data.displayName||o,t.data.name=o,r&&r(t,n)})),a=[];return t.props&&t.props.children&&(a=w.Children.toArray(t.props.children).reduce((function(e,t){return w.isValidElement(t)&&e.push(n().parseReactElement(t).toNodeTree(r)),e}),[])),function(e,t){return{rootNodeId:e.id,nodes:je(e,t)}}(o,a)}}},parseSerializedNode:function(t){return{toNode:function(r){var a=function(e,t){var n=e.type,r=W(e,["type","props"]);S(void 0!==n&&"string"==typeof n||void 0!==n&&void 0!==n.resolvedName,O.replace("%displayName%",e.displayName).replace("%availableComponents%",Object.keys(t).join(", ")));var o=we(e,t),a=o.name;return{type:o.type,name:a,displayName:r.displayName||a,props:o.props,custom:r.custom||{},isCanvas:!!r.isCanvas,hidden:!!r.hidden,parent:r.parent,linkedNodes:r.linkedNodes||r._childCanvas||{},nodes:r.nodes||[]}}(t,e.options.resolver);S(a.type,k);var i="string"==typeof r&&r;return i&&o("query.parseSerializedNode(...).toNode(id)",{suggest:"query.parseSerializedNode(...).toNode(node => node.id = id)"}),n().parseFreshNode(H(H({},i?{id:i}:{}),{data:a})).toNode(!i&&r)}}},parseFreshNode:function(t){return{toNode:function(n){return Pe(t,(function(t){t.data.parent===l&&(t.data.parent=d);var r=be(e.options.resolver,t.data.type);S(null!==r,k),t.data.displayName=t.data.displayName||r,t.data.name=r,n&&n(t)}))}}},createNode:function(e,t){o("query.createNode("+e+")",{suggest:"query.parseReactElement("+e+").toNodeTree()"});var n=this.parseReactElement(e).toNodeTree(),r=n.nodes[n.rootNodeId];return t?(t.id&&(r.id=t.id),t.data&&(r.data=H(H({},r.data),t.data)),r):r},getState:function(){return e}}}var De={nodes:{},events:{dragged:null,selected:null,hovered:null,indicator:null},handlers:null,options:{onNodesChange:function(){return null},onRender:function(e){return e.render},resolver:{},enabled:!0,indicator:{error:"red",success:"rgb(98, 196, 98)"},handlers:function(e){return new Z(e)}}},xe={methods:function(e,t){return H(H({},function(e,t){var n=function(t,n,r){var o=a(n);o.data.nodes||(o.data.nodes=[]),o.data.props.children&&delete o.data.props.children,null!=r?o.data.nodes.splice(r,0,t.id):o.data.nodes.push(t.id),t.data.parent=o.id,e.nodes[t.id]=t},r=function(t,o,a){var i=t.nodes[t.rootNodeId];if(null!=o&&n(i,o,a),i.data.nodes){var d=J(i.data.nodes);i.data.nodes=[],d.forEach((function(e,n){return r({rootNodeId:e,nodes:t.nodes},i.id,n)}))}i.data.linkedNodes&&Object.keys(i.data.linkedNodes).forEach((function(n){var o=i.data.linkedNodes[n];e.nodes[o]=t.nodes[o],r({rootNodeId:o,nodes:t.nodes})}))},a=function(t){S(t,u);var n=e.nodes[t];return S(n,c),n},i=function(t,n){void 0===n&&(n=!1);var r=e.nodes[t],o=e.nodes[r.data.parent];if(r.data.nodes&&J(r.data.nodes).forEach((function(e){return i(e)})),n&&o.data.linkedNodes){var a=Object.keys(o.data.linkedNodes).filter((function(e){return o.data.linkedNodes[e]===e}))[0];a&&delete o.data.linkedNodes[a]}else{var d=o.data.nodes;d.splice(d.indexOf(t),1)}!function(e,t){Object.keys(e.events).forEach((function(n){e.events[n]&&e.events[n]===t&&(e.events[n]=null)}))}(e,t),delete e.nodes[t]};return{addLinkedNodeFromTree:function(t,n,o){var d=a(n);d.data.linkedNodes||(d.data.linkedNodes={});var s=d.data.linkedNodes[o];s&&i(s,!0),d.data.linkedNodes[o]=t.rootNodeId,t.nodes[t.rootNodeId].data.parent=n,e.nodes[t.rootNodeId]=t.nodes[t.rootNodeId],r(t)},add:function(e,t,r){var a=[e];Array.isArray(e)&&(o("actions.add(node: Node[])",{suggest:"actions.add(node: Node)"}),a=e),a.forEach((function(e){n(e,t,r)}))},addNodeTree:function(t,n,o){var a=t.nodes[t.rootNodeId];n||(S(t.rootNodeId===d,"Cannot add non-root Node without a parent"),e.nodes[t.rootNodeId]=a),r(t,n,o)},delete:function(e){S(!t.node(e).isTopLevelNode(),s),i(e)},deserialize:function(e){var n="string"==typeof e?JSON.parse(e):e,r=Object.keys(n).map((function(e){var r=e;return e===l&&(r=d),[r,t.parseSerializedNode(n[e]).toNode((function(e){return e.id=r}))]}));this.replaceNodes(Ee(r))},move:function(n,r,o){var a=e.nodes[n],i=a.data.parent,d=e.nodes[r].data.nodes;t.node(r).isDroppable(a,(function(e){throw new Error(e)}));var s=e.nodes[i].data.nodes;s[s.indexOf(n)]="marked",d.splice(o,0,n),e.nodes[n].data.parent=r,s.splice(s.indexOf("marked"),1)},replaceNodes:function(t){e.nodes=t,this.clearEvents()},clearEvents:function(){this.setNodeEvent("selected",null),this.setNodeEvent("hovered",null),this.setNodeEvent("dragged",null),this.setIndicator(null)},reset:function(){this.clearEvents(),this.replaceNodes({})},setOptions:function(t){t(e.options)},setNodeEvent:function(t,n){var r=e.events[t];r&&n!==r&&(e.nodes[r].events[t]=!1),n?(e.nodes[n].events[t]=!0,e.events[t]=n):e.events[t]=null},setCustom:function(t,n){n(e.nodes[t].data.custom)},setDOM:function(t,n){S(e.nodes[t],c),e.nodes[t].dom=n},setIndicator:function(t){t&&(!t.placement.parent.dom||t.placement.currentNode&&!t.placement.currentNode.dom)||(e.events.indicator=t)},setHidden:function(t,n){e.nodes[t].data.hidden=n},setProp:function(t,n){S(e.nodes[t],c),n(e.nodes[t].data.props)},selectNode:function(e){this.setNodeEvent("selected",null!=e?e:null),this.setNodeEvent("hovered",null)}}}(e,t)),{setState:function(t){var n=W(this,["history"]);t(e,n)}})},ignoreHistoryForActions:["setDOM","setNodeEvent","selectNode","clearEvents","setOptions","setIndicator"],normalizeHistory:function(e){Object.keys(e.events).forEach((function(t){var n=e.events[t];n&&!e.nodes[n]&&(e.events[t]=!1)})),Object.keys(e.nodes).forEach((function(t){var n=e.nodes[t];Object.keys(n.events).forEach((function(t){n.events[t]&&!e.events[t]!==n.id&&(n.events[t]=!1)}))}))}},Ie=function(e){return C(xe,H(H({},De),{options:H(H({},De.options),e)}),Te)},Le=function(e){var t=e.children,n=W(e,["children"]);void 0!==n.resolver&&S("object"==typeof n.resolver&&!Array.isArray(n.resolver),P);var r=Ie(n);return I((function(){r&&n&&r.actions.setOptions((function(e){}))}),[r,n]),I((function(){r.subscribe((function(e){return{json:r.query.serialize()}}),(function(){r.query.getOptions().onNodesChange(r.query)}))}),[r]),r?w.createElement($.Provider,{value:r},w.createElement(te,null,t)):null};export{xe as ActionMethodsWithConfig,Canvas,K as CoreEventHandlers,Z as DefaultEventHandlers,Q as DerivedEventHandlers,Le as Editor,pe as Element,te as Events,he as Frame,G as Handlers,re as NodeContext,oe as NodeProvider,ye as connectEditor,Ne as connectNode,le as defaultElementProps,B as defineEventListener,ve as deprecateCanvasComponent,De as editorInitialState,fe as elementPropToNodeData,ge as useEditor,Ie as useEditorStore,Y as useEventHandler,ie as useNode};
