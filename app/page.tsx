import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-100 to-green-300 p-3">
      {/* Hero Section */}
      <section className="w-full max-w-md flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold text-teal-700 mb-4">Grow Your Indoor Oasis with Plantopia</h1>
        <h2 className="text-xl text-gray-700 mb-8">Your one-stop shop for happy and healthy houseplants.</h2>
        {/* <Image
          src="/hero-image.jpg" // Replace with your hero image path
          alt="Thriving Indoor Plant Jungle"
          width={800}
          height={600}
        /> */}
        <a href="" className="bg-teal-700 text-white px-4 py-2 rounded-md mt-4 hover:bg-teal-600 focus:outline-none">Download Plantopia</a>
      </section>

      {/* Plant Categories Section (replace with your component) */}
      <PlantCategories />  

      {/* Other Sections (Plant of the Week, Testimonials, Social Proof) */}
      {/* ... */}
    </main>
  );
}

function PlantCategories() {
  // Implement your component to display plant category tiles here
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Your plant category tiles with images and links */}
      <div className="plant-card rounded-lg overflow-hidden shadow-md">
    <h2 className="text-xl font-bold mb-2 px-4 py-2 bg-green-500 text-white">Plant Name: Lorem, ipsum.</h2>
    <p className="text-gray-700 mb-2 px-4 py-2">Class: Lorem ipsum dolor sit amet.</p>
    <p className="text-gray-700 mb-2 px-4 py-2">Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ex quisquam quasi quas deserunt at? Molestiae enim maiores inventore porro</p>
</div>
      <div className="plant-card rounded-lg overflow-hidden shadow-md">
    <h2 className="text-xl font-bold mb-2 px-4 py-2 bg-green-500 text-white">Plant Name: Lorem, ipsum.</h2>
    <p className="text-gray-700 mb-2 px-4 py-2">Class: Lorem ipsum dolor sit amet.</p>
    <p className="text-gray-700 mb-2 px-4 py-2">Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ex quisquam quasi quas deserunt at? Molestiae enim maiores inventore porro</p>
</div>
      <div className="plant-card rounded-lg overflow-hidden shadow-md">
    <h2 className="text-xl font-bold mb-2 px-4 py-2 bg-green-500 text-white">Plant Name: Lorem, ipsum.</h2>
    <p className="text-gray-700 mb-2 px-4 py-2">Class: Lorem ipsum dolor sit amet.</p>
    <p className="text-gray-700 mb-2 px-4 py-2">Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ex quisquam quasi quas deserunt at? Molestiae enim maiores inventore porro</p>
</div>
      <div className="plant-card rounded-lg overflow-hidden shadow-md">
    <h2 className="text-xl font-bold mb-2 px-4 py-2 bg-green-500 text-white">Plant Name: Lorem, ipsum.</h2>
    <p className="text-gray-700 mb-2 px-4 py-2">Class: Lorem ipsum dolor sit amet.</p>
    <p className="text-gray-700 mb-2 px-4 py-2">Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ex quisquam quasi quas deserunt at? Molestiae enim maiores inventore porro</p>
</div>
      <div className="plant-card rounded-lg overflow-hidden shadow-md">
    <h2 className="text-xl font-bold mb-2 px-4 py-2 bg-green-500 text-white">Plant Name: Lorem, ipsum.</h2>
    <p className="text-gray-700 mb-2 px-4 py-2">Class: Lorem ipsum dolor sit amet.</p>
    <p className="text-gray-700 mb-2 px-4 py-2">Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ex quisquam quasi quas deserunt at? Molestiae enim maiores inventore porro</p>
</div>
      <div className="plant-card rounded-lg overflow-hidden shadow-md">
    <h2 className="text-xl font-bold mb-2 px-4 py-2 bg-green-500 text-white">Plant Name: Lorem, ipsum.</h2>
    <p className="text-gray-700 mb-2 px-4 py-2">Class: Lorem ipsum dolor sit amet.</p>
    <p className="text-gray-700 mb-2 px-4 py-2">Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ex quisquam quasi quas deserunt at? Molestiae enim maiores inventore porro</p>
</div>
   


    </section>
  );
}
