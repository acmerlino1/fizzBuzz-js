describe("fizzbuzz", function(){
  it("should return 3 as 'Fizz", function() {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it("should return 5 as 'Buzz", function() {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it("should return 15 as 'FizzBuzz", function() {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("should return 19 as 19", function() {
    expect(fizzBuzz(19)).toBe(19);
  });
});