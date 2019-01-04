var Ability = function(id, name){
	this.id = id || Players.GetPlayerHeroEntityIndex(Players.GetLocalPlayer());
	this.ability = Entities.GetAbilityByName(this.id, name);
};
Ability.prototype.GetAbilityName = function(){
	return Abilities.GetAbilityName(this.ability);
};
Ability.prototype.GetAbilityTextureName = function(){
	return Abilities.GetAbilityTextureName(this.ability);
};
Ability.prototype.GetAssociatedPrimaryAbilities = function(){
	return Abilities.GetAssociatedPrimaryAbilities(this.ability);
};
Ability.prototype.GetAssociatedSecondaryAbilities = function(){
	return Abilities.GetAssociatedSecondaryAbilities(this.ability);
};
Ability.prototype.GetHotkeyOverride = function(){
	return Abilities.GetHotkeyOverride(this.ability);
};
Ability.prototype.GetIntrinsicModifierName = function(){
	return Abilities.GetIntrinsicModifierName(this.ability);
};
Ability.prototype.GetSharedCooldownName = function(){
	return Abilities.GetSharedCooldownName(this.ability);
};
Ability.prototype.AbilityReady = function(){
	return Abilities.AbilityReady(this.ability);
};
Ability.prototype.CanAbilityBeUpgraded = function(){
	return Abilities.CanAbilityBeUpgraded(this.ability);
};
Ability.prototype.CanBeExecuted = function(){
	return Abilities.CanBeExecuted(this.ability);
};
Ability.prototype.GetAbilityDamage = function(){
	return Abilities.GetAbilityDamage(this.ability);
};
Ability.prototype.GetAbilityDamageType = function(){
	return Abilities.GetAbilityDamageType(this.ability);
};
Ability.prototype.GetAbilityTargetFlags = function(){
	return Abilities.GetAbilityTargetFlags(this.ability);
};
Ability.prototype.GetAbilityTargetTeam = function(){
	return Abilities.GetAbilityTargetTeam(this.ability);
};
Ability.prototype.GetAbilityTargetType = function(){
	return Abilities.GetAbilityTargetType(this.ability);
};
Ability.prototype.GetAbilityType = function(){
	return Abilities.GetAbilityType(this.ability);
};
Ability.prototype.GetBehavior = function(){
	return Abilities.GetBehavior(this.ability);
};
Ability.prototype.GetCastRangeOriginal = function(){
	return Abilities.GetCastRange(this.ability);
};
Ability.prototype.GetChannelledManaCostPerSecond = function(){
	return Abilities.GetChannelledManaCostPerSecond(this.ability);
};
Ability.prototype.GetCurrentCharges = function(){
	return Abilities.GetCurrentCharges(this.ability);
};
Ability.prototype.GetEffectiveLevel = function(){
	return Abilities.GetEffectiveLevel(this.ability);
};
Ability.prototype.GetHeroLevelRequiredToUpgrade = function(){
	return Abilities.GetHeroLevelRequiredToUpgrade(this.ability);
};
Ability.prototype.GetLevel = function(){
	return Abilities.GetLevel(this.ability);
};
Ability.prototype.GetManaCost = function(){
	return Abilities.GetManaCost(this.ability);
};
Ability.prototype.GetMaxLevel = function(){
	return Abilities.GetMaxLevel(this.ability);
};
Ability.prototype.AttemptToUpgrade = function(){
	return Abilities.AttemptToUpgrade(this.ability);
};
Ability.prototype.CanLearn = function(){
	return Abilities.CanLearn(this.ability);
};
Ability.prototype.GetAutoCastState = function(){
	return Abilities.GetAutoCastState(this.ability);
};
Ability.prototype.GetToggleState = function(){
	return Abilities.GetToggleState(this.ability);
};
Ability.prototype.HasScepterUpgradeTooltip = function(){
	return Abilities.HasScepterUpgradeTooltip(this.ability);
};
Ability.prototype.IsActivated = function(){
	return Abilities.IsActivated(this.ability);
};
Ability.prototype.IsActivatedChanging = function(){
	return Abilities.IsActivatedChanging(this.ability);
};
Ability.prototype.IsAttributeBonus = function(){
	return Abilities.IsAttributeBonus(this.ability);
};
Ability.prototype.IsAutocast = function(){
	return Abilities.IsAutocast(this.ability);
};
Ability.prototype.IsCooldownReady = function(){
	return Abilities.IsCooldownReady(this.ability);
};
Ability.prototype.IsDisplayedAbility = function(){
	return Abilities.IsDisplayedAbility(this.ability);
};
Ability.prototype.IsHidden = function(){
	return Abilities.IsHidden(this.ability);
};
Ability.prototype.IsHiddenWhenStolen = function(){
	return Abilities.IsHiddenWhenStolen(this.ability);
};
Ability.prototype.IsInAbilityPhase = function(){
	return Abilities.IsInAbilityPhase(this.ability);
};
Ability.prototype.IsItem = function(){
	return Abilities.IsItem(this.ability);
};
Ability.prototype.IsMarkedAsDirty = function(){
	return Abilities.IsMarkedAsDirty(this.ability);
};
Ability.prototype.IsMuted = function(){
	return Abilities.IsMuted(this.ability);
};
Ability.prototype.IsOnCastbar = function(){
	return Abilities.IsOnCastbar(this.ability);
};
Ability.prototype.IsOnLearnbar = function(){
	return Abilities.IsOnLearnbar(this.ability);
};
Ability.prototype.IsOwnersGoldEnough = function(){
	return Abilities.IsOwnersGoldEnough(this.ability);
};
Ability.prototype.IsOwnersGoldEnoughForUpgrade = function(){
	return Abilities.IsOwnersGoldEnoughForUpgrade(this.ability);
};
Ability.prototype.IsOwnersManaEnough = function(){
	return Abilities.IsOwnersManaEnough(this.ability);
};
Ability.prototype.IsPassive = function(){
	return Abilities.IsPassive(this.ability);
};
Ability.prototype.IsRecipe = function(){
	return Abilities.IsRecipe(this.ability);
};
Ability.prototype.IsSharedWithTeammates = function(){
	return Abilities.IsSharedWithTeammates(this.ability);
};
Ability.prototype.IsStealable = function(){
	return Abilities.IsStealable(this.ability);
};
Ability.prototype.IsStolen = function(){
	return Abilities.IsStolen(this.ability);
};
Ability.prototype.IsToggle = function(){
	return Abilities.IsToggle(this.ability);
};
Ability.prototype.GetAOERadius = function(){
	return Abilities.GetAOERadius(this.ability);
};
Ability.prototype.GetBackswingTime = function(){
	return Abilities.GetBackswingTime(this.ability);
};
Ability.prototype.GetCastPoint = function(){
	return Abilities.GetCastPoint(this.ability);
};
Ability.prototype.GetChannelStartTime = function(){
	return Abilities.GetChannelStartTime(this.ability);
};
Ability.prototype.GetChannelTime = function(){
	return Abilities.GetChannelTime(this.ability);
};
Ability.prototype.GetCooldown = function(){
	return Abilities.GetCooldown(this.ability);
};
Ability.prototype.GetCooldownLength = function(){
	return Abilities.GetCooldownLength(this.ability);
};
Ability.prototype.GetCooldownTime = function(){
	return Abilities.GetCooldownTime(this.ability);
};
Ability.prototype.GetCooldownTimeRemaining = function(){
	return Abilities.GetCooldownTimeRemaining(this.ability);
};
Ability.prototype.GetDuration = function(){
	return Abilities.GetDuration(this.ability);
};
Ability.prototype.GetUpgradeBlend = function(){
	return Abilities.GetUpgradeBlend(this.ability);
};
Ability.prototype.GetLocalPlayerActiveAbility = function(){
	return Abilities.GetLocalPlayerActiveAbility();
};
Ability.prototype.GetCaster = function(){
	return Abilities.GetCaster(this.ability);
};
Ability.prototype.GetCustomValueFor = function(a){
	return Abilities.GetCustomValueFor(this.ability, a);
};
Ability.prototype.GetLevelSpecialValueFor = function(a, b){
	return Abilities.GetLevelSpecialValueFor(this.ability, a, b);
};
Ability.prototype.GetSpecialValueFor = function(a){
	return Abilities.GetSpecialValueFor(this.ability, a);
};
Ability.prototype.IsCosmetic = function(){
	return Abilities.IsCosmetic(this.ability, this.id);
};
Ability.prototype.ExecuteAbility = function(a){
	return Abilities.ExecuteAbility(this.ability, this.id, a);
};
Ability.prototype.CreateDoubleTapCastOrder = function(){
	return Abilities.CreateDoubleTapCastOrder(this.ability, this.id);
};
Ability.prototype.PingAbility = function(){
	return Abilities.PingAbility(this.ability);
};
Ability.prototype.GetKeybind = function(){
	return Abilities.GetKeybind(this.ability);
};
Ability.prototype.GetCastRange = function(){
	var a = Abilities.GetCastRange(this.a);
	var b = Entities.HasItemInInventory(this.id, 'item_aether_lens');
	if(b != -1){
		a += 250;
	};
	return a;
};
