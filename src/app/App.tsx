import React from "react";
import './main.global.css';
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";

function AppComponent() {
  return (
    <Layout>
      <Header />
    </Layout>
  );
};

export const App = AppComponent;
