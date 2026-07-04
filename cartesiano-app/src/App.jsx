import React, { useState } from 'react';
import Formulario from './components/formulario';
import Resultado from './components/resultado';

function App() {
  // Estado inicial de las coordenadas en 0
  const [puntos, setPuntos] = useState({
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0
  });

  return (
    <div style={{ backgroundColor: '#f4f6f7', minHeight: '100vh', padding: '20px', boxSizing: 'border-box' }}>
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '40px auto', padding: '20px', borderRadius: '15px', backgroundColor: '#fff', boxShadow: '0px 4px 15px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '5px' }}>Plano Cartesiano</h1>
        <p style={{ textAlign: 'center', color: '#7f8c8d', marginTop: 0, marginBottom: '20px' }}>Cálculos entre dos puntos</p>
        <hr style={{ border: '0', height: '1px', background: '#ccc', marginBottom: '20px' }} />
        
        {/* CORREGIDO: Ahora inician con Mayúscula para que React los reconozca como componentes */}
        <Formulario puntos={puntos} setPuntos={setPuntos} />
        
        <Resultado puntos={puntos} />
      </div>
    </div>
  );
}

export default App;