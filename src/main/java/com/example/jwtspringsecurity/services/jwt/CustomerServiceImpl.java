package com.example.jwtspringsecurity.services.jwt;

import com.example.jwtspringsecurity.enities.Customer;
import com.example.jwtspringsecurity.repositories.CustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Collections;
import java.util.Optional;

@Service
public class CustomerServiceImpl implements UserDetailsService {
    @Autowired
    private CustomerRepo customerRepo;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        // viết logic để kế nối với khách hàng trong db
        Customer customer = customerRepo.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("Email không tồn tại: " + email));
        return new User(customer.getEmail(), customer.getPassword(), Collections.emptyList());
    }
}
