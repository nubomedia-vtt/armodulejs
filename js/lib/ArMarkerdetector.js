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

var disguise = kurentoClient.disguise;

var checkType      = kurentoClient.checkType;
var ChecktypeError = checkType.ChecktypeError;


var Transaction = kurentoClient.TransactionsManager.Transaction;

var OpenCVFilter = kurentoClient.register.abstracts.OpenCVFilter;


function noop(error, result) {
  if (error) console.trace(error);

  return result
};


/**
 * Create an element
 *
 * @classdesc
 *  ArFilter interface. Documentation about the module
 *
 * @extends module:filters/abstracts.OpenCVFilter
 *
 * @constructor module:armarkerdetector.ArMarkerdetector
 *
 * @fires {@link module:armarkerdetector#event:MarkerCount MarkerCount}
 * @fires {@link module:armarkerdetector#event:MarkerPose MarkerPose}
 * @fires {@link module:armarkerdetector#event:Tick Tick}
 */
function ArMarkerdetector(){
  ArMarkerdetector.super_.call(this);
};
inherits(ArMarkerdetector, OpenCVFilter);


//
// Public methods
//

/**
 * Sets the enabled state of the 2D and 3D rendering
 *
 * @alias module:armarkerdetector.ArMarkerdetector.enableAugmentation
 *
 * @param {external:Boolean} enable
 *  state to enable or disable augmentation
 *
 * @param {module:armarkerdetector.ArMarkerdetector~enableAugmentationCallback} [callback]
 *
 * @return {external:Promise}
 */
ArMarkerdetector.prototype.enableAugmentation = function(enable, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('boolean', 'enable', enable, {required: true});

  var params = {
    enable: enable
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'enableAugmentation', params, callback), this)
};
/**
 * @callback module:armarkerdetector.ArMarkerdetector~enableAugmentationCallback
 * @param {external:Error} error
 */

/**
 * Sets the enabled state for notifying the listener when the number of markers 
 * changes
 *
 * @alias module:armarkerdetector.ArMarkerdetector.enableMarkerCountEvents
 *
 * @param {external:Boolean} enable
 *  state to enable of disable generation of MarkerCountEvents
 *
 * @param {module:armarkerdetector.ArMarkerdetector~enableMarkerCountEventsCallback} [callback]
 *
 * @return {external:Promise}
 */
ArMarkerdetector.prototype.enableMarkerCountEvents = function(enable, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('boolean', 'enable', enable, {required: true});

  var params = {
    enable: enable
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'enableMarkerCountEvents', params, callback), this)
};
/**
 * @callback module:armarkerdetector.ArMarkerdetector~enableMarkerCountEventsCallback
 * @param {external:Error} error
 */

/**
 * Sets the enabled state for notifying the listener when number of ticks has 
 * elapsed for monitoring
 *
 * @alias module:armarkerdetector.ArMarkerdetector.enableTickEvents
 *
 * @param {external:Boolean} enable
 *  state to enable of disable generation of TickEvents
 *
 * @param {module:armarkerdetector.ArMarkerdetector~enableTickEventsCallback} [callback]
 *
 * @return {external:Promise}
 */
ArMarkerdetector.prototype.enableTickEvents = function(enable, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('boolean', 'enable', enable, {required: true});

  var params = {
    enable: enable
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'enableTickEvents', params, callback), this)
};
/**
 * @callback module:armarkerdetector.ArMarkerdetector~enableTickEventsCallback
 * @param {external:Error} error
 */

/**
 * Passes set of augmentables ie info about markers/planars that should be 
 * tracked and 2D/3D models to be rendered. See description of ArThing for more 
 * details.
 *
 * @alias module:armarkerdetector.ArMarkerdetector.setArThing
 *
 * @param {module:armarkerdetector/complexTypes.ArThing}[] arThing
 *  set of ArThings
 *
 * @param {module:armarkerdetector.ArMarkerdetector~setArThingCallback} [callback]
 *
 * @return {external:Promise}
 */
ArMarkerdetector.prototype.setArThing = function(arThing, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('ArThing', 'arThing', arThing, {isArray: true, required: true});

  var params = {
    arThing: arThing
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'setArThing', params, callback), this)
};
/**
 * @callback module:armarkerdetector.ArMarkerdetector~setArThingCallback
 * @param {external:Error} error
 */

/**
 * Sets the enabled state for marker events and how often these events should be
 *
 * @alias module:armarkerdetector.ArMarkerdetector.setMarkerPoseFrameFrequency
 *
 * @param {external:Boolean} enable
 *  state to enable or disable MarkerPoseEvents based on frames
 *
 * @param {external:Integer} frequency
 *  generate for every nth frame, n e [1, ...)
 *
 * @param {module:armarkerdetector.ArMarkerdetector~setMarkerPoseFrameFrequencyCallback} [callback]
 *
 * @return {external:Promise}
 */
ArMarkerdetector.prototype.setMarkerPoseFrameFrequency = function(enable, frequency, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('boolean', 'enable', enable, {required: true});
  checkType('int', 'frequency', frequency, {required: true});

  var params = {
    enable: enable,
    frequency: frequency
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'setMarkerPoseFrameFrequency', params, callback), this)
};
/**
 * @callback module:armarkerdetector.ArMarkerdetector~setMarkerPoseFrameFrequencyCallback
 * @param {external:Error} error
 */

/**
 * Sets the enabled state for marker events and how often these events should be
 *
 * @alias module:armarkerdetector.ArMarkerdetector.setMarkerPoseFrequency
 *
 * @param {external:Boolean} enable
 *  state to enable or disable MarkerPoseEvents based on time
 *
 * @param {external:Number} frequency
 *  generate with Hz
 *
 * @param {module:armarkerdetector.ArMarkerdetector~setMarkerPoseFrequencyCallback} [callback]
 *
 * @return {external:Promise}
 */
ArMarkerdetector.prototype.setMarkerPoseFrequency = function(enable, frequency, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('boolean', 'enable', enable, {required: true});
  checkType('float', 'frequency', frequency, {required: true});

  var params = {
    enable: enable,
    frequency: frequency
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'setMarkerPoseFrequency', params, callback), this)
};
/**
 * @callback module:armarkerdetector.ArMarkerdetector~setMarkerPoseFrequencyCallback
 * @param {external:Error} error
 */

/**
 * sets operation ie position/rotation/scale of 3D model
 *
 * @alias module:armarkerdetector.ArMarkerdetector.setPose
 *
 * @param {external:Integer} id
 *  model id
 *
 * @param {external:Integer} type
 *  operation type
 *
 * @param {external:Number} value
 *  magnitude
 *
 * @param {module:armarkerdetector.ArMarkerdetector~setPoseCallback} [callback]
 *
 * @return {external:Promise}
 */
ArMarkerdetector.prototype.setPose = function(id, type, value, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('int', 'id', id, {required: true});
  checkType('int', 'type', type, {required: true});
  checkType('float', 'value', value, {required: true});

  var params = {
    id: id,
    type: type,
    value: value
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'setPose', params, callback), this)
};
/**
 * @callback module:armarkerdetector.ArMarkerdetector~setPoseCallback
 * @param {external:Error} error
 */


/**
 * @alias module:armarkerdetector.ArMarkerdetector.constructorParams
 *
 * @property {module:core.MediaPipeline} mediaPipeline
 *  the parent {@link module:core.MediaPipeline MediaPipeline}
 */
ArMarkerdetector.constructorParams = {
  mediaPipeline: {
    type: 'MediaPipeline',
    required: true
  }
};

/**
 * @alias module:armarkerdetector.ArMarkerdetector.events
 *
 * @extends module:filters/abstracts.OpenCVFilter.events
 */
ArMarkerdetector.events = OpenCVFilter.events.concat(['MarkerCount', 'MarkerPose', 'Tick']);


/**
 * Checker for {@link module:armarkerdetector.ArMarkerdetector}
 *
 * @memberof module:armarkerdetector
 *
 * @param {external:String} key
 * @param {module:armarkerdetector.ArMarkerdetector} value
 */
function checkArMarkerdetector(key, value)
{
  if(!(value instanceof ArMarkerdetector))
    throw ChecktypeError(key, ArMarkerdetector, value);
};


module.exports = ArMarkerdetector;

ArMarkerdetector.check = checkArMarkerdetector;