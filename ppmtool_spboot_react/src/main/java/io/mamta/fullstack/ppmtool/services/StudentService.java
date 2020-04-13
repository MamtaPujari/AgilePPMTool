package io.mamta.fullstack.ppmtool.services;

import io.mamta.fullstack.ppmtool.domain.Project;
import io.mamta.fullstack.ppmtool.exceptions.ProjectException;
import io.mamta.fullstack.ppmtool.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository  projectRepository;

    public void saveOrUpdateProject(Project project) {
        try{
            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
            projectRepository.save(project);
        }catch(Exception e){
            throw new ProjectException("Project with projectId:" + project.getProjectIdentifier() + " already exists");
        }
    }

    public Project findProjectByIndentifier(String projectId){
        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());
        if (project == null) {
            throw new ProjectException("Project with projectId=" + projectId + " does not exist)");
        }
        return project;
    }

    public Iterable<Project> findAllProjects(){
        return projectRepository.findAll();
    }

    public void deleteProjectByIdentifier(String projectId){
        Project projectToBeDeleted = projectRepository.findByProjectIdentifier(projectId.toUpperCase());
        if (projectToBeDeleted == null) {
            throw new ProjectException("Project with projectId=" + projectId + " does not exist)");
        }
        projectRepository.deleteByProjectIdentifier(projectId.toUpperCase());

    }
}
