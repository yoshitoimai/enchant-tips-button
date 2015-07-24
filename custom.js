preroadImage = function(core) {

	core.preload('button_left.png', 'button_right.png');

};

gameStart = function(core) {

	// 左へ移動するボタン
	var button_left = new Sprite(100, 24);
	button_left.image = core.assets['button_left.png'];
	button_left.x = 0;
	button_left.y = 456;
	core.rootScene.addChild(button_left);

	button_left.addEventListener(Event.TOUCH_START, function(){

	});

	// 右へ移動するボタン
	var button_right = new Sprite(100, 24);
	button_right.image = core.assets['button_right.png'];
	button_right.x = 221;
	button_right.y = 456;
	core.rootScene.addChild(button_right);

};
