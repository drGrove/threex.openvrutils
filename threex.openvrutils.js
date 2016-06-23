// Instantiate THREEx if it doesn't exist
THREEx = THREEx || {};

// Instantiate the OpenVRUtils extension
THREEx.OpenVRUtils = {};

// THREEx.OpenVRUtils Errors
THREEx.OpenVRUtils.ERRORS = {};

/**
 * GamepadFeatureException
 * @param {string} msg - Message to pass into the string
 */
THREEx.OpenVRUtils.ERRORS.GamepadFeatureException = function(msg) {
  this.name = 'GamepadFeatureException';
  this.message = msg || 'Feature not implemented';
  this.stack = (new Error()).stack;
};

THREEx.OpenVRUtils.ERRORS.GamepadFeatureException.prototype = Object.create(Error.prototype);

THREEx.OpenVRUtils.ERRORS.GamepadFeatureException.prototype.constructor = THREEx.OpenVRUtils.ERRORS.GamepadFeatureException;
