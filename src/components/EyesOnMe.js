import React from 'react';

function EyesOnMe() {
  const handleFocus = () => {
    console.log('Good!');
  };

  const handleBlur = () => {
    console.log('Hey! Eyes on me!');
  };

  return (
    <div style={styles.container}>
      <button
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={styles.button}
      >
        Eyes on me
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    backgroundColor: '#f4f4f4',
  },
  button: {
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default EyesOnMe;
