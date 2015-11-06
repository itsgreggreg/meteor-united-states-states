Tinytest.add("UnitedStatesStates", function (test) {
  test.equal(USS.ab("california"), "CA");
  test.equal(USS.ab("north dakota"), "ND");
  test.equal(USS.ab("district Of columbia"), "DC");
  test.equal(USS.sn("ca"), "California");
  test.equal(USS.sn("nd"), "North Dakota");
});

