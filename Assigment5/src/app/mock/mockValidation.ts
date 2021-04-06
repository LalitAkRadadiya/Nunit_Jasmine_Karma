export class mockValidation{
    checkCircleArea(radius) {
        return 3.14 * radius * radius;
    }
    checkRectangleArea(width , length) {
        return width * length;
    }
    checkSquareArea(radius){
        return Math.pow(radius,2);
    }
    checkPerimeterOfSquare(length){
        return length*4;
    }
    checkPerimeterOfCircle(radius){
        return 2* 3.14 * radius;
    }
}