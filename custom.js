preroadImage = function(core) {

	core.preload('button_left.png', 'button_right.png');

};

gameStart = function(core) {

	// 左へ移動するボタン
	var button_left = new Sprite(100, 24);
	button_left.image = core.assets['button_left.png'];
	button_left.x = 0;
	button_left.y = 0;
	core.rootScene.addChild(button_left);


	// 右へ移動するボタン
	var button_right = new Sprite(100, 24);


};
