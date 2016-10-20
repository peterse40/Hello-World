var HelloWorld = ('./hello-world');

('Hello World', function() {
  var helloWorld = new HelloWorld();

  it('says hello world with no name', function() {
    (helloWorld.hello('')).toEqual('Hello, World!');
  });

  xit('says hello to bob', function() {
    (helloWorld.hello('Bob')).toEqual('Hello, Bob!');
  });

  xit('says hello to sally', function() {
    (helloWorld.hello('Sally')).toEqual('Hello, Sally!');
  });
});