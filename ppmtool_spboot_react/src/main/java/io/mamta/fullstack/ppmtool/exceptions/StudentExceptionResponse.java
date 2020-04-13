package io.mamta.fullstack.ppmtool.exceptions;

public class ProjectExceptionResponse {
    private String projectIdentifier;

    public String getProjectIdentifier() {
        return projectIdentifier;
    }

    public void setProjectIdentifier(String projectIdentifier) {
        this.projectIdentifier = projectIdentifier;
    }

    public  ProjectExceptionResponse(String projectIdentifier) {
        this.projectIdentifier = projectIdentifier;
    }
}
