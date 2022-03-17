(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[4079],{"97gy":function(e,t,n){"use strict"
n.d(t,"a",(function(){return l}))
var i=n("VTBJ")
var s=n("1OyB")
var a=n("vuIU")
var r=n("Ji7U")
var o=n("LK+K")
var c=n("q1tI")
var m=n.n(c)
var d=n("hPGw")
var u=m.a.createElement("path",{d:"M1743.8579 267.012456L710.746654 1300.1237 176.005086 765.382131 0 941.387217 710.746654 1652.25843 1919.98754 443.142104z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var l=function(e){Object(r["a"])(n,e)
var t=Object(o["a"])(n)
function n(){Object(s["a"])(this,n)
return t.apply(this,arguments)}Object(a["a"])(n,[{key:"render",value:function(){return m.a.createElement(d["a"],Object.assign({},this.props,{name:"IconCheckMark",viewBox:"0 0 1920 1920"}),u)}}])
n.displayName="IconCheckMarkSolid"
return n}(c["Component"])
l.glyphName="check-mark"
l.variant="Solid"
l.propTypes=Object(i["a"])({},d["a"].propTypes)},Aoce:function(e,t,n){"use strict"
n.r(t)
var i=n("xvQv")
var s=n("csia")
var a=n("ouhR")
var r=n.n(a)
var o=n("5Pfy")
n("dhbk")
n("Dhso")
n("7AEQ")
n("aq8L")
n("lBOK")
n("TvTI")
n("Dh7j")
n("bbn0")
n("w2hD")
n("MJ1T")
const c=ENV.rubricAssessments
r()("#content").addClass("padless")
let m=1
function d(e){if(e.submission){const t=[]
t.push(e)
e=t}for(var t in e){const n=e[t].submission
const i=n.visible_submission_comments||n.submission_comments
const s=ENV.SUBMISSION.user_id?"user_id":"anonymous_id"
if(n[s].toString()!==ENV.SUBMISSION[s])continue
for(const e in i){const n=i[e].submission_comment||i[e]
if(r()("#submission_comment_"+n.id).length>0)continue
const s=r()("#comment_blank").clone(true).removeAttr("id")
n.posted_at=r.a.datetimeString(n.created_at)
s.fillTemplateData({data:n,id:"submission_comment_"+n.id})
if(n.media_comment_id){const e=r()("#comment_media_blank").clone(true).removeAttr("id")
e.fillTemplateData({data:n})
s.find(".comment").empty().append(e.show())}else for(var t in n.attachments){const e=n.attachments[t].attachment
const i=r()("#comment_attachment_blank").clone(true).removeAttr("id")
e.comment_id=n.id
i.fillTemplateData({data:e,hrefValues:["comment_id","id"]})
s.find(".comment_attachments").append(i.show())}r()(".comments .comment_list").append(s.show()).scrollTop(1e4)
r()(".grading_comment").val()===n.comment&&r()(".grading_comment").val("")}r()(".comments .comment_list .play_comment_link").mediaCommentThumbnail("small")
r()(".save_comment_button").attr("disabled",null)
if(n){_(n)
r()(".submission_details").fillTemplateData({data:n})
r()("#add_comment_form .comment_attachments").empty()}}r()(".submission_header").loadingImage("remove")}function u(e,t){return null==e?"":t.call(this,e)}function l(e){return s["a"].n(Object(i["a"])(e,i["a"].DEFAULT))}function _(e){["pass","fail","complete","incomplete"].indexOf(e.entered_grade)>-1?r()(".grading_box").val(e.entered_grade):r()(".grading_box").val(u(e.entered_grade,o["a"].formatGrade))
r()(".late_penalty").text(u(-e.points_deducted,l))
r()(".published_grade").text(u(e.published_grade,o["a"].formatGrade))
r()(".grade").text(u(e.grade,o["a"].formatGrade))
e.excused?r()(".entered_grade").text(s["a"].t("Excused")):r()(".entered_grade").text(u(e.entered_grade,o["a"].formatGrade))
!e.excused&&e.points_deducted?r()(".late-penalty-display").show():r()(".late-penalty-display").hide()}function h(e){e.show()
const t=e.find(":tabbable")
const n=[t.first()[0],t.last()[0]]
const i={9:"tab",13:"enter",27:"esc"}
r()(".hide_rubric_link").keydown((function(e){if("enter"==i[e.which]){e.preventDefault()
r()(this).click()}}))
t.each((function(){r()(this).bind("keydown",e=>{"esc"==i[e.which]&&r()(".hide_rubric_link").click()})}))
r()(n).each((function(e){r()(this).bind("keydown",(function(e){if("tab"==i[e.which]){const t=r()(this).is(r()(n).first())?e.shiftKey:!e.shiftKey
if(t){e.preventDefault()
const t=this
const i=r.a.grep(n,e=>e!=t)
r()(i).focus()}}}))}))
e.siblings().attr("data-hide_from_rubric",true).end().parentsUntil("#application").siblings().not("#aria_alerts").attr("data-hide_from_rubric",true)
e.hide()}function b(e){const t=e.is(":visible")
r()("#application").find("[data-hide_from_rubric]").attr("aria-hidden",t)}function f(){r()("#rubric_holder").fadeOut((function(){b(r()(this))
r()(".assess_submission_link").focus()}))}function p(){r()("#rubric_holder").fadeIn((function(){b(r()(this))
r()(this).find(".hide_rubric_link").focus()}))}function g(){const e=r()("#preview_frame")
const t=e.offset().top
const n=r()(window).height()-t
e.height(n)
r()("#rubric_holder").css({maxHeight:n-50,overflow:"auto",zIndex:5})
r()(".comments").height(n)}function v(){r()(document).ready((function(){r()(".comments .comment_list .play_comment_link").mediaCommentThumbnail("small")
r()(window).bind("resize",g).triggerHandler("resize")
r()(".comments_link").click(e=>{e.preventDefault()
r()(".comments").slideToggle(()=>{r()(".comments .media_comment_content").empty()
r()(".comments textarea:visible").focus().select()})})
r()(".save_comment_button").click(e=>{r()(document).triggerHandler("comment_change")})
r()(document).bind("comment_change",e=>{r()(".save_comment_button").attr("disabled","disabled")
r()(".submission_header").loadingImage()
const t=r()(".update_submission_url").attr("href")
const n=r()(".update_submission_url").attr("title")
const i={"submission[assignment_id]":ENV.SUBMISSION.assignment_id,"submission[group_comment]":r()("#submission_group_comment").attr("checked")?"1":"0"}
const a=ENV.SUBMISSION.user_id?"user_id":"anonymous_id"
i[`submission[${a}]`]=ENV.SUBMISSION[a]
if(r()("#media_media_recording:visible").length>0){const e=r()("#media_media_recording").data("comment_id")
const t=r()("#media_media_recording").data("comment_type")
i["submission[media_comment_type]"]=t||"video"
i["submission[media_comment_id]"]=e
i["submission[comment]"]=""}else{r()(".grading_comment").val()&&""!=r()(".grading_comment").val&&(i["submission[comment]"]=r()(".grading_comment").val())
!i["submission[comment]"]&&r()("#add_comment_form input[type='file']").length>0&&(i["submission[comment]"]=s["a"].t("see_attached_files","See attached files"))}if(!i["submission[comment]"]&&!i["submission[media_comment_id]"]){r()(".submission_header").loadingImage("remove")
r()(".save_comment_button").attr("disabled",null)
return}r()("#add_comment_form input[type='file']").length>0?r.a.ajaxJSONFiles(t+".text",n,i,r()("#add_comment_form input[type='file']"),d):r.a.ajaxJSON(t,n,i,d)})
r()(".cancel_comment_button").click(e=>{r()(".grading_comment").val("")
r()(".comments_link").click()})
r()(".grading_value").change(e=>{r()(document).triggerHandler("grading_change")})
r()(document).bind("grading_change",e=>{r()(".save_comment_button").attr("disabled","disabled")
r()(".submission_header").loadingImage()
const t=r()(".update_submission_url").attr("href")
const n=r()(".update_submission_url").attr("title")
const i={"submission[assignment_id]":ENV.SUBMISSION.assignment_id,"submission[user_id]":ENV.SUBMISSION.user_id,"submission[group_comment]":r()("#submission_group_comment").attr("checked")?"1":"0"}
if(r()(".grading_value:visible").length>0){i["submission[grade]"]=o["a"].delocalizeGrade(r()(".grading_value").val())
r.a.ajaxJSON(t,n,i,d)}else{r()(".submission_header").loadingImage("remove")
r()(".save_comment_button").attr("disabled",null)}})
r()(".attach_comment_file_link").click(e=>{e.preventDefault()
const t=r()("#comment_attachment_input_blank").clone(true).removeAttr("id")
t.find("input").attr("name","attachments["+m+++"][uploaded_data]")
r()("#add_comment_form .comment_attachments").append(t.slideDown())})
r()(".delete_comment_attachment_link").click((function(e){e.preventDefault()
r()(this).parents(".comment_attachment_input").slideUp((function(){r()(this).remove()}))}))
r()(".save_rubric_button").click((function(){const e=r()(this).parents("#rubric_holder").find(".rubric")
const t=rubricAssessment.assessmentData(e)
const n=r()(".update_rubric_assessment_url").attr("href")
const i="POST"
e.loadingImage()
r.a.ajaxJSON(n,i,t,n=>{e.loadingImage("remove")
const i=n
let s=false
if(i.rubric_association){rubricAssessment.updateRubricAssociation(e,n.rubric_association)
delete i.rubric_association}for(const e in c){const t=c[e].rubric_assessment
if(t&&i&&i.id==t.id){c[e].rubric_assessment=i
s=true}}if(!s){n.rubric_assessment||(n={rubric_assessment:n})
c.push(n)
const e=r()(document.createElement("option"))
e.val(i.id).text(i.assessor_name).attr("id","rubric_assessment_option_"+i.id)
r()("#rubric_assessments_select").prepend(e).val(i.id)}r()("#rubric_assessment_option_"+i.id).text(i.assessor_name)
r()("#new_rubric_assessment_option").remove()
r()("#rubric_assessments_list").show()
"peer_review"===i.assessment_type&&r()(".save_rubric_button").remove()
setTimeout(()=>{rubricAssessment.populateRubric(e,i,t)
const n=i.artifact
n&&_(n)},500)
f()})}))
r()("#rubric_holder .rubric").css({width:"auto",marginTop:0})
h(r()("#rubric_holder"))
r()(".hide_rubric_link").click(e=>{e.preventDefault()
f()})
r()(".assess_submission_link").click(e=>{e.preventDefault()
r()("#rubric_assessments_select").change()
if(ENV.mark_rubric_comments_read_url){r.a.ajaxJSON(ENV.mark_rubric_comments_read_url,"PUT",{},()=>{})
r()(".rubric_comment.unread_indicator").hide()
r()(".submission-details-header__rubric .assess_submission_link").attr("title","")}p()})
r()("#rubric_assessments_select").change((function(){const e=r()(this).val()
let t=null
for(const n in c){const i=c[n].rubric_assessment
i.id==e&&(t=i)}const n=r()("#rubric_holder .rubric")
rubricAssessment.populateNewRubric(n,t,ENV.rubricAssociation)
const i=!t||t.assessor_id==ENV.RUBRIC_ASSESSMENT.assessor_id
r()("#rubric_holder .save_rubric_button").showIf(i)})).change()
r()(".media_comment_link").click(e=>{e.preventDefault()
r()("#media_media_recording").show()
const t=r()("#media_media_recording").find(".media_recording")
t.mediaComment("create","any",(e,n)=>{r()("#media_media_recording").data("comment_id",e).data("comment_type",n)
r()(document).triggerHandler("comment_change")
r()("#add_comment_form").show()
r()("#media_media_recording").hide()
t.empty()},()=>{r()("#add_comment_form").show()
r()("#media_media_recording").hide()})})
r()("#media_recorder_container a").live("click",e=>{r()("#add_comment_form").show()
r()("#media_media_recording").hide()})
r()(".comments .comment_list").delegate(".play_comment_link","click",(function(e){e.preventDefault()
const t=r()(this).parents(".comment_media").getTemplateData({textValues:["media_comment_id"]}).media_comment_id
t&&r()(this).parents(".comment_media").find(".media_comment_content").mediaComment("show",t,"video",this)})).delegate("a.instructure_inline_media_comment","click",e=>{e.preventDefault()
e.stopPropagation()})
_(ENV.SUBMISSION.submission)}))}r()(document).fragmentChange((e,t)=>{if("#rubric"==t)r()(".assess_submission_link:visible:first").click()
else if(t.match(/^#comment/)){let e=null
try{e=JSON.parse(t.substring(8))}catch(e){}e&&e.comment&&r()(".grading_comment").val(e.comment)
r()(".grading_comment").focus().select()}})
INST.refreshGrades=function(){const e=r()(".submission_data_url").attr("href")
setTimeout(()=>{r.a.ajaxJSON(e,"GET",{},d)},500)}
r()(document).ready(()=>{window.addEventListener("message",e=>{"refreshGrades"===e.data&&INST.refreshGrades()},false)})
var k=n("bt35")
var S=n("3lLS")
var w=n.n(S)
w()(()=>{v()
k["a"].renderPills()})},JOjB:function(e,t,n){"use strict"
var i=n("ouhR")
var s=n.n(i)
var a=n("HGxv")
var r=a["default"].scoped("lib.text_helper")
var o=n("gI0r")
var c,m,d
c="LINK-PLACEHOLDER"
m=/\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))|(LINK-PLACEHOLDER)/gi
t["a"]=d={quoteClump:function(e){return"<div class='quoted_text_holder'> <a href='#' class='show_quoted_text_link'>"+Object(o["a"])(r.t("quoted_text_toggle","show quoted text"))+"</a> <div class='quoted_text' style='display: none;'> "+s.a.raw(e.join("\n"))+" </div> </div>"},formatMessage:function(e){var t,n,i,s,a,r,u,l
s=[]
a=[]
e=e.replace(m,(function(e,t){var n
a.push(e===c?c:(n=e,"http://"===n.slice(0,7)||"https://"===n.slice(0,8)||(n="http://"+n),s.push(n),"<a href='"+Object(o["a"])(n)+"'>"+Object(o["a"])(e)+"</a>"))
return c}))
e=Object(o["a"])(e)
e=e.replace(new RegExp(c,"g"),(function(e,t){return a.shift()}))
e=e.replace(/\n/g,"<br />\n")
r=[]
u=[]
l=e.split("\n")
for(t=0,n=l.length;t<n;t++){i=l[t]
if(i.match(/^(&gt;|>)/))u.push(i)
else{u.length&&r.push(d.quoteClump(u))
u=[]
r.push(i)}}u.length&&r.push(d.quoteClump(u))
return r.join("\n")},delimit:function(e){var t,n,i,s,a
if(isNaN(e))return String(e)
a=e<0?"-":""
t=Math.abs(e)
if(Infinity===t)return String(e)
n=Math.floor(t)
s=t===n?"":String(t).replace(/^\d+\./,".")
while(n>=1e3){i=String(n).replace(/\d+(\d\d\d)$/,",$1")
n=Math.floor(n/1e3)
s=i+s}return a+String(n)+s},truncateText:function(e,t){var n,i,s,a,o,c
null==t&&(t={})
i=null!=(a=t.max)?a:30
n=r.t("ellipsis","...")
c=r.t("word_separator"," ")
e=(null!=e?e:"").replace(/\s+/g,c).trim()
if(!e||e.length<=i)return e
o=0
while(true){s=e.indexOf(c,o+1)
if(s<0||s>i-n.length)break
o=s}o||(o=i-n.length)
return e.substring(0,o)+n},plainText:function(e){return e.replace(/(<([^>]+)>)/gi,"")}}},csia:function(e,t,n){"use strict"
var i=n("HGxv")
t["a"]=i["default"].scoped("submissions")}}])

//# sourceMappingURL=submissions-c-3f5415c1f2.js.map