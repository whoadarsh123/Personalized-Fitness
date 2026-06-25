package com.example.Project1.JWT;

import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class jwtUtil {
    private final SecretKey SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256);
    private final long EXPIRE_TIME = 8640000;

    public String generateToken(String email)
    {
        return Jwts.builder()
        .subject(email).issuedAt(new Date(System.currentTimeMillis()))
        .expiration(new Date(System.currentTimeMillis()+EXPIRE_TIME))
        .signWith(SECRET_KEY)
        .compact();
    }
}
