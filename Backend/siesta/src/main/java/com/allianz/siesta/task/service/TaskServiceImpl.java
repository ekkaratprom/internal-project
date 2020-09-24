package com.allianz.siesta.task.service;

import com.allianz.siesta.task.Task;
import com.allianz.siesta.task.TaskRepository;
import com.allianz.siesta.task.TaskRequest;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public Iterable<Task> findAllTasks() { return taskRepository.findAll();}

    @Override
    public Task saveTask(TaskRequest taskRequest) {
    	Task task = taskRequest.taskRequest();
    	task.setCreateDate(new Date());
//    	task.setTaskDate(new Date());
    	return taskRepository.save(task);
    }
}