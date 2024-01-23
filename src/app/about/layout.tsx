export default function HowIBuiltThisLayout({
    children
}: Readonly<{ children: React.ReactNode; }>) {
    return (
      <div className='d-flex flex-column border flex-grow-1 align-items-center justify-content-center p-3'>
          <div>This is the About Layout</div>
          <div className='flex-grow-1 d-flex flex-column justify-content-center p-3'>{ children }</div>
      </div>
    );
  }
