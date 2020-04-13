package io.mamta.fullstack.ppmtool.exceptions;

public class ProjectException {
    private String projectIdentifier;

    public  ProjectExceptionResponse(String projectIdentifier) {
        this.projectIdentifier = projectIdentifier;
    }
}
