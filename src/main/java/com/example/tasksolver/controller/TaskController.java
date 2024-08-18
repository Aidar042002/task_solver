package com.example.tasksolver.controller;

import com.example.tasksolver.entity.Task;
import com.example.tasksolver.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/task")
@CrossOrigin(origins = "http://localhost:3000")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping
    public ResponseEntity<?> createTask(@RequestBody Task task){
        try {
            Task newTask = new Task();
            newTask.setTheme(task.getTheme());
            newTask.setQuestion(task.getQuestion());
            newTask.setAnswer(task.getAnswer());
            taskService.createTask(newTask);

            return ResponseEntity.ok("task save");
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Exception error");
        }
    }

    @GetMapping
    public ResponseEntity<?> getAllTasks(){
        try {

            List<Task> tasks = taskService.getAllTasks();
            return ResponseEntity.ok(tasks);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Exception error");
        }
    }

}
