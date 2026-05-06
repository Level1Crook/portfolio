/**
 * TaskManager.java
 * 
 * Sample Java program demonstrating OOP principles
 * NC III Java Programming (TESDA Certified)
 * 
 * This is a simple task management system showcasing:
 * - Object-Oriented Programming
 * - Collections (ArrayList)
 * - Encapsulation
 * - Methods and Classes
 */

import java.util.ArrayList;
import java.util.List;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class TaskManager {
    
    // Inner class for Task
    public static class Task {
        private String description;
        private boolean completed;
        private LocalDateTime createdAt;
        private LocalDateTime completedAt;
        
        public Task(String description) {
            this.description = description;
            this.completed = false;
            this.createdAt = LocalDateTime.now();
            this.completedAt = null;
        }
        
        public String getDescription() {
            return description;
        }
        
        public void setDescription(String description) {
            this.description = description;
        }
        
        public boolean isCompleted() {
            return completed;
        }
        
        public void setCompleted(boolean completed) {
            this.completed = completed;
            if (completed) {
                this.completedAt = LocalDateTime.now();
            }
        }
        
        public LocalDateTime getCreatedAt() {
            return createdAt;
        }
        
        public LocalDateTime getCompletedAt() {
            return completedAt;
        }
        
        @Override
        public String toString() {
            String status = completed ? "[✓]" : "[○]";
            return status + " " + description;
        }
    }
    
    // TaskManager fields
    private List<Task> tasks;
    private String projectName;
    
    // Constructor
    public TaskManager(String projectName) {
        this.projectName = projectName;
        this.tasks = new ArrayList<>();
    }
    
    /**
     * Add a new task
     */
    public void addTask(String description) {
        if (description != null && !description.trim().isEmpty()) {
            tasks.add(new Task(description));
            System.out.println("✓ Task added: " + description);
        } else {
            System.out.println("✗ Task description cannot be empty");
        }
    }
    
    /**
     * Mark task as completed
     */
    public void completeTask(int index) {
        if (isValidIndex(index)) {
            Task task = tasks.get(index);
            task.setCompleted(true);
            System.out.println("✓ Task completed: " + task.getDescription());
        } else {
            System.out.println("✗ Invalid task index");
        }
    }
    
    /**
     * Delete a task
     */
    public void deleteTask(int index) {
        if (isValidIndex(index)) {
            Task task = tasks.remove(index);
            System.out.println("✓ Task deleted: " + task.getDescription());
        } else {
            System.out.println("✗ Invalid task index");
        }
    }
    
    /**
     * List all tasks
     */
    public void listAllTasks() {
        if (tasks.isEmpty()) {
            System.out.println("\nNo tasks yet. Add one to get started!");
            return;
        }
        
        System.out.println("\n" + projectName + " - Task List:");
        System.out.println("─".repeat(50));
        for (int i = 0; i < tasks.size(); i++) {
            System.out.println((i + 1) + ". " + tasks.get(i).toString());
        }
        System.out.println("─".repeat(50));
    }
    
    /**
     * Get task count
     */
    public int getTaskCount() {
        return tasks.size();
    }
    
    /**
     * Get completed task count
     */
    public int getCompletedCount() {
        return (int) tasks.stream()
                .filter(Task::isCompleted)
                .count();
    }
    
    /**
     * Get pending task count
     */
    public int getPendingCount() {
        return getTaskCount() - getCompletedCount();
    }
    
    /**
     * Print project statistics
     */
    public void printStatistics() {
        System.out.println("\n📊 Statistics for: " + projectName);
        System.out.println("   Total Tasks: " + getTaskCount());
        System.out.println("   Completed: " + getCompletedCount());
        System.out.println("   Pending: " + getPendingCount());
        
        if (getTaskCount() > 0) {
            int completionPercentage = (getCompletedCount() * 100) / getTaskCount();
            System.out.println("   Progress: " + completionPercentage + "%");
        }
    }
    
    /**
     * Validate index
     */
    private boolean isValidIndex(int index) {
        return index >= 0 && index < tasks.size();
    }
    
    /**
     * Main method for demonstration
     */
    public static void main(String[] args) {
        // Create a new task manager
        TaskManager manager = new TaskManager("Virtual Assistant Daily Tasks");
        
        // Add sample tasks
        manager.addTask("Respond to client emails");
        manager.addTask("Schedule team meetings");
        manager.addTask("Update spreadsheet data");
        manager.addTask("Generate weekly report");
        manager.addTask("Follow up with leads");
        
        // Display tasks
        manager.listAllTasks();
        
        // Complete some tasks
        manager.completeTask(0);
        manager.completeTask(2);
        
        // Display updated list
        manager.listAllTasks();
        
        // Print statistics
        manager.printStatistics();
        
        // Delete a task
        manager.deleteTask(4);
        
        // Final list
        manager.listAllTasks();
        manager.printStatistics();
    }
}
