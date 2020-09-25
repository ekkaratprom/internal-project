package com.allianz.siesta.task.service;

import com.allianz.siesta.task.Task;
import com.allianz.siesta.task.TaskRequest;
import com.allianz.siesta.task.TaskResponse;

public interface TaskService {


    Task saveTask(TaskRequest taskRequest);

    Iterable<TaskResponse> getAllTasks();

}
