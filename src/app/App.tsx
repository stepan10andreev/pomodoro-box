import React from "react";
import './main.global.css';
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { AppInstruction } from "./components/AppInstruction";
import { TaskForm } from "./components/TaskForm";
import { TaskItem } from "./components/TaskList/TaskItem";
import { LeftContentWrapper } from "./components/Content/LeftContentWrapper";
import { TimerContainer } from "./components/TimerContainer";
import { TimerTask } from "./components/TimerContainer/TimerTask";
import { Timer } from "./components/TimerContainer/Timer";

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
        <TimerContainer>
          <TimerTask />
          <Timer />
        </TimerContainer>
      </Content>
    </Layout>
  );
};

export const App = AppComponent;
