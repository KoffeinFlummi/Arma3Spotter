_weapon = currentWeapon player;
_name = getText (configFile >> "CfgWeapons" >> _weapon >> "displayName");
_magazines = getArray (configFile >> "CfgWeapons" >> _weapon >> "magazines");

_string = "AGM BALLISTIC DATA EXPORT\n\nAdd everything below the following line to /src/data/weapons.json:\n\n====================\n\n  {";
_string = _string + format ["    ""type"": ""%1"",\n", _weapon];
_string = _string + format ["    ""name"": ""%1"",\n", _name];
_string = _string + "    ""mod"": ""[mod containing weapon]"",\n";
_string = _string + "    ""magazines"": [\n";

{
  _ammo = getText (configFile >> "CfgMagazines" >> _x >> "ammo");
  _name = getText (configFile >> "CfgMagazines" >> _x >> "displayName");
  _initSpeed = getNumber (configFile >> "CfgMagazines" >> _x >> "initSpeed");
  _airFriction = getNumber (configFile >> "CfgAmmo" >> _ammo >> "airFriction");
  _timeToLive = getNumber (configFile >> "CfgAmmo" >> _ammo >> "timeToLive");
  _simulationStep = getNumber (configFile >> "CfgAmmo" >> _ammo >> "simulationStep");

  _string = _string + "      {\n";
  _string = _string + format ["        ""type"": ""%1"",\n", _x];
  _string = _string + format ["        ""ammo"": ""%1"",\n", _ammo];
  _string = _string + format ["        ""name"": ""%1"",\n", _name];
  _string = _string + format ["        ""initSpeed"": %1,\n", _initSpeed];
  _string = _string + format ["        ""airFriction"": %1,\n", _airFriction];
  _string = _string + format ["        ""timeToLive"": %1,\n", _timeToLive];
  _string = _string + format ["        ""simulationStep"": %1\n", _simulationStep];
  _string = _string + "      }";
  if (_forEachIndex + 1 == count _magazines) then {
    _string = _string + "\n";
  } else {
    _string = _string + ",\n";
  };
} forEach _magazines;

_string = _string + "    ]\n";
_string = _string + "  }\n\n";

_string = _string + "====================\n\n";
_string = _string + "Do not forget to add a comma behind the previous last entry after you insert this weapon and please name the mod adding the current weapon. Also, if you ran this script in a non-English version of the game, please correct the names for rifle and magazines to use the English version.";

diag_log _string;
