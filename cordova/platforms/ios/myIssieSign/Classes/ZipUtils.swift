//
//  ZipUtils.swift
//  myIssieSign
//
//  Created by Bentolila, Ariel on 02/01/2021.
//

import Foundation


class ZipUtilsPlugin : CDVPlugin{
    @objc(sayHello:)
    func sayHello(command : CDVInvokedUrlCommand) //this method will be called web app
    {
        let result = CDVPluginResult(status: CDVCommandStatus_OK, messageAs:"hi Ariel")
        self.commandDelegate.send(result, callbackId: command.callbackId)
    }
}
