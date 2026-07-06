package com.example.Project1;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;


@RestController
@RequestMapping("/api/v1/fitness")
@CrossOrigin(origins = "http://localhost:3000/")
public class FitnessController
{
    @PostMapping("/gain")
    public ResponseEntity<?> GeneratePlan(@RequestBody PlanRequestDto requestDto)
    {
        String pythonApiUrl = "http://localhost:8000/api/planner";

        RestTemplate restTemplate = new RestTemplate();

        try {
            Object responseFromPython = restTemplate.postForObject(pythonApiUrl, requestDto, Object.class);
            return ResponseEntity.ok(responseFromPython);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("could not connect to the python: " + e.getMessage());
        }
    }

    @PostMapping("/loss")
    public ResponseEntity<?> WeightLossPlan(@RequestBody LossRequest request)
    {
        if(request.getAge() > 18)
        {
            return ResponseEntity.ok("wait the backnd code send your data to the python");
        }
        else
        {
            return ResponseEntity.status(500).body("You don't need to Loose Your Weight");
        }
    }
}