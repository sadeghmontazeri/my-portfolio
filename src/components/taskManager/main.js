import React, { useEffect, useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import charkh from "../../assets/charkhdande.png";

import AddTask from "./addTask";
import { supabase } from "../../supabaseclient";
export default function Taskmanager() {
  const [activeFilter, setActiveFilter] = useState(false);
  const [addTask, setAddTask] = useState(false);
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const AddTaskFunction = (e) => {
    setAddTask(true);
  };
  // const handleCreateNewTask = (newTask) => {
  //   setTasks((prev) => [newTask, ...prev]);
  // };
  useEffect(
    (e) => {
      console.log(tasks);
    },
    [tasks]
  );
  async function fetchTasks() {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("taskManager")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) {
        console.error("the error massage is:", error.message);
        setTasks([]);
      } else {
        setTasks(data || []);
      }
    } catch (error) {
      console.error(
        "An unexpected error occurred fetching tasks:",
        error.message
      );
      setTasks([]);
    } finally {
      setLoading(false);
    }
  }
  const removeTask = async (taskIdToRemove) => {
    try {
      const { error } = await supabase
        .from("taskManager")
        .delete()
        .eq("id", taskIdToRemove);
      if (error) {
        throw error;
      }
      console.log("Task deleted from Supabase with id:", taskIdToRemove);
    } catch (error) {
      console.error("error is", error.message);
      alert(` ${error.message}خطا در حذف تسک`);
    }
  };

  const filterButtons = [
    { id: "all", label: "my Tasks" },
    { id: "notCompleted", label: "in Progress" },
    { id: "completed", label: "Completed" },
  ];
  const handleCloseAddTask = (e) => {
    setAddTask(false);
  };
  useEffect(() => {
    fetchTasks();
    const tasksSubscription = supabase
      .channel("public:taskManager")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "taskManager",
        },
        (payload) => {
          console.log("supabase change", payload);
          fetchTasks();
        }
      )
      .subscribe();
    return () => {
      supabase.removeChannel(tasksSubscription);
    };
  }, []);
  useEffect(() => {
    if (!loading) {
      // فقط زمانی لاگ کن که لودینگ تمام شده باشد
      console.log("Current tasks in state:", tasks);
    }
  }, [tasks, loading]);
  const handleCreateNewTask = async (newTaskFromChild) => {
    try {
      if (!newTaskFromChild.title || !newTaskFromChild.description) {
        alert("عنوان و توضیحات تسک نمی‌تواند خالی باشد.");
        return;
      }
      const { data, error } = await supabase
        .from("taskManager")
        .insert([
          {
            title: newTaskFromChild.title,
            description: newTaskFromChild.description,
            date: newTaskFromChild.date,
            completed: newTaskFromChild.completed || false,
          },
        ])
        .select();
      if (error) {
        throw error;
      }
      console.log("Task added to Supabase:", data);
    } catch (error) {
      console.error("Error adding task to Supabase:", error.message);
      alert(`خطا در افزودن تسک: ${error.message}`);
    }
  };

  if (addTask) {
    return (
      <AddTask
        onClose={handleCloseAddTask}
        onTaskCreate={handleCreateNewTask}
      />
    );
  } else {
    return (
      <div className="Task flex py-5 px-5 min-h-screen w-full">
        <div className="header flex   w-full flex-col">
          <div className="header-icons  justify-content-around flex w-full">
            <MenuSharpIcon />
            <AccountCircleOutlinedIcon />
          </div>
          <div className="flex justify-around mt-5">
            <div className="greet">
              <h1>Hello Sadegh</h1>
              <p className="text-gray-500">Have a Nice Day</p>
            </div>

            <div className="add">
              <button
                onClick={AddTaskFunction}
                className="bg-[#7B22F1] text-white w-[120px] h-[60px] rounded-3xl!"
              >
                Add tasks
              </button>
            </div>
          </div>
          <div className="buttons justify-content-around flex">
            {filterButtons.map((e) => {
              return (
                <button
                  className={`  focus: w-[120px] rounded-3xl! h-[60px]${
                    e.id == activeFilter ? " bg-white" : null
                  }`}
                  id={e.id}
                  onClick={() => {
                    setActiveFilter(e.id);
                  }}
                  key={e.id}
                >
                  {e.label}
                </button>
              );
            })}
          </div>

          <div className="taskComponents gap-2 w-full place-content-center   px-5 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {tasks.map((task) => {
              return (
                <div
                  key={task.id}
                  className="task-body w-full    py-1 px-2 flex flex-col h-[250px] rounded-2xl! bg-[#7326F2]"
                >
                  <div className="flex relative justify-around  ">
                    <img
                      src={charkh}
                      className="   h-[48px] rounded-[20px]"
                      alt=""
                    />

                    <h3 className="text-white flex-1/4">{task.title}</h3>
                    <DeleteOutlinedIcon
                      onClick={() => {
                        removeTask(task.id);
                      }}
                      className="absolute top-1 right-1 text-white"
                    />
                  </div>
                  <div className="h1 text-white flex-2/4 wrap-normal">
                    <h1>{task.description}</h1>
                  </div>
                  <div className="h3 flex-1/4">
                    <p className="font-extralight  text-white">{task.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
// TaskManagerRealTime941378@ supabase
