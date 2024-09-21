import "./index.css";

export default function App() {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="flex items-start justify-center h-screen mt-10">
      <img className="absolute left-10 w-24" 
           src="/logo.png"
           onClick={handlePrint}/>
      <h1 className="font-medium">TECHNOLOGICAL UNIVERSITY OF THE PHILIPPINES</h1>
      <h1 className="absolute top-16 text-sm">Capt. Sabi St, City of Talisay Negros Occidental</h1>
      <div className="absolute right-10 text-sm">
        <h1>F-PCO-12</h1>
        <h1>2</h1>
        <h1>23 Jun 2025</h1>
      </div>
      <div className="absolute top-24 text-base">
        <h1 className="ml-16">OFFICE OF THE COLLEGE DEAN</h1>
        <h1 className="ml-12">College of Engineering Technology</h1>
        <h1 className="ml-4">Computer Engineering Technology Department</h1>
      </div>
      <div className="absolute top-44">
        <h1 className="font-medium underline">PRELIM EXAM</h1>
        <h1 className="text-sm ml-8">(Term)</h1>
      </div>
    </div>
  );
}