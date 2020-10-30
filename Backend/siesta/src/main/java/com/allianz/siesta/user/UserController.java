package com.allianz.siesta.user;

import com.allianz.siesta.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(value = "/api")
public class UserController {


    @Autowired
    private UserService userService;

    @CrossOrigin
    @PostMapping(value = "/v2/addUser")
    public User addUser(@RequestBody UserRequest userRequest){
        return userService.addUser(userRequest);
    }

    @CrossOrigin
    @GetMapping(value = "/v1/user")
    public @ResponseBody Iterable<User> getAllUsers(){
        return userService.getAllUsers();
    }


    @CrossOrigin
    @GetMapping(value = "/v1/user/{id}")
    public Optional<User> findUserById(@PathVariable (value = "id") Long id){
        return userService.findUserById(id);
    }
}
