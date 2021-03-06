/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-mail-js/mail_service */
var utils = require('vertx-js/util/utils');
var Vertx = require('vertx-js/vertx');
var MailClient = require('vertx-mail-js/mail_client');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JMailService = Java.type('io.vertx.ext.mail.MailService');
var MailMessage = Java.type('io.vertx.ext.mail.MailMessage');
var MailResult = Java.type('io.vertx.ext.mail.MailResult');

/**

 @class
*/
var MailService = function(j_val) {

  var j_mailService = j_val;
  var that = this;
  MailClient.call(this, j_val);

  /**

   @public
   @param email {Object} 
   @param resultHandler {function} 
   @return {MailService}
   */
  this.sendMail = function(email, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'function') {
      j_mailService["sendMail(io.vertx.ext.mail.MailMessage,io.vertx.core.Handler)"](email != null ? new MailMessage(new JsonObject(Java.asJSONCompatible(email))) : null, function(ar) {
      if (ar.succeeded()) {
        resultHandler(utils.convReturnDataObject(ar.result()), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   */
  this.close = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_mailService["close()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_mailService;
};

MailService._jclass = utils.getJavaClass("io.vertx.ext.mail.MailService");
MailService._jtype = {
  accept: function(obj) {
    return MailService._jclass.isInstance(obj._jdel);
  },
  wrap: function(jdel) {
    var obj = Object.create(MailService.prototype, {});
    MailService.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
MailService._create = function(jdel) {
  var obj = Object.create(MailService.prototype, {});
  MailService.apply(obj, arguments);
  return obj;
}
/**
 create a proxy of  MailService that delegates to the mail service running somewhere else via the event bus

 @memberof module:vertx-mail-js/mail_service
 @param vertx {Vertx} the Vertx instance the proxy will be run in 
 @param address {string} the eb address of the mail service running somewhere, default is "vertx.mail" 
 @return {MailService} MailService instance that can then be used to send multiple mails
 */
MailService.createEventBusProxy = function(vertx, address) {
  var __args = arguments;
  if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'string') {
    return utils.convReturnVertxGen(MailService, JMailService["createEventBusProxy(io.vertx.core.Vertx,java.lang.String)"](vertx._jdel, address));
  } else throw new TypeError('function invoked with invalid arguments');
};

module.exports = MailService;