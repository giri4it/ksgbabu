package com.ksgbabu.common.mongodb;

import java.net.UnknownHostException;

import com.mongodb.DB;
import com.mongodb.Mongo;

public class DBConnector {
	
	public void DBConnector(){
		
	}
	
	public DB connect() throws UnknownHostException{
	
		Mongo mongo = new Mongo("localhost", 27017);
		DB db = mongo.getDB("poker");
		/*boolean auth = db.authenticate("username", "password".toCharArray());
		if(auth == true){
			return db;
		} else {
			throw new DataAccessException("Authentication failed");
		}*/
		return db;
	}
}
