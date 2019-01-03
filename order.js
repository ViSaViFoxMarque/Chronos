var Order = function(id, queue, show){
	this.id = id || Players.GetPlayerHeroEntityIndex(Players.GetLocalPlayer());
	this.queue = queue || false;
	this.show = show || false;
	this.order = function(order, delay){
		var shell = function(){
			var a = Players.GetSelectedEntities(Players.GetLocalPlayer());
			GameUI.SelectUnit(this.id, false);
			Game.PrepareUnitOrders(order);
			GameUI.SelectUnit(a[0], false);
			for(i=1; i<a.length; i++){
				GameUI.SelectUnit(a[i], true);
			};
		};
		if(delay == 0){
			shell();
		} else {
			$.Schedule(delay, function(){
				shell();
			});
		};
	};
};
Order.prototype.MoveToPosition = function(a, delay){
	delay = delay || 0;
	var order = {
		OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_POSITION,
		UnitIndex: this.id,
		Position: a,
		Queue: this.queue,
		ShowEffects: this.show
	};
	this.order(order, delay);
};
Order.prototype.MoveToTarget = function(a, delay){
	delay = delay || 0;
	var order = {
		OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_TARGET,
		UnitIndex: this.id,
		TargetIndex: a,
		Queue: this.queue,
		ShowEffects: this.show
	};
	this.order(order, delay);
};
Order.prototype.AttackMove = function(a, delay){
	delay = delay || 0;
	var order = {
		OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_ATTACK_MOVE,
		UnitIndex: this.id,
		Position: a,
		Queue: this.queue,
		ShowEffects: this.show
	};
	this.order(order, delay);
};
Order.prototype.AttackTarget = function(a, delay){
	delay = delay || 0;
	var order = {
		OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_ATTACK_TARGET,
		UnitIndex: this.id,
		TargetIndex: a,
		Queue: this.queue,
		ShowEffects: this.show
	};
	this.order(order, delay);
};
Order.prototype.CastPosition = function(a, delay){
	delay = delay || 0;
	var order = {
		OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_CAST_POSITION,
		UnitIndex: this.id,
		Position: a,
		Queue: this.queue,
		ShowEffects: this.show
	};
	this.order(order, delay);
};
Order.prototype.CastTarget = function(a, b, delay){
	delay = delay || 0;
	var order = {
		OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TARGET,
		UnitIndex: this.id,
		AbilityIndex: a,
		TargetIndex: b,
		Queue: this.queue,
		ShowEffects: this.show
	};
	this.order(order, delay);
};
Order.prototype.CastTargetTree = function(a, b, delay){
	delay = delay || 0;
	var order = {
		OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TARGET_TREE,
		UnitIndex: this.id,
		AbilityIndex: a,
		TargetIndex: b,
		Queue: this.queue,
		ShowEffects: this.show
	};
	this.order(order, delay);
};
Order.prototype.CastNoTarget = function(a, delay){
	delay = delay || 0;
	var order = {
		OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_CAST_NO_TARGET,
		UnitIndex: this.id,
		AbilityIndex: a,
		Queue: this.queue,
		ShowEffects: this.show
	};
	this.order(order, delay);
};
Order.prototype.CastToggle = function(a, delay){
	delay = delay || 0;
	var order = {
		OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TOGGLE,
		UnitIndex: this.id,
		AbilityIndex: a,
		Queue: this.queue,
		ShowEffects: this.show
	};
	this.order(order, delay);
};
Order.prototype.HoldPosition = function(a, delay){
	delay = delay || 0;
	var order = {
		OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_HOLD_POSITION,
		UnitIndex: this.id,
		Position: a,
		Queue: this.queue,
		ShowEffects: this.show
	};
	this.order(order, delay);
};
Order.prototype.TrainAbility = function(a, delay){
	delay = delay || 0;
	var order = {
		OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_TRAIN_ABILITY,
		UnitIndex: this.id,
		AbilityIndex: a,
		Queue: this.queue,
		ShowEffects: this.show
	};
	this.order(order, delay);
};
Order.prototype.DropItem = function(a, b, delay){
	delay = delay || 0;
	var order = {
		OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_DROP_ITEM,
		UnitIndex: this.id,
		AbilityIndex: a,
		Position: b,
		Queue: this.queue,
		ShowEffects: this.show
	};
	this.order(order, delay);
};
Order.prototype.GiveItem = function(a, b, delay){
	delay = delay || 0;
	var order = {
		OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_GIVE_ITEM,
		UnitIndex: this.id,
		AbilityIndex: a,
		TargetIndex: b,
		Queue: this.queue,
		ShowEffects: this.show
	};
	this.order(order, delay);
};
Order.prototype.PickupItem = function(a, delay){
	delay = delay || 0;
	var order = {
		OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_PICKUP_ITEM,
		UnitIndex: this.id,
		TargetIndex: a,
		Queue: this.queue,
		ShowEffects: this.show
	};
	this.order(order, delay);
};
Order.prototype.PickupRune = function(a, delay){
	delay = delay || 0;
	var order = {
		OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_PICKUP_RUNE,
		UnitIndex: this.id,
		TargetIndex: a,
		Queue: this.queue,
		ShowEffects: this.show
	};
	this.order(order, delay);
};
Order.prototype.PurchaseItem = function(a, delay){
	delay = delay || 0;
	var order = {
		OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_PURCHASE_ITEM,
		UnitIndex: this.id,
		AbilityIndex: a,
		Queue: this.queue,
		ShowEffects: this.show
	};
	this.order(order, delay);
};
Order.prototype.SellItem = function(a, delay){
	delay = delay || 0;
	var order = {
		OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_SELL_ITEM,
		UnitIndex: this.id,
		AbilityIndex: a,
		Queue: this.queue,
		ShowEffects: this.show
	};
	this.order(order, delay);
};
Order.prototype.DisassembleItem = function(a, delay){
	delay = delay || 0;
	var order = {
		OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_DISASSEMBLE_ITEM,
		UnitIndex: this.id,
		TargetIndex: a,
		Queue: this.queue,
		ShowEffects: this.show
	};
	this.order(order, delay);
};
Order.prototype.MoveItem = function(a, delay){
	delay = delay || 0;
	var order = {
		OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_ITEM,
		UnitIndex: this.id,
		AbilityIndex: a,
		Queue: this.queue,
		ShowEffects: this.show
	};
	this.order(order, delay);
};
Order.prototype.CastToggleAuto = function(a, delay){
	delay = delay || 0;
	var order = {
		OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TOGGLE_AUTO,
		UnitIndex: this.id,
		AbilityIndex: a,
		Queue: this.queue,
		ShowEffects: this.show
	};
	this.order(order, delay);
};
Order.prototype.Stop = function(delay){
	delay = delay || 0;
	var order = {
		OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_STOP,
		UnitIndex: this.id,
		Queue: this.queue,
		ShowEffects: this.show
	};
	this.order(order, delay);
};
Order.prototype.Taunt = function(delay){
	delay = delay || 0;
	var order = {
		OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_TAUNT,
		UnitIndex: this.id,
		Queue: this.queue,
		ShowEffects: this.show
	};
	this.order(order, delay);
};
Order.prototype.Buyback = function(delay){
	delay = delay || 0;
	var order = {
		OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_BUYBACK,
		UnitIndex: this.id,
		Queue: this.queue,
		ShowEffects: this.show
	};
	this.order(order, delay);
};
Order.prototype.Glyph = function(delay){
	delay = delay || 0;
	var order = {
		OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_GLYPH,
		UnitIndex: this.id,
		Queue: this.queue,
		ShowEffects: this.show
	};
	this.order(order, delay);
};
Order.prototype.EjectItemFromStash = function(a, delay){
	delay = delay || 0;
	var order = {
		OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_EJECT_ITEM_FROM_STASH,
		UnitIndex: this.id,
		AbilityIndex: a,
		Queue: this.queue,
		ShowEffects: this.show
	};
	this.order(order, delay);
};
Order.prototype.PingAbility = function(a, delay){
	delay = delay || 0;
	var order = {
		OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_PING_ABILITY,
		UnitIndex: this.id,
		AbilityIndex: a,
		Queue: this.queue,
		ShowEffects: this.show
	};
	this.order(order, delay);
};
Order.prototype.SetItemCombineLock = function(a, delay){
	delay = delay || 0;
	var order = {
		OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_SET_ITEM_COMBINE_LOCK,
		UnitIndex: this.id,
		TargetIndex: a,
		Queue: this.queue,
		ShowEffects: this.show
	};
	this.order(order, delay);
};
