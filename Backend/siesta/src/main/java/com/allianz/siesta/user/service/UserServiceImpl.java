//package com.allianz.siesta.user.service;
//
//import com.allianz.siesta.task.Task;
//import com.allianz.siesta.task.TaskRequest;
//import com.allianz.siesta.user.User;
//import com.allianz.siesta.user.UserRepository;
//import com.allianz.siesta.user.UserRequest;
//import com.allianz.siesta.user.UserResponse;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.Date;
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class UserServiceImpl implements UserService {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Override
//    public User saveUser(UserRequest userRequest) {
//        User user = userRequest.userRequest();
//        return userRepository.save(user);
//    }
//
//    @Override
//    public Iterable<User> getAllUsers(){
//        return userRepository.findAll();
//    }
//
//    @Override
//    public Iterable<UserResponse> getAllAssignees() {
//        List<UserResponse> userResponseList = new ArrayList<>();
//        Iterable<User> users = userRepository.findAll();
//        for (User user : users){
//            String assignee = user.getFirstName() + " " + user.getLastName();
//            UserResponse userResponse = new UserResponse(
//                    user.getId(),
//                    assignee
//            );
//            userResponseList.add(userResponse);
//        }
//        return userResponseList;
//    }
//
//    @Override
//    public Optional<User> findUserById(Long id){
//        return userRepository.findById(id);
//    }
//}
