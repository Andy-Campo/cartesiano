import React from 'react';

export default function Formulario({ puntos, setPuntos }) {
  
  // Detecta cuando el usuario escribe o cambia el número
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Si el usuario borra todo, dejamos un string vacío temporalmente
    const valorNumerico = value === '' ? '' : parseFloat(value);

    setPuntos({
      ...puntos,
      [name]: valorNumerico
    });
  };

  // NUEVO: Detecta cuando haces CLIC dentro de la caja de texto (Focus)
  const handleFocus = (e) => {
    const { name, value } = e.target;
    // Si el valor actual es un cero (número o texto), lo limpia de inmediato
    if (parseFloat(value) === 0) {
      setPuntos({
        ...puntos,
        [name]: ''
      });
    }
  };

  return (
    <div style={{ border: '2px solid #34495e', padding: '20px', borderRadius: '12px', marginBottom: '20px', backgroundColor: '#fff' }}>
      <h3 style={{ marginTop: 0, color: '#2c3e50' }}>Ingreso de Coordenadas</h3>
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
        
        {/* Punto A */}
        <div style={{ flex: '1', minWidth: '140px' }}>
          <h4 style={{ color: '#2980b9', marginBottom: '10px' }}>Punto A (x₁, y₁)</h4>
          <label style={{ display: 'block', marginBottom: '8px' }}>
            <strong>x₁: </strong>
            <input 
              type="number" 
              name="x1" 
              value={puntos.x1} 
              onChange={handleChange} 
              onFocus={handleFocus} 
              style={{ width: '100%', padding: '6px', borderRadius: '4px', border: '1px solid #ccc' }} 
            />
          </label>
          <label style={{ display: 'block' }}>
            <strong>y₁: </strong>
            <input 
              type="number" 
              name="y1" 
              value={puntos.y1} 
              onChange={handleChange} 
              onFocus={handleFocus} 
              style={{ width: '100%', padding: '6px', borderRadius: '4px', border: '1px solid #ccc' }} 
            />
          </label>
        </div>
        
        {/* Punto B */}
        <div style={{ flex: '1', minWidth: '140px' }}>
          <h4 style={{ color: '#e74c3c', marginBottom: '10px' }}>Punto B (x₂, y₂)</h4>
          <label style={{ display: 'block', marginBottom: '8px' }}>
            <strong>x₂: </strong>
            <input 
              type="number" 
              name="x2" 
              value={puntos.x2} 
              onChange={handleChange} 
              onFocus={handleFocus} 
              style={{ width: '100%', padding: '6px', borderRadius: '4px', border: '1px solid #ccc' }} 
            />
          </label>
          <label style={{ display: 'block' }}>
            <strong>y₂: </strong>
            <input 
              type="number" 
              name="y2" 
              value={puntos.y2} 
              onChange={handleChange} 
              onFocus={handleFocus} 
              style={{ width: '100%', padding: '6px', borderRadius: '4px', border: '1px solid #ccc' }} 
            />
          </label>
        </div>

      </div>
    </div>
  );
}