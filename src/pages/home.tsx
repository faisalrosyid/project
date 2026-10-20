import { Button } from "@zarr20/rakit-ui"

export function Home() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>Home Page</h1>
      <p style={{ marginTop: '10px' }}>Ini udah pake struktur pages Sal</p>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <Button>Get Started</Button>
        <Button>Learn More</Button>
      </div>
    </div>
  )
}