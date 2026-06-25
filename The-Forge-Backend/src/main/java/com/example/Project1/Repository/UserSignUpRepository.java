package com.example.Project1.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Project1.UserSignUp;

@Repository
public interface  UserSignUpRepository extends JpaRepository<UserSignUp, Long> {
    Optional<UserSignUp> findByEmail(String email);
}
