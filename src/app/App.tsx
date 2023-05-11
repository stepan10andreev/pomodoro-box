import React from "react";
import './main.global.css';
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { AppInstruction } from "./components/AppInstruction";
import { TaskForm } from "./components/TaskForm";
import { TaskItem } from "./components/TaskList/TaskItem";
import { LeftContentWrapper } from "./components/Content/LeftContentWrapper";
import { TimerСontainer } from "./components/Timer";
import { TimerTask } from "./components/Timer/TimerTask";

function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <LeftContentWrapper>
          <AppInstruction />
          <TaskForm />
          <TaskItem />
        </LeftContentWrapper>
        <TimerСontainer>
          <TimerTask />
        </TimerСontainer>
      </Content>
    </Layout>
  );
};

export const App = AppComponent;
