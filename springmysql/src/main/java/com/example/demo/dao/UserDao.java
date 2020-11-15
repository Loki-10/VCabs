package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.modal.User;

public interface UserDao extends JpaRepository<User, Integer> {

	public User findByUserEmailAndUserPassword(String email, String password);

}
