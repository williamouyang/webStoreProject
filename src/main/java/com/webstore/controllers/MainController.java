/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.webstore.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author WeiliangOuyang
 */
@Controller
public class MainController {
    
    @RequestMapping(value="/",method = RequestMethod.GET)
    public String homepage(){
        return "order";
    }
}
