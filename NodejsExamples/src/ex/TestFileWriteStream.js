
var common = require('../common'); 	
var assert = require('assert'); 	
var path = require('path');			
var fs = require('fs');				

var fn = path.join(common.tmpDir, 'write.txt');
var file = fs.createWriteStream(fn); //<<

var EXPECTED = '012345678910';

var callbacks = {
      open: -1,
      drain: -2,
      close: -1,
      endCb: -1
    };

// We need to support nested ctypes with Generics
var file2 = file.addListener('open', function() {
	console.log('callback example') ;
});




// Good example of EventEmitter<T> allowing for typed returns (very cool)
file
  .addListener('open', function(fd) {
      callbacks.open++;
      assert.equal('number', typeof fd);
    })
  .addListener('error', function(err) {
      throw err;
    })
  .addListener('drain', function() {
      callbacks.drain++;
      if (callbacks.drain == -1) {
        assert.equal(EXPECTED, fs.readFileSync(fn));
        file.write(EXPECTED);
      } else if (callbacks.drain == 0) {
        assert.equal(EXPECTED + EXPECTED, fs.readFileSync(fn));
      }
    })
  .addListener('close', function() {
      callbacks.close++;
      assert.throws(function() {
        file.write('should not work anymore');
      });

      fs.unlinkSync(fn);
    });

for (var i = 0; i < 11; i++) {
  (function(i) {
    assert.strictEqual(false, file.write(i));
  })(i);
}

process.addListener('exit', function() {
  for (var k in callbacks) {
    assert.equal(0, callbacks[k], k + ' count off by ' + callbacks[k]);
  }
});
