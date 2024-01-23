export default function ContactInfo({ inletOptions = [] }: { inletOptions: ReadonlyArray<String> }) {
  const inletOption = inletOptions.length > 0 ? inletOptions[0] : {};
  
  return (
    <div className='d-flex flex-column border p-3 '>
        <div>MY NAME</div>
        <div>EMAIL</div>
        <div>GITHUB LINK</div>
        <div>LINKEDID LINK</div>
        <div>ACCESS TO RESUME</div>
    </div>
  );
}
