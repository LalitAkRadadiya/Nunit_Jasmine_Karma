import { checkTest } from "./checkTest";
import { MockCase } from "./mockCase";

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
        expect(result).toEqual(15);
    });


    
    it('minus 5 ',()=>{

        // Arrange
        let inputString = 10 ;

        // Act
        let result = checkTestCase.sub(inputString);
        
        // Assert
        expect(result).toEqual(5);
    });

      
    it('multi by 5 ',()=>{

        // Arrange
        let inputString = 10 ;

        // Act
        let result = mockcheckTestCase.multi(inputString);

        // Assert
        expect(result).toEqual(50);
    });
 
    it('divide by 5 ',()=>{

        // Arrange
        let inputString = 10 ;

        // Act
        let result = mockcheckTestCase.div(inputString);

        // Assert
        expect(result).toEqual(2);
    });
    it('squre',()=>{

        // Arrange
        let inputString = 10 ;

        // Act
        let result = mockcheckTestCase.sqr(inputString);

        // Assert
        expect(result).toEqual(100);
    });
   
});