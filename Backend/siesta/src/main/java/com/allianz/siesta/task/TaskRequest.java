package com.allianz.siesta.task;

import com.allianz.siesta.project.Project;
import com.allianz.siesta.user.User;
import liquibase.pro.packaged.U;

import java.util.Date;

public class TaskRequest {
    private String taskName;
    private Double estimateTime;
    private Double actualTime;
    private String referenceLink;
    private Date taskDate;
    private Boolean completedStatus;
    private Long userId;
    private Long projectId;


    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public Double getEstimateTime() {
        return estimateTime;
    }

    public void setEstimateTime(Double estimateTime) {
        this.estimateTime = estimateTime;
    }

    public Double getActualTime() {
        return actualTime;
    }

    public void setActualTime(Double actualTime) {
        this.actualTime = actualTime;
    }

    public String getReferenceLink() {
        return referenceLink;
    }

    public void setReferenceLink(String referenceLink) {
        this.referenceLink = referenceLink;
    }

    public Date getTaskDate() {
        return taskDate;
    }

    public void setTaskDate(Date taskDate) {
        this.taskDate = taskDate;
    }

    public Boolean getCompletedStatus() {
        return completedStatus;
    }

    public void setCompletedStatus(Boolean completedStatus) {
        this.completedStatus = completedStatus;
    }
    
    public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Long getProjectId() {
		return projectId;
	}

	public void setProjectId(Long projectId) {
		this.projectId = projectId;
	}

    public Task taskRequest() {
        Task task = new Task();
        task.setTaskName(taskName);
        task.setEstimateTime(estimateTime);
        task.setActualTime(actualTime);
        task.setReferenceLink(referenceLink);
        task.setTaskDate(taskDate);
        task.setCompletedStatus(completedStatus);
        task.setUser(new User(userId));
        task.setProject(new Project(projectId));

        return task;
    }

}
