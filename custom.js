preroadImage = function(core) {

	core.preload('button_left.png', 'button_right.png', 'player.png');

};

gameStart = function(core) {

	var player = new ActionSprite('player.png', 32, 32);
	player.x = 144;
	player.y = 400;
	core.rootScene.addChild(player);

	// 左へ移動するボタン
	var button_left = new Sprite(100, 24);
	button_left.image = core.assets['button_left.png'];
	button_left.x = 0;
	button_left.y = 456;
	core.rootScene.addChild(button_left);

	button_left.addEventListener(Event.TOUCH_START, function(){
		button_left.tl.scaleTo(1.1, 1.1, 1).scaleTo(1, 1, 1);



	});

	// 右へ移動するボタン
	var button_right = new Sprite(100, 24);
	button_right.image = core.assets['button_right.png'];
	button_right.x = 221;
	button_right.y = 456;
	core.rootScene.addChild(button_right);

	button_right.addEventListener(Event.TOUCH_START, function(){
		button_right.tl.scaleTo(1.1, 1.1, 1).scaleTo(1, 1, 1);



	});

};
