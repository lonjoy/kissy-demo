KISSY.add("demo/base",function(e,a,s){var n=e.all,d=n("#J_List"),m=n("#J_Code"),c=n("#J_Method"),t=n("#J_Config"),r=function(){this._bind()};return r._data={},r.prototype._set=function(e,a){r._data[e]=a},r.prototype._get=function(e){return r._data[e]},r.prototype._bind=function(){var a=this;a.el&&a.events&&e.each(a.events,function(e,s){if(s&&e&&~s.indexOf(" ")){var d=s.replace(" ","^").split("^"),m=d[0],c=d[1];n(a.el).delegate(m,c,a[e],a)}})},r.prototype._ajax=function(e,a,n,d){var m=e.attr("id"),c=e.one("i"),t=c.attr("class");e.removeAttr("id"),e.addClass("disabled"),c.removeAttr("class"),c.addClass("icon-refresh icon-spin"),s.post(a,n,function(){d(),e.attr("id",m),e.removeClass("disabled"),c.removeAttr("class"),c.addClass(t)})},r.prototype._render=function(e){switch(e){case"list":d.show(),m.hide(),c.show(),t.hide();break;case"code":d.hide(),m.show(),c.hide(),t.show()}},r.prototype._makeQueryId=function(){return this._get("module")+"."+this._get("method")},r},{requires:["node","ajax"]});