package com.example.jwtspringsecurity.services;

import com.example.jwtspringsecurity.dto.SignUpRequest;
import com.example.jwtspringsecurity.enities.Customer;
import com.example.jwtspringsecurity.repositories.CustomerRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService{
    private CustomerRepo customerRepo;
    private BCryptPasswordEncoder passwordEncoder;
    @Autowired
    public AuthServiceImpl(CustomerRepo customerRepo, BCryptPasswordEncoder passwordEncoder) {
        this.customerRepo = customerRepo;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public boolean createCusomer(SignUpRequest signUpRequest) {
        // CHECK IF user ALREADY EXISTS
        if(customerRepo.existsByEmail(signUpRequest.getEmail())){
            return false;
        }
        Customer customer = new Customer();
        BeanUtils.copyProperties(signUpRequest, customer); // copy các thuộc tính từ signUpRequest sang customer(phải trùng nhau)
        String hassedPass = passwordEncoder.encode(signUpRequest.getPassword());
        customer.setPassword(hassedPass);
        customerRepo.save(customer);
        return true;
    }
}
