var Entity = function(id){
	this.id = id || Players.GetPlayerHeroEntityIndex(Players.GetLocalPlayer());
};
Entity.prototype.GetPosition = function(){
	return Entities.GetAbsOrigin(this.id);
};
Entity.prototype.GetForward = function(){
	return Entities.GetForward(this.id);
};
Entity.prototype.GetRight = function(){
	return Entities.GetRight(this.id);
};
Entity.prototype.GetUp = function(){
	return Entities.GetUp(this.id);
};
Entity.prototype.CanBeDominated = function(){
	return Entities.CanBeDominated(this.id);
};
Entity.prototype.HasAttackCapability = function(){
	return Entities.HasAttackCapability(this.id);
};
Entity.prototype.HasCastableAbilities = function(){
	return Entities.HasCastableAbilities(this.id);
};
Entity.prototype.HasFlyingVision = function(){
	return Entities.HasFlyingVision(this.id);
};
Entity.prototype.HasFlyMovementCapability = function(){
	return Entities.HasFlyMovementCapability(this.id);
};
Entity.prototype.HasGroundMovementCapability = function(){
	return Entities.HasGroundMovementCapability(this.id);
};
Entity.prototype.HasMovementCapability = function(){
	return Entities.HasMovementCapability(this.id);
};
Entity.prototype.HasScepter = function(){
	return Entities.HasScepter(this.id);
};
Entity.prototype.HasUpgradeableAbilities = function(){
	return Entities.HasUpgradeableAbilities(this.id);
};
Entity.prototype.HasUpgradeableAbilitiesThatArentMaxed = function(){
	return Entities.HasUpgradeableAbilitiesThatArentMaxed(this.id);
};
Entity.prototype.IsAlive = function(){
	return Entities.IsAlive(this.id);
};
Entity.prototype.IsAncient = function(){
	return Entities.IsAncient(this.id);
};
Entity.prototype.IsAttackImmune = function(){
	return Entities.IsAttackImmune(this.id);
};
Entity.prototype.IsBarracks = function(){
	return Entities.IsBarracks(this.id);
};
Entity.prototype.IsBlind = function(){
	return Entities.IsBlind(this.id);
};
Entity.prototype.IsBoss = function(){
	return Entities.IsBoss(this.id);
};
Entity.prototype.IsRoshan = function(){
	return Entities.IsRoshan(this.id);
};
Entity.prototype.IsBuilding = function(){
	return Entities.IsBuilding(this.id);
};
Entity.prototype.IsCommandRestricted = function(){
	return Entities.IsCommandRestricted(this.id);
};
Entity.prototype.IsConsideredHero = function(){
	return Entities.IsConsideredHero(this.id);
};
Entity.prototype.IsControllableByAnyPlayer = function(){
	return Entities.IsControllableByAnyPlayer(this.id);
};
Entity.prototype.IsCourier = function(){
	return Entities.IsCourier(this.id);
};
Entity.prototype.IsCreature = function(){
	return Entities.IsCreature(this.id);
};
Entity.prototype.IsCreep = function(){
	return Entities.IsCreep(this.id);
};
Entity.prototype.IsCreepHero = function(){
	return Entities.IsCreepHero(this.id);
};
Entity.prototype.IsDeniable = function(){
	return Entities.IsDeniable(this.id);
};
Entity.prototype.IsDominated = function(){
	return Entities.IsDominated(this.id);
};
Entity.prototype.IsEnemy = function(){
	return Entities.IsEnemy(this.id);
};
Entity.prototype.IsAllied = function(){
	return !Entities.IsEnemy(this.id);
};
Entity.prototype.IsEvadeDisabled = function(){
	return Entities.IsEvadeDisabled(this.id);
};
Entity.prototype.IsFort = function(){
	return Entities.IsFort(this.id);
};
Entity.prototype.IsFrozen = function(){
	return Entities.IsFrozen(this.id);
};
Entity.prototype.IsGeneratedByEconItem = function(){
	return Entities.IsGeneratedByEconItem(this.id);
};
Entity.prototype.IsHallofFame = function(){
	return Entities.IsHallofFame(this.id);
};
Entity.prototype.IsDisarmed = function(){
	return Entities.IsDisarmed(this.id);
};
Entity.prototype.IsHero = function(){
	return Entities.IsHero(this.id);
};
Entity.prototype.IsHexed = function(){
	return Entities.IsHexed(this.id);
};
Entity.prototype.IsIllusion = function(){
	return Entities.IsIllusion(this.id);
};
Entity.prototype.IsInRangeOfFountain = function(){
	return Entities.IsInRangeOfFountain(this.id);
};
Entity.prototype.IsInventoryEnabled = function(){
	return Entities.IsInventoryEnabled(this.id);
};
Entity.prototype.IsInvisible = function(){
	return Entities.IsInvisible(this.id);
};
Entity.prototype.IsInvulnerable = function(){
	return Entities.IsInvulnerable(this.id);
};
Entity.prototype.IsLaneCreep = function(){
	return Entities.IsLaneCreep(this.id);
};
Entity.prototype.IsLowAttackPriority = function(){
	return Entities.IsLowAttackPriority(this.id);
};
Entity.prototype.IsMagicImmune = function(){
	return Entities.IsMagicImmune(this.id);
};
Entity.prototype.IsMuted = function(){
	return Entities.IsMuted(this.id);
};
Entity.prototype.IsNeutralUnitType = function(){
	return Entities.IsNeutralUnitType(this.id);
};
Entity.prototype.IsNightmared = function(){
	return Entities.IsNightmared(this.id);
};
Entity.prototype.IsOther = function(){
	return Entities.IsOther(this.id);
};
Entity.prototype.IsOutOfGame = function(){
	return Entities.IsOutOfGame(this.id);
};
Entity.prototype.IsOwnedByAnyPlayer = function(){
	return Entities.IsOwnedByAnyPlayer(this.id);
};
Entity.prototype.IsPhantom = function(){
	return Entities.IsPhantom(this.id);
};
Entity.prototype.IsRangedAttacker = function(){
	return Entities.IsRangedAttacker(this.id);
};
Entity.prototype.IsRealHero = function(){
	return Entities.IsRealHero(this.id);
};
Entity.prototype.IsRooted = function(){
	return Entities.IsRooted(this.id);
};
Entity.prototype.IsSelectable = function(){
	return Entities.IsSelectable(this.id);
};
Entity.prototype.IsShop = function(){
	return Entities.IsShop(this.id);
};
Entity.prototype.IsSilenced = function(){
	return Entities.IsSilenced(this.id);
};
Entity.prototype.IsSpeciallyDeniable = function(){
	return Entities.IsSpeciallyDeniable(this.id);
};
Entity.prototype.IsStunned = function(){
	return Entities.IsStunned(this.id);
};
Entity.prototype.IsSummoned = function(){
	return Entities.IsSummoned(this.id);
};
Entity.prototype.IsTower = function(){
	return Entities.IsTower(this.id);
};
Entity.prototype.IsUnselectable = function(){
	return Entities.IsUnselectable(this.id);
};
Entity.prototype.IsWard = function(){
	return Entities.IsWard(this.id);
};
Entity.prototype.IsZombie = function(){
	return Entities.IsZombie(this.id);
};
Entity.prototype.NoHealthBar = function(){
	return Entities.NoHealthBar(this.id);
};
Entity.prototype.NoTeamMoveTo = function(){
	return Entities.NoTeamMoveTo(this.id);
};
Entity.prototype.NoTeamSelect = function(){
	return Entities.NoTeamSelect(this.id);
};
Entity.prototype.NotOnMinimap = function(){
	return Entities.NotOnMinimap(this.id);
};
Entity.prototype.NotOnMinimapForEnemies = function(){
	return Entities.NotOnMinimapForEnemies(this.id);
};
Entity.prototype.NoUnitCollision = function(){
	return Entities.NoUnitCollision(this.id);
};
Entity.prototype.PassivesDisabled = function(){
	return Entities.PassivesDisabled(this.id);
};
Entity.prototype.ProvidesVision = function(){
	return Entities.ProvidesVision(this.id);
};
Entity.prototype.UsesHeroAbilityNumbers = function(){
	return Entities.UsesHeroAbilityNumbers(this.id);
};
Entity.prototype.IsMoving = function(){
	return Entities.IsMoving(this.id);
};
Entity.prototype.GetAbilityCount = function(){
	return Entities.GetAbilityCount(this.id);
};
Entity.prototype.GetCombatClassAttack = function(){
	return Entities.GetCombatClassAttack(this.id);
};
Entity.prototype.GetCombatClassDefend = function(){
	return Entities.GetCombatClassDefend(this.id);
};
Entity.prototype.GetCurrentVisionRange = function(){
	return Entities.GetCurrentVisionRange(this.id);
};
Entity.prototype.GetDamageBonus = function(){
	return Entities.GetDamageBonus(this.id);
};
Entity.prototype.GetDamageMax = function(){
	return Entities.GetDamageMax(this.id);
};
Entity.prototype.GetDamageMin = function(){
	return Entities.GetDamageMin(this.id);
};
Entity.prototype.GetDayTimeVisionRange = function(){
	return Entities.GetDayTimeVisionRange(this.id);
};
Entity.prototype.GetHealth = function(){
	return Entities.GetHealth(this.id);
};
Entity.prototype.GetHealthPercent = function(){
	return Entities.GetHealthPercent(this.id);
};
Entity.prototype.GetHealthThinkRegen = function(){
	return Entities.GetHealthThinkRegen(this.id);
};
Entity.prototype.GetLevel = function(){
	return Entities.GetLevel(this.id);
};
Entity.prototype.GetMaxHealth = function(){
	return Entities.GetMaxHealth(this.id);
};
Entity.prototype.GetNightTimeVisionRange = function(){
	return Entities.GetNightTimeVisionRange(this.id);
};
Entity.prototype.GetPlayerOwnerID = function(){
	return Entities.GetPlayerOwnerID(this.id);
};
Entity.prototype.GetStates = function(){
	return Entities.GetStates(this.id);
};
Entity.prototype.GetTotalPurchasedUpgradeGoldCost = function(){
	return Entities.GetTotalPurchasedUpgradeGoldCost(this.id);
};
Entity.prototype.GetTeamNumber = function(){
	return Entities.GetTeamNumber(this.id);
};
Entity.prototype.GetHealthBarOffset = function(){
	return Entities.GetHealthBarOffset(this.id);
};
Entity.prototype.GetAttackRange = function(){
	return Entities.GetAttackRange(this.id);
};
Entity.prototype.GetAttackSpeed = function(){
	return Entities.GetAttackSpeed(this.id);
};
Entity.prototype.GetAttacksPerSecond = function(){
	return Entities.GetAttacksPerSecond(this.id);
};
Entity.prototype.GetBaseAttackTime = function(){
	return Entities.GetBaseAttackTime(this.id);
};
Entity.prototype.GetBaseMagicalResistanceValue = function(){
	return Entities.GetBaseMagicalResistanceValue(this.id);
};
Entity.prototype.GetBaseMoveSpeed = function(){
	return Entities.GetBaseMoveSpeed(this.id);
};
Entity.prototype.GetBonusPhysicalArmor = function(){
	return Entities.GetBonusPhysicalArmor(this.id);
};
Entity.prototype.GetCollisionPadding = function(){
	return Entities.GetCollisionPadding(this.id);
};
Entity.prototype.GetEffectiveInvisibilityLevel = function(){
	return Entities.GetEffectiveInvisibilityLevel(this.id);
};
Entity.prototype.GetHasteFactor = function(){
	return Entities.GetHasteFactor(this.id);
};
Entity.prototype.GetHullRadius = function(){
	return Entities.GetHullRadius(this.id);
};
Entity.prototype.GetIdealSpeed = function(){
	return Entities.GetIdealSpeed(this.id);
};
Entity.prototype.GetIncreasedAttackSpeed = function(){
	return Entities.GetIncreasedAttackSpeed(this.id);
};
Entity.prototype.GetMana = function(){
	return Entities.GetMana(this.id);
};
Entity.prototype.GetManaThinkRegen = function(){
	return Entities.GetManaThinkRegen(this.id);
};
Entity.prototype.GetMaxMana = function(){
	return Entities.GetMaxMana(this.id);
};
Entity.prototype.GetManaPercent = function(){
	return Math.floor(Entities.GetMana(this.id)/Entities.GetMaxMana(this.id)*100);
};
Entity.prototype.GetMagicalArmorValue = function(){
	return Entities.GetMagicalArmorValue(this.id);
};
Entity.prototype.GetPaddedCollisionRadius = function(){
	return Entities.GetPaddedCollisionRadius(this.id);
};
Entity.prototype.GetPercentInvisible = function(){
	return Entities.GetPercentInvisible(this.id);
};
Entity.prototype.GetPhysicalArmorValue = function(){
	return Entities.GetPhysicalArmorValue(this.id);
};
Entity.prototype.GetProjectileCollisionSize = function(){
	return Entities.GetProjectileCollisionSize(this.id);
};
Entity.prototype.GetRingRadius = function(){
	return Entities.GetRingRadius(this.id);
};
Entity.prototype.GetSecondsPerAttack = function(){
	return Entities.GetSecondsPerAttack(this.id);
};
Entity.prototype.ManaFraction = function(){
	return Entities.ManaFraction(this.id);
};
Entity.prototype.GetClassname = function(){
	return Entities.GetClassname(this.id);
};
Entity.prototype.GetDisplayedUnitName = function(){
	return Entities.GetDisplayedUnitName(this.id);
};
Entity.prototype.GetSelectionGroup = function(){
	return Entities.GetSelectionGroup(this.id);
};
Entity.prototype.GetSoundSet = function(){
	return Entities.GetSoundSet(this.id);
};
Entity.prototype.GetUnitLabel = function(){
	return Entities.GetUnitLabel(this.id);
};
Entity.prototype.GetUnitName = function(){
	return Entities.GetUnitName(this.id);
};
Entity.prototype.GetTotalDamageTaken = function(){
	return Entities.GetTotalDamageTaken(this.id);
};
Entity.prototype.IsControllableByPlayer = function(a){
	return Entities.IsControllableByPlayer(this.id, a);
};
Entity.prototype.GetChosenTarget = function(){
	return Entities.GetChosenTarget(this.id);
};
Entity.prototype.HasItemInInventory = function(a){
	return Entities.HasItemInInventory(this.id, a);
};
Entity.prototype.GetRangeToUnit = function(a){
	return Entities.GetRangeToUnit(this.id, a);
};
Entity.prototype.IsEntityInRange = function(a, b){
	return Entities.IsEntityInRange(this.id, a, b);
};
Entity.prototype.GetMoveSpeedModifier = function(){
	return Entities.GetMoveSpeedModifier(this.id, Entities.GetBaseMoveSpeed(this.id));
};
Entity.prototype.CanAcceptTargetToAttack = function(a){
	return Entities.CanAcceptTargetToAttack(this.id, a);
};
Entity.prototype.InState = function(a){
	return Entities.InState(this.id, a);
};
Entity.prototype.GetArmorForDamageType = function(a){
	return Entities.GetArmorForDamageType(this.id, a);
};
Entity.prototype.GetArmorReductionForDamageType = function(a){
	return Entities.GetArmorReductionForDamageType(this.id, a);
};
Entity.prototype.IsInRangeOfShop = function(a, b){
	return Entities.IsInRangeOfShop(this.id, a, b);
};
Entity.prototype.GetNumItemsInStash = function(){
	return Entities.GetNumItemsInStash(this.id);
};
Entity.prototype.GetNumItemsInInventory = function(){
	return Entities.GetNumItemsInInventory(this.id);
};
Entity.prototype.GetItemInSlot = function(a){
	return Entities.GetItemInSlot(this.id, a);
};
Entity.prototype.GetAbility = function(a){
	return Entities.GetAbility(this.id, a);
};
Entity.prototype.GetAbilityByName = function(a){
	return Entities.GetAbilityByName(this.id, a);
};
Entity.prototype.GetNumBuffs = function(){
	return Entities.GetNumBuffs(this.id);
};
Entity.prototype.GetBuff = function(a){
	return Entities.GetBuff(this.id, a);
};
Entity.prototype.GetAbilityPoints = function(){
	return Entities.GetAbilityPoints(this.id);
};
Entity.prototype.GetCurrentXP = function(){
	return Entities.GetCurrentXP(this.id);
};
Entity.prototype.GetNeededXPToLevel = function(){
	return Entities.GetNeededXPToLevel(this.id);
};
Entity.prototype.GetSelectionEntities = function(){
	return Entities.GetSelectionEntities(this.id);
};
Entity.prototype.IsValidEntity = function(){
	return Entities.IsValidEntity(this.id);
};
Entity.prototype.IsItemPhysical = function(){
	return ntities.IsItemPhysical(this.id);
};
Entity.prototype.GetContainedItem = function(){
	return Entities.GetContainedItem(this.id);
};
Entity.prototype.GetSpeed = function(){
	return Entities.GetMoveSpeedModifier(this.id, Entities.GetBaseMoveSpeed(this.id));
};
Entity.prototype.Distance2D = function(a){
	var b = Entities.GetAbsOrigin(this.id);
	var c = Entities.GetAbsOrigin(a);
	return Math.sqrt(Math.pow(b[0]-c[0], 2)+Math.pow(b[1]-c[1], 2));
};
Entity.prototype.Distance3D = function(a){
	var b = Entities.GetAbsOrigin(this.id);
	var c = Entities.GetAbsOrigin(a);
	return Math.sqrt(Math.pow(b[0]-c[0], 2)+Math.pow(b[1]-c[1], 2)+Math.pow(b[2]-c[2], 2));
};
Entity.prototype.PointDistance2D = function(a){
	var b = Entities.GetAbsOrigin(this.id);
	return Math.sqrt(Math.pow(b[0]-a[0], 2)+Math.pow(b[1]-a[1], 2));
};
Entity.prototype.PointDistance3D = function(a){
	var b = Entities.GetAbsOrigin(this.id);
	return Math.sqrt(Math.pow(b[0]-a[0], 2)+Math.pow(b[1]-a[1], 2)+Math.pow(b[2]-a[2], 2));
};
Entity.prototype.InFront = function(a){
	var b = Entities.GetAbsOrigin(this.id);
	var c = Entities.GetForward(this.id);
	return [b[0]+c*a, b[1]+c*a, b[2]];
};
Entity.prototype.GetPredictedPosition = function(a){
	var b = Entities.GetAbsOrigin(this.id);
	var c = Entities.GetForward(this.id);
	var d = Entities.GetMoveSpeedModifier(this.id, Entities.GetBaseMoveSpeed(this.id));
	return [b[0]+(c[0]*d)*a, b[1]+(c[1]*d)*a, b[2]];
};
Entity.prototype.CheckSphere = function(){
	for(i=0; i<6; i++){
		var a = Entities.GetItemInSlot(this.id, i);
		if(Abilities.GetAbilityName(a) == 'item_sphere' && Abilities.IsCooldownReady(a)){
			return true;
		} else {
			return false;
		};
	};
};
Entity.prototype.GetBuffs = function(){
	var a = [];
	for(i=0; i<Entities.GetNumBuffs(this.id); i++){
		a.push(this.id, Entities.GetBuff(this.id, i));
	};
	return a;
};
Entity.prototype.GetBuffsNames = function(){
	var a = [];
	if(!Entities.IsValidEntity(this.id)){
		return a;
	};
	for(i=0; i<Entities.GetNumBuffs(this.id); i++){
		a.push(Buffs.GetName(this.id, Entities.GetBuff(this.id, i)));
	};
	return a;
};
Entity.prototype.GetInventory = function(){
	var a = [];
	for(i=0; i<6; i++){
		if(Entities.GetItemInSlot(this.id, i) != -1){
			a.push(Entities.GetItemInSlot(this.id, i));
		};
	};
	return a;
};
Entity.prototype.GetAllInventory = function(){
	var a = [];
	for(i=0; i<9; i++){
		if(Entities.GetItemInSlot(this.id, i) != -1){
			a.push(Entities.GetItemInSlot(this.id, i));
		};
	};
	return a;
};
