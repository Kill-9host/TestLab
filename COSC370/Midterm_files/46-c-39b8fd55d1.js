(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[46],{EeaK:function(e,t,n){"use strict"
var a=n("RtDj")
var s=n("LvDl")
var o=n.n(s)
var r=n("ouhR")
var i=n.n(r)
var c=n("q1tI")
var l=n.n(c)
var d=n("TSYQ")
var u=n.n(d)
n("17x9")
var m=n("ZbPE")
var v=n("TstA")
var b=n("HGxv")
var p=b["default"].scoped("edit_rubricRatings")
n("fHU0")
const g=(e,t)=>null!==t?p.t("%{points} to >%{endOfRangePoints} pts",{points:p.toNumber(e,{precision:2,strip_insignificant_zeros:true}),endOfRangePoints:p.toNumber(t,{precision:2,strip_insignificant_zeros:true})}):p.t("%{points} pts",{points:p.toNumber(e,{precision:2,strip_insignificant_zeros:true})})
const f=e=>{const{assessing:t,classes:n,description:s,endOfRangePoints:o,footer:r,long_description:i,points:c,onClick:l,shaderClass:d,tierColor:v,hidePoints:b,isSummary:f,selected:h}=e
const O={backgroundColor:v}
const j={borderBottomColor:v}
const C=u()("shader",d)
const y=()=>Object(a["a"])("div",{className:"rating-points"},void 0,Object(a["a"])(m["a"],{size:"small",weight:"bold"},void 0,g(c,o)))
return Object(a["a"])("div",{className:n,onClick:t?l:null,onKeyPress:e=>"Enter"===e.key?l():null,role:t?"button":null,tabIndex:t?0:null},void 0,b?null:y(),Object(a["a"])("div",{className:"rating-description"},void 0,Object(a["a"])(m["a"],{size:"small",lineHeight:"condensed",weight:"bold"},void 0,s)),Object(a["a"])(m["a"],{size:"small",lineHeight:"condensed"},void 0,i),Object(a["a"])("div",{className:"rating-footer"},void 0,r),Object(a["a"])("div",{className:C,style:O,"aria-label":f||!h?null:p.t("This rating is selected")},void 0,Object(a["a"])("div",{className:"triangle",style:j})))}
const h=(e,t,n)=>{const a=o.a.sortBy(n,"points").reverse()
const s=t>0?e*(a[0].points/t):e
const r=o.a.find(a,e=>s>=e.points)
return r?"#"+r.color:"#"+o.a.last(a).color}
f.defaultProps={footer:null,selected:false,endOfRangePoints:null,hidePoints:false,shaderClass:null}
const O=e=>{var t
const{assessing:n,selectedRatingId:s,customRatings:r,defaultMasteryThreshold:c,footer:d,tiers:m,points:b,pointsPossible:g,hidePoints:O,onPointChange:j,isSummary:C,useRange:y}=e
const _=m.map((e,t)=>{const n=m[t+1]
return{current:e.points,next:n?n.points:null}})
const w=()=>s?o.a.findIndex(m,e=>e.id===s&&(y||e.points===b)):_.findIndex(({current:e,next:t})=>{const n=b===e
const a=b>t&&b<=e
const s=0===b&&null===t
return n||y&&(a||s)})
const L=(e,t)=>{if(t)return e===t.points?null:t.points
if(0!==e)return 0
return null}
const R=e=>{if(!e)return"transparent"
return r&&r.length>0?h(b,g,r):null}
const P=e=>{if(!e)return null
if(r&&r.length>0)return null
return b>=1.5*c?"exceedsMasteryShader":b>=c?"meetsMasteryShader":b>=c/2?"nearMasteryShader":"wellBelowMasteryShader"}
const x=(e,t)=>{j(e,t)
i.a.screenReaderFlashMessage(t?p.t("Rating selected"):p.t("Rating unselected"))}
const k=void 0!==b?w():null
const S=m.map((e,t)=>({tier:e,index:t,selected:k===t})).filter(({selected:e})=>!C||e)
const N=S.map(({tier:e,index:t})=>{const s=k===t
const o=u()({"rating-tier":true,selected:s,assessing:n})
return Object(a["a"])(v["a"].Item,{width:100/S.length+"%",align:"start"},"tier-"+t,l.a.createElement(f,Object.assign({key:t,assessing:n,classes:o,endOfRangePoints:y?L(e.points,m[t+1]):null,footer:C?d:null,onClick:()=>x(e,s),shaderClass:P(s),tierColor:R(s),hidePoints:C||O,isSummary:C,selected:s},e)))}).filter(e=>null!==e)
const B=()=>Object(a["a"])(f,{assessing:n,classes:"rating-tier",description:p.t("No details"),footer:d,isSummary:C,points:0,hidePoints:C||O},0)
const I=()=>C||o.a.isNil(d)?null:t||(t=Object(a["a"])("div",{className:"rating-all-footer"},void 0,d))
return Object(a["a"])("div",{},void 0,Object(a["a"])(v["a"],{},void 0,N.length>0||!C?N:B()),I())}
O.defaultProps={footer:null,hidePoints:false,onPointChange:()=>{}}
t["a"]=O},ZCOX:function(e,t,n){"use strict"
n.d(t,"a",(function(){return m}))
var a=n("VTBJ")
var s=n("1OyB")
var o=n("vuIU")
var r=n("Ji7U")
var i=n("LK+K")
var c=n("q1tI")
var l=n.n(c)
var d=n("hPGw")
var u=l.a.createElement("path",{d:"M960,5.68434189e-14 C1130.65412,5.68434189e-14 1299.04941,46.08 1447.11529,133.157647 L1389.85412,230.512941 C1259.06824,153.6 1110.43765,112.941176 960,112.941176 C492.875294,112.941176 112.941176,492.875294 112.941176,960 C112.941176,1427.12471 492.875294,1807.05882 960,1807.05882 C1427.12471,1807.05882 1807.05882,1427.12471 1807.05882,960 C1807.05882,809.449412 1766.4,660.818824 1689.48706,530.032941 L1786.72941,472.884706 C1873.92,620.950588 1920,789.345882 1920,960 C1920,1489.35529 1489.35529,1920 960,1920 C430.644706,1920 0,1489.35529 0,960 C0,430.644706 430.644706,5.68434189e-14 960,5.68434189e-14 Z M960,338.823529 L960,451.764706 C679.792941,451.764706 451.764706,679.792941 451.764706,960 C451.764706,1240.20706 679.792941,1468.23529 960,1468.23529 C1240.20706,1468.23529 1468.23529,1240.20706 1468.23529,960 L1581.17647,960 C1581.17647,1302.55059 1302.43765,1581.17647 960,1581.17647 C617.562353,1581.17647 338.823529,1302.55059 338.823529,960 C338.823529,617.449412 617.562353,338.823529 960,338.823529 Z M960,677.647059 L960,790.588235 C866.597647,790.588235 790.588235,866.597647 790.588235,960 C790.588235,1053.40235 866.597647,1129.41176 960,1129.41176 C1053.40235,1129.41176 1129.41176,1053.40235 1129.41176,960 L1242.35294,960 C1242.35294,1115.63294 1115.74588,1242.35294 960,1242.35294 C804.254118,1242.35294 677.647059,1115.63294 677.647059,960 C677.647059,804.367059 804.254118,677.647059 960,677.647059 Z M1823.41271,16.4668235 L1903.37506,96.3162353 L1322.145,677.647 L1581.17647,677.647059 L1581.17647,790.588235 L1129.41176,790.588235 L1129.41176,338.823529 L1242.35294,338.823529 L1242.352,597.729 L1823.41271,16.4668235 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var m=function(e){Object(r["a"])(n,e)
var t=Object(i["a"])(n)
function n(){Object(s["a"])(this,n)
return t.apply(this,arguments)}Object(o["a"])(n,[{key:"render",value:function(){return l.a.createElement(d["a"],Object.assign({},this.props,{name:"IconOutcomes",viewBox:"0 0 1920 1920"}),u)}}])
n.displayName="IconOutcomesLine"
return n}(c["Component"])
m.glyphName="outcomes"
m.variant="Line"
m.propTypes=Object(a["a"])({},d["a"].propTypes)},Zgll:function(e,t,n){"use strict"
n.d(t,"a",(function(){return _}))
var a=n("Ff2n")
var s=n("1OyB")
var o=n("vuIU")
var r=n("Ji7U")
var i=n("LK+K")
var c=n("q1tI")
var l=n.n(c)
var d=n("17x9")
var u=n.n(d)
var m=n("oXx0")
var v=n("J2CL")
var b=n("jtGx")
var p=n("6SzX")
var g=n("C6Zt")
var f=n("tPrY")
var h,O,j,C,y
var _=(h=Object(m["a"])(),O=Object(v["j"])(f["a"]),h(j=O(j=(y=C=function(e){Object(r["a"])(n,e)
var t=Object(i["a"])(n)
function n(){var e
Object(s["a"])(this,n)
for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r]
e=t.call.apply(t,[this].concat(o))
e._baseButton=null
return e}Object(o["a"])(n,[{key:"focus",value:function(){this._baseButton&&this._baseButton.focus()}},{key:"render",value:function(){var e=this
var t=this.props,n=t.children,s=t.renderIcon,o=t.screenReaderLabel,r=t.type,i=t.size,c=t.elementRef,d=t.as,u=t.interaction,m=t.color,v=t.focusColor,f=t.shape,h=t.withBackground,O=t.withBorder,j=t.margin,C=t.cursor,y=t.href,_=Object(a["a"])(t,["children","renderIcon","screenReaderLabel","type","size","elementRef","as","interaction","color","focusColor","shape","withBackground","withBorder","margin","cursor","href"])
var w=this.theme
return l.a.createElement(g["a"],Object.assign({},Object(b["b"])(_),{type:r,size:i,elementRef:c,as:d,interaction:u,color:m,focusColor:v,shape:f,withBackground:h,withBorder:O,margin:j,cursor:C,href:y,renderIcon:n||s,theme:w,ref:function(t){e._baseButton=t}}),l.a.createElement(p["a"],null,o))}},{key:"focused",get:function(){return this._baseButton&&this._baseButton.focused}}])
n.displayName="IconButton"
return n}(c["Component"]),C.propTypes={children:u.a.oneOfType([u.a.node,u.a.func]),renderIcon:u.a.oneOfType([u.a.node,u.a.func]),screenReaderLabel:u.a.string.isRequired,type:u.a.oneOf(["button","submit","reset"]),size:u.a.oneOf(["small","medium","large"]),elementRef:u.a.func,as:u.a.elementType,interaction:u.a.oneOf(["enabled","disabled","readonly"]),color:u.a.oneOf(["primary","primary-inverse","secondary","success","danger"]),focusColor:u.a.oneOf(["info","inverse"]),shape:u.a.oneOf(["rectangle","circle"]),withBackground:u.a.bool,withBorder:u.a.bool,margin:v["c"].spacing,cursor:u.a.string,href:u.a.string},C.defaultProps={children:null,renderIcon:void 0,type:"button",size:"medium",elementRef:function(e){},as:"button",interaction:void 0,color:"secondary",focusColor:void 0,shape:"rectangle",withBackground:true,withBorder:true,margin:"0",cursor:"pointer",href:void 0},y))||j)||j)},aLXX:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
n.d(t,"b",(function(){return l}))
n.d(t,"c",(function(){return d}))
var a=n("LvDl")
var s=n.n(a)
const o=e=>({criterion_id:e,points:{text:"",valid:true}})
const r=e=>{const{comments:t,points:n}=e
const a=!s.a.isNil(n)
const o=!s.a.isNil(t)&&t.length>0
return{...e,points:{text:a?null:"--",valid:a,value:n},editComments:o}}
const i=(e,t,n)=>{const a=s.a.keyBy(s.a.cloneDeep(t.data),e=>e.criterion_id)
return{score:0,...n,...t,data:e.criteria.map(e=>s.a.has(a,e.id)?r(a[e.id]):o(e.id))}}
const c=e=>["summary_data","saved_comments",e]
const l=(e,t)=>s.a.get(e,c(t),void 0)
const d=(e,t)=>{t.data.filter(({saveCommentsForLater:e})=>e).forEach(({criterion_id:t,comments:n})=>{const a=l(e,t)||[]
s.a.set(e,c(t),s.a.uniq([...a,n]))})}},fHU0:function(e,t,n){"use strict"
var a=n("17x9")
var s=n.n(a)
const o={text:s.a.string,value:s.a.number,valid:s.a.boolean}
const r={points:s.a.number,description:s.a.string,long_description:s.a.string,endOfRangePoints:s.a.number}
s.a.arrayOf(s.a.shape(r)).isRequired,s.a.number,s.a.string,s.a.number,s.a.bool.isRequired
const i={criterion_id:s.a.string.isRequired,comments:s.a.string,points:s.a.shape(o).isRequired,focusPoints:s.a.number,saveCommentsForLater:s.a.bool}
const c={id:s.a.string.isRequired,description:s.a.string,long_description:s.a.string,learning_outcome_id:s.a.string,points:s.a.number,ratings:s.a.arrayOf(s.a.shape(r)),mastery_points:s.a.number}
s.a.arrayOf(s.a.shape(c)),s.a.bool,s.a.number.isRequired,s.a.string.isRequired
s.a.bool,s.a.shape({saved_comments:s.a.objectOf(s.a.arrayOf(s.a.string))})
s.a.arrayOf(s.a.shape(i)).isRequired,s.a.number},"kv/t":function(e,t,n){"use strict"
var a=n("RtDj")
var s=n("TstA")
var o=n("VZBX")
var r=n("HGxv")
var i=r["default"].scoped("edit_rubricRubric")
var c=n("LvDl")
var l=n.n(c)
n("17x9")
var d=n("q1tI")
var u=n.n(d)
var m=n("6SzX")
var v=n("MicT")
var b=n("Mmr1")
var p=n("8t0o")
var g=n("ZbPE")
var f=n("msMH")
var h=n("ZCOX")
var O=n("Dibh")
var j=r["default"].scoped("edit_rubricCriterion")
var C=n("FdVj")
n("fHU0")
var y=n("Zgll")
var _=n("VTBJ")
var w=n("1OyB")
var L=n("vuIU")
var R=n("Ji7U")
var P=n("LK+K")
var x=n("hPGw")
var k=u.a.createElement("path",{d:"M84,0 L84,1423.14253 L521.875,1423.14253 L521.875,1920 L1143.11016,1423.14253 L1835.5,1423.14253 L1835.5,0 L84,0 Z M193.46875,109.464082 L1726.03125,109.464082 L1726.03125,1313.56899 L1104.79609,1313.56899 L631.34375,1692.31471 L631.34375,1313.56899 L193.46875,1313.56899 L193.46875,109.464082 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var S=function(e){Object(R["a"])(n,e)
var t=Object(P["a"])(n)
function n(){Object(w["a"])(this,n)
return t.apply(this,arguments)}Object(L["a"])(n,[{key:"render",value:function(){return u.a.createElement(x["a"],Object.assign({},this.props,{name:"IconFeedback",viewBox:"0 0 1920 1920",bidirectional:true}),k)}}])
n.displayName="IconFeedbackLine"
return n}(d["Component"])
S.glyphName="feedback"
S.variant="Line"
S.propTypes=Object(_["a"])({},x["a"].propTypes)
var N=r["default"].scoped("edit_rubricCommentButton")
var B
const I=({onClick:e})=>Object(a["a"])("div",{},void 0,Object(a["a"])(y["a"],{renderIcon:B||(B=Object(a["a"])(S,{})),withBackground:false,withBorder:false,margin:"0 x-small 0 0",onClick:e,screenReaderLabel:N.t("Add Additional Comments")}))
var z=I
var T=n("9lnB")
var E=n("2zZe")
var M=n("M8//")
var H=r["default"].scoped("edit_rubricComments")
var A,Z
const q=()=>H.t("…")
const D=e=>e.length>100?e.slice(0,99)+q():e
const F=e=>e.replace(/\W/g,"")
const K=e=>{const{allowSaving:t,savedComments:n,comments:s,large:o,saveLater:r,setComments:i,setSaveLater:c}=e
const l=Object(a["a"])(E["a"].Option,{id:"first",value:"first"},"first",H.t("[ Select ]"))
const d=n.map((e,t)=>Object(a["a"])(E["a"].Option,{id:`${F(e).slice(-6)}_${t}`,value:t.toString(),label:e},F(e).slice(-8),D(e)))
const u=[Object(a["a"])(E["a"],{renderLabel:H.t("Saved Comments"),assistiveText:H.t("Select from saved comments"),onChange:(e,t)=>{i(n[t.value])}},void 0,[l,...d]),A||(A=Object(a["a"])("br",{},"br"))]
const v=()=>{if(t&&o)return Object(a["a"])(T["a"],{checked:r,label:H.t("Save this comment for reuse"),size:"small",onChange:e=>c(e.target.checked)})}
const b=H.t("Comments")
const p=e=>Object(a["a"])(m["a"],{},void 0,e)
const g="edit-freeform-comments-"+(o?"large":"small")
return Object(a["a"])("div",{className:g},void 0,d.length>0?u:null,Object(a["a"])(M["a"],{"data-selenium":"criterion_comments_text",label:o?b:p(b),placeholder:o?void 0:b,maxHeight:"50rem",onChange:e=>i(e.target.value),resize:"vertical",size:"small",value:s}),o?Z||(Z=Object(a["a"])("br",{})):null,v())}
K.defaultProps={comments:"",saveLater:false}
const U=e=>e.comments_html||e.comments?Object(a["a"])("div",{},void 0,Object(a["a"])(g["a"],{size:"small",weight:"bold"},void 0,H.t("Comments")),e.comments_html?Object(a["a"])("div",{dangerouslySetInnerHTML:{__html:e.comments_html}}):Object(a["a"])("div",{},void 0,e.comments)):null
const X=({assessment:e,placeholder:t,weight:n})=>Object(a["a"])("span",{className:"react-rubric-break-words"},void 0,Object(a["a"])(g["a"],{size:"x-small",weight:n},void 0,null!==e?U(e):t))
X.defaultProps={assessment:null,placeholder:""}
const W=e=>{const{editing:t,assessment:n,footer:s,...o}=e
return t&&null!==n?u.a.createElement(K,Object.assign({comments:n.comments,saveLater:n.saveCommentsForLater},o)):Object(a["a"])("div",{className:"rubric-freeform"},void 0,Object(a["a"])(X,{assessment:n,placeholder:H.t("This area will be used by the assessor to leave comments related to this criterion."),weight:"normal"}),s)}
W.defaultProps={allowSaving:true,footer:null,large:true}
var J=W
var G=n("WEeK")
var V=r["default"].scoped("edit_rubricPoints")
const Y=e=>V.toNumber(e,{precision:Math.floor(e)===e?0:2,strip_insignificant_zeros:true})
const $=e=>null===e.text?Y(e.value).toString():e.text
const Q=e=>V.t("%{possible} pts",{possible:V.toNumber(e,{precision:2,strip_insignificant_zeros:true})})
const ee=(e,t)=>V.t("%{points} / %{possible}",{points:$(e),possible:Q(t)})
const te=()=>[{text:V.t("Invalid score"),type:"error"}]
const ne=e=>e.valid?[]:te()
const ae=()=>[{text:V.t("Cannot give outcomes extra credit"),type:"error"}]
const se=(e,t,n)=>!n&&e.value>t?ae():[]
const oe=e=>{const{allowExtraCredit:t,assessing:n,assessment:o,onPointChange:r,pointsPossible:i}=e
if(null===o)return Object(a["a"])("div",{className:"react-rubric-cell graded-points"},void 0,Q(i))
{const e=l.a.get(o,"points")
return n?Object(a["a"])("div",{className:"react-rubric-cell graded-points"},void 0,Object(a["a"])(s["a"],{alignItems:"end",wrap:"wrap"},void 0,Object(a["a"])(s["a"].Item,{size:"4rem",margin:"none small none none"},void 0,Object(a["a"])(G["a"],{display:"inline-block",renderLabel:Object(a["a"])(m["a"],{},void 0,V.t("Points")),messages:[...ne(e),...se(e,i,t)],onChange:e=>r(e.target.value),value:$(e),width:"4rem"})),Object(a["a"])(s["a"].Item,{margin:"small none none none"},void 0,"/ "+Q(i)))):Object(a["a"])("div",{className:"react-rubric-cell graded-points"},void 0,ee(e,i))}}
oe.defaultProps={allowExtraCredit:true,assessing:false,onPointChange:null}
var re=oe
var ie=n("EeaK")
var ce,le
const de=()=>Object(a["a"])("span",{},void 0,ce||(ce=Object(a["a"])(h["a"],{}))," ",Object(a["a"])(m["a"],{},void 0,j.t("This criterion is linked to a Learning Outcome")))
const ue=({showLongDescription:e})=>Object(a["a"])(p["a"],{onClick:()=>e(),display:"block",textAlign:"start"},void 0,Object(a["a"])(g["a"],{size:"x-small"},void 0,j.t("view longer description")))
const me=({open:e,close:t,longDescription:n})=>{const s=j.t("Criterion Long Description")
return Object(a["a"])(O["a"],{open:e,onDismiss:t,size:"medium",label:s,shouldCloseOnDocumentClick:true},void 0,Object(a["a"])(O["a"].Header,{},void 0,Object(a["a"])(b["a"],{placement:"end",offset:"medium",onClick:t,screenReaderLabel:"\\n          Close\\n        "}),Object(a["a"])(f["a"],{},void 0,s)),Object(a["a"])(O["a"].Body,{},void 0,Object(a["a"])(g["a"],{lineHeight:"double",wrap:"break-word"},void 0,Object(a["a"])("div",{dangerouslySetInnerHTML:{__html:n}}))))}
me.defaultProps={open:false}
const ve=({threshold:e})=>Object(a["a"])(g["a"],{size:"x-small",weight:"normal"},void 0,j.t("threshold: %{pts}",{pts:j.toNumber(e,{precision:2,strip_insignificant_zeros:true})}))
ve.defaultProps={threshold:null}
class be extends u.a.Component{constructor(...e){super(...e)
this.state={}
this.closeModal=()=>{this.setState({dialogOpen:false})}
this.openModal=()=>{this.setState({dialogOpen:true})}}render(){var e,t
const{allowExtraCredit:n,allowSavedComments:s,assessment:r,criterion:i,customRatings:c,freeForm:d,onAssessmentChange:u,savedComments:m,isSummary:b,hidePoints:p,hasPointsColumn:f}=this.props
const{dialogOpen:h}=this.state
const O=void 0!==i.learning_outcome_id
const j=i.criterion_use_range
const y=i.ignore_for_scoring
const _=null!==u&&null!==r
const w=(e,t)=>{"string"===typeof e&&(e=l.a.find(i.ratings,t=>t.points.toString()===e)||{points:e})
const n=e.points.toString()
const a=C["a"].parse(n)
const s=!Number.isNaN(a)
u(t?{points:{text:"",valid:true}}:{points:{text:n,valid:s,value:s?a:void 0},description:e.description,id:e.id})}
const L=_?w:void 0
const R=i.points
const P=()=>!p&&!y&&Object(a["a"])(re,{allowExtraCredit:!O||n,assessing:_,assessment:r,onPointChange:L,pointsPossible:R},"points")
const x=()=>e||(e=Object(a["a"])(X,{assessment:r,weight:"light"},"comment"))
const k=()=>[x(),P()]
const S=Object(a["a"])(J,{allowSaving:s,editing:_,assessment:r,footer:b?P():null,large:d,savedComments:m,setSaveLater:e=>u({saveCommentsForLater:e}),setComments:e=>u({comments:e})})
const N=(l.a.get(r,"comments")||"").length>0
const B=N||d||l.a.get(r,"editComments",false)
const I=l.a.get(r,"commentFocus",false)
const T=()=>{if(B)return I?t||(t=Object(a["a"])(v["a"],{open:true},void 0,S)):S}
const E=d?S:Object(a["a"])(ie["a"],{assessing:_,customRatings:c,footer:b?k():T(),tiers:i.ratings,onPointChange:L,points:l.a.get(r,"points.value"),selectedRatingId:l.a.get(r,"id"),pointsPossible:R,defaultMasteryThreshold:O?i.mastery_points:i.points,isSummary:b,useRange:j,hidePoints:p})
const M=()=>u({commentFocus:true,editComments:true})
const H=null!==r?Object(a["a"])(z,{onClick:M}):null
const A=i.long_description
const Z=i.mastery_points
return Object(a["a"])(o["a"].Row,{"data-testid":"rubric-criterion"},void 0,Object(a["a"])(o["a"].RowHeader,{},void 0,Object(a["a"])("div",{className:"description react-rubric-cell"},void 0,O?le||(le=Object(a["a"])(de,{})):"",Object(a["a"])(g["a"],{size:"small",weight:"normal"},void 0,i.description)),Object(a["a"])("div",{className:"long-description"},void 0,""!==A?Object(a["a"])(ue,{showLongDescription:this.openModal}):null,Object(a["a"])(me,{close:this.closeModal,longDescription:A,open:h})),p||l.a.isNil(Z)?null:Object(a["a"])(ve,{threshold:Z})),Object(a["a"])(o["a"].Cell,{},void 0,E),f&&Object(a["a"])(o["a"].Cell,{"data-testid":"criterion-points"},void 0,P(),!_||d||B?null:H))}}be.displayName="Row"
be.defaultProps={allowExtraCredit:false,allowSavedComments:true,assessment:null,customRatings:[],onAssessmentChange:null,savedComments:[],isSummary:false,hidePoints:false,hasPointsColumn:true}
var pe=n("aLXX")
const ge=20
const fe=95
const he=e=>i.t("Total Points: %{total}",{total:i.toNumber(e,{precision:2,strip_insignificant_zeros:true})})
const Oe=(e,t)=>i.t("Total Points: %{total} out of %{possible}",{total:Y(e),possible:i.toNumber(t,{precision:2,strip_insignificant_zeros:true})})
const je=({children:e})=>Object(a["a"])("tr",{style:{visibility:"collapse"}},void 0,e)
je.displayName="Row"
const Ce=e=>{const{allowExtraCredit:t,customRatings:n,onAssessmentChange:r,rubric:l,rubricAssessment:m,rubricAssociation:v,isSummary:b,flexWidth:p}=e
const g=Object(d["useRef"])()
const[f,h]=Object(d["useState"])(void 0)
const O="peer_review"===Object(c["get"])(m,"assessment_type")
const j=null!==r
const C=Object(c["get"])(m,"data",[])
const y=Object(c["keyBy"])(C,e=>e.criterion_id)
const _=Object(c["keyBy"])(l.criteria,e=>e.id)
const w=Object(c["get"])(v,"hide_points",false)
const L=l.free_form_criterion_comments
const R=e=>t=>{const n=C.map(n=>n.criterion_id===e?{...n,...t}:n)
const a=e=>!!Object(c["isUndefined"])(e)||e.ignore_for_scoring
const s=n.filter(e=>!a(_[e.criterion_id])).map(e=>Object(c["get"])(e,"points.value",0))
r({...m,data:n,score:Object(c["sum"])(s)})}
const P=()=>{if(b)return false
if(!w)return true
if(j&&!L)return true
return false}
const x=l.criteria.map(e=>{const s=y[e.id]
return Object(a["a"])(be,{allowExtraCredit:t,allowSavedComments:!O,assessment:s,criterion:e,customRatings:n,freeForm:L,isSummary:b,onAssessmentChange:j?R(e.id):void 0,savedComments:Object(pe["b"])(v,e.id),hidePoints:w,hasPointsColumn:P()},e.id)})
const k=l.points_possible
const S=Object(c["get"])(m,"score",k)
const N=j?Oe(S,k):he(S)
const B=true===Object(c["get"])(v,"hide_score_total")
const I=null===Object(c["get"])(v,"score")
const z=!w&&!B
const T=Object(c["max"])(l.criteria.map(e=>e.ratings.length))
const E=()=>{if(b||p)return{}
{const e=L?15:7.5*T
return{minWidth:15+e+"rem"}}}
const M=[Object(a["a"])(o["a"].ColHeader,{id:"table-heading-criteria",width:f},"TableHeadingCriteria",i.t("Criteria")),Object(a["a"])(o["a"].ColHeader,{id:"table-heading-ratings"},"TableHeadingRatings",i.t("Ratings")),P()?Object(a["a"])(o["a"].ColHeader,{id:"table-heading-points",width:f},"TableHeadingPoints",i.t("Pts")):null]
const H=2+(P()?1:0)
Object(d["useEffect"])(()=>{const e=g.current
function t(e){const t=e[0].contentRect.width
if(0===t)return
h(t*ge/100>fe?ge+"%":fe+"px")}if(!e||!window.ResizeObserver)return
const n=new window.ResizeObserver(t)
n.observe(e)
return()=>{n.unobserve(e)}},[])
return u.a.createElement("div",{ref:g,className:"react-rubric",style:E()},Object(a["a"])(o["a"],{caption:l.title},void 0,Object(a["a"])(o["a"].Head,{},void 0,Object(a["a"])(je,{},void 0,M),Object(a["a"])(o["a"].Row,{},void 0,Object(a["a"])(o["a"].ColHeader,{id:"rubric-title",colSpan:H},void 0,l.title)),Object(a["a"])(o["a"].Row,{},void 0,M)),Object(a["a"])(o["a"].Body,{"data-testid":"criterions"},void 0,x,z&&Object(a["a"])(o["a"].Row,{},void 0,Object(a["a"])(o["a"].Cell,{colSpan:H},void 0,Object(a["a"])(s["a"],{justifyItems:"end"},void 0,Object(a["a"])(s["a"].Item,{"data-selenium":"rubric_total"},void 0,B||I?null:N)))))))}
Ce.defaultProps={allowExtraCredit:false,customRatings:[],onAssessmentChange:null,rubricAssessment:null,rubricAssociation:{},isSummary:false,flexWidth:false}
t["a"]=Ce}}])

//# sourceMappingURL=46-c-39b8fd55d1.js.map