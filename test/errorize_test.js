objective('errorize', function() {

  before(function(chai) {

    mock('expect', chai.expect);

  });

  it('returns the error passed',

    function(done, Errorize, expect) {

      var e1 = new Error('red lorry');
      var e2 = Errorize(e1);

      expect(e1).to.equal(e2);
      done();

    }
  );

  it('returns the object passed as an error',

    function(done, Errorize, expect) {

      var str = 'yellow lorry'
      var e = Errorize(str);

      expect(e).to.be.an.instanceof(Error);
      expect(e.name).to.equal('Error');
      expect(e.message).to.equal('yellow lorry');
      done();

    }
  );

  it('preserves the object\'s properties into the error',

    function(done, Errorize, expect) {

      var obj = {
        key: 'value'
      };

      var e = Errorize(obj);

      expect(e.key).to.equal('value');
      done();

    }
  );

});