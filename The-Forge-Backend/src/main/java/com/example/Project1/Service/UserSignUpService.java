package com.example.Project1.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.Project1.Repository.UserSignUpRepository;
import com.example.Project1.UserSignUp;

@Service
public class UserSignUpService {

    private final UserSignUpRepository userSignUpRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserSignUpService(UserSignUpRepository userSignUpRepository, PasswordEncoder passwordEncoder)
    {
        this.userSignUpRepository = userSignUpRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public String registerUser(UserSignUp user)
    {
        if(userSignUpRepository.findByEmail(user.getEmail()).isPresent())
        {
            return "Error Email Already Registered";
        }
        else
        {

            String encriptedpass = passwordEncoder.encode(user.getPassword());
    
            user.setPassword(encriptedpass);
            
            userSignUpRepository.save(user);
    
            return "Registration Successful";
        }
    }

    public String LogInUser(String email , String Password)
    {
        Optional<UserSignUp> UserOptional = userSignUpRepository.findByEmail(email);

        if(UserOptional.isEmpty())
        {
            return " Error: email not registered";
        }

        UserSignUp user = UserOptional.get();

        boolean isPasswordCorrect = passwordEncoder.matches(Password, user.getPassword());

        if(isPasswordCorrect)
        {
            return " Welcome "+user.getName();
        }
        else{
            return " Invalid Password";
        }
    }
}
