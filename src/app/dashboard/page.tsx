import Navbar from "@/components/navbar";

const DashboardPage = () => {
  return (
    <main className="min-h-screen bg-slate-200 p-4 md:p-8">
<Navbar />
      <div className="mx-auto max-w-7xl border-4 border-purple-500 p-4  grid grid-cols-1 lg:grid-cols-3">
        <div className="bg-red-600- h-full space-y-4 lg:col-span-2 ">
<div className="bg-amber-400 p-4">
  <section className="bg-blue-400 p-6"> 
    <h1>first section</h1>
  </section>
  </div>
  <div className="bg-amber-400 p-4">
<section className="bg-blue-400 p-6">
  <h1> seconde section</h1>
</section>
</div>
<div className="bg-amber-400 p-4">
<section className="bg-blue-400 p-6">
    <h1> third section</h1>

</section>
</div>
        </div>
         <div className="bg-amber-400 p-4">
         <aside className="bg-blue-400 p-6">
         side one
        </aside>
</div>

        </div>
        
    </main>
  );
};

export default DashboardPage;