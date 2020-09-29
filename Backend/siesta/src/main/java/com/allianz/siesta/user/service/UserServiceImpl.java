package com.allianz.siesta.user.service;

import com.allianz.siesta.task.Task;
import com.allianz.siesta.task.TaskRequest;
import com.allianz.siesta.user.User;
import com.allianz.siesta.user.UserRepository;
import com.allianz.siesta.user.UserRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User saveUser(UserRequest userRequest) {
        User user = userRequest.userRequest();
//        task.setCreateDate(new Date());
////    	task.setTaskDate(new Date());
        return userRepository.save(user);
    }
}
