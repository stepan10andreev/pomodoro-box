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
import { persistor, store } from "./store/store";
import { TaskList } from "./components/TaskList";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { StatisticsPage } from "./pages/StatisticsPage";
import { PersistGate } from "redux-persist/integration/react";
import { SettingsPage } from "./pages/SettingsPage";



function AppComponent() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Header />
            <Routes>
              <Route path="/" element={<MainPage />}/>
              <Route path="/statistics" element={<StatisticsPage />}/>
              <Route path="/settings" element={<SettingsPage />}/>
            </Routes>
          </Layout>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
};

export const App = AppComponent;
