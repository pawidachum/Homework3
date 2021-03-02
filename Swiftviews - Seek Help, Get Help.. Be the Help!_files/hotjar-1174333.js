var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

window.hjSiteSettings = window.hjSiteSettings || {"features":[],"site_id":1174333,"integrations":{"optimizely":{"tag_recordings":false}},"privacy_policy_url":null,"deferred_page_contents":[],"surveys":[],"feedback_widgets":[{"persist_condition":"always","targeting":[{"negate":false,"pattern":"\/","match_operation":"contains","component":"url"},{"negate":false,"pattern":"desktop","match_operation":"exact","component":"device"},{"negate":false,"pattern":"phone","match_operation":"exact","component":"device"},{"negate":false,"pattern":"tablet","match_operation":"exact","component":"device"}],"language":"en","auto_screenshot":true,"created_epoch_time":1551361013,"targeting_percentage":100,"display_condition":"immediate","content":{"emotion":"How would you rate your experience?","thankyou":"Thank you for sharing your feedback with us!","initial":"Help us improve by sharing your feedback.","email":"Enter your email address if you would like to receive a follow up."},"effective_show_branding":true,"ask_for_consent":true,"background":"#f4364c","skin":"light","position":"middle_right","show_legal":false,"display_delay":0,"id":168079,"emotion_style":"default"},{"persist_condition":"always","targeting":[{"negate":false,"pattern":"https:\/\/web.archive.org\/web\/20190717142503\/http:\/\/www.swiftviews.com\/","match_operation":"simple","component":"url"},{"negate":false,"pattern":"phone","match_operation":"exact","component":"device"},{"negate":false,"pattern":"tablet","match_operation":"exact","component":"device"},{"negate":false,"pattern":"desktop","match_operation":"exact","component":"device"}],"language":"en","auto_screenshot":true,"created_epoch_time":1548511142,"targeting_percentage":100,"display_condition":"immediate","content":{"emotion":"How would you rate your experience?","thankyou":"Thank you for sharing your feedback with us!","initial":"Help us improve by sharing your feedback.","email":"Enter your email address if you would like to receive a follow up."},"effective_show_branding":true,"ask_for_consent":true,"background":"#f4364c","skin":"light","position":"middle_right","show_legal":false,"display_delay":0,"id":156281,"emotion_style":"default"}],"record_targeting_rules":[],"forms":[],"state_change_listen_mode":"automatic","testers_widgets":[],"anonymize_digits":true,"recording_capture_keystrokes":false,"rec_value":1.0,"suppress_text":false,"suppress_location":false,"legal_name":null,"heatmaps":[{"targeting":[{"negate":false,"pattern":"https:\/\/web.archive.org\/web\/20190717142503\/http:\/\/www.swiftviews.com\/","match_operation":"simple","component":"url"}],"created_epoch_time":1548589161,"id":3656833,"selector_version":2}],"polls":[],"record":true,"r":1.0,"suppress_all":false,"anonymize_emails":true};

!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=64)}({64:function(e,t,n){window.hjBootstrap=window.hjBootstrap||function(e,t,n){var o=window.navigator||{userAgent:"unknown"},r=o.userAgent?o.userAgent:"unknown";if(/bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(r))console.warn("Hotjar not launching due to suspicious userAgent:",r);else{var i=function(e,t,n){window.hjBootstrapCalled=(window.hjBootstrapCalled||[]).concat(n),window.hj&&window.hj._init&&window.hj._init._verifyInstallation&&hj._init._verifyInstallation()};i(0,0,n);var a,d,s,u,l=window.document,c=l.head||l.getElementsByTagName("head")[0];l.addEventListener&&(hj.scriptDomain=e,(a=l.createElement("script")).async=1,a.src=hj.scriptDomain+t,c.appendChild(a),u=["iframe#_hjRemoteVarsFrame {","display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;","}"],(d=l.createElement("style")).type="text/css",d.styleSheet?d.styleSheet.cssText=u.join(""):d.appendChild(l.createTextNode(u.join(""))),c.appendChild(d),(s=l.createElement("iframe")).style.cssText=u[1],s.name="_hjRemoteVarsFrame",s.title="_hjRemoteVarsFrame",s.id="_hjRemoteVarsFrame",s.src="https://"+(window._hjSettings.varsHost||"vars.hotjar.com")+"/box-90f3a29ef7448451db5af955688970d7.html",s.onload=function(){i.varsLoaded=!0,"undefined"!=typeof hj&&hj.event&&hj.event.signal("varsLoaded")},i.varsJar=s,"interactive"===l.readyState||"complete"===l.readyState||"loaded"===l.readyState?p():l.addEventListener("DOMContentLoaded",p),i.revision="654b3404699d",window.hjBootstrap=i)}function p(){setTimeout(function(){l.body.appendChild(s)},50)}},window.hjBootstrap("https://web.archive.org/web/20190717142503/https://script.hotjar.com/","modules.2b2b9f3640b40a38d338.js","1174333")}});
//# sourceMappingURL=hotjar.js.map

}
/*
     FILE ARCHIVED ON 14:25:03 Jul 17, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:34:09 Mar 01, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 150.242
  exclusion.robots: 0.078
  exclusion.robots.policy: 0.072
  RedisCDXSource: 4.714
  esindex: 0.007
  LoadShardBlock: 124.883 (3)
  PetaboxLoader3.datanode: 108.364 (4)
  CDXLines.iter: 18.505 (3)
  PetaboxLoader3.resolve: 109.468 (2)
  load_resource: 240.252
*/