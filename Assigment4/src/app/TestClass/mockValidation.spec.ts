import { mockCaseCheck } from './mockCaseCheck';

describe('Utility Testing : Validation ', () => {

    // Using mocking with spy
    let CheckValidation : mockCaseCheck;
    let spy: any;

    beforeEach(() => {
        CheckValidation =  new mockCaseCheck();
    });
    afterEach(()=>{
        CheckValidation=null;
    });

    it('is my email is valid',()=>{

       
        let inputString="x@gmail.com";

       
        spy = spyOn(CheckValidation, 'isEmailValid').and.returnValue(true);
        let result=CheckValidation.isEmailValid(inputString);

       
        expect(result).toBeTrue();
    });

    it('is my phone is valid',()=>{
        
       
        let inputString="78989848";

       
        spy = spyOn(CheckValidation, 'isPhoneValid').and.returnValue(false);
        let result=CheckValidation.isPhoneValid(inputString);

       
        expect(result).toBeFalse();
    });

    it('endsWith company',()=>{
        
       
        let inputString = "Gateway group of company";

       
        spy = spyOn(CheckValidation, 'endsWithcheck').and.returnValue(true);
        let result=CheckValidation.endsWithcheck(inputString);

       
        expect(result).toBeTrue();
    });

    it('length should be Less then Ten',()=>{
        
       
        let inputString = "Hello world" ;

       
        spy = spyOn(CheckValidation, 'lengthshouldbeLessthenTen').and.returnValue(true);
        let result=CheckValidation.lengthshouldbeLessthenTen(inputString);

       
        expect(result).toBeTrue();
    });

    it('is contain',()=>{
       
        let inputString = "hello world";
       
        spy = spyOn(CheckValidation, 'isContain').and.returnValue(false);
        let result=CheckValidation.isContain(inputString);

        expect(result).toBeFalse();
    });
   
});