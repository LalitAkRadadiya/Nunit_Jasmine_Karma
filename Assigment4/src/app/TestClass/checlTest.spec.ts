import { checkTest } from "./checkTest";
import { MockCase } from "./mockCase";
import { invoke } from 'q';

describe('Utility Testing : Character ', () => {

    // Using original instance of util class
    let checkTestCase : checkTest;

    // Using mock instance of util class
    let mockcheckTestCase : MockCase;

    beforeEach(() => {
        checkTestCase = new checkTest();
        mockcheckTestCase = new MockCase();
    });
    afterEach(()=>{
        checkTestCase=null;
        mockcheckTestCase=null;
    });

    it('Add 5 ',()=>{

        // Arrange
        let inputString = 10 ;

        // Act
        let result = checkTestCase.add(inputString);

        // Assert
        expect(result).toEqual(mockcheckTestCase.add(inputString));
    });


    
    it('minus 5 ',()=>{

        // Arrange
        let inputString = 10 ;

        // Act
        let result = checkTestCase.sub(inputString);

        // Assert
        expect(result).toEqual(mockcheckTestCase.sub(inputString));
    });

      
    it('multi by 5 ',()=>{

        // Arrange
        let inputString = 10 ;

        // Act
        let result = checkTestCase.multi(inputString);

        // Assert
        expect(result).toEqual(mockcheckTestCase.multi(inputString));
    });
 
    it('divide by 5 ',()=>{

        // Arrange
        let inputString = 10 ;

        // Act
        let result = checkTestCase.div(inputString);

        // Assert
        expect(result).toEqual(mockcheckTestCase.div(inputString));
    });
    it('squre',()=>{

        // Arrange
        let inputString = 10 ;

        // Act
        let result = checkTestCase.sqr(inputString);

        // Assert
        expect(result).toEqual(mockcheckTestCase.sqr(inputString));
    });
   
});