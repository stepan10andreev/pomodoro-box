import React from "react";
import './main.global.css';
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { AppInstruction } from "./components/AppInstruction";
import { TaskForm } from "./components/TaskForm";
import { TaskItem } from "./components/TaskList/TaskItem";
import { LeftContentWrapper } from "./components/Content/LeftContentWrapper";

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
      </Content>
    </Layout>
  );
};

export const App = AppComponent;
