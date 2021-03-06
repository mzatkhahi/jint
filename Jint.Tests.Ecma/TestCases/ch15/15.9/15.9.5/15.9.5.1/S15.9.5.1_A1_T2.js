// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The Date.prototype property "constructor" has { DontEnum } attributes
 *
 * @path ch15/15.9/15.9.5/15.9.5.1/S15.9.5.1_A1_T2.js
 * @description Checking absence of DontDelete attribute
 */

if (delete Date.prototype.constructor  === false) {
  $ERROR('#1: The Date.prototype.constructor property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('constructor')) {
  $FAIL('#2: The Date.prototype.constructor property has not the attributes DontDelete');
}


