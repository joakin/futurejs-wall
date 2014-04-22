// Compiled by ClojureScript 0.0-2173
goog.provide('monet.canvas');
goog.require('cljs.core');
goog.require('monet.core');
goog.require('monet.core');
monet.canvas.get_context = (function get_context(canvas,type){return canvas.getContext(cljs.core.name.call(null,type));
});
monet.canvas.begin_path = (function begin_path(ctx){ctx.beginPath();
return ctx;
});
monet.canvas.close_path = (function close_path(ctx){ctx.closePath();
return ctx;
});
monet.canvas.fill = (function fill(ctx){ctx.fill();
return ctx;
});
monet.canvas.stroke = (function stroke(ctx){ctx.stroke();
return ctx;
});
monet.canvas.clear_rect = (function clear_rect(ctx,p__5903){var map__5905 = p__5903;var map__5905__$1 = ((cljs.core.seq_QMARK_.call(null,map__5905))?cljs.core.apply.call(null,cljs.core.hash_map,map__5905):map__5905);var h = cljs.core.get.call(null,map__5905__$1,new cljs.core.Keyword(null,"h","h",1013904346));var w = cljs.core.get.call(null,map__5905__$1,new cljs.core.Keyword(null,"w","w",1013904361));var y = cljs.core.get.call(null,map__5905__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__5905__$1,new cljs.core.Keyword(null,"x","x",1013904362));ctx.clearRect(x,y,w,h);
return ctx;
});
/**
* DEPRECATED. Prefer fill-rect
*/
monet.canvas.rect = (function rect(ctx,p__5906){var map__5908 = p__5906;var map__5908__$1 = ((cljs.core.seq_QMARK_.call(null,map__5908))?cljs.core.apply.call(null,cljs.core.hash_map,map__5908):map__5908);var h = cljs.core.get.call(null,map__5908__$1,new cljs.core.Keyword(null,"h","h",1013904346));var w = cljs.core.get.call(null,map__5908__$1,new cljs.core.Keyword(null,"w","w",1013904361));var y = cljs.core.get.call(null,map__5908__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__5908__$1,new cljs.core.Keyword(null,"x","x",1013904362));monet.canvas.begin_path.call(null,ctx);
ctx.rect(x,y,w,h);
monet.canvas.close_path.call(null,ctx);
monet.canvas.fill.call(null,ctx);
return ctx;
});
monet.canvas.stroke_rect = (function stroke_rect(ctx,p__5909){var map__5911 = p__5909;var map__5911__$1 = ((cljs.core.seq_QMARK_.call(null,map__5911))?cljs.core.apply.call(null,cljs.core.hash_map,map__5911):map__5911);var h = cljs.core.get.call(null,map__5911__$1,new cljs.core.Keyword(null,"h","h",1013904346));var w = cljs.core.get.call(null,map__5911__$1,new cljs.core.Keyword(null,"w","w",1013904361));var y = cljs.core.get.call(null,map__5911__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__5911__$1,new cljs.core.Keyword(null,"x","x",1013904362));ctx.strokeRect(x,y,w,h);
return ctx;
});
monet.canvas.fill_rect = (function fill_rect(ctx,p__5912){var map__5914 = p__5912;var map__5914__$1 = ((cljs.core.seq_QMARK_.call(null,map__5914))?cljs.core.apply.call(null,cljs.core.hash_map,map__5914):map__5914);var h = cljs.core.get.call(null,map__5914__$1,new cljs.core.Keyword(null,"h","h",1013904346));var w = cljs.core.get.call(null,map__5914__$1,new cljs.core.Keyword(null,"w","w",1013904361));var y = cljs.core.get.call(null,map__5914__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__5914__$1,new cljs.core.Keyword(null,"x","x",1013904362));ctx.fillRect(x,y,w,h);
return ctx;
});
monet.canvas.circle = (function circle(ctx,p__5915){var map__5917 = p__5915;var map__5917__$1 = ((cljs.core.seq_QMARK_.call(null,map__5917))?cljs.core.apply.call(null,cljs.core.hash_map,map__5917):map__5917);var r = cljs.core.get.call(null,map__5917__$1,new cljs.core.Keyword(null,"r","r",1013904356));var y = cljs.core.get.call(null,map__5917__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__5917__$1,new cljs.core.Keyword(null,"x","x",1013904362));monet.canvas.begin_path.call(null,ctx);
ctx.arc(x,y,r,0,(Math.PI * 2),true);
monet.canvas.close_path.call(null,ctx);
monet.canvas.fill.call(null,ctx);
return ctx;
});
monet.canvas.text = (function text(ctx,p__5918){var map__5920 = p__5918;var map__5920__$1 = ((cljs.core.seq_QMARK_.call(null,map__5920))?cljs.core.apply.call(null,cljs.core.hash_map,map__5920):map__5920);var y = cljs.core.get.call(null,map__5920__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__5920__$1,new cljs.core.Keyword(null,"x","x",1013904362));var text__$1 = cljs.core.get.call(null,map__5920__$1,new cljs.core.Keyword(null,"text","text",1017460895));ctx.fillText(text__$1,x,y);
return ctx;
});
monet.canvas.font_style = (function font_style(ctx,font){ctx.font = font;
return ctx;
});
monet.canvas.fill_style = (function fill_style(ctx,color){ctx.fillStyle = cljs.core.name.call(null,color);
return ctx;
});
monet.canvas.stroke_style = (function stroke_style(ctx,color){ctx.strokeStyle = cljs.core.name.call(null,color);
return ctx;
});
monet.canvas.stroke_width = (function stroke_width(ctx,w){ctx.lineWidth = w;
return ctx;
});
monet.canvas.stroke_cap = (function stroke_cap(ctx,cap){ctx.lineCap = cljs.core.name.call(null,cap);
return ctx;
});
monet.canvas.move_to = (function move_to(ctx,x,y){ctx.moveTo(x,y);
return ctx;
});
monet.canvas.line_to = (function line_to(ctx,x,y){ctx.lineTo(x,y);
return ctx;
});
monet.canvas.alpha = (function alpha(ctx,a){ctx.globalAlpha = a;
return ctx;
});
monet.canvas.composition_operation = (function composition_operation(ctx,operation){ctx.globalCompositionOperation = cljs.core.name.call(null,operation);
return ctx;
});
monet.canvas.text_align = (function text_align(ctx,alignment){ctx.textAlign = cljs.core.name.call(null,alignment);
return ctx;
});
monet.canvas.text_baseline = (function text_baseline(ctx,alignment){ctx.textBaseline = cljs.core.name.call(null,alignment);
return ctx;
});
/**
* Gets the pixel value as a hash map of RGBA values
*/
monet.canvas.get_pixel = (function get_pixel(ctx,x,y){var imgd = ctx.getImageData(x,y,1,1).data;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"red","red",1014017027),(imgd[0]),new cljs.core.Keyword(null,"green","green",1112523381),(imgd[1]),new cljs.core.Keyword(null,"blue","blue",1016931276),(imgd[2]),new cljs.core.Keyword(null,"alpha","alpha",1106814160),(imgd[3])], null);
});
monet.canvas.save = (function save(ctx){ctx.save();
return ctx;
});
monet.canvas.restore = (function restore(ctx){ctx.restore();
return ctx;
});
monet.canvas.rotate = (function rotate(ctx,angle){ctx.rotate(angle);
return ctx;
});
monet.canvas.scale = (function scale(ctx,x,y){ctx.scale(x,y);
return ctx;
});
monet.canvas.translate = (function translate(ctx,x,y){ctx.translate(x,y);
return ctx;
});
/**
* Multiplies a custom transformation matrix to the existing
* HTML5 canvas transformation according to the follow convention:
* 
* [ x']   [ m11 m21 dx ] [ x ]
* [ y'] = [ m12 m22 dy ] [ y ]
* [ 1 ]   [ 0   0   1  ] [ 1 ]
*/
monet.canvas.transform = (function() {
var transform = null;
var transform__2 = (function (ctx,p__5921){var map__5923 = p__5921;var map__5923__$1 = ((cljs.core.seq_QMARK_.call(null,map__5923))?cljs.core.apply.call(null,cljs.core.hash_map,map__5923):map__5923);var dy = cljs.core.get.call(null,map__5923__$1,new cljs.core.Keyword(null,"dy","dy",1013907463));var dx = cljs.core.get.call(null,map__5923__$1,new cljs.core.Keyword(null,"dx","dx",1013907462));var m22 = cljs.core.get.call(null,map__5923__$1,new cljs.core.Keyword(null,"m22","m22",1014010591));var m21 = cljs.core.get.call(null,map__5923__$1,new cljs.core.Keyword(null,"m21","m21",1014010590));var m12 = cljs.core.get.call(null,map__5923__$1,new cljs.core.Keyword(null,"m12","m12",1014010560));var m11 = cljs.core.get.call(null,map__5923__$1,new cljs.core.Keyword(null,"m11","m11",1014010559));ctx.transform(m11,m12,m21,m22,dx,dy);
return ctx;
});
var transform__7 = (function (ctx,m11,m12,m21,m22,dx,dy){ctx.transform(m11,m12,m21,m22,dx,dy);
return ctx;
});
transform = function(ctx,m11,m12,m21,m22,dx,dy){
switch(arguments.length){
case 2:
return transform__2.call(this,ctx,m11);
case 7:
return transform__7.call(this,ctx,m11,m12,m21,m22,dx,dy);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transform.cljs$core$IFn$_invoke$arity$2 = transform__2;
transform.cljs$core$IFn$_invoke$arity$7 = transform__7;
return transform;
})()
;
/**
* Draws the image onto the canvas at the given position.
* If a map of params is given, the number of entries is used to
* determine the underlying call to make.
*/
monet.canvas.draw_image = (function() {
var draw_image = null;
var draw_image__3 = (function (ctx,img,p__5924){var map__5929 = p__5924;var map__5929__$1 = ((cljs.core.seq_QMARK_.call(null,map__5929))?cljs.core.apply.call(null,cljs.core.hash_map,map__5929):map__5929);var params = map__5929__$1;var w = cljs.core.get.call(null,map__5929__$1,new cljs.core.Keyword(null,"w","w",1013904361));var dx = cljs.core.get.call(null,map__5929__$1,new cljs.core.Keyword(null,"dx","dx",1013907462));var dy = cljs.core.get.call(null,map__5929__$1,new cljs.core.Keyword(null,"dy","dy",1013907463));var y = cljs.core.get.call(null,map__5929__$1,new cljs.core.Keyword(null,"y","y",1013904363));var dw = cljs.core.get.call(null,map__5929__$1,new cljs.core.Keyword(null,"dw","dw",1013907461));var x = cljs.core.get.call(null,map__5929__$1,new cljs.core.Keyword(null,"x","x",1013904362));var sy = cljs.core.get.call(null,map__5929__$1,new cljs.core.Keyword(null,"sy","sy",1013907928));var sw = cljs.core.get.call(null,map__5929__$1,new cljs.core.Keyword(null,"sw","sw",1013907926));var sx = cljs.core.get.call(null,map__5929__$1,new cljs.core.Keyword(null,"sx","sx",1013907927));var sh = cljs.core.get.call(null,map__5929__$1,new cljs.core.Keyword(null,"sh","sh",1013907911));var h = cljs.core.get.call(null,map__5929__$1,new cljs.core.Keyword(null,"h","h",1013904346));var dh = cljs.core.get.call(null,map__5929__$1,new cljs.core.Keyword(null,"dh","dh",1013907446));var pred__5930_5933 = cljs.core._EQ_;var expr__5931_5934 = cljs.core.count.call(null,params);if(cljs.core.truth_(pred__5930_5933.call(null,2,expr__5931_5934)))
{ctx.drawImage(img,x,y);
} else
{if(cljs.core.truth_(pred__5930_5933.call(null,4,expr__5931_5934)))
{ctx.drawImage(img,x,y,w,h);
} else
{if(cljs.core.truth_(pred__5930_5933.call(null,8,expr__5931_5934)))
{ctx.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__5931_5934)].join('')));
}
}
}
return ctx;
});
var draw_image__4 = (function (ctx,img,x,y){ctx.drawImage(img,x,y);
return ctx;
});
draw_image = function(ctx,img,x,y){
switch(arguments.length){
case 3:
return draw_image__3.call(this,ctx,img,x);
case 4:
return draw_image__4.call(this,ctx,img,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
draw_image.cljs$core$IFn$_invoke$arity$3 = draw_image__3;
draw_image.cljs$core$IFn$_invoke$arity$4 = draw_image__4;
return draw_image;
})()
;
monet.canvas.quadratic_curve_to = (function() {
var quadratic_curve_to = null;
var quadratic_curve_to__2 = (function (ctx,p__5935){var map__5937 = p__5935;var map__5937__$1 = ((cljs.core.seq_QMARK_.call(null,map__5937))?cljs.core.apply.call(null,cljs.core.hash_map,map__5937):map__5937);var y = cljs.core.get.call(null,map__5937__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__5937__$1,new cljs.core.Keyword(null,"x","x",1013904362));var cpy = cljs.core.get.call(null,map__5937__$1,new cljs.core.Keyword(null,"cpy","cpy",1014002974));var cpx = cljs.core.get.call(null,map__5937__$1,new cljs.core.Keyword(null,"cpx","cpx",1014002973));ctx.quadraticCurveTo(cpx,cpy,x,y);
return ctx;
});
var quadratic_curve_to__5 = (function (ctx,cpx,cpy,x,y){ctx.quadraticCurveTo(cpx,cpy,x,y);
return ctx;
});
quadratic_curve_to = function(ctx,cpx,cpy,x,y){
switch(arguments.length){
case 2:
return quadratic_curve_to__2.call(this,ctx,cpx);
case 5:
return quadratic_curve_to__5.call(this,ctx,cpx,cpy,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
quadratic_curve_to.cljs$core$IFn$_invoke$arity$2 = quadratic_curve_to__2;
quadratic_curve_to.cljs$core$IFn$_invoke$arity$5 = quadratic_curve_to__5;
return quadratic_curve_to;
})()
;
monet.canvas.bezier_curve_to = (function() {
var bezier_curve_to = null;
var bezier_curve_to__2 = (function (ctx,p__5938){var map__5940 = p__5938;var map__5940__$1 = ((cljs.core.seq_QMARK_.call(null,map__5940))?cljs.core.apply.call(null,cljs.core.hash_map,map__5940):map__5940);var y = cljs.core.get.call(null,map__5940__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__5940__$1,new cljs.core.Keyword(null,"x","x",1013904362));var cp2y = cljs.core.get.call(null,map__5940__$1,new cljs.core.Keyword(null,"cp2y","cp2y",1016962854));var cp2x = cljs.core.get.call(null,map__5940__$1,new cljs.core.Keyword(null,"cp2x","cp2x",1016962853));var cp1y = cljs.core.get.call(null,map__5940__$1,new cljs.core.Keyword(null,"cp1y","cp1y",1016962823));var cp1x = cljs.core.get.call(null,map__5940__$1,new cljs.core.Keyword(null,"cp1x","cp1x",1016962822));ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);
return ctx;
});
var bezier_curve_to__7 = (function (ctx,cp1x,cp1y,cp2x,cp2y,x,y){ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);
return ctx;
});
bezier_curve_to = function(ctx,cp1x,cp1y,cp2x,cp2y,x,y){
switch(arguments.length){
case 2:
return bezier_curve_to__2.call(this,ctx,cp1x);
case 7:
return bezier_curve_to__7.call(this,ctx,cp1x,cp1y,cp2x,cp2y,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bezier_curve_to.cljs$core$IFn$_invoke$arity$2 = bezier_curve_to__2;
bezier_curve_to.cljs$core$IFn$_invoke$arity$7 = bezier_curve_to__7;
return bezier_curve_to;
})()
;
monet.canvas.rounded_rect = (function rounded_rect(ctx,p__5941){var map__5943 = p__5941;var map__5943__$1 = ((cljs.core.seq_QMARK_.call(null,map__5943))?cljs.core.apply.call(null,cljs.core.hash_map,map__5943):map__5943);var r = cljs.core.get.call(null,map__5943__$1,new cljs.core.Keyword(null,"r","r",1013904356));var h = cljs.core.get.call(null,map__5943__$1,new cljs.core.Keyword(null,"h","h",1013904346));var w = cljs.core.get.call(null,map__5943__$1,new cljs.core.Keyword(null,"w","w",1013904361));var y = cljs.core.get.call(null,map__5943__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__5943__$1,new cljs.core.Keyword(null,"x","x",1013904362));monet.canvas.stroke.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.move_to.call(null,monet.canvas.begin_path.call(null,ctx),x,(y + r)),x,((y + h) - r)),x,(y + h),(x + r),(y + h)),((x + w) - r),(y + h)),(x + w),(y + h),(x + w),((y + h) - r)),(x + w),(y + r)),(x + w),y,((x + w) - r),y),(x + r),y),x,y,x,(y + r)));
return ctx;
});
monet.canvas.add_entity = (function add_entity(mc,k,ent){return (new cljs.core.Keyword(null,"entities","entities",3206757171).cljs$core$IFn$_invoke$arity$1(mc)[k] = ent);
});
monet.canvas.remove_entity = (function remove_entity(mc,k){return delete new cljs.core.Keyword(null,"entities","entities",3206757171).cljs$core$IFn$_invoke$arity$1(mc)[k];
});
monet.canvas.get_entity = (function get_entity(mc,k){return new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"entities","entities",3206757171).cljs$core$IFn$_invoke$arity$1(mc)[k]));
});
/**
* @param {...*} var_args
*/
monet.canvas.update_entity = (function() { 
var update_entity__delegate = function (mc,k,func,extra){var cur = (new cljs.core.Keyword(null,"entities","entities",3206757171).cljs$core$IFn$_invoke$arity$1(mc)[k]);var res = cljs.core.apply.call(null,func,cur,extra);return (new cljs.core.Keyword(null,"entities","entities",3206757171).cljs$core$IFn$_invoke$arity$1(mc)[k] = res);
};
var update_entity = function (mc,k,func,var_args){
var extra = null;if (arguments.length > 3) {
  extra = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_entity__delegate.call(this,mc,k,func,extra);};
update_entity.cljs$lang$maxFixedArity = 3;
update_entity.cljs$lang$applyTo = (function (arglist__5944){
var mc = cljs.core.first(arglist__5944);
arglist__5944 = cljs.core.next(arglist__5944);
var k = cljs.core.first(arglist__5944);
arglist__5944 = cljs.core.next(arglist__5944);
var func = cljs.core.first(arglist__5944);
var extra = cljs.core.rest(arglist__5944);
return update_entity__delegate(mc,k,func,extra);
});
update_entity.cljs$core$IFn$_invoke$arity$variadic = update_entity__delegate;
return update_entity;
})()
;
monet.canvas.clear_BANG_ = (function clear_BANG_(mc){var ks = cljs.core.js_keys.call(null,new cljs.core.Keyword(null,"entities","entities",3206757171).cljs$core$IFn$_invoke$arity$1(mc));var seq__5949 = cljs.core.seq.call(null,ks);var chunk__5950 = null;var count__5951 = 0;var i__5952 = 0;while(true){
if((i__5952 < count__5951))
{var k = cljs.core._nth.call(null,chunk__5950,i__5952);monet.canvas.remove_entity.call(null,mc,k);
{
var G__5953 = seq__5949;
var G__5954 = chunk__5950;
var G__5955 = count__5951;
var G__5956 = (i__5952 + 1);
seq__5949 = G__5953;
chunk__5950 = G__5954;
count__5951 = G__5955;
i__5952 = G__5956;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__5949);if(temp__4092__auto__)
{var seq__5949__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5949__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__5949__$1);{
var G__5957 = cljs.core.chunk_rest.call(null,seq__5949__$1);
var G__5958 = c__4191__auto__;
var G__5959 = cljs.core.count.call(null,c__4191__auto__);
var G__5960 = 0;
seq__5949 = G__5957;
chunk__5950 = G__5958;
count__5951 = G__5959;
i__5952 = G__5960;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__5949__$1);monet.canvas.remove_entity.call(null,mc,k);
{
var G__5961 = cljs.core.next.call(null,seq__5949__$1);
var G__5962 = null;
var G__5963 = 0;
var G__5964 = 0;
seq__5949 = G__5961;
chunk__5950 = G__5962;
count__5951 = G__5963;
i__5952 = G__5964;
continue;
}
}
} else
{return null;
}
}
break;
}
});
monet.canvas.entity = (function entity(v,update,draw){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),v,new cljs.core.Keyword(null,"draw","draw",1016996022),draw,new cljs.core.Keyword(null,"update","update",4470025275),update], null);
});
monet.canvas.attr = (function attr(e,a){return e.getAttribute(a);
});
monet.canvas.draw_loop = (function draw_loop(p__5965){var map__5971 = p__5965;var map__5971__$1 = ((cljs.core.seq_QMARK_.call(null,map__5971))?cljs.core.apply.call(null,cljs.core.hash_map,map__5971):map__5971);var mc = map__5971__$1;var entities = cljs.core.get.call(null,map__5971__$1,new cljs.core.Keyword(null,"entities","entities",3206757171));var active = cljs.core.get.call(null,map__5971__$1,new cljs.core.Keyword(null,"active","active",3885920888));var ctx = cljs.core.get.call(null,map__5971__$1,new cljs.core.Keyword(null,"ctx","ctx",1014003097));var updating_QMARK_ = cljs.core.get.call(null,map__5971__$1,new cljs.core.Keyword(null,"updating?","updating?",3359806763));var canvas = cljs.core.get.call(null,map__5971__$1,new cljs.core.Keyword(null,"canvas","canvas",3941165258));monet.canvas.clear_rect.call(null,ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",1013904362),0,new cljs.core.Keyword(null,"y","y",1013904363),0,new cljs.core.Keyword(null,"w","w",1013904361),monet.canvas.attr.call(null,canvas,"width"),new cljs.core.Keyword(null,"h","h",1013904346),monet.canvas.attr.call(null,canvas,"height")], null));
if(cljs.core.truth_(cljs.core.deref.call(null,active)))
{var ks_5976 = cljs.core.js_keys.call(null,entities);var cnt_5977 = ks_5976.length;var i_5978 = 0;while(true){
if((i_5978 < cnt_5977))
{var k_5979 = (ks_5976[i_5978]);var map__5972_5980 = (entities[k_5979]);var map__5972_5981__$1 = ((cljs.core.seq_QMARK_.call(null,map__5972_5980))?cljs.core.apply.call(null,cljs.core.hash_map,map__5972_5980):map__5972_5980);var ent_5982 = map__5972_5981__$1;var value_5983 = cljs.core.get.call(null,map__5972_5981__$1,new cljs.core.Keyword(null,"value","value",1125876963));var update_5984 = cljs.core.get.call(null,map__5972_5981__$1,new cljs.core.Keyword(null,"update","update",4470025275));var draw_5985 = cljs.core.get.call(null,map__5972_5981__$1,new cljs.core.Keyword(null,"draw","draw",1016996022));if(cljs.core.truth_((function (){var and__3431__auto__ = update_5984;if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.deref.call(null,updating_QMARK_);
} else
{return and__3431__auto__;
}
})()))
{var updated_5986 = (function (){var or__3443__auto__ = (function (){try{return update_5984.call(null,value_5983);
}catch (e5974){if((e5974 instanceof Error))
{var e = e5974;console.log(e);
return value_5983;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e5974;
} else
{return null;
}
}
}})();if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return value_5983;
}
})();if(cljs.core.truth_((entities[k_5979])))
{(entities[k_5979] = cljs.core.assoc.call(null,ent_5982,new cljs.core.Keyword(null,"value","value",1125876963),updated_5986));
} else
{}
} else
{}
if(cljs.core.truth_(draw_5985))
{try{draw_5985.call(null,ctx,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1((entities[k_5979])));
}catch (e5975){if((e5975 instanceof Error))
{var e_5987 = e5975;console.log(e_5987);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e5975;
} else
{}
}
}} else
{}
{
var G__5988 = (i_5978 + 1);
i_5978 = G__5988;
continue;
}
} else
{}
break;
}
return monet.core.animation_frame.call(null,(function (){return draw_loop.call(null,mc);
}));
} else
{return null;
}
});
monet.canvas.monet_canvas = (function monet_canvas(elem,context_type){var ct = (function (){var or__3443__auto__ = context_type;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return "2d";
}
})();var ctx = monet.canvas.get_context.call(null,elem,ct);return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"canvas","canvas",3941165258),elem,new cljs.core.Keyword(null,"ctx","ctx",1014003097),ctx,new cljs.core.Keyword(null,"entities","entities",3206757171),(function (){var obj5992 = {};return obj5992;
})(),new cljs.core.Keyword(null,"updating?","updating?",3359806763),cljs.core.atom.call(null,true),new cljs.core.Keyword(null,"active","active",3885920888),cljs.core.atom.call(null,true)], null);
});
/**
* @param {...*} var_args
*/
monet.canvas.init = (function() { 
var init__delegate = function (canvas,p__5993){var vec__5995 = p__5993;var context_type = cljs.core.nth.call(null,vec__5995,0,null);var mc = monet.canvas.monet_canvas.call(null,canvas,context_type);monet.canvas.draw_loop.call(null,mc);
return mc;
};
var init = function (canvas,var_args){
var p__5993 = null;if (arguments.length > 1) {
  p__5993 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return init__delegate.call(this,canvas,p__5993);};
init.cljs$lang$maxFixedArity = 1;
init.cljs$lang$applyTo = (function (arglist__5996){
var canvas = cljs.core.first(arglist__5996);
var p__5993 = cljs.core.rest(arglist__5996);
return init__delegate(canvas,p__5993);
});
init.cljs$core$IFn$_invoke$arity$variadic = init__delegate;
return init;
})()
;
monet.canvas.stop = (function stop(mc){return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(mc),false);
});
monet.canvas.stop_updating = (function stop_updating(mc){return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"updating?","updating?",3359806763).cljs$core$IFn$_invoke$arity$1(mc),false);
});
monet.canvas.start_updating = (function start_updating(mc){return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"updating?","updating?",3359806763).cljs$core$IFn$_invoke$arity$1(mc),true);
});
monet.canvas.restart = (function restart(mc){cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(mc),true);
return monet.canvas.draw_loop.call(null,mc);
});

//# sourceMappingURL=canvas.js.map