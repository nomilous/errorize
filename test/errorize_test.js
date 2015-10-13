objective('errorize', function() {

  before(function(chai) {

    mock('expect', chai.expect);

  });

  it('returns the error passed',

    function(done, Errorize, expect) {

      var e1 = new Error('Is it a nerd?');
      var e2 = Errorize(e1);

      expect(e1).to.equal(e2);
      done();

    }
  );

});