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


/**
 * An event that is sent when the number of visible markers is changed. Tracking
 *
 * @event module:armarkerdetector#MarkerCount
 *
 * @type {module:armarkerdetector#event:Media}
 *
 * @property {external:Integer} sequenceNumber
 *  sequence number
 * @property {external:Integer} countTimestamp
 *  timestamp
 * @property {external:Integer} markerId
 *  marker id
 * @property {external:Integer} markerCount
 *  Number of visible markers with the specified id
 * @property {external:Integer} markerCountDiff
 *  How much the markerCount was changed from the previous situation
 */

/**
 * Matrices for marker pose
 *
 * @event module:armarkerdetector#MarkerPose
 *
 * @type {module:armarkerdetector#event:Media}
 *
 * @property {external:Integer} sequenceNumber
 *  sequence number
 * @property {external:Integer} poseTimestamp
 *  timestamp
 * @property {external:Integer} width
 *  resolution width
 * @property {external:Integer} height
 *  resolution height
 * @property {external:Number} matrixProjection
 *  marker projection matrix
 * @property {module:armarkerdetector/complexTypes.ArMarkerPose} markerPose
 *  marker pose
 */

/**
 * An event that is sent from some predifined monitoring points of the module 
 *
 * @event module:armarkerdetector#Tick
 *
 * @type {module:armarkerdetector#event:Media}
 *
 * @property {external:String} msg
 *  message descriping the tick
 * @property {external:Integer} tickTimestamp
 *  timestamp
 */
