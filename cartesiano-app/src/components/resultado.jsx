import React from 'react';

export default function Resultado({ puntos }) {
  const { x1, y1, x2, y2 } = puntos;

  // 1. Distancia entre dos puntos
  const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)).toFixed(2);

  // 2. Punto intermedio
  const medioX = ((x1 + x2) / 2).toFixed(2);
  const medioY = ((y1 + y2) / 2).toFixed(2);
  
  // 3. Pendiente de la recta
  const den = x2 - x1;
  const num = y2 - y1;
  const pendiente = den === 0 ? 'Indefinida (Línea vertical)' : (num / den).toFixed(2);

  return (
    <div style={{ border: '2px solid #27ae60', padding: '20px', borderRadius: '12px', backgroundColor: '#ebf5fb', color: '#2c3e50' }}>
      <h3 style={{ marginTop: 0, color: '#27ae60' }}>Resultados de los Cálculos</h3>
      <p style={{ fontSize: '16px' }}><strong>Distancia entre los puntos:</strong> {distancia}</p>
      <p style={{ fontSize: '16px' }}><strong>Punto intermedio (Medio):</strong> M = ({medioX}, {medioY})</p>
      <p style={{ fontSize: '16px' }}><strong>Pendiente de la recta (m):</strong> {pendiente}</p>
    </div>
  );
}