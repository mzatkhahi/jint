/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.21/15.4.4.21-2-2.js
 * @description Array.prototype.reduce - 'length' is own data property on an Array
 */


function testcase() {

        function callbackfn(prevVal, curVal, idx, obj) {
            return (obj.length === 2);
        }

        return [12, 11].reduce(callbackfn, 1) === true;
    }
runTestCase(testcase);
