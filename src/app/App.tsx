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
import { Provider } from "react-redux";
import { store } from "./store/store";
import { TaskList } from "./components/TaskList";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { StatisticsPage } from "./pages/StatisticsPage";



function AppComponent() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/statistics" element={<StatisticsPage />}/>
          </Routes>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
};

export const App = AppComponent;
