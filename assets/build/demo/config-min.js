KISSY.add("demo/config",function(e,t,s,i){var r=e.all,o=function(){this.el=r("#J_Config"),this.init()};return e.extend(o,t),o.prototype.init=function(){o.superclass.constructor.call(this)},o.prototype.render=function(e){var t,s=this;if(!e)var e={module:s._makeQueryId()};t=["{{#demo}}","<h2>描述</h2>","<dl>","<dt>作者：</dt>",'<dd class="author">','<span class="icon"><i class="icon-user"></i></span>','<input id="J_Author" class="txt" value="{{author}}">',"</dd>","<dt>简介：</dt>",'<dd class="intro">','<span class="icon"><i class="icon-edit"></i></span>','<textarea id="J_Intro" class="txt">{{intro}}</textarea>',"</dd>","<dt>模块：</dt>","<dd>",'<p id="J_Module">{{module}}</p>',"</dd>","<dt>框架：</dt>","<dd>",'<input type="checkbox" checked="true" disabled="true"> Kissy 1.3',"</dd>","</dl>","{{/demo}}"].join("");var r=new i(t).render({demo:e});s.el.html(r)},o.prototype.getDemoConfig=function(){var e=this,t=r("#J_Intro"),s=r("#J_Author");return{module:e._makeQueryId(),intro:t.val(),author:s.val()}},o},{requires:["demo/base","node","xtemplate"]});