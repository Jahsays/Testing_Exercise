// Question 1
describe("replaceWith", function(){
it("takes a string", function(){
  expect(replaceWith ("speaker")).toEqual(jasmine.any(String));
})
it("takes in a character to replace and a character to it with", function(){
    expect(replaceWith("speaker")).toEqual("speaker","e","z")
})
it("returns the string with replacement", function(){
    expect(replaceWith("speaker","a","o")).toEqual("speoker")
})
});
// Question 2
describe("expand", function(){
    it("takes an array", function(){
        expect(expand([1,2,3])).toEqual(jasmine.any(Array));
    })
    it("takes in a number and returns a copy of the array with as many as specified", function(){
        expect(expand([1,2,3,],3)).toEqual([1,2,3,1,2,3,1,2,3])
    });
    it("takes an array and a number and returns a copy of the array", function(){
        expect(expand(["foo", "test"],1)).toEqual(["foo", "test"])
    });
})
// Question 3
describe("acceptNumbersOnly", function(){
    it("returns a boolean", function(){
        expect(acceptNumbersOnly(1,2,3,4,5,6,7)).toEqual(jasmine.any(Boolean))
    })
    it("takes in any number of arguments and return true if all of them  are numbers", function(){
        expect(acceptNumbersOnly(1,2,3,4,5)).toBe(true)
    })
    it("returns false if all of therm are not numbers", function(){
        expect(acceptNumbersOnly(1,2,3,NaN)).toBe(false)
    })
})
// Question 4
describe("mergeArrays", function(){
    it("sorted combined arrays", function(){
        expect(mergeArrays([2,1],[3,4])).toEqual([1,2,3,4])
    })
})
// Question 5
describe("mergeObjects", function(){
    it("returns two merged objects", function(){
        var obj1 = {
            name: "Foo",
            num: 33
        }
        var obj2 = {
            test: "thing",
            num: 55
        }
        expect(mergeObjects(obj1, obj2)).toEqual({
            name: "Foo",
            test: "thing",
            num: 55
        })
    })
})