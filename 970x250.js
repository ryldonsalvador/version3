(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._1 = function() {
	this.initialize(img._1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,205);


(lib._2 = function() {
	this.initialize(img._2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,185);


(lib._3 = function() {
	this.initialize(img._3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,236);


(lib._4 = function() {
	this.initialize(img._4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,239);


(lib._5 = function() {
	this.initialize(img._5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,217);


(lib.arcade_fire_big = function() {
	this.initialize(img.arcade_fire_big);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,189);


(lib.arcade_fire_small = function() {
	this.initialize(img.arcade_fire_small);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,189);


(lib.arcade_fireandmore = function() {
	this.initialize(img.arcade_fireandmore);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,786,71);


(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,29);


(lib.block_logo = function() {
	this.initialize(img.block_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,67);


(lib.copy1 = function() {
	this.initialize(img.copy1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,55);


(lib.cta_bg = function() {
	this.initialize(img.cta_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,262,62);


(lib.date = function() {
	this.initialize(img.date);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,571,128);


(lib.learnmore = function() {
	this.initialize(img.learnmore);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,31);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.learnmore();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,95,15.5), null);


(lib.Symbol27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ball();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,15,14.5), null);


(lib.Symbol26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.block_logo();
	this.instance.setTransform(0,0,0.5128,0.5127);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,80,34.4), null);


(lib.Symbol24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.arcade_fire_small();
	this.instance.setTransform(0,0,0.203,0.2026);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,120,38.3), null);


(lib.Symbol23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.date();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,571,128), null);


(lib.Symbol22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.arcade_fireandmore();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,786,71), null);


(lib.Symbol19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.copy1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,653,55), null);


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,168,185), null);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,105,205), null);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,130,236), null);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,117,239), null);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,161,217), null);


(lib.Symbol8copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egv1AJTIAAylMBfrAAAIAASlg");
	mask.setTransform(284.825,153.975);

	// Layer_1
	this.instance = new lib.arcade_fire_big();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8copy, new cjs.Rectangle(0,0,591,189), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egv1AJTIAAylMBfrAAAIAASlg");
	mask.setTransform(284.825,35.025);

	// Layer_1
	this.instance = new lib.arcade_fire_big();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,591,94.5), null);


(lib.Symbol25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol24();
	this.instance.setTransform(60,19.2,1,1,0,0,0,60,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,120,38.3), null);


// stage content:
(lib._970x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [119];
	// timeline functions:
	this.frame_119 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Layer_18 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_75 = new cjs.Graphics().p("EAutAR9IAAkVIRPAAIAAEVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(75).to({graphics:mask_graphics_75,x:409.25,y:114.95}).wait(45));

	// learnmore
	this.instance = new lib.Symbol29();
	this.instance.setTransform(764.5,198.8,1,1,0,0,0,47.5,7.8);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75).to({_off:false},0).to({y:220.8},9).wait(36));

	// Layer_15 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_54 = new cjs.Graphics().p("EAweAQxIAAjIILGAAIAADIg");
	var mask_1_graphics_55 = new cjs.Graphics().p("EAw7AQ7IAAjVILFAAIAADVg");
	var mask_1_graphics_56 = new cjs.Graphics().p("EAxXARFIAAjiILGAAIAADig");
	var mask_1_graphics_57 = new cjs.Graphics().p("EAxyARPIAAjvILHAAIAADvg");
	var mask_1_graphics_58 = new cjs.Graphics().p("EAyOARZIAAj8ILGAAIAAD8g");
	var mask_1_graphics_59 = new cjs.Graphics().p("EAyqARjIAAkJILGAAIAAEJg");
	var mask_1_graphics_60 = new cjs.Graphics().p("EAzHARuIAAkWILGAAIAAEWg");
	var mask_1_graphics_61 = new cjs.Graphics().p("EAzjAR4IAAkjILGAAIAAEjg");
	var mask_1_graphics_62 = new cjs.Graphics().p("EAz+ASCIAAkwILGAAIAAEwg");
	var mask_1_graphics_63 = new cjs.Graphics().p("EA0aASMIAAk9ILGAAIAAE9g");
	var mask_1_graphics_64 = new cjs.Graphics().p("EA03ASXIAAlLILFAAIAAFLg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(54).to({graphics:mask_1_graphics_54,x:381.25,y:107.275}).wait(1).to({graphics:mask_1_graphics_55,x:384.05,y:108.2884}).wait(1).to({graphics:mask_1_graphics_56,x:386.85,y:109.3017}).wait(1).to({graphics:mask_1_graphics_57,x:389.65,y:110.3151}).wait(1).to({graphics:mask_1_graphics_58,x:392.45,y:111.3285}).wait(1).to({graphics:mask_1_graphics_59,x:395.25,y:112.3418}).wait(1).to({graphics:mask_1_graphics_60,x:398.05,y:113.3552}).wait(1).to({graphics:mask_1_graphics_61,x:400.85,y:114.3686}).wait(1).to({graphics:mask_1_graphics_62,x:403.65,y:115.382}).wait(1).to({graphics:mask_1_graphics_63,x:406.45,y:116.3953}).wait(1).to({graphics:mask_1_graphics_64,x:409.25,y:117.4499}).wait(56));

	// Layer_13
	this.instance_1 = new lib.ball();
	this.instance_1.setTransform(750,205);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).wait(66));

	// Layer_16_copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_54 = new cjs.Graphics().p("EA7OARGIAAjIIAoAAIAADIg");
	var mask_2_graphics_55 = new cjs.Graphics().p("EA5nARFIAAjIICvAAIAADIg");
	var mask_2_graphics_56 = new cjs.Graphics().p("EA4BAREIAAjIIE2AAIAADIg");
	var mask_2_graphics_57 = new cjs.Graphics().p("EA2aARDIAAjIIG9AAIAADIg");
	var mask_2_graphics_58 = new cjs.Graphics().p("EA00ARCIAAjIIJEAAIAADIg");
	var mask_2_graphics_59 = new cjs.Graphics().p("EAzNARBIAAjIILLAAIAADIg");
	var mask_2_graphics_60 = new cjs.Graphics().p("EAxnARAIAAjIINSAAIAADIg");
	var mask_2_graphics_61 = new cjs.Graphics().p("EAwAAQ/IAAjIIPZAAIAADIg");
	var mask_2_graphics_62 = new cjs.Graphics().p("EAuaAQ+IAAjIIRgAAIAADIg");
	var mask_2_graphics_63 = new cjs.Graphics().p("EAszAQ9IAAjIITnAAIAADIg");
	var mask_2_graphics_64 = new cjs.Graphics().p("EArfAQ8IAAjIIVtAAIAADIg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(54).to({graphics:mask_2_graphics_54,x:382.9999,y:109.425}).wait(1).to({graphics:mask_2_graphics_55,x:386.2487,y:109.325}).wait(1).to({graphics:mask_2_graphics_56,x:389.4975,y:109.225}).wait(1).to({graphics:mask_2_graphics_57,x:392.7464,y:109.125}).wait(1).to({graphics:mask_2_graphics_58,x:395.9952,y:109.025}).wait(1).to({graphics:mask_2_graphics_59,x:399.244,y:108.925}).wait(1).to({graphics:mask_2_graphics_60,x:402.4928,y:108.825}).wait(1).to({graphics:mask_2_graphics_61,x:405.7416,y:108.725}).wait(1).to({graphics:mask_2_graphics_62,x:408.9905,y:108.625}).wait(1).to({graphics:mask_2_graphics_63,x:412.2393,y:108.525}).wait(1).to({graphics:mask_2_graphics_64,x:417.2501,y:108.425}).wait(56));

	// Layer_14_copy
	this.instance_2 = new lib.cta_bg();
	this.instance_2.setTransform(698,204,0.5,0.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).wait(66));

	// Layer_16_copy (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_59 = new cjs.Graphics().p("EA7OARdIAAjIIAoAAIAADIg");
	var mask_3_graphics_60 = new cjs.Graphics().p("EA5nARdIAAjIICvAAIAADIg");
	var mask_3_graphics_61 = new cjs.Graphics().p("EA4BARcIAAjIIE2AAIAADIg");
	var mask_3_graphics_62 = new cjs.Graphics().p("EA2aARbIAAjIIG9AAIAADIg");
	var mask_3_graphics_63 = new cjs.Graphics().p("EA00ARaIAAjIIJEAAIAADIg");
	var mask_3_graphics_64 = new cjs.Graphics().p("EAzNARZIAAjIILLAAIAADIg");
	var mask_3_graphics_65 = new cjs.Graphics().p("EAxnARYIAAjIINSAAIAADIg");
	var mask_3_graphics_66 = new cjs.Graphics().p("EAwAARXIAAjIIPZAAIAADIg");
	var mask_3_graphics_67 = new cjs.Graphics().p("EAuaARXIAAjIIRgAAIAADIg");
	var mask_3_graphics_68 = new cjs.Graphics().p("EAszARWIAAjIITnAAIAADIg");
	var mask_3_graphics_69 = new cjs.Graphics().p("EArfARVIAAjIIVtAAIAADIg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_3_graphics_59,x:382.9999,y:111.75}).wait(1).to({graphics:mask_3_graphics_60,x:386.2487,y:111.6625}).wait(1).to({graphics:mask_3_graphics_61,x:389.4975,y:111.575}).wait(1).to({graphics:mask_3_graphics_62,x:392.7464,y:111.4875}).wait(1).to({graphics:mask_3_graphics_63,x:395.9952,y:111.4}).wait(1).to({graphics:mask_3_graphics_64,x:399.244,y:111.3125}).wait(1).to({graphics:mask_3_graphics_65,x:402.4928,y:111.225}).wait(1).to({graphics:mask_3_graphics_66,x:405.7416,y:111.1375}).wait(1).to({graphics:mask_3_graphics_67,x:408.9905,y:111.05}).wait(1).to({graphics:mask_3_graphics_68,x:412.2393,y:110.9625}).wait(1).to({graphics:mask_3_graphics_69,x:417.2501,y:110.875}).wait(51));

	// Layer_14_copy
	this.instance_3 = new lib.cta_bg();
	this.instance_3.setTransform(698,204,0.5,0.5);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).wait(61));

	// Layer_16_copy (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_62 = new cjs.Graphics().p("EA7OARyIAAjIIAoAAIAADIg");
	var mask_4_graphics_63 = new cjs.Graphics().p("EA5nARxIAAjIICvAAIAADIg");
	var mask_4_graphics_64 = new cjs.Graphics().p("EA4BARwIAAjIIE2AAIAADIg");
	var mask_4_graphics_65 = new cjs.Graphics().p("EA2aARvIAAjIIG9AAIAADIg");
	var mask_4_graphics_66 = new cjs.Graphics().p("EA00ARuIAAjIIJEAAIAADIg");
	var mask_4_graphics_67 = new cjs.Graphics().p("EAzNARtIAAjIILLAAIAADIg");
	var mask_4_graphics_68 = new cjs.Graphics().p("EAxnARsIAAjIINSAAIAADIg");
	var mask_4_graphics_69 = new cjs.Graphics().p("EAwAARrIAAjIIPZAAIAADIg");
	var mask_4_graphics_70 = new cjs.Graphics().p("EAuaARqIAAjIIRgAAIAADIg");
	var mask_4_graphics_71 = new cjs.Graphics().p("EAszARqIAAjIITnAAIAADIg");
	var mask_4_graphics_72 = new cjs.Graphics().p("EArfARpIAAjIIVtAAIAADIg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_4_graphics_62,x:382.9999,y:113.75}).wait(1).to({graphics:mask_4_graphics_63,x:386.2487,y:113.6625}).wait(1).to({graphics:mask_4_graphics_64,x:389.4975,y:113.575}).wait(1).to({graphics:mask_4_graphics_65,x:392.7464,y:113.4875}).wait(1).to({graphics:mask_4_graphics_66,x:395.9952,y:113.4}).wait(1).to({graphics:mask_4_graphics_67,x:399.244,y:113.3125}).wait(1).to({graphics:mask_4_graphics_68,x:402.4928,y:113.225}).wait(1).to({graphics:mask_4_graphics_69,x:405.7416,y:113.1375}).wait(1).to({graphics:mask_4_graphics_70,x:408.9905,y:113.05}).wait(1).to({graphics:mask_4_graphics_71,x:412.2393,y:112.9625}).wait(1).to({graphics:mask_4_graphics_72,x:417.2501,y:112.875}).wait(48));

	// Layer_14_copy
	this.instance_4 = new lib.cta_bg();
	this.instance_4.setTransform(698,207,0.5,0.5);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(62).to({_off:false},0).wait(58));

	// Layer_16 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_65 = new cjs.Graphics().p("EA7OAS8IAAjIIAoAAIAADIg");
	var mask_5_graphics_66 = new cjs.Graphics().p("EA5nAS8IAAjIICvAAIAADIg");
	var mask_5_graphics_67 = new cjs.Graphics().p("EA4BAS7IAAjIIE2AAIAADIg");
	var mask_5_graphics_68 = new cjs.Graphics().p("EA2aAS6IAAjIIG9AAIAADIg");
	var mask_5_graphics_69 = new cjs.Graphics().p("EA00AS5IAAjIIJEAAIAADIg");
	var mask_5_graphics_70 = new cjs.Graphics().p("EAzNAS4IAAjIILLAAIAADIg");
	var mask_5_graphics_71 = new cjs.Graphics().p("EAxnAS3IAAjIINSAAIAADIg");
	var mask_5_graphics_72 = new cjs.Graphics().p("EAwAAS2IAAjIIPZAAIAADIg");
	var mask_5_graphics_73 = new cjs.Graphics().p("EAuaAS2IAAjIIRgAAIAADIg");
	var mask_5_graphics_74 = new cjs.Graphics().p("EAszAS1IAAjIITnAAIAADIg");
	var mask_5_graphics_75 = new cjs.Graphics().p("EArfAS0IAAjIIVtAAIAADIg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(65).to({graphics:mask_5_graphics_65,x:382.9999,y:121.25}).wait(1).to({graphics:mask_5_graphics_66,x:386.2487,y:121.1625}).wait(1).to({graphics:mask_5_graphics_67,x:389.4975,y:121.075}).wait(1).to({graphics:mask_5_graphics_68,x:392.7464,y:120.9875}).wait(1).to({graphics:mask_5_graphics_69,x:395.9952,y:120.9}).wait(1).to({graphics:mask_5_graphics_70,x:399.244,y:120.8125}).wait(1).to({graphics:mask_5_graphics_71,x:402.4928,y:120.725}).wait(1).to({graphics:mask_5_graphics_72,x:405.7416,y:120.6375}).wait(1).to({graphics:mask_5_graphics_73,x:408.9905,y:120.55}).wait(1).to({graphics:mask_5_graphics_74,x:412.2393,y:120.4625}).wait(1).to({graphics:mask_5_graphics_75,x:417.2501,y:120.375}).wait(45));

	// Layer_14
	this.instance_5 = new lib.cta_bg();
	this.instance_5.setTransform(698,207,0.5,0.5);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(65).to({_off:false},0).wait(55));

	// ball
	this.instance_6 = new lib.Symbol27();
	this.instance_6.setTransform(778.9,23.95,1,1,0,0,0,7.5,7.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(46).to({_off:false},0).wait(1).to({x:786.1,y:29.2},0).wait(1).to({x:791.9,y:32.7},0).wait(1).to({x:797.1,y:35.45},0).wait(1).to({x:802,y:37.6},0).wait(1).to({x:806.75,y:39.4},0).wait(1).to({x:811.45,y:40.9},0).wait(1).to({x:816.25,y:42.05},0).wait(1).to({x:821.25,y:43},0).wait(1).to({x:826.5,y:43.65},0).wait(1).to({x:832.3,y:44},0).wait(1).to({x:839,y:43.95},0).wait(1).to({x:847.8,y:43.2},0).wait(1).to({x:857,y:36.2},0).wait(61));

	// Layer_9_copy (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_46 = new cjs.Graphics().p("EA2PAFWIAAj0INcAAIAAD0g");
	var mask_6_graphics_59 = new cjs.Graphics().p("AmtB6IAAjzINbAAIAADzg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(46).to({graphics:mask_6_graphics_46,x:433.075,y:34.25}).wait(13).to({graphics:mask_6_graphics_59,x:823.15,y:56.25}).wait(61));

	// block_logo_copy
	this.instance_7 = new lib.Symbol26();
	this.instance_7.setTransform(825,-0.8,1,1,0,0,0,40,17.2);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(46).to({_off:false},0).to({y:41.2},13).wait(61));

	// Layer_9 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_46 = new cjs.Graphics().p("EA3AADYIAAj0IL4AAIAAD0g");
	var mask_7_graphics_59 = new cjs.Graphics().p("Al7B7IAAj1IL3AAIAAD1g");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(46).to({graphics:mask_7_graphics_46,x:428.049,y:21.625}).wait(13).to({graphics:mask_7_graphics_59,x:818.075,y:31}).wait(61));

	// block_logo
	this.instance_8 = new lib.Symbol26();
	this.instance_8.setTransform(825,61.2,1,1,0,0,0,40,17.2);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(46).to({_off:false},0).to({y:41.2},13).wait(61));

	// Layer_7_copy (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_41 = new cjs.Graphics().p("AqRB6IAAj0IUiAAIAAD0g");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(41).to({graphics:mask_8_graphics_41,x:705.65,y:29}).wait(79));

	// small_arcade_logo_copy
	this.instance_9 = new lib.Symbol25();
	this.instance_9.setTransform(707,65.2,1,1,0,0,0,60,19.2);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(41).to({_off:false},0).to({y:41.2},12).wait(67));

	// Layer_7 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_41 = new cjs.Graphics().p("AqRB6IAAj0IUiAAIAAD0g");
	var mask_9_graphics_53 = new cjs.Graphics().p("AqRB6IAAj0IUiAAIAAD0g");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(41).to({graphics:mask_9_graphics_41,x:705.65,y:50.25}).wait(12).to({graphics:mask_9_graphics_53,x:705.65,y:50.25}).wait(67));

	// small_arcade_logo
	this.instance_10 = new lib.Symbol25();
	this.instance_10.setTransform(707,-1.8,1,1,0,0,0,60,19.2);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(41).to({_off:false},0).to({y:41.2},12).wait(67));

	// date
	this.instance_11 = new lib.Symbol23();
	this.instance_11.setTransform(766.15,145.9,0.4991,0.4988,0,0,0,285.5,64);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(23).to({_off:false},0).to({y:158.9,alpha:1},21,cjs.Ease.quadOut).wait(76));

	// arcade_fireandmore
	this.instance_12 = new lib.Symbol22();
	this.instance_12.setTransform(811.8,76.9,1,1,0,0,0,393,35.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(23).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:759.45,y:93.85,alpha:1},21,cjs.Ease.quadOut).wait(76));

	// Layer_3 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_23 = new cjs.Graphics().p("AVPGsIAAlAMA0NAAAIAAFAg");
	var mask_10_graphics_24 = new cjs.Graphics().p("AVPGSIAAlAMA0NAAAIAAFAg");
	var mask_10_graphics_25 = new cjs.Graphics().p("AVPF3IAAlAMA0NAAAIAAFAg");
	var mask_10_graphics_26 = new cjs.Graphics().p("AVPFdIAAlAMA0NAAAIAAFAg");
	var mask_10_graphics_27 = new cjs.Graphics().p("AVPFDIAAlAMA0NAAAIAAFAg");
	var mask_10_graphics_28 = new cjs.Graphics().p("AVPEpIAAk/MA0NAAAIAAE/g");
	var mask_10_graphics_29 = new cjs.Graphics().p("AVPEOIAAk/MA0NAAAIAAE/g");
	var mask_10_graphics_30 = new cjs.Graphics().p("AVPD0IAAk/MA0NAAAIAAE/g");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(23).to({graphics:mask_10_graphics_23,x:469.9504,y:42.8003}).wait(1).to({graphics:mask_10_graphics_24,x:469.9504,y:40.1717}).wait(1).to({graphics:mask_10_graphics_25,x:469.9504,y:37.5431}).wait(1).to({graphics:mask_10_graphics_26,x:469.9504,y:34.9146}).wait(1).to({graphics:mask_10_graphics_27,x:469.9504,y:32.286}).wait(1).to({graphics:mask_10_graphics_28,x:469.9504,y:29.6574}).wait(1).to({graphics:mask_10_graphics_29,x:469.9504,y:27.0289}).wait(1).to({graphics:mask_10_graphics_30,x:469.9504,y:24.4003}).wait(90));

	// copy1
	this.instance_13 = new lib.Symbol19();
	this.instance_13.setTransform(760.7,71.55,0.6171,0.6163,0,0,0,326.8,27.5);
	this.instance_13.alpha = 0;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regX:326.6,regY:27.6,scaleX:0.4992,scaleY:0.4991,x:773.05,y:68.8,alpha:1},17).wait(103));

	// band_2
	this.instance_14 = new lib.Symbol16();
	this.instance_14.setTransform(-121.65,157.55,1.3373,1.3373,0,0,0,84,92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({scaleX:1,scaleY:1,x:138,y:157.5},48,cjs.Ease.circOut).to({x:134},41).wait(31));

	// band_1
	this.instance_15 = new lib.Symbol15();
	this.instance_15.setTransform(-94.9,147.5,1.3356,1.3356,0,0,0,52.5,102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({scaleX:1,scaleY:1,x:57.5},29,cjs.Ease.circOut).to({x:51.5},60).wait(31));

	// band_5
	this.instance_16 = new lib.Symbol10();
	this.instance_16.setTransform(479.55,141.5,1.4719,1.4719,0,0,0,80.5,108.5);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({scaleX:1,scaleY:1,x:488,alpha:1},29,cjs.Ease.circOut).to({x:479.5},60).wait(31));

	// band_3
	this.instance_17 = new lib.Symbol14();
	this.instance_17.setTransform(171.8,119.35,1.5329,1.5329,0,0,0,65.1,118);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({regX:65,scaleX:1,scaleY:1,x:266,y:132,alpha:1},29,cjs.Ease.circOut).to({x:262},60).wait(31));

	// band_4
	this.instance_18 = new lib.Symbol11();
	this.instance_18.setTransform(335.55,130.35,1.5824,1.5824,0,0,0,58.5,119.4);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({regY:119.5,scaleX:1,scaleY:1,x:378.5,y:130.5,alpha:1},29,cjs.Ease.circOut).to({x:374.5},60).wait(31));

	// Layer_12_copy (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_0 = new cjs.Graphics().p("EA1wALkIAAqAIIIAAIAAKAg");
	var mask_11_graphics_1 = new cjs.Graphics().p("EAxYALvIAAqWIN8AAIAAKWg");
	var mask_11_graphics_2 = new cjs.Graphics().p("EAtBAL6IAAqsITwAAIAAKsg");
	var mask_11_graphics_3 = new cjs.Graphics().p("EAopAMFIAArCIZkAAIAALCg");
	var mask_11_graphics_4 = new cjs.Graphics().p("EAkRAMQIAArYIfYAAIAALYg");
	var mask_11_graphics_5 = new cjs.Graphics().p("Af6MbIAAruMAlMAAAIAALug");
	var mask_11_graphics_6 = new cjs.Graphics().p("AbiMmIAAsEMArAAAAIAAMEg");
	var mask_11_graphics_7 = new cjs.Graphics().p("AXLMxIAAsaMAwzAAAIAAMag");
	var mask_11_graphics_8 = new cjs.Graphics().p("ASzM8IAAswMA2oAAAIAAMwg");
	var mask_11_graphics_9 = new cjs.Graphics().p("AObNGIAAtFMA8cAAAIAANFg");
	var mask_11_graphics_10 = new cjs.Graphics().p("AKONSIAAtbMBCQAAAIAANbg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:mask_11_graphics_0,x:395.9977,y:73.9728}).wait(1).to({graphics:mask_11_graphics_1,x:405.2328,y:75.0701}).wait(1).to({graphics:mask_11_graphics_2,x:414.468,y:76.1673}).wait(1).to({graphics:mask_11_graphics_3,x:423.7031,y:77.2645}).wait(1).to({graphics:mask_11_graphics_4,x:432.9382,y:78.3617}).wait(1).to({graphics:mask_11_graphics_5,x:442.1733,y:79.459}).wait(1).to({graphics:mask_11_graphics_6,x:451.4085,y:80.5562}).wait(1).to({graphics:mask_11_graphics_7,x:460.6436,y:81.6534}).wait(1).to({graphics:mask_11_graphics_8,x:469.8787,y:82.7506}).wait(1).to({graphics:mask_11_graphics_9,x:479.1139,y:83.8479}).wait(1).to({graphics:mask_11_graphics_10,x:489.3708,y:84.9982}).wait(110));

	// arcade_logo_copy
	this.instance_19 = new lib.Symbol8();
	this.instance_19.setTransform(762.45,190.4,0.9147,0.9147,0,0,0,295.4,94.7);

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({regX:295.9,regY:95.2,scaleX:0.6057,scaleY:0.6059,x:766.15,y:163.5},16,cjs.Ease.quadOut).wait(1).to({regX:295.5,regY:47.2,x:765.9,y:134.4},0).wait(12).to({regX:295.9,regY:95.2,x:766.15,y:163.5},0).wait(1).to({regX:295.5,regY:47.2,x:765.9,y:150.8},0).wait(1).to({y:164.3},0).wait(1).to({y:175.3},0).wait(1).to({y:183.95},0).wait(1).to({y:190.65},0).wait(1).to({y:195.5},0).wait(1).to({regX:295.9,regY:95.2,x:766.15,y:227.9},0).wait(84));

	// Layer_12 (mask)
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	var mask_12_graphics_0 = new cjs.Graphics().p("EA1wANrIAAqAIIIAAIAAKAg");
	var mask_12_graphics_1 = new cjs.Graphics().p("EAxdAOIIAAqCINzAAIAAKCg");
	var mask_12_graphics_2 = new cjs.Graphics().p("EAtKAOkIAAqDITeAAIAAKDg");
	var mask_12_graphics_3 = new cjs.Graphics().p("EAo3APBIAAqGIZJAAIAAKGg");
	var mask_12_graphics_4 = new cjs.Graphics().p("EAkkAPeIAAqIIe0AAIAAKIg");
	var mask_12_graphics_5 = new cjs.Graphics().p("EAgRAP7IAAqKMAkfAAAIAAKKg");
	var mask_12_graphics_6 = new cjs.Graphics().p("Ab+QYIAAqMMAqKAAAIAAKMg");
	var mask_12_graphics_7 = new cjs.Graphics().p("AXrQ1IAAqOMAv1AAAIAAKOg");
	var mask_12_graphics_8 = new cjs.Graphics().p("ATYRSIAAqQMA1gAAAIAAKQg");
	var mask_12_graphics_9 = new cjs.Graphics().p("APFRvIAAqSMA7LAAAIAAKSg");
	var mask_12_graphics_10 = new cjs.Graphics().p("AK8SLIAAqUMBA2AAAIAAKUg");

	this.timeline.addTween(cjs.Tween.get(mask_12).to({graphics:mask_12_graphics_0,x:395.9977,y:87.4728}).wait(1).to({graphics:mask_12_graphics_1,x:404.7954,y:90.3605}).wait(1).to({graphics:mask_12_graphics_2,x:413.5932,y:93.2482}).wait(1).to({graphics:mask_12_graphics_3,x:422.3909,y:96.1359}).wait(1).to({graphics:mask_12_graphics_4,x:431.1886,y:99.0236}).wait(1).to({graphics:mask_12_graphics_5,x:439.9863,y:101.9114}).wait(1).to({graphics:mask_12_graphics_6,x:448.7841,y:104.7991}).wait(1).to({graphics:mask_12_graphics_7,x:457.5818,y:107.6868}).wait(1).to({graphics:mask_12_graphics_8,x:466.3795,y:110.5745}).wait(1).to({graphics:mask_12_graphics_9,x:475.1773,y:113.4622}).wait(1).to({graphics:mask_12_graphics_10,x:485,y:116.3499}).wait(110));

	// arcade_logo
	this.instance_20 = new lib.Symbol8copy();
	this.instance_20.setTransform(674.95,104.75,0.9146,0.9144,0,0,0,295.7,94.7);

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_12;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({regX:295.9,regY:95.2,scaleX:0.6057,scaleY:0.6059,x:766.15,y:163.5},16,cjs.Ease.quadOut).wait(1).to({regX:295.5,regY:141.8,x:765.9,y:191.7},0).wait(12).to({regX:295.9,regY:95.2,x:766.15,y:163.5},0).wait(1).to({regX:295.5,regY:141.8,scaleX:0.6182,scaleY:0.6183,x:764.95,y:170.1},0).wait(1).to({scaleX:0.6285,scaleY:0.6286,x:764.15,y:152.25},0).wait(1).to({scaleX:0.6368,scaleY:0.6369,x:763.6,y:137.8},0).wait(1).to({scaleX:0.6434,scaleY:0.6435,x:763.1,y:126.35},0).wait(1).to({scaleX:0.6485,scaleY:0.6485,x:762.75,y:117.5},0).wait(1).to({scaleX:0.6522,scaleY:0.6522,x:762.4,y:111.1},0).wait(1).to({regX:295.6,regY:94.7,scaleX:0.6547,scaleY:0.6547,x:762.55,y:76.4},0).wait(84));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(251,63.5,953.8,256.1);
// library properties:
lib.properties = {
	id: '912F7F30324E4BBA984A1933665BE2EE',
	width: 970,
	height: 250,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/_1.png?1650320690142", id:"_1"},
		{src:"images/_2.png?1650320690142", id:"_2"},
		{src:"images/_3.png?1650320690142", id:"_3"},
		{src:"images/_4.png?1650320690142", id:"_4"},
		{src:"images/_5.png?1650320690142", id:"_5"},
		{src:"images/arcade_fire_big.png?1650320690142", id:"arcade_fire_big"},
		{src:"images/arcade_fire_small.png?1650320690142", id:"arcade_fire_small"},
		{src:"images/arcade_fireandmore.png?1650320690142", id:"arcade_fireandmore"},
		{src:"images/ball.png?1650320690142", id:"ball"},
		{src:"images/block_logo.png?1650320690142", id:"block_logo"},
		{src:"images/copy1.png?1650320690142", id:"copy1"},
		{src:"images/cta_bg.png?1650320690142", id:"cta_bg"},
		{src:"images/date.png?1650320690142", id:"date"},
		{src:"images/learnmore.png?1650320690142", id:"learnmore"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['912F7F30324E4BBA984A1933665BE2EE'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;