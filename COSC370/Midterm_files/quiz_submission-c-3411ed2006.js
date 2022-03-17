(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[4054],{fMoB:function(e,t,s){"use strict"
s.r(t)
var n=s("HGxv")
var i=n["default"].scoped("quizzes.quiz_submission")
var o=s("ouhR")
var r=s.n(o)
s("w4it")
r()(document).ready(()=>{r()("#questions.assessment_results .question").hover((function(){r()(this).addClass("hover")}),(function(){r()(this).removeClass("hover")}))
r()(".quiz_response_text img").each((function(){r()(this).css({borderColor:"#f44",borderStyle:"solid",borderWidth:"2px",padding:2}).attr("title",i.t("titles.this_is_an_image","This is an image, not text, and could have changed since the student submitted"))}))
r()(".quiz_response_text iframe").each((function(){r()(this).css({borderColor:"#f44",borderStyle:"solid",borderWidth:"2px",padding:2}).attr("title",i.t("titles.this_is_an_external_frame","This is an external frame, not text, and could have changed since the student submitted"))}))
const e=r()("nothing")
r()(".quiz_response_text").find("object,embed").each((function(){return e.add(r()(this).parents("object,embed:first"))}))
return e.each((function(){const e=r()("<span/>").css("display","inline-block")
e.before(r()(this))
e.append(r()(this))
return e.css({borderColor:"#f44",borderStyle:"solid",borderWidth:"2px",padding:2}).attr("title",i.t("titles.this_is_an_external_element","This is an external element, not text, and could have changed since the student submitted"))}))})},w4it:function(e,t,s){"use strict"
var n=s("ouhR")
var i=s.n(n)
i()(".question select").bind("mousewheel",e=>e.preventDefault())}}])

//# sourceMappingURL=quiz_submission-c-3411ed2006.js.map