package com.allianz.siesta.project;

import com.allianz.siesta.project.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @CrossOrigin
    @PostMapping (value = "/v1/addProject")
    public Project addProject(@RequestBody ProjectRequest projectRequest){
        return projectService.saveProject(projectRequest);
    }

    @CrossOrigin
    @GetMapping (value = "/v1/project")
    public Iterable<ProjectResponse> getAllProjects(){
        return projectService.getAllProjects();
    }
}
