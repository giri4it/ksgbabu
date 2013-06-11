package com.ksgbabu.common.login;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/login")
public class LoginService {
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String authenticate(){
		return "{\"Success\":\"true\"}";
	}

}
