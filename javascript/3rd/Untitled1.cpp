using System;
using System.Collections.Generic;

public class TaskManager
{
    private List<string> tasks = new List<string>();
    private List<bool> taskStatus = new List<bool>();

    public void AddTask(string task)
    {
        tasks.Add(task);
        taskStatus.Add(false);
        Console.WriteLine("G�rev eklendi: " + task);
    }

    public void ShowTasks()
    {
        Console.WriteLine("Mevcut G�revler:");
        for (int i = 0; i < tasks.Count; i++)
        {
            string status = taskStatus[i] ? "[Tamamland�]" : "[Bekliyor]";
            Console.WriteLine($"{i + 1}. {status} {tasks[i]}");
        }
    }

    public void RemoveTask(int index)
    {
        if (index >= 0 && index < tasks.Count)
        {
            Console.WriteLine($"G�rev silindi: {tasks[index]}");
            tasks.RemoveAt(index);
            taskStatus.RemoveAt(index);
        }
    }

    public void UpdateTask(int index, string newTask)
    {
        if (index >= 0 && index < tasks.Count)
        {
            Console.WriteLine($"G�rev g�ncellendi: {tasks[index]} -> {newTask}");
            tasks[index] = newTask;
        }
    }

    public void MarkComplete(int index)
    {
        if (index >= 0 && index < tasks.Count)
        {
            taskStatus[index] = true;
            Console.WriteLine($"G�rev tamamland�: {tasks[index]}");
        }
    }
}
