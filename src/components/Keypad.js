import React from 'react';

function Keypad() {
  const handleChange = () => {
    console.log('Entering password...');
  };

  const handleButtonClick = (value) => {
    console.log('Dialed:', value);
  };

  return (
    <div style={styles.phoneContainer}>
      <div style={styles.screen}>
        <input
          type="password"
          onChange={handleChange}
          style={styles.input}
          placeholder="Enter password"
        />
      </div>
      <div style={styles.dialPad}>
        {Array.from({ length: 3 }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handleButtonClick(index + 1)}
            style={styles.dialButton}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handleButtonClick(0)}
          style={styles.dialButton}
        >
          0
        </button>
        {Array.from({ length: 3 }, (_, index) => (
          <button
            key={index + 4}
            onClick={() => handleButtonClick(index + 4)}
            style={styles.dialButton}
          >
            {index + 4}
          </button>
        ))}
        <button
          onClick={() => handleButtonClick('*')}
          style={styles.dialButton}
        >
          *
        </button>
        {Array.from({ length: 3 }, (_, index) => (
          <button
            key={index + 7}
            onClick={() => handleButtonClick(index + 7)}
            style={styles.dialButton}
          >
            {index + 7}
          </button>
        ))}
        <button
          onClick={() => handleButtonClick('#')}
          style={styles.dialButton}
        >
          #
        </button>
      </div>
    </div>
  );
}

const styles = {
  phoneContainer: {
    width: '300px',
    height: '500px',
    border: '2px solid #333',
    borderRadius: '20px',
    backgroundColor: '#333',  // Light black background
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    margin: '0 auto',
  },
  screen: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '2px solid #333',
    padding: '10px',
  },
  input: {
    width: '80%',
    padding: '10px',
    fontSize: '16px',
    border: '2px solid #ccc',
    borderRadius: '4px',
    textAlign: 'center',
    backgroundColor: '#222',
    color: 'white',
  },
  dialPad: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    marginTop: '10px',
  },
  dialButton: {
    padding: '15px',
    fontSize: '18px',
    backgroundColor: '#444',  // Darker button background
    color: 'white',  // White text color
    border: '2px solid #222',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
};

export default Keypad;
