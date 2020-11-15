package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.UserDao;
import com.example.demo.modal.User;

@Service
public class UserService {

	@Autowired 
	private UserDao userDao;
	
	public User getUserByEmailAndPassword(String email, String password){
		return userDao.findByUserEmailAndUserPassword(email, password);
	}
	
}
