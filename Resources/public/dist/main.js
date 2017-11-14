require.config({paths:{suluarticle:"../../suluarticle/dist",suluarticlecss:"../../suluarticle/css","type/article-selection":"../../suluarticle/dist/validation/types/article-selection","type/page-tree-route":"../../suluarticle/dist/validation/types/page-tree-route","services/suluarticle/article-manager":"../../suluarticle/dist/services/manager","services/suluarticle/article-router":"../../suluarticle/dist/services/router","services/suluarticle/property-configuration":"../../suluarticle/dist/services/property-configuration","services/suluarticle/list-helper":"../../suluarticle/dist/services/list-helper","services/suluarticle/overlay-filter-helper":"../../suluarticle/dist/services/overlay-filter-helper"}}),define(["underscore","config","css!suluarticlecss/main"],function(a,b){"use strict";var c=function(){var c=b.get("sulu-content").locales,d=[];return a.each(c,function(a){d=d.concat(Object.keys(a))}),d};return{name:"Sulu Article Bundle",initialize:function(d){d.components.addSource("suluarticle","/bundles/suluarticle/dist/components"),d.sandbox.urlManager.setUrl("article","articles/<%= locale %>/edit:<%= id %>/details");var e=c(),f=b.get("sulu_article"),g={defaultLocale:e[0],locales:e,languageChanger:a.map(e,function(a){return{id:a,title:a}}),settingsKey:"articleLanguage",typeNames:Object.keys(f.types),types:f.types,templates:f.templates,displayTabAll:f.displayTabAll,defaultAuthor:f.defaultAuthor,pageTreeEnabled:f.pageTreeEnabled,classes:f.classes};b.set("sulu_article",g);var h=function(){return d.sandbox.sulu.getUserSetting(g.settingsKey)||g.defaultLocale};d.sandbox.mvc.routes.push({route:"articles",callback:function(){return d.sandbox.emit("sulu.router.navigate","articles/"+h())}}),1===g.typeNames.length?(d.sandbox.mvc.routes.push({route:"articles/:locale",callback:function(a){return'<div data-aura-component="articles/list@suluarticle" data-aura-type="'+g.typeNames[0]+'" data-aura-locale="'+a+"\" data-aura-config='"+JSON.stringify(g)+"'/>"}}),d.sandbox.mvc.routes.push({route:"articles/:locale/add",callback:function(a,b){return'<div data-aura-component="articles/edit@suluarticle" data-aura-type="'+g.typeNames[0]+'" data-aura-locale="'+a+"\" data-aura-config='"+JSON.stringify(g)+"'/>"}})):(g.displayTabAll||d.sandbox.mvc.routes.push({route:"articles(/:locale)",callback:function(){return d.sandbox.emit("sulu.router.navigate","articles:"+g.typeNames[0]+"/"+h())}}),g.displayTabAll===!0&&d.sandbox.mvc.routes.push({route:"articles/:locale",callback:function(a){return'<div data-aura-component="articles/list@suluarticle" data-aura-locale="'+a+"\" data-aura-config='"+JSON.stringify(g)+"'/>"}}),d.sandbox.mvc.routes.push({route:"articles::type",callback:function(a){return d.sandbox.emit("sulu.router.navigate","articles:"+a+"/"+h())}}),d.sandbox.mvc.routes.push({route:"articles::type/:locale",callback:function(a,b){return'<div data-aura-component="articles/list@suluarticle" data-aura-locale="'+b+"\" data-aura-config='"+JSON.stringify(g)+"' data-aura-type=\""+a+'"/>'}}),d.sandbox.mvc.routes.push({route:"articles/:locale/add::type",callback:function(a,b){return'<div data-aura-component="articles/edit@suluarticle" data-aura-locale="'+a+"\" data-aura-config='"+JSON.stringify(g)+"' data-aura-type=\""+b+'"/>'}})),d.sandbox.mvc.routes.push({route:"articles/:locale/edit::id/add-page/:content",callback:function(a,b,c){return'<div data-aura-component="articles/edit@suluarticle" data-aura-locale="'+a+'" data-aura-id="'+b+'" data-aura-content="'+c+'" data-aura-page="null" data-aura-config=\''+JSON.stringify(g)+"'/>"}}),d.sandbox.mvc.routes.push({route:"articles/:locale/edit::id/page::page/:content",callback:function(a,b,c,d){return'<div data-aura-component="articles/edit@suluarticle" data-aura-locale="'+a+'" data-aura-id="'+b+'" data-aura-content="'+d+'" data-aura-page="'+c+"\" data-aura-config='"+JSON.stringify(g)+"'/>"}}),d.sandbox.mvc.routes.push({route:"articles/:locale/edit::id/:content",callback:function(a,b,c){return'<div data-aura-component="articles/edit@suluarticle" data-aura-locale="'+a+'" data-aura-id="'+b+'" data-aura-content="'+c+"\" data-aura-config='"+JSON.stringify(g)+"'/>"}})}}});