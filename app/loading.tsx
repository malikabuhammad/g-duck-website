export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#FFD600'
    }}>
      <div 
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#000',
        }}
        className="loading-spinner"
      ></div>
    </div>
  )
}

