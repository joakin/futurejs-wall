// Compiled by ClojureScript 0.0-2173
goog.provide('futurejs_wall.core');
goog.require('cljs.core');
goog.require('monet.canvas');
goog.require('monet.canvas');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hello world!");
futurejs_wall.core.canvas_dom = document.getElementById("canvas");
futurejs_wall.core.monet_canvas = monet.canvas.init.call(null,futurejs_wall.core.canvas_dom,"2d");
monet.canvas.add_entity.call(null,futurejs_wall.core.monet_canvas,new cljs.core.Keyword(null,"background","background",3976677536),monet.canvas.entity.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",1013904362),0,new cljs.core.Keyword(null,"y","y",1013904363),0,new cljs.core.Keyword(null,"w","w",1013904361),600,new cljs.core.Keyword(null,"h","h",1013904346),600], null),null,(function (ctx,val){return monet.canvas.fill_rect.call(null,monet.canvas.fill_style.call(null,ctx,"#aaddff"),val);
})));

//# sourceMappingURL=core.js.map