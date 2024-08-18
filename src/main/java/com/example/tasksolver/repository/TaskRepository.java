package com.example.tasksolver.repository;

import com.example.tasksolver.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
