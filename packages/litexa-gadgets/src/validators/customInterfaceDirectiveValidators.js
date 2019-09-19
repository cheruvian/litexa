/*
 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * Copyright 2019 Amazon.com (http://amazon.com/), Inc. or its affiliates. All Rights Reserved.
 * These materials are licensed as "Restricted Program Materials" under the Program Materials
 * License Agreement (the "Agreement") in connection with the Amazon Alexa voice service.
 * The Agreement is available at https://developer.amazon.com/public/support/pml.html.
 * See the Agreement for the specific terms and conditions of the Agreement. Capitalized
 * terms not defined in this file have the meanings given to them in the Agreement.
 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */

sendDirectiveValidator = function(validator) {
  const directive = validator.jsonObject;
  // @TODO: Add more validation here.
  const requiredKeys = ['type', 'header', 'endpoint', 'payload'];
  validator.require(requiredKeys);
},

startEventHandlerDirectiveValidator = function(validator) {
  const directive = validator.jsonObject;
  // @TODO: Add more validation here.
  const requiredKeys = ['type', 'token', 'eventFilter', 'expiration'];
  validator.require(requiredKeys);
},

stopEventHandlerDirectiveValidator = function(validator) {
  const directive = validator.jsonObject;
  // @TODO: Add more validation here.
  const requiredKeys = ['type', 'token'];
  validator.require(requiredKeys);
}

module.exports = {
  sendDirectiveValidator,
  startEventHandlerDirectiveValidator,
  stopEventHandlerDirectiveValidator
}