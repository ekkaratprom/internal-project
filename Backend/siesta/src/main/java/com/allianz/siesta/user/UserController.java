package com.allianz.siesta.user;

import com.allianz.siesta.task.service.TaskService;
import com.allianz.siesta.user.service.UserService;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api")
public class UserController {


    @Autowired
    private UserService userService;

    @CrossOrigin
    @PostMapping(value = "/v1/addUser")
    public User saveUser(@RequestBody UserRequest userRequest){
        return userService.saveUser(userRequest);
    }
}
