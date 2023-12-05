import { LocalStorageController } from "@/utils/PersistanceController";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

function MainLayout() {
  const persistance = new LocalStorageController();
  useEffect(() => {
    const asciiArt = `
      _______ _     _           _             
     |__   __| |   (_)         (_)            
        | |  | |__  _  ___ _ __ _ _ __   __ _ 
        | |  | '_ \\| |/ _ \\ '__| | '_ \\ / _\` |
        | |  | | | | |  __/ |  | | | | | (_| |
        |_|  |_| |_|_|\\___|_|  |_|_| |_|\\__, |
                                         __/ |
                                        |___/  
    `;
    console.log(asciiArt);

    const colorScheme = persistance.load("color-scheme");
    if (colorScheme === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, []);
  return (
    <main>
      {/* Render the child routes */}
      <Outlet />
    </main>
  );
}

export default MainLayout;
