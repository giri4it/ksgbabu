package com.ksgbabu.common.register;

import java.util.logging.Level;
import java.util.logging.Logger;

import javax.ws.rs.BeanParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/register")
public class RegisterService {
	
	Logger logger = Logger.getLogger(this.getClass().getName());

	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public String register(@BeanParam RegistrationInfo registrationInfo) {
		
		System.out.println("called: " + registrationInfo.getUserName());
		logger.log(Level.INFO, "Info received" + registrationInfo.getUserName());
		
		return "{\"Success\":\"true\"}";
	}

}
