package com.allianz.siesta.user.service;


import com.allianz.siesta.user.User;
import com.allianz.siesta.user.UserRequest;

import java.util.Optional;

public interface UserService {

    User addUser(UserRequest userRequest);

    Iterable<User> getAllUsers();

    Optional<User> findUserById(Long id);
}
