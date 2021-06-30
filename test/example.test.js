// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getPlanthealth } from "../utils";
const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'unhealthy';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = waterLevel;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
