package com.allianz.siesta.task;

import com.allianz.siesta.task.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @CrossOrigin
    @GetMapping(path = "/v1/task")
    public List<TaskResponse> findAllTasks(){
        List<TaskResponse> taskResponsesList = new ArrayList<>();
        Iterable<Task> tasks = taskService.findAllTasks();
        for (Task task : tasks) {
            taskResponsesList.add(
                    new TaskResponse(
                            task.getTaskName(),
                            task.getTaskDescription(),
                            task.getEstimateTime(),
                            task.getActualTime(),
                            task.getReferenceLink(),
                            task.getTaskDate(),
                            task.getCreateDate(),
                            task.getCompletedStatus()
                    )
            );
        }
        return taskResponsesList;
    }

    @CrossOrigin
    @PostMapping(value = "/v1/addtask")
    public Task saveAccount(@RequestBody TaskRequest taskRequest) {
        return taskService.saveTask(taskRequest);}

}
