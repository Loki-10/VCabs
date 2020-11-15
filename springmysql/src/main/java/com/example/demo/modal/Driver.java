package com.example.demo.modal;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="Driver")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Driver {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int driverId;
	private String driverName;
	private String driverEmail;
	private String driverPhone;
	private String driverPassword;
	private String vehicleModel;
	private String vehicleNumber;
	private String license;
	private String rcbook;
	public int getDriverId() {
		return driverId;
	}
	public void setDriverId(int driverId) {
		this.driverId = driverId;
	}
	public String getDriverName() {
		return driverName;
	}
	public void setDriverName(String driverName) {
		this.driverName = driverName;
	}
	public String getDriverEmail() {
		return driverEmail;
	}
	public void setDriverEmail(String driverEmail) {
		this.driverEmail = driverEmail;
	}
	public String getDriverPhone() {
		return driverPhone;
	}
	public void setDriverPhone(String driverPhone) {
		this.driverPhone = driverPhone;
	}
	public String getDriverPassword() {
		return driverPassword;
	}
	public void setDriverPassword(String driverPassword) {
		this.driverPassword = driverPassword;
	}
	public String getVehicleModel() {
		return vehicleModel;
	}
	public void setVehicleModel(String vehicleModel) {
		this.vehicleModel = vehicleModel;
	}
	public String getVehicleNumber() {
		return vehicleNumber;
	}
	public void setVehicleNumber(String vehicleNumber) {
		this.vehicleNumber = vehicleNumber;
	}
	public String getLicense() {
		return license;
	}
	public void setLicense(String license) {
		this.license = license;
	}
	public String getRcbook() {
		return rcbook;
	}
	public void setRcbook(String rcbook) {
		this.rcbook = rcbook;
	}
	
}
