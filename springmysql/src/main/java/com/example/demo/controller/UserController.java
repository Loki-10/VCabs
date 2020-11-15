package com.example.demo.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.List;
import java.util.Optional;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.dao.UserDao;
import com.example.demo.modal.User;
import com.example.demo.service.UserService;


@RestController
@RequestMapping(value = "/User")
@CrossOrigin(origins="*")
public class UserController {
	
	@Autowired
	private UserDao userDao;
	private UserService userService;
	
	@PostMapping("/saveUsers")
	public User save(@RequestBody User UserObj) {
		return userDao.save(UserObj);
	}
	
	@PostMapping(value="/getUserByEmail")
	public User getUserByEmail(@RequestBody User user) {
		String temp = user.getUserEmail();
		String tem = user.getUserPassword();
		User userobj = userService.getUserByEmailAndPassword(temp, tem);
		System.out.print(userobj);
		return userobj;
	}  
	
	@GetMapping(value="/getUsers")
	public @ResponseBody List<User> getUsers(){
		return (List<User>)userDao.findAll();
	}
	
	@GetMapping("/getUsers/{id}")
	public User get(@PathVariable int id) {
		Optional<User> User = userDao.findById(id);
		if(User.isPresent()) {
			return User.get();
		}else {
			throw new RuntimeException("User not found for the id "+id);
		}
	}
	
	@DeleteMapping("/deleteUsers/{id}")
	public String delete(@PathVariable int id) {
		Optional<User> user = userDao.findById(id);
		if(user.isPresent()) {
			userDao.delete(user.get());
			return "User is deleted with id "+id;
		}else {
			throw new RuntimeException("User not found for the id "+id);
		}
	}
	
	@PutMapping("/updateUsers")
	public User update(@RequestBody User UserObj) {
		return userDao.save(UserObj);
	}
	
}
