const assert = require('assert'); 
const Users = require("./users");

describe('findIdInUsers Test', function () {
  Users.init();
  it('find exsited user', function () {
    assert.strictEqual(Users.userInDB('auddn6676'), true);
  });
  it('find not existed user', function () {
    assert.strictEqual(Users.userInDB('auddn667'), false);
  });
  it('empty string', function () {
    assert.strictEqual(Users.userInDB(''), false);
  });
  it('param is number', function () {
    assert.strictEqual(Users.userInDB(22), false);
  });
  it('null type', function () {
    assert.strictEqual(Users.userInDB(null), false);
  });
  it('undefined type', function () {
    assert.strictEqual(Users.userInDB(undefined), false);
  });
});

