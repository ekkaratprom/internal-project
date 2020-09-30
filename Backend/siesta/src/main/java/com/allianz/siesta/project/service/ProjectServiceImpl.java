package com.allianz.siesta.project.service;

import com.allianz.siesta.project.Project;
import com.allianz.siesta.project.ProjectRepository;
import com.allianz.siesta.project.ProjectRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Override
    public Project saveProject(ProjectRequest projectRequest){
        Project project = projectRequest.projectRequest();
        return projectRepository.save(project);
    }
}
