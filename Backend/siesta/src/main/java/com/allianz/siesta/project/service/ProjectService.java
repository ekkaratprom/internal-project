package com.allianz.siesta.project.service;

import com.allianz.siesta.project.Project;
import com.allianz.siesta.project.ProjectRequest;
import com.allianz.siesta.project.ProjectResponse;

public interface ProjectService {

    Project saveProject(ProjectRequest projectRequest);

    Iterable<ProjectResponse> getAllProjects();
}
