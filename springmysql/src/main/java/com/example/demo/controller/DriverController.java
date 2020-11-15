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
import com.example.demo.dao.DriverDao;
import com.example.demo.modal.Driver;


@RestController
@RequestMapping(value = "/Driver")
@CrossOrigin(origins="*")
public class DriverController {
	
	@Autowired
	private DriverDao driverDao;
	
	@PostMapping("/saveDrivers")
	public Driver save(@RequestBody Driver DriverObj) {
		return driverDao.save(DriverObj);
	}
	/*
	@GetMapping(value="/getDriverByEmail")
	public @ResponseBody List<Driver> getDriverByEmail(){
		return (List<Driver>)driverDao.findAll();
	}
	
	@GetMapping(value="/getMatchingDriver")
	public @ResponseBody List<Driver> getMatchingDriver(){
		return (List<Driver>)driverDao.findAll();
	}
	*/
	//updateDriverById
	
	@GetMapping(value="/getDrivers")
	public @ResponseBody List<Driver> getDrivers(){
		return (List<Driver>)driverDao.findAll();
	}
	
	@GetMapping("/getDrivers/{id}")
	public Driver get(@PathVariable int id) {
		Optional<Driver> Driver = driverDao.findById(id);
		if(Driver.isPresent()) {
			return Driver.get();
		}else {
			throw new RuntimeException("Driver not found for the id "+id);
		}
	}
	
	@DeleteMapping("/deleteDrivers/{id}")
	public String delete(@PathVariable int id) {
		Optional<Driver> driver = driverDao.findById(id);
		if(driver.isPresent()) {
			driverDao.delete(driver.get());
			return "Driver is deleted with id "+id;
		}else {
			throw new RuntimeException("Driver not found for the id "+id);
		}
	}
	
	@PutMapping("/updateDrivers")
	public Driver update(@RequestBody Driver DriverObj) {
		return driverDao.save(DriverObj);
	}
	
}
