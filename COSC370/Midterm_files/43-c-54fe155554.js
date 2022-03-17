(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[43],{"+yat":function(e,n,t){"use strict"
t.d(n,"c",(function(){return i}))
t.d(n,"b",(function(){return o}))
t.d(n,"a",(function(){return s}))
t.d(n,"d",(function(){return u}))
var r=t("xvQv")
function i(e,n){const t=(""+e).trim().toLowerCase()
return n.findIndex(e=>e[0].toLowerCase()===t)}function o(e,n){const t=i(e,n)
if(-1===t)return null
if(0===t)return 100
const o=n[t][1]
const s=n[t-1][1]
const u=100*Object(r["a"])(s-o,4)
let c=1
u<=1&&(c=u<=.1?.01:.1)
return Object(r["a"])(100*s-c,2)}function s(e,n){const t=i(e,n)
if(-1===t)return null
const o=n[t][1]
return Object(r["a"])(100*o,2)}function u(e,n){if(null==n)return null
const t=Object(r["a"])(e,4)
const i=Math.max(t,0)
const o=n.find((e,t)=>{const r=(100*e[1]).toPrecision(4)
return i>=r||t===n.length-1})
return o[0]}},"3vji":function(e,n,t){"use strict"
t.d(n,"b",(function(){return c}))
t.d(n,"f",(function(){return a}))
t.d(n,"a",(function(){return l}))
t.d(n,"d",(function(){return d}))
t.d(n,"e",(function(){return p}))
t.d(n,"c",(function(){return h}))
t.d(n,"g",(function(){return g}))
var r=t("Y/W1")
var i=t.n(r)
var o=t("nc0P")
var s=t.n(o)
function u(e,n){return new s.a(e||0).plus(n||0)}function c(e,n){return new s.a(e||0).div(n||0)}function f(e,n){return new s.a(e||0).times(n||0)}function a(e){return Number.parseFloat(e,10)}function l(e){return e.reduce((e,n)=>e.plus(n||0),s()(0))}function d(e){const n=i.a.reduce(e,u,0)
return a(n)}function p(e,n){const t=i.a.map(e,n)
return d(t)}function h(e,n){const t=e/n*100
if(!Number.isFinite(t))return t
return a(f(c(e,n),100))}function g({score:e,possible:n,weight:t}){return e&&t&&n?s()(e).div(n).times(t):s()(0)}},"5Pfy":function(e,n,t){"use strict"
var r=t("HGxv")
var i=r["default"].scoped("sharedGradeFormatHelper")
var o=t("xvQv")
var s=t("FdVj")
var u=t("3vji")
var c=t("+yat")
const f="points"
const a="percent"
const l="pass_fail"
const d="points_out_of_fraction"
const p=["complete","pass"]
const h=["incomplete","fail"]
const g="–"
function m(e,n){if(n)return n===l
return p.includes(e)||h.includes(e)}function v(e,n){if(n)return n===a
return/%/g.test(e)}function w(e){return"EX"===e}function b(e,n){if(null==e||""===e)return e
if(null==n||""===n)return e
const t={precision:2,strip_insignificant_zeros:true}
let r=g
null!=e&&(r=i.n(e,t))
const o=i.n(n,t)
return i.t("%{score}/%{pointsPossibleTranslated}",{pointsPossibleTranslated:o,score:r})}function x(e){if(p.includes(e))return"complete"
if(h.includes(e))return"incomplete"
return null}function N(e){return e===f||e===a||e===l}function y(e,n){if(n)return N(n)
return"number"===typeof e||m(e)}function E(){return i.t("Excused")}function P(e){return i.n(Object(o["a"])(e,2),{precision:2,strip_insignificant_zeros:true})}function j(e,n){const t=n.pointsPossible?Object(u["c"])(e,n.pointsPossible):e
return i.n(Object(o["a"])(t,2),{percentage:true,precision:2,strip_insignificant_zeros:true})}function O(e,n,t){if(t.pointsPossible){const n=Object(u["c"])(e,t.pointsPossible)
return Object(c["d"])(n,t.gradingScheme)}return null!=n?n:Object(c["d"])(e,t.gradingScheme)}function A(e,n,t){let r=false
r=t.pointsPossible?e>0:p.includes(n)
return r?i.t("Complete"):i.t("Incomplete")}function R(e,n={}){if(e.excused)return E()
if(null==e.grade)return null!=n.defaultValue?n.defaultValue:g
return e.grade}const _={formatGrade(e,n={}){let t=e
if(null==e||""===e)return"defaultValue"in n?n.defaultValue:e
if(w(e))return E()
let r=_.parseGrade(e,n)
if(y(r,n.gradingType))if(m(r,n.gradingType)){r=x(r)
t="complete"===r?i.t("complete"):i.t("incomplete")}else{const s=Object(o["a"])(r,n.precision||2)
t=i.n(s,{percentage:v(e,n.gradingType)})}n.gradingType===f&&n.formatType===d&&(t=b(e,n.pointsPossible))
return t},delocalizeGrade(e){if(void 0===e||null===e||"string"!==typeof e)return e
const n=s["a"].parse(e.replace("%",""))
if(isNaN(n))return e
return n+(/%/g.test(e)?"%":"")},parseGrade(e,n={}){let t
if(null==e||""===e||"number"===typeof e)return e
const r=e.replace("%","")
t=!("delocalize"in n)||n.delocalize||isNaN(r)?s["a"].parse(r):parseFloat(r)
if(isNaN(t))return e
return t},excused:E,isExcused:w,formatGradeInfo:R,formatPointsOutOf:b,formatSubmissionGrade(e,n={version:"final"}){if(e.excused)return E()
const t="entered"===n.version?e.enteredScore:e.score
const r="entered"===n.version?e.enteredGrade:e.grade
if(null==t)return null!=n.defaultValue?n.defaultValue:g
switch(n.formatType){case"percent":return j(t,n)
case"gradingScheme":return O(t,r,n)
case"passFail":return A(t,r,n)
default:return P(t)}},UNGRADED:g}
n["a"]=_},FdVj:function(e,n,t){"use strict"
var r=t("qJBq")
var i=t.n(r)
var o=t("HGxv")
const s={_parseNumber:i.a,parse(e){if(null==e)return NaN
if("number"===typeof e)return e
let n=s._parseNumber(e.toString(),{thousands:o["default"].lookup("number.format.delimiter"),decimal:o["default"].lookup("number.format.separator")})
isNaN(n)&&(n=s._parseNumber(e))
e.toString().match(/e/)&&isNaN(n)&&(n=parseFloat(e))
return n},validate:e=>!isNaN(s.parse(e))}
n["a"]=s},nc0P:function(e,n,t){var r;(function(i){"use strict"
var o,s=20,u=1,c=1e6,f=1e6,a=-7,l=21,d="[big.js] ",p=d+"Invalid ",h=p+"decimal places",g=p+"rounding mode",m=d+"Division by zero",v={},w=void 0,b=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i
function x(){function e(n){var t=this
if(!(t instanceof e))return n===w?x():new e(n)
if(n instanceof e){t.s=n.s
t.e=n.e
t.c=n.c.slice()}else N(t,n)
t.constructor=e}e.prototype=v
e.DP=s
e.RM=u
e.NE=a
e.PE=l
e.version="5.2.2"
return e}function N(e,n){var t,r,i
if(0===n&&1/n<0)n="-0"
else if(!b.test(n+=""))throw Error(p+"number")
e.s="-"==n.charAt(0)?(n=n.slice(1),-1):1;(t=n.indexOf("."))>-1&&(n=n.replace(".",""))
if((r=n.search(/e/i))>0){t<0&&(t=r)
t+=+n.slice(r+1)
n=n.substring(0,r)}else t<0&&(t=n.length)
i=n.length
for(r=0;r<i&&"0"==n.charAt(r);)++r
if(r==i)e.c=[e.e=0]
else{for(;i>0&&"0"==n.charAt(--i););e.e=t-r-1
e.c=[]
for(t=0;r<=i;)e.c[t++]=+n.charAt(r++)}return e}function y(e,n,t,r){var i=e.c,o=e.e+n+1
if(o<i.length){if(1===t)r=i[o]>=5
else if(2===t)r=i[o]>5||5==i[o]&&(r||o<0||i[o+1]!==w||1&i[o-1])
else if(3===t)r=r||!!i[0]
else{r=false
if(0!==t)throw Error(g)}if(o<1){i.length=1
if(r){e.e=-n
i[0]=1}else i[0]=e.e=0}else{i.length=o--
if(r)for(;++i[o]>9;){i[o]=0
if(!o--){++e.e
i.unshift(1)}}for(o=i.length;!i[--o];)i.pop()}}else if(t<0||t>3||t!==~~t)throw Error(g)
return e}function E(e,n,t,r){var i,o,s=e.constructor,u=!e.c[0]
if(t!==w){if(t!==~~t||t<(3==n)||t>c)throw Error(3==n?p+"precision":h)
e=new s(e)
t=r-e.e
e.c.length>++r&&y(e,t,s.RM)
2==n&&(r=e.e+t+1)
for(;e.c.length<r;)e.c.push(0)}i=e.e
o=e.c.join("")
t=o.length
if(2!=n&&(1==n||3==n&&r<=i||i<=s.NE||i>=s.PE))o=o.charAt(0)+(t>1?"."+o.slice(1):"")+(i<0?"e":"e+")+i
else if(i<0){for(;++i;)o="0"+o
o="0."+o}else if(i>0)if(++i>t)for(i-=t;i--;)o+="0"
else i<t&&(o=o.slice(0,i)+"."+o.slice(i))
else t>1&&(o=o.charAt(0)+"."+o.slice(1))
return e.s<0&&(!u||4==n)?"-"+o:o}v.abs=function(){var e=new this.constructor(this)
e.s=1
return e}
v.cmp=function(e){var n,t=this,r=t.c,i=(e=new t.constructor(e)).c,o=t.s,s=e.s,u=t.e,c=e.e
if(!r[0]||!i[0])return r[0]?o:i[0]?-s:0
if(o!=s)return o
n=o<0
if(u!=c)return u>c^n?1:-1
s=(u=r.length)<(c=i.length)?u:c
for(o=-1;++o<s;)if(r[o]!=i[o])return r[o]>i[o]^n?1:-1
return u==c?0:u>c^n?1:-1}
v.div=function(e){var n=this,t=n.constructor,r=n.c,i=(e=new t(e)).c,o=n.s==e.s?1:-1,s=t.DP
if(s!==~~s||s<0||s>c)throw Error(h)
if(!i[0])throw Error(m)
if(!r[0])return new t(0*o)
var u,f,a,l,d,p=i.slice(),g=u=i.length,v=r.length,b=r.slice(0,u),x=b.length,N=e,E=N.c=[],P=0,j=s+(N.e=n.e-e.e)+1
N.s=o
o=j<0?0:j
p.unshift(0)
for(;x++<u;)b.push(0)
do{for(a=0;a<10;a++){if(u!=(x=b.length))l=u>x?1:-1
else for(d=-1,l=0;++d<u;)if(i[d]!=b[d]){l=i[d]>b[d]?1:-1
break}if(!(l<0))break
for(f=x==u?i:p;x;){if(b[--x]<f[x]){d=x
for(;d&&!b[--d];)b[d]=9;--b[d]
b[x]+=10}b[x]-=f[x]}for(;!b[0];)b.shift()}E[P++]=l?a:++a
b[0]&&l?b[x]=r[g]||0:b=[r[g]]}while((g++<v||b[0]!==w)&&o--)
if(!E[0]&&1!=P){E.shift()
N.e--}P>j&&y(N,s,t.RM,b[0]!==w)
return N}
v.eq=function(e){return!this.cmp(e)}
v.gt=function(e){return this.cmp(e)>0}
v.gte=function(e){return this.cmp(e)>-1}
v.lt=function(e){return this.cmp(e)<0}
v.lte=function(e){return this.cmp(e)<1}
v.minus=v.sub=function(e){var n,t,r,i,o=this,s=o.constructor,u=o.s,c=(e=new s(e)).s
if(u!=c){e.s=-c
return o.plus(e)}var f=o.c.slice(),a=o.e,l=e.c,d=e.e
if(!f[0]||!l[0])return l[0]?(e.s=-c,e):new s(f[0]?o:0)
if(u=a-d){if(i=u<0){u=-u
r=f}else{d=a
r=l}r.reverse()
for(c=u;c--;)r.push(0)
r.reverse()}else{t=((i=f.length<l.length)?f:l).length
for(u=c=0;c<t;c++)if(f[c]!=l[c]){i=f[c]<l[c]
break}}if(i){r=f
f=l
l=r
e.s=-e.s}if((c=(t=l.length)-(n=f.length))>0)for(;c--;)f[n++]=0
for(c=n;t>u;){if(f[--t]<l[t]){for(n=t;n&&!f[--n];)f[n]=9;--f[n]
f[t]+=10}f[t]-=l[t]}for(;0===f[--c];)f.pop()
for(;0===f[0];){f.shift();--d}if(!f[0]){e.s=1
f=[d=0]}e.c=f
e.e=d
return e}
v.mod=function(e){var n,t=this,r=t.constructor,i=t.s,o=(e=new r(e)).s
if(!e.c[0])throw Error(m)
t.s=e.s=1
n=1==e.cmp(t)
t.s=i
e.s=o
if(n)return new r(t)
i=r.DP
o=r.RM
r.DP=r.RM=0
t=t.div(e)
r.DP=i
r.RM=o
return this.minus(t.times(e))}
v.plus=v.add=function(e){var n,t=this,r=t.constructor,i=t.s,o=(e=new r(e)).s
if(i!=o){e.s=-o
return t.minus(e)}var s=t.e,u=t.c,c=e.e,f=e.c
if(!u[0]||!f[0])return f[0]?e:new r(u[0]?t:0*i)
u=u.slice()
if(i=s-c){if(i>0){c=s
n=f}else{i=-i
n=u}n.reverse()
for(;i--;)n.push(0)
n.reverse()}if(u.length-f.length<0){n=f
f=u
u=n}i=f.length
for(o=0;i;u[i]%=10)o=(u[--i]=u[i]+f[i]+o)/10|0
if(o){u.unshift(o);++c}for(i=u.length;0===u[--i];)u.pop()
e.c=u
e.e=c
return e}
v.pow=function(e){var n=this,t=new n.constructor(1),r=t,i=e<0
if(e!==~~e||e<-f||e>f)throw Error(p+"exponent")
i&&(e=-e)
for(;;){1&e&&(r=r.times(n))
e>>=1
if(!e)break
n=n.times(n)}return i?t.div(r):r}
v.round=function(e,n){var t=this.constructor
if(e===w)e=0
else if(e!==~~e||e<-c||e>c)throw Error(h)
return y(new t(this),e,n===w?t.RM:n)}
v.sqrt=function(){var e,n,t,r=this,i=r.constructor,o=r.s,s=r.e,u=new i(.5)
if(!r.c[0])return new i(r)
if(o<0)throw Error(d+"No square root")
o=Math.sqrt(r+"")
if(0===o||o===1/0){n=r.c.join("")
n.length+s&1||(n+="0")
o=Math.sqrt(n)
s=((s+1)/2|0)-(s<0||1&s)
e=new i((o==1/0?"1e":(o=o.toExponential()).slice(0,o.indexOf("e")+1))+s)}else e=new i(o)
s=e.e+(i.DP+=4)
do{t=e
e=u.times(t.plus(r.div(t)))}while(t.c.slice(0,s).join("")!==e.c.slice(0,s).join(""))
return y(e,i.DP-=4,i.RM)}
v.times=v.mul=function(e){var n,t=this,r=t.constructor,i=t.c,o=(e=new r(e)).c,s=i.length,u=o.length,c=t.e,f=e.e
e.s=t.s==e.s?1:-1
if(!i[0]||!o[0])return new r(0*e.s)
e.e=c+f
if(s<u){n=i
i=o
o=n
f=s
s=u
u=f}for(n=new Array(f=s+u);f--;)n[f]=0
for(c=u;c--;){u=0
for(f=s+c;f>c;){u=n[f]+o[c]*i[f-c-1]+u
n[f--]=u%10
u=u/10|0}n[f]=(n[f]+u)%10}u?++e.e:n.shift()
for(c=n.length;!n[--c];)n.pop()
e.c=n
return e}
v.toExponential=function(e){return E(this,1,e,e)}
v.toFixed=function(e){return E(this,2,e,this.e+e)}
v.toPrecision=function(e){return E(this,3,e,e-1)}
v.toString=function(){return E(this)}
v.valueOf=v.toJSON=function(){return E(this,4)}
o=x()
o["default"]=o.Big=o
r=function(){return o}.call(n,t,n,e),void 0!==r&&(e.exports=r)})()},qJBq:function(e,n){(function(){var n,t,r
r=[]
n={}
e.exports=t=function(e,t,i){var o,s,u,c,f,a,l,d,p
null==i&&(i=true)
if("string"===typeof t){if(2!==t.length)throw{name:"ArgumentException",message:"The format for string options is '<thousands><decimal>' (exactly two characters)"}
p=t[0],o=t[1]}else if(Array.isArray(t)){if(2!==t.length)throw{name:"ArgumentException",message:"The format for array options is ['<thousands>','[<decimal>'] (exactly two elements)"}
p=t[0],o=t[1]}else{p=(null!=t?t.thousands:void 0)||(null!=t?t.group:void 0)||n.thousands
o=(null!=t?t.decimal:void 0)||n.decimal}l=""+p+o+i
a=r[l]
if(null==a){u=i?3:1
a=r[l]=new RegExp("^\\s*([+-]?(?:(?:\\d{1,3}(?:\\"+p+"\\d{"+u+",3})+)|\\d*))(?:\\"+o+"(\\d*))?\\s*$")}d=e.match(a)
if(!(null!=d&&3===d.length))return NaN
c=d[1].replace(new RegExp("\\"+p,"g"),"")
s=d[2]
f=parseFloat(c+"."+s)
return f}
e.exports.setOptions=function(e){var t,r
for(t in e){r=e[t]
n[t]=r}}
e.exports.factoryReset=function(){n={thousands:",",decimal:"."}}
e.exports.withOptions=function(e,n){null==n&&(n=true)
return function(r){return t(r,e,n)}}
e.exports.factoryReset()}).call(this)},xvQv:function(e,n,t){"use strict"
t.d(n,"a",(function(){return o}))
var r=t("nc0P")
var i=t.n(r)
function o(e,n=0){try{return parseFloat(i()(e).round(n),10)}catch(e){return NaN}}o.DEFAULT=2}}])

//# sourceMappingURL=43-c-54fe155554.js.map