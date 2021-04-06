export class mockCaseCheck {
    isEmailValid(email): boolean {
        const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regularExpression.test(String(email).toLowerCase());
    }
    isPhoneValid(phone): boolean {
        const regularExpression = /[0-9\+\-\ ]/;
        return regularExpression.test(String(phone).toLowerCase());
    }
    endsWithcheck(val) {
        if (val.endsWith('company')) { 
            return true; 
        }
        return false;
    }
    lengthshouldbeLessthenTen(data) {
        if (data.length < 10) {
            return true;
        }
        return false;
    }
    isContain(str) {

        if (str.includes('world')) {
            return true;
        }
        return false;
    }
}
