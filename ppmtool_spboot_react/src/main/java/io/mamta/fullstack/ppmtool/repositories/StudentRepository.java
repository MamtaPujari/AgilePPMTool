package io.mamta.fullstack.ppmtool.repositories;

import io.mamta.fullstack.ppmtool.domain.Project;
import org.springframework.data.repository.CrudRepository;

public interface ProjectRepository extends CrudRepository<Project,Long> {

    Project findByProjectIdentifier(String projectIdentifier);
    void deleteByProjectIdentifier(String projectIdentifier);
}
