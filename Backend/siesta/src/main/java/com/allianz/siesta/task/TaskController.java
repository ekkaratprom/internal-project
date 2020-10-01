package com.allianz.siesta.task;

import com.allianz.siesta.task.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping(value = "/api")
public class TaskController {

    @Autowired
    private TaskService taskService;


    @CrossOrigin
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value = "/v1/addtask")
    public Task saveTask(@RequestBody TaskRequest taskRequest) {
        return taskService.saveTask(taskRequest);
    }

    @CrossOrigin
    @ResponseStatus(HttpStatus.CREATED)
    @GetMapping(path = "/v2/task")
    @ResponseBody
    public
    Iterable<TaskResponse> getAllTasks() {
        return taskService.getAllTasks();
    }

    @CrossOrigin
    @ResponseStatus(HttpStatus.CREATED)
    @GetMapping(path = "/v2/task/{taskDate}")
    public List<TaskResponse> findTaskByDate(@PathVariable(value = "taskDate") String taskDate){
        return taskService.findTaskByDate(taskDate);
    }


}
