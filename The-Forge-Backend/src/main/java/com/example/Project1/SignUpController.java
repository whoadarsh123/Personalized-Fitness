package com.example.Project1;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Project1.JWT.jwtUtil;
import com.example.Project1.Service.UserSignUpService;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000/")
public class SignUpController {

    private final UserSignUpService userSignUpService;

    @Autowired
    private jwtUtil jwtUtil;
    
    @Autowired
    public SignUpController(UserSignUpService userSignUpService)
    {
        this.userSignUpService = userSignUpService;
    }
    
    @PostMapping("/signup")
    public ResponseEntity<?> signUpUser(@RequestBody UserSignUp request)
    {
        if(request.getName() == null || request.getEmail() == null || request.getPassword() == null)
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("message","All Field Required"));
        }
       String result = userSignUpService.registerUser(request);
       
        if(result.contains("Error"))
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("message", result));
        }
        String token = jwtUtil.generateToken(request.getEmail());
        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of("message", result, "token", token));
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signInUser(@RequestBody UserSignUp LogInRequest)
    {
        if(LogInRequest.getEmail() == null || LogInRequest.getPassword() == null)
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("message"," Email and PassWord Required"));
        }

        String status = userSignUpService.LogInUser(LogInRequest.getEmail(), LogInRequest.getPassword());

        if(status.startsWith("Error"))
        {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message",status));
        }
        else
        {
            return ResponseEntity.status(HttpStatus.OK).body(Map.of("message", status));
        }
    }
}
