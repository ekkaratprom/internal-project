package com.allianz.siesta.project.service;

import com.allianz.siesta.project.Project;
import com.allianz.siesta.project.ProjectRequest;

public interface ProjectService {

    Project saveProject(ProjectRequest projectRequest);
}
