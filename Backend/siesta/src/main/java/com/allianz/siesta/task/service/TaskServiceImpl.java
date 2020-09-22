package com.allianz.siesta.task.service;

import com.allianz.siesta.task.Task;
import com.allianz.siesta.task.TaskRepository;
import com.allianz.siesta.task.TaskRequest;
import org.springframework.beans.factory.annotation.Autowired;

public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public Iterable<Task> findAllTasks() { return taskRepository.findAll();}

//    @Override
//    public Task saveTask(TaskRequest taskRequest) {return taskRepository.save();}
}
