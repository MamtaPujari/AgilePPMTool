package io.mamta.fullstack.ppmtool.services;

import io.mamta.fullstack.ppmtool.domain.Project;
import io.mamta.fullstack.ppmtool.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectClass {
    @Autowired
    private ProjectRepository  projectRepository;

    public void saveOrUpdateProject(Project project) {
        projectRepository.save(project);
    }
}
