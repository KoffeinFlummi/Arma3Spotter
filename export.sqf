_br = toString [13,10];
_weapon = currentWeapon player;
_name = getText (configFile >> "CfgWeapons" >> _weapon >> "displayName");
_magazines = getArray (configFile >> "CfgWeapons" >> _weapon >> "magazines");

_string = "AGM BALLISTIC DATA EXPORT"+_br+_br+"Add everything below the line to /src/data/weapons.json:"+_br+_br+"===================="+_br+_br+"  {"+_br;
_string = _string + format ["    ""type"": ""%1"","+_br, _weapon];
_string = _string + format ["    ""name"": ""%1"","+_br, _name];
_string = _string + "    ""mod"": ""[mod containing weapon]"","+_br;
_string = _string + "    ""magazines"": ["+_br;

{
  _ammo = getText (configFile >> "CfgMagazines" >> _x >> "ammo");
  _name = getText (configFile >> "CfgMagazines" >> _x >> "displayName");
  _initSpeed = getNumber (configFile >> "CfgMagazines" >> _x >> "initSpeed");
  _airFriction = getNumber (configFile >> "CfgAmmo" >> _ammo >> "airFriction");
  _timeToLive = getNumber (configFile >> "CfgAmmo" >> _ammo >> "timeToLive");
  _simulationStep = getNumber (configFile >> "CfgAmmo" >> _ammo >> "simulationStep");

  _string = _string + "      {"+_br;
  _string = _string + format ["        ""type"": ""%1"","+_br, _x];
  _string = _string + format ["        ""ammo"": ""%1"","+_br, _ammo];
  _string = _string + format ["        ""name"": ""%1"","+_br, _name];
  _string = _string + format ["        ""initSpeed"": %1,"+_br, _initSpeed];
  _string = _string + format ["        ""airFriction"": %1,"+_br, _airFriction];
  _string = _string + format ["        ""timeToLive"": %1,"+_br, _timeToLive];
  _string = _string + format ["        ""simulationStep"": %1"+_br, _simulationStep];
  _string = _string + "      }";
  if (_forEachIndex + 1 == count _magazines) then {
    _string = _string + ""+_br;
  } else {
    _string = _string + ","+_br;
  };
} forEach _magazines;

_string = _string + "    ]"+_br;
_string = _string + "  }"+_br+_br;

_string = _string + "===================="+_br+_br;
_string = _string + "Do not forget to add a comma behind the previous last entry after you insert this weapon and please name the mod adding the current weapon. Also, if you ran this script in a non-English version of the game, please correct the names for rifle and magazines to use the English version.";

copyToClipboard _string;
