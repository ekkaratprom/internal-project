package com.allianz.siesta.task.service;

import com.allianz.siesta.task.Task;
import com.allianz.siesta.task.TaskRequest;

public interface TaskService {

    Iterable<Task> findAllTasks();

//    Task saveTask(TaskRequest taskRequest);
}
