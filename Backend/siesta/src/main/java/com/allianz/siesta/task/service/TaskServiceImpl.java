package com.allianz.siesta.task.service;


import com.allianz.siesta.task.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskRepository taskRepository;


    @Override
    public Task saveTask(TaskRequest taskRequest) {
    	Task task = taskRequest.taskRequest();
    	task.setCreateDate(new Date());
//    	task.setTaskDate(new Date());
    	return taskRepository.save(task);
    }

    @Override
    public Iterable<TaskResponse> getAllTasks() {
        List<TaskResponse> taskResponsesList = new ArrayList<>();
        Iterable<Task> tasks = taskRepository.findAll();
        for  (Task task : tasks) {
            TaskResponse taskResponse = new TaskResponse(
                    task.getTaskName(),
                    task.getTaskDescription(),
                    task.getEstimateTime(),
                    task.getActualTime(),
                    task.getBillableTime(),
                    task.getReferenceLink(),
                    task.getTaskDate(),
                    task.getCreateDate(),
                    task.getCompletedStatus()
                    );
            if (task.getUser() != null) {
                String assignee = task.getUser().getFirstName() + " " + task.getUser().getLastName();
                taskResponse.setAssignee(assignee);
            }
            if (task.getProject() != null) {
                taskResponse.setProjectName(task.getProject().getProjectName());
            }

                taskResponsesList.add(taskResponse);
        }
        return taskResponsesList;
    }

}