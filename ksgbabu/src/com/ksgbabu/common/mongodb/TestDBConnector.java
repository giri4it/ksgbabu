package com.ksgbabu.common.mongodb;

import java.net.UnknownHostException;

import org.junit.Assert;
import org.junit.Test;

import com.mongodb.DBCollection;


public class TestDBConnector {

	@Test
	public void testConnection() throws UnknownHostException{
		DBConnector dbCon = new DBConnector();
		DBCollection collection = dbCon.connect().getCollection("user");
		Assert.assertNotNull(collection);
		System.out.println(collection.getCount());
	}
}
