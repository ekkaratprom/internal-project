package com.allianz.siesta.user.service;


import com.allianz.siesta.user.User;
import com.allianz.siesta.user.UserRequest;

public interface UserService {

    User saveUser(UserRequest userRequest);
}
