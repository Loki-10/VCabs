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
import com.example.demo.dao.RidesDao;
import com.example.demo.modal.Rides;


@RestController
@RequestMapping(value = "/Rides")
@CrossOrigin(origins="*")
public class RidesController {
	
	@Autowired
	private RidesDao ridesDao;
	
	@PostMapping("/saveRides")
	public Rides save(@RequestBody Rides RidesObj) {
		return ridesDao.save(RidesObj);
	}
	/*
	@GetMapping(value="/getRideByDriverId")
	public @ResponseBody List<Rides> getRideByDriverId(){
		return (List<Rides>)ridesDao.findAll();
	}
	
	@GetMapping(value="/getRideByUserId")
	public @ResponseBody List<Rides> getRideByUserId(){
		return (List<Rides>)ridesDao.findAll();
	}
	*/
	
	@GetMapping(value="/getRides")
	public @ResponseBody List<Rides> getRidess(){
		return (List<Rides>)ridesDao.findAll();
	}
	
	@GetMapping("/getRides/{id}")
	public Rides get(@PathVariable int id) {
		Optional<Rides> Rides = ridesDao.findById(id);
		if(Rides.isPresent()) {
			return Rides.get();
		}else {
			throw new RuntimeException("Rides not found for the id "+id);
		}
	}
	
	@DeleteMapping("/deleteRides/{id}")
	public String delete(@PathVariable int id) {
		Optional<Rides> rides = ridesDao.findById(id);
		if(rides.isPresent()) {
			ridesDao.delete(rides.get());
			return "Rides is deleted with id "+id;
		}else {
			throw new RuntimeException("Rides not found for the id "+id);
		}
	}
	
	@PutMapping("/updateRides")
	public Rides update(@RequestBody Rides RidesObj) {
		return ridesDao.save(RidesObj);
	}
	
}
