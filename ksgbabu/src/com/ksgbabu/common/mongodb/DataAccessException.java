package com.ksgbabu.common.mongodb;

public class DataAccessException extends RuntimeException {
	
	public DataAccessException(){
		super();
	}
	
	public DataAccessException(String message){
		super(message);
	}

}
