package com.allianz.siesta.user;

import com.allianz.siesta.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @CrossOrigin
    @GetMapping(value = "/v1/user")
    public Iterable<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @CrossOrigin
    @GetMapping(value = "/v2/user")
    public Iterable<UserResponse> getAllAssignees() {
        return userService.getAllAssignees();
    }
}
