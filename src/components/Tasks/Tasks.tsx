"use client";
import TaskStyled from "@/components/Tasks/TaskStyled";

import { useGlobalState } from "@/context/globalProvider";

const Tasks = () => {
  const { theme } = useGlobalState();

  return <TaskStyled theme={theme}>Tasks</TaskStyled>;
};

export default Tasks;
