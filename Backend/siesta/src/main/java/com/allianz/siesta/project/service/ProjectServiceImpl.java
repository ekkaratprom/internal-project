//package com.allianz.siesta.project.service;
//
//import com.allianz.siesta.project.Project;
//import com.allianz.siesta.project.ProjectRepository;
//import com.allianz.siesta.project.ProjectRequest;
//import com.allianz.siesta.project.ProjectResponse;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Service
//public class ProjectServiceImpl implements ProjectService {
//
//    @Autowired
//    private ProjectRepository projectRepository;
//
//    @Override
//    public Project saveProject(ProjectRequest projectRequest){
//        Project project = projectRequest.projectRequest();
//        return projectRepository.save(project);
//    }
//
//    @Override
//    public Iterable<ProjectResponse> getAllProjects(){
//        List<ProjectResponse> projectResponseList = new ArrayList<>();
//        Iterable<Project> projects = projectRepository.findAll();
//        for (Project project : projects){
//            ProjectResponse projectResponse = new ProjectResponse(
//                    project.getId(),
//                    project.getProjectName()
//            );
//            projectResponseList.add(projectResponse);
//        }
//        return projectResponseList;
//    }
//}
