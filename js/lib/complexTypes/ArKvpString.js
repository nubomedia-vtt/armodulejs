/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials are made
 * available under the terms of the GNU Lesser General Public License (LGPL)
 * version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

var inherits = require('inherits');

var kurentoClient = require('kurento-client');

var checkType = kurentoClient.checkType;
var ChecktypeError = checkType.ChecktypeError;

var ComplexType = kurentoClient.register.complexTypes.ComplexType;


/**
 * AR Key-Value-Pair of Strings and Strings for passing data
 *
 * @constructor module:armarkerdetector/complexTypes.ArKvpString
 *
 * @property {external:String} key
 *  unique key for a value
 * @property {external:String} value
 *  arbitrary value
 */
function ArKvpString(arKvpStringDict){
  if(!(this instanceof ArKvpString))
    return new ArKvpString(arKvpStringDict)

  arKvpStringDict = arKvpStringDict || {}

  // Check arKvpStringDict has the required fields
  checkType('String', 'arKvpStringDict.key', arKvpStringDict.key, {required: true});
  checkType('String', 'arKvpStringDict.value', arKvpStringDict.value, {required: true});

  // Init parent class
  ArKvpString.super_.call(this, arKvpStringDict)

  // Set object properties
  Object.defineProperties(this, {
    key: {
      writable: true,
      enumerable: true,
      value: arKvpStringDict.key
    },
    value: {
      writable: true,
      enumerable: true,
      value: arKvpStringDict.value
    }
  })
}
inherits(ArKvpString, ComplexType)

// Private identifiers to allow re-construction of the complexType on the server
// They need to be enumerable so JSON.stringify() can access to them
Object.defineProperties(ArKvpString.prototype, {
  __module__: {
    enumerable: true,
    value: "armarkerdetector"
  },
  __type__: {
    enumerable: true,
    value: "ArKvpString"
  }
})

/**
 * Checker for {@link module:armarkerdetector/complexTypes.ArKvpString}
 *
 * @memberof module:armarkerdetector/complexTypes
 *
 * @param {external:String} key
 * @param {module:armarkerdetector/complexTypes.ArKvpString} value
 */
function checkArKvpString(key, value)
{
  if(!(value instanceof ArKvpString))
    throw ChecktypeError(key, ArKvpString, value);
};


module.exports = ArKvpString;

ArKvpString.check = checkArKvpString;
