import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* Este contenido se mostrará en las rutas que usen <App /> como elemento */}
      <h1>Contenido Principal</h1>
      <p>Esta es una página genérica</p>
      <FavouritesProvider>
        <CasesPage />
      </FavouritesProvider>
    </div>
  );
}

export default App;
