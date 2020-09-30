package com.allianz.siesta.user.service;


import com.allianz.siesta.user.User;
import com.allianz.siesta.user.UserRequest;
import com.allianz.siesta.user.UserResponse;

public interface UserService {

    User saveUser(UserRequest userRequest);

    Iterable<User> getAllUsers();

    Iterable<UserResponse> getAllAssignees();
}
