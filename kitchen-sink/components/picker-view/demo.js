webpackJsonp([40],{1027:function(n,a,t){"use strict";function e(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(a,"__esModule",{value:!0});var s=t(5),o=e(s),p=t(1),l=e(p),u=t(4),c=e(u),r=t(2),i=e(r),f=t(3),k=e(f);a.default=function(n){return a=function(a){function t(){(0,l.default)(this,t);var n=(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return n.getValue=function(){var a=n.props,t=a.children,e=a.selectedValue;return e&&e.length?e:t?h.default.Children.map(t,function(n){var a=h.default.Children.toArray(n.children||n.props.children);return a&&a[0]&&a[0].props.value}):[]},n.onChange=function(a,t,e){var s=n.getValue().concat();s[a]=t,e&&e(s,a)},n.onValueChange=function(a,t){n.onChange(a,t,n.props.onValueChange)},n.onScrollChange=function(a,t){n.onChange(a,t,n.props.onScrollChange)},n}return(0,k.default)(t,a),(0,c.default)(t,[{key:"render",value:function(){return h.default.createElement(n,(0,o.default)({},this.props,{getValue:this.getValue,onValueChange:this.onValueChange,onScrollChange:this.props.onScrollChange&&this.onScrollChange}))}}]),t}(h.default.Component),a.defaultProps={prefixCls:"rmc-multi-picker",onValueChange:function(){}},a;var a};var d=t(0),h=e(d);n.exports=a.default},1075:function(n,a,t){"use strict";function e(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(a,"__esModule",{value:!0});var s=t(5),o=e(s),p=t(1),l=e(p),u=t(4),c=e(u),r=t(2),i=e(r),f=t(3),k=e(f),d=t(0),h=e(d),g=t(159),v=e(g),y=t(994),C=e(y),m=t(158),b=e(m),_=function(n){function a(){(0,l.default)(this,a);var n=(0,i.default)(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments));return n.state={value:n.getValue(n.props.data,n.props.defaultValue||n.props.value)},n.onValueChange=function(a,t){var e=(0,v.default)(n.props.data,function(n,e){return e<=t&&n.value===a[e]}),s=e[t],o=void 0;for(o=t+1;s&&s.children&&s.children.length&&o<n.props.cols;o++)s=s.children[0],a[o]=s.value;a.length=o,"value"in n.props||n.setState({value:a}),n.props.onChange&&n.props.onChange(a)},n}return(0,k.default)(a,n),(0,c.default)(a,[{key:"componentWillReceiveProps",value:function(n){"value"in n&&this.setState({value:this.getValue(n.data,n.value)})}},{key:"getValue",value:function(n,a){var t=n||this.props.data,e=a||this.props.value||this.props.defaultValue;if(!e||!e.length){e=[];for(var s=0;s<this.props.cols;s++)t&&t.length&&(e[s]=t[0].value,t=t[0].children)}return e}},{key:"getCols",value:function(){var n=this.props,a=n.data,t=n.cols,e=n.pickerPrefixCls,s=n.disabled,o=n.pickerItemStyle,p=n.indicatorStyle,l=this.state.value,u=(0,v.default)(a,function(n,a){return n.value===l[a]}).map(function(n){return n.children}),c=t-u.length;if(c>0)for(var r=0;r<c;r++)u.push([]);return u.length=t-1,u.unshift(a),u.map(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments[1];return h.default.createElement(b.default,{key:a,prefixCls:e,style:{flex:1},disabled:s,itemStyle:o,indicatorStyle:p},n.map(function(n){return h.default.createElement(b.default.Item,{value:n.value,key:n.value},n.label)}))})}},{key:"render",value:function(){var n=this.props,a=n.prefixCls,t=n.className,e=n.rootNativeProps,s=n.style,p=this.getCols(),l=(0,o.default)({flexDirection:"row",alignItems:"center"},s);return h.default.createElement(C.default,{style:l,prefixCls:a,className:t,selectedValue:this.state.value,rootNativeProps:e,onValueChange:this.onValueChange,onScrollChange:n.onScrollChange},p)}}]),a}(h.default.Component);_.defaultProps={cols:3,prefixCls:"rmc-cascader",pickerPrefixCls:"rmc-picker",data:[],disabled:!1},a.default=_,n.exports=a.default},1229:function(n,a,t){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u9009\u62e9\u5668","en-US":"Basic"},filename:"components/picker-view/demo/basic.md",id:"components-picker-view-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> PickerView <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> seasons <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      label<span class="token punctuation">:</span> <span class="token string">\'2013\'</span><span class="token punctuation">,</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'2013\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      label<span class="token punctuation">:</span> <span class="token string">\'2014\'</span><span class="token punctuation">,</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'2014\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      label<span class="token punctuation">:</span> <span class="token string">\'\u6625\'</span><span class="token punctuation">,</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'\u6625\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      label<span class="token punctuation">:</span> <span class="token string">\'\u590f\'</span><span class="token punctuation">,</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'\u590f\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">class</span> <span class="token class-name">PickerViewExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onScrollChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PickerView</span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onScrollChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onScrollChange<span class="token punctuation">}</span></span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span>\n        <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>seasons<span class="token punctuation">}</span></span>\n        <span class="token attr-name">cascade</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PickerViewExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function a(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function e(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}var s=t(0),o=(t(0),t(996),t(1230)),p=function(n){return n&&n.__esModule?n:{default:n}}(o),l=function(){function n(n,a){for(var t=0;t<a.length;t++){var e=a[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(a,t,e){return t&&n(a.prototype,t),e&&n(a,e),a}}(),u=[[{label:"2013",value:"2013"},{label:"2014",value:"2014"}],[{label:"\u6625",value:"\u6625"},{label:"\u590f",value:"\u590f"}]],c=function(t){function o(){var t,e,s,p;n(this,o);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return e=s=a(this,(t=o.__proto__||Object.getPrototypeOf(o)).call.apply(t,[this].concat(u))),s.state={value:null},s.onChange=function(n){console.log(n),s.setState({value:n})},s.onScrollChange=function(n){console.log(n)},p=e,a(s,p)}return e(o,t),l(o,[{key:"render",value:function(){return s.createElement(p.default,{onChange:this.onChange,onScrollChange:this.onScrollChange,value:this.state.value,data:u,cascade:!1})}}]),o}(s.Component);return s.createElement(c,null)}}},1230:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=t(1231),s=function(n){return n&&n.__esModule?n:{default:n}}(e);a.default=s.default,n.exports=a.default},1231:function(n,a,t){"use strict";function e(n){return n&&n.__esModule?n:{default:n}}function s(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function o(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function p(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=function(){function n(n,a){for(var t=0;t<a.length;t++){var e=a[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(a,t,e){return t&&n(a.prototype,t),e&&n(a,e),a}}(),u=t(0),c=e(u),r=t(1075),i=e(r),f=t(994),k=e(f),d=t(158),h=e(d),g=function(n){function a(){s(this,a);var n=o(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments));return n.getCol=function(){var a=n.props,t=a.data,e=a.pickerPrefixCls,s=a.indicatorStyle,o=a.itemStyle;return t.map(function(n,a){return c.default.createElement(h.default,{key:a,prefixCls:e,style:{flex:1},indicatorStyle:s,itemStyle:o},n.map(function(n){return c.default.createElement(h.default.Item,{key:n.value,value:n.value},n.label)}))})},n}return p(a,n),l(a,[{key:"render",value:function(){var n=this.props;return n.cascade?c.default.createElement(i.default,{prefixCls:n.prefixCls,pickerPrefixCls:n.pickerPrefixCls,data:n.data,value:n.value,onChange:n.onChange,onScrollChange:n.onScrollChange,cols:n.cols,indicatorStyle:n.indicatorStyle,pickerItemStyle:n.itemStyle}):c.default.createElement(k.default,{prefixCls:n.prefixCls,selectedValue:n.value,onValueChange:n.onChange,onScrollChange:n.onScrollChange,style:{flexDirection:"row"}},this.getCol())}}]),a}(c.default.Component);a.default=g,g.defaultProps=function(){return{prefixCls:"am-picker",pickerPrefixCls:"am-picker-col",cols:3,cascade:!0,value:[],onChange:function(){}}}(),n.exports=a.default},896:function(n,a,t){n.exports={basic:t(1229)}},959:function(n,a,t){"use strict";t(961),t(962),t(963)},961:function(n,a){},962:function(n,a){},963:function(n,a,t){"use strict";(function(n){}).call(a,t(36))},964:function(n,a){n.exports={}},994:function(n,a,t){"use strict";function e(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(a,"__esModule",{value:!0});var s=t(5),o=e(s),p=t(0),l=e(p),u=t(6),c=e(u),r=t(1027),i=e(r),f=function(n){var a=n.prefixCls,t=n.className,e=n.rootNativeProps,s=n.children,p=n.style,u=n.getValue(),r=l.default.Children.map(s,function(a,t){return l.default.cloneElement(a,{selectedValue:u[t],onValueChange:function(){for(var a=arguments.length,e=Array(a),s=0;s<a;s++)e[s]=arguments[s];return n.onValueChange.apply(n,[t].concat(e))},onScrollChange:n.onScrollChange&&function(){for(var a=arguments.length,e=Array(a),s=0;s<a;s++)e[s]=arguments[s];return n.onScrollChange.apply(n,[t].concat(e))}})});return l.default.createElement("div",(0,o.default)({},e,{style:p,className:(0,c.default)(t,a)}),r)};a.default=(0,i.default)(f),n.exports=a.default},996:function(n,a,t){"use strict";t(959),t(997)},997:function(n,a){}});