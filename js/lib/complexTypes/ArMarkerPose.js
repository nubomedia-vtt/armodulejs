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
 * Pose doc
 *
 * @constructor module:armarkerdetector/complexTypes.ArMarkerPose
 *
 * @property {external:Integer} markerId
 *  marker id
 * @property {external:Number} matrixModelview
 *  marker modelview matrix
 */
function ArMarkerPose(arMarkerPoseDict){
  if(!(this instanceof ArMarkerPose))
    return new ArMarkerPose(arMarkerPoseDict)

  arMarkerPoseDict = arMarkerPoseDict || {}

  // Check arMarkerPoseDict has the required fields
  checkType('int', 'arMarkerPoseDict.markerId', arMarkerPoseDict.markerId, {required: true});
  checkType('float', 'arMarkerPoseDict.matrixModelview', arMarkerPoseDict.matrixModelview, {isArray: true, required: true});

  // Init parent class
  ArMarkerPose.super_.call(this, arMarkerPoseDict)

  // Set object properties
  Object.defineProperties(this, {
    markerId: {
      writable: true,
      enumerable: true,
      value: arMarkerPoseDict.markerId
    },
    matrixModelview: {
      writable: true,
      enumerable: true,
      value: arMarkerPoseDict.matrixModelview
    }
  })
}
inherits(ArMarkerPose, ComplexType)

// Private identifiers to allow re-construction of the complexType on the server
// They need to be enumerable so JSON.stringify() can access to them
Object.defineProperties(ArMarkerPose.prototype, {
  __module__: {
    enumerable: true,
    value: "armarkerdetector"
  },
  __type__: {
    enumerable: true,
    value: "ArMarkerPose"
  }
})

/**
 * Checker for {@link module:armarkerdetector/complexTypes.ArMarkerPose}
 *
 * @memberof module:armarkerdetector/complexTypes
 *
 * @param {external:String} key
 * @param {module:armarkerdetector/complexTypes.ArMarkerPose} value
 */
function checkArMarkerPose(key, value)
{
  if(!(value instanceof ArMarkerPose))
    throw ChecktypeError(key, ArMarkerPose, value);
};


module.exports = ArMarkerPose;

ArMarkerPose.check = checkArMarkerPose;
