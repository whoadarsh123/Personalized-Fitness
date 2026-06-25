package com.example.Project1;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PlanRequestDto{

    private int age;
    private int height;
    private int weight;

   @JsonProperty("diet_type")
   private String diet_type;

   @JsonProperty("workout_location")
   private String workout_location;

}