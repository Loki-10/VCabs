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
import com.example.demo.dao.DriverRequestDao;
import com.example.demo.modal.DriverRequest;


@RestController
@RequestMapping(value = "/DriverRequest")
@CrossOrigin(origins="*")
public class DriverRequestController {
	
	@Autowired
	private DriverRequestDao driverRequestDao;
	
	@PostMapping("/saveDriverRequests")
	public DriverRequest save(@RequestBody DriverRequest DriverRequestObj) {
		return driverRequestDao.save(DriverRequestObj);
	}
	
	@GetMapping(value="/getDriverRequests")
	public @ResponseBody List<DriverRequest> getDriverRequests(){
		return (List<DriverRequest>)driverRequestDao.findAll();
	}
	
	@GetMapping("/getDriverRequests/{id}")
	public DriverRequest get(@PathVariable int id) {
		Optional<DriverRequest> DriverRequest = driverRequestDao.findById(id);
		if(DriverRequest.isPresent()) {
			return DriverRequest.get();
		}else {
			throw new RuntimeException("DriverRequest not found for the id "+id);
		}
	}
	
	@DeleteMapping("/deleteDriverRequests/{id}")
	public String delete(@PathVariable int id) {
		Optional<DriverRequest> driverRequest = driverRequestDao.findById(id);
		if(driverRequest.isPresent()) {
			driverRequestDao.delete(driverRequest.get());
			return "DriverRequest is deleted with id "+id;
		}else {
			throw new RuntimeException("DriverRequest not found for the id "+id);
		}
	}
	
	@PutMapping("/updateDriverRequests")
	public DriverRequest update(@RequestBody DriverRequest DriverRequestObj) {
		return driverRequestDao.save(DriverRequestObj);
	}
	
}
