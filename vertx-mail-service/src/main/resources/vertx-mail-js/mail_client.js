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

/** @module vertx-mail-js/mail_client */
var utils = require('vertx-js/util/utils');
var Vertx = require('vertx-js/vertx');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JMailClient = Java.type('io.vertx.ext.mail.MailClient');
var MailConfig = Java.type('io.vertx.ext.mail.MailConfig');
var MailMessage = Java.type('io.vertx.ext.mail.MailMessage');
var MailResult = Java.type('io.vertx.ext.mail.MailResult');

/**
 @class
*/
var MailClient = function(j_val) {

  var j_mailClient = j_val;
  var that = this;

  /**

   @public
   @param arg0 {Object} 
   @param arg1 {function} 
   @return {MailClient}
   */
  this.sendMail = function(arg0, arg1) {
    var __args = arguments;
    if (__args.length === 2 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'function') {
      j_mailClient["sendMail(io.vertx.ext.mail.MailMessage,io.vertx.core.Handler)"](arg0 != null ? new MailMessage(new JsonObject(Java.asJSONCompatible(arg0))) : null, function(ar) {
      if (ar.succeeded()) {
        arg1(utils.convReturnDataObject(ar.result()), null);
      } else {
        arg1(null, ar.cause());
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
      j_mailClient["close()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_mailClient;
};

MailClient._jclass = utils.getJavaClass("io.vertx.ext.mail.MailClient");
MailClient._jtype = {
  accept: function(obj) {
    return MailClient._jclass.isInstance(obj._jdel);
  },
  wrap: function(jdel) {
    var obj = Object.create(MailClient.prototype, {});
    MailClient.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
MailClient._create = function(jdel) {
  var obj = Object.create(MailClient.prototype, {});
  MailClient.apply(obj, arguments);
  return obj;
}
/**

 @memberof module:vertx-mail-js/mail_client
 @param vertx {Vertx} 
 @param config {Object} 
 @return {MailClient}
 */
MailClient.createNonShared = function(vertx, config) {
  var __args = arguments;
  if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && (typeof __args[1] === 'object' && __args[1] != null)) {
    return utils.convReturnVertxGen(MailClient, JMailClient["createNonShared(io.vertx.core.Vertx,io.vertx.ext.mail.MailConfig)"](vertx._jdel, config != null ? new MailConfig(new JsonObject(Java.asJSONCompatible(config))) : null));
  } else throw new TypeError('function invoked with invalid arguments');
};

/**

 @memberof module:vertx-mail-js/mail_client
 @param vertx {Vertx} 
 @param config {Object} 
 @param poolName {string} 
 @return {MailClient}
 */
MailClient.createShared = function() {
  var __args = arguments;
  if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && (typeof __args[1] === 'object' && __args[1] != null)) {
    return utils.convReturnVertxGen(MailClient, JMailClient["createShared(io.vertx.core.Vertx,io.vertx.ext.mail.MailConfig)"](__args[0]._jdel, __args[1] != null ? new MailConfig(new JsonObject(Java.asJSONCompatible(__args[1]))) : null));
  }else if (__args.length === 3 && typeof __args[0] === 'object' && __args[0]._jdel && (typeof __args[1] === 'object' && __args[1] != null) && typeof __args[2] === 'string') {
    return utils.convReturnVertxGen(MailClient, JMailClient["createShared(io.vertx.core.Vertx,io.vertx.ext.mail.MailConfig,java.lang.String)"](__args[0]._jdel, __args[1] != null ? new MailConfig(new JsonObject(Java.asJSONCompatible(__args[1]))) : null, __args[2]));
  } else throw new TypeError('function invoked with invalid arguments');
};

module.exports = MailClient;