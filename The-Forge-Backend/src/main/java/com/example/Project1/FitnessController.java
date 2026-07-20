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
@CrossOrigin(origins = "https://personalized-fitness.vercel.app")
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
            return ResponseEntity.status(500).body("Calculation Model Failed" + e.getMessage());
        }
    }

    @PostMapping("/loss")
    public ResponseEntity<?> WeightLossPlan(@RequestBody LossRequest request)
    {
        String LossApiUrl = "http://localhost:8000/api/weightloss";

        RestTemplate template = new RestTemplate();
        try
        {
            Object ResponseFromModel = template.postForObject(LossApiUrl, request, Object.class);
            return ResponseEntity.ok(ResponseFromModel);
        }
        catch (Exception e){
            return ResponseEntity.status(500).body("Calculation Model Failed"+ e.getMessage());
        }
    }
}