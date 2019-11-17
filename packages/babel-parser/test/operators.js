import { parse } from "../lib";

function getParser(code) {
  return () => parse(code, { sourceType: "module" });
}

describe("operator", function() {
  it("should parse +", function() {
    expect(getParser(`[1,2,3].reduceWithOperator(+);`)()).toMatchSnapshot();
  });
  it("should parse -", function() {
    expect(getParser(`[1,2,3].reduceWithOperator(-);`)()).toMatchSnapshot();
  });
  it("should parse /", function() {
    expect(getParser(`[1,2,3].reduceWithOperator(/);`)()).toMatchSnapshot();
  });
  it("should parse *", function() {
    expect(getParser(`[1,2,3].reduceWithOperator(*);`)()).toMatchSnapshot();
  });
  it("should parse %", function() {
    expect(getParser(`[1,2,3].reduceWithOperator(%);`)()).toMatchSnapshot();
  });
  it("should parse operator param with whitespace", function() {
    expect(getParser(`[1,2,3].reduceWithOperator( + );`)()).toMatchSnapshot();
  });
  it("should parse operator param with extra whitespace", function() {
    expect(
      getParser(`[1,2,3].reduceWithOperator( +     );`)(),
    ).toMatchSnapshot();
  });
});
