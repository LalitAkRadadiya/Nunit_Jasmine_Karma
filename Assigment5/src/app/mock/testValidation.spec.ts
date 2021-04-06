import { validation } from "./Validation";
import { mockValidation } from './mockValidation';


describe('Utility Testing : Validation ', () => {

    let mockValidations : mockValidation;

    beforeEach(() => {
        mockValidations=new mockValidation();
    });
    afterEach(()=>{
        mockValidations=null;
    });

    it('check Circle Area',()=>{

        // Arrange
        let input = 2;

        // Act
        let result=mockValidations.checkCircleArea(input);

        // Assert
        expect(result).toEqual(12.56);
    });

    it('check Rectangle Area',()=>{

        // Arrange
        let length = 5 ;
        let width = 5;
        // Act
        let result=mockValidations.checkRectangleArea(length, width);

        // Assert
        expect(result).toEqual(25);
    });

    it('check Square Area',()=>{

        // Arrange
        let input = 8;

        // Act
        let result=mockValidations.checkSquareArea(input);

        // Assert
        expect(result).toEqual(64);
    });

    it('check Perimeter Of Square',()=>{

        // Arrange
        let input= 4 ;

        // Act
        let result=mockValidations.checkPerimeterOfSquare(input);

        // Assert
        expect(result).toEqual(16);
    });

    it('check Perimeter Of Circle',()=>{

        // Arrange
        let inputMarks = 2;

        // Act
        let result=mockValidations.checkPerimeterOfCircle(inputMarks);

        // Assert
        expect(result).toEqual(12.56);
    });
});