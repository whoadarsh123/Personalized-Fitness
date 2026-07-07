package com.example.Project1;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LossRequest {
   private Integer age;
   private Integer height;
   private Integer weight;
   private String gender;
   private String activity_level;

}
