package untitled.common;

import io.cucumber.spring.CucumberContextConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import untitled.BoundedContext465Application;

@CucumberContextConfiguration
@SpringBootTest(classes = { BoundedContext465Application.class })
public class CucumberSpingConfiguration {}
