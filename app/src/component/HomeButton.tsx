import { invoke } from "@tauri-apps/api/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const HomeButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <><div><button
      onClick={() => navigate("/")}
      style={{
        position: "relative", // 고정 위치 설정
        top: "10px",
        left: "10px",
        padding: "10px 15px",
        background: "#f44336",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Home
    </button></div><div><button
      onClick={() => invoke("init")}
      style={{
        position: "relative", // 고정 위치 설정
        top: "10px",
        left: "10px",
        padding: "10px 15px",
        background: "#f44336",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
        init
      </button></div></>
  );
};

export default HomeButton;
