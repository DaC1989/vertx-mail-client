require 'vertx/vertx'
require 'vertx-mail/mail_client'
require 'vertx/util/utils.rb'
# Generated from io.vertx.ext.mail.MailService
module VertxMail
  class MailService < ::VertxMail::MailClient
    # @private
    # @param j_del [::VertxMail::MailService] the java delegate
    def initialize(j_del)
      super(j_del)
      @j_del = j_del
    end
    # @private
    # @return [::VertxMail::MailService] the underlying java delegate
    def j_del
      @j_del
    end
    @@j_api_type = Object.new
    def @@j_api_type.accept?(obj)
      obj.class == MailService
    end
    def @@j_api_type.wrap(obj)
      MailService.new(obj)
    end
    def @@j_api_type.unwrap(obj)
      obj.j_del
    end
    def self.j_api_type
      @@j_api_type
    end
    def self.j_class
      Java::IoVertxExtMail::MailService.java_class
    end
    #  create a proxy of  MailService that delegates to the mail service running somewhere else via the event bus
    # @param [::Vertx::Vertx] vertx the Vertx instance the proxy will be run in
    # @param [String] address the eb address of the mail service running somewhere, default is "vertx.mail"
    # @return [::VertxMail::MailService] MailService instance that can then be used to send multiple mails
    def self.create_event_bus_proxy(vertx=nil,address=nil)
      if vertx.class.method_defined?(:j_del) && address.class == String && !block_given?
        return ::Vertx::Util::Utils.safe_create(Java::IoVertxExtMail::MailService.java_method(:createEventBusProxy, [Java::IoVertxCore::Vertx.java_class,Java::java.lang.String.java_class]).call(vertx.j_del,address),::VertxMail::MailService)
      end
      raise ArgumentError, "Invalid arguments when calling create_event_bus_proxy(#{vertx},#{address})"
    end
    # @param [Hash] email 
    # @yield 
    # @return [self]
    def send_mail(email=nil)
      if email.class == Hash && block_given?
        @j_del.java_method(:sendMail, [Java::IoVertxExtMail::MailMessage.java_class,Java::IoVertxCore::Handler.java_class]).call(Java::IoVertxExtMail::MailMessage.new(::Vertx::Util::Utils.to_json_object(email)),(Proc.new { |ar| yield(ar.failed ? ar.cause : nil, ar.succeeded ? ar.result != nil ? JSON.parse(ar.result.toJson.encode) : nil : nil) }))
        return self
      end
      raise ArgumentError, "Invalid arguments when calling send_mail(#{email})"
    end
    # @return [void]
    def close
      if !block_given?
        return @j_del.java_method(:close, []).call()
      end
      raise ArgumentError, "Invalid arguments when calling close()"
    end
  end
end
