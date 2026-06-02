"use client";

import { useState } from "react";
import { Search, Mail, Download, ArrowLeftRight, Check, X } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  form: string;
  therCat: string;
  desc: string;
  image: string;
}

export default function Products() {
  const [activeCat, setActiveCat] = useState("all");
  const [searchVal, setSearchVal] = useState("");
  const [comparedProducts, setComparedProducts] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [compareModalOpen, setCompareModalOpen] = useState(false);
  const [inquirySuccess, setInquirySuccess] = useState(false);

  const productsDatabase: Product[] = [
    { id: "aerobon", name: "Aerobon-DM Tablet", category: "respiratory", form: "Tablets", therCat: "Respiratory Care", desc: "Montelukast & Levocetirizine compound for treatment of chronic asthma, seasonal allergic rhinitis, and general respiratory congestion.", image: "💊" },
    { id: "calbritta", name: "Calbritta-Max Capsule", category: "nutritional", form: "Capsules", therCat: "Calcium & Vitamin D", desc: "Bone health supplement containing high absorption Calcium, Calcitriol, Zinc, and Magnesium minerals to support joint density.", image: "🥛" },
    { id: "becofol", name: "Becofol Capsules", category: "nutritional", form: "Capsules", therCat: "Nutritional / B-Complex", desc: "B-complex therapeutic formula fortified with folic acid, vitamin C, and zinc for nutritional deficiency recovery.", image: "🍀" },
    { id: "esmyle", name: "Esmyle-D Capsule", category: "digestive", form: "Capsules", therCat: "Gastrointestinal Care", desc: "Sustained-release Esomeprazole and Domperidone capsule. Restores digestive comfort by managing severe acid reflux.", image: "🧪" },
    { id: "livlite", name: "Livlite-Gold Syrup", category: "digestive", form: "Syrups & Liquids", therCat: "Hepatic / Liver Care", desc: "Liver tonic formulated with Silymarin, L-Ornithine L-Aspartate, and essential B-Complex vitamins. Promotes liver detoxification.", image: "🍶" },
    { id: "rosuace", name: "Rosuace-ASP Capsule", category: "cardio", form: "Capsules", therCat: "Cardiovascular Care", desc: "Dual cardiovascular protection compound combining Rosuvastatin and Aspirin. Controls lipid cholesterol levels.", image: "❤️" },
    { id: "carbofol", name: "Carbofol-Z Capsule", category: "nutritional", form: "Capsules", therCat: "Nutritional / Iron Supplement", desc: "Carbonyl Iron, Folic Acid, and Zinc supplement for prevention of nutritional anemia and red blood cell synthesis.", image: "🧬" },
    { id: "orzyme", name: "Orzyme-Plus Tablet", category: "digestive", form: "Tablets", therCat: "Digestive Enzymes", desc: "Active digestive combination of Activated Charcoal, Pancreatin, and Simethicone. Relieves flatulence and bloating.", image: "🥣" },
    { id: "orzyme_syr", name: "Orzyme Syrup", category: "digestive", form: "Syrups & Liquids", therCat: "Digestive Enzymes", desc: "Fungal Diastase and Pepsin liquid suspension. Helps metabolize starches and proteins to treat loss of appetite.", image: "🧉" },
    { id: "kamfart", name: "Kamfart-D Syrup (SF)", category: "respiratory", form: "Syrups & Liquids", therCat: "Cough & Bronchodilator", desc: "Sugar-Free (SF) cough suppressant and bronchodilator liquid syrup. Relieves dry cough and bronchial spasms.", image: "🍃" },
    { id: "mach", name: "Mach 650mg Tablet DT", category: "respiratory", form: "Tablets (Dispersible)", therCat: "Analgesic & Antipyretic", desc: "Rapid action 650mg Paracetamol dispersible tablet. Fast dissolution for prompt management of fever and pain.", image: "⚡" },
    { id: "oxcon", name: "Oxygen Concentrator (10L)", category: "devices", form: "Breathing Equipment", therCat: "Critical Care Device", desc: "Enterprise-grade 10-Liter medical oxygen concentrator. Provides continuous clinical grade 93% ± 3% oxygen purity stream.", image: "🌬️" },
    { id: "neb", name: "Compressor Nebulizer", category: "devices", form: "Medical Diagnostics", therCat: "Critical Care Device", desc: "High-speed heavy-duty aerosol nebulizer system. Converts liquid medication into fine breathable mist.", image: "🩺" },
    { id: "bipap", name: "BiPAP & CPAP Systems", category: "devices", form: "Breathing Equipment", therCat: "Critical Care Device", desc: "Advanced non-invasive positive airway pressure ventilation devices. Provides sleep apnea support.", image: "⚙️" }
  ];

  const categories = [
    { id: "all", label: "All Products" },
    { id: "nutritional", label: "Nutritional & Vitamins" },
    { id: "cardio", label: "Cardiovascular" },
    { id: "digestive", label: "Digestive Care" },
    { id: "respiratory", label: "Respiratory & Pain" },
    { id: "devices", label: "Medical Equipment" }
  ];

  const handleToggleCompare = (id: string) => {
    if (comparedProducts.includes(id)) {
      setComparedProducts(comparedProducts.filter(item => item !== id));
    } else {
      if (comparedProducts.length >= 2) {
        alert("You can compare a maximum of 2 products side-by-side.");
        return;
      }
      setComparedProducts([...comparedProducts, id]);
    }
  };

  const handleDownloadBrochure = (name: string) => {
    alert(`Preparing secure pharmaceutical PDF brochure: [Technical_Specification_${name.replace(/\s+/g, '_')}.pdf]. Check your downloads folder shortly.`);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySuccess(true);
    setTimeout(() => {
      setInquirySuccess(false);
      setSelectedProduct(null);
    }, 2000);
  };

  const filtered = productsDatabase.filter(prod => {
    const matchesCat = activeCat === "all" || prod.category === activeCat;
    const matchesSearch = prod.name.toLowerCase().includes(searchVal.toLowerCase()) || 
                          prod.therCat.toLowerCase().includes(searchVal.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const comparedProdObjects = comparedProducts.map(id => productsDatabase.find(p => p.id === id)).filter(Boolean) as Product[];

  return (
    <section id="products" className="py-12 bg-white dark:bg-slate-950 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-tealaccent-500 uppercase px-3 py-1 bg-tealaccent-50 dark:bg-slate-800 rounded-full">Product Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">Our Pharmaceutical & Medical Catalog</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-brandorange-500 to-tealaccent-500 rounded-full" />
          </div>
          
          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder="Filter by medicine name..." 
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-[#F8FAFC]/50 dark:bg-slate-900/50 text-sm focus:border-brandorange-500 focus:outline-none transition-all"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
          </div>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 border-b border-slate-100 dark:border-slate-800 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeCat === cat.id 
                  ? "bg-brandorange-500 text-white shadow-md shadow-brandorange-500/25" 
                  : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Comparison Bar */}
        {comparedProducts.length > 0 && (
          <div className="glass-card p-4 rounded-2xl border border-slate-200 dark:border-slate-800 mb-6 flex items-center justify-between">
            <div className="flex items-center space-x-3 text-xs">
              <ArrowLeftRight className="text-tealaccent-500 animate-pulse" />
              <span className="font-bold">Compare products ({comparedProducts.length} selected)</span>
            </div>
            <div className="flex space-x-2">
              <button onClick={() => setComparedProducts([])} className="px-4 py-2 text-xs font-semibold text-slate-500">Clear</button>
              <button 
                onClick={() => setCompareModalOpen(true)}
                disabled={comparedProducts.length < 2}
                className="px-5 py-2 bg-tealaccent-500 disabled:opacity-50 text-white rounded-lg text-xs font-bold"
              >
                Compare Now
              </button>
            </div>
          </div>
        )}

        {/* Products Catalog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(prod => {
            const isCompared = comparedProducts.includes(prod.id);
            return (
              <div 
                key={prod.id} 
                className="glass-card p-5 rounded-3xl border border-slate-200/50 dark:border-slate-800 hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-brandorange-50 dark:bg-slate-800 text-2xl flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">{prod.image}</div>
                    <span className="text-[9px] font-bold text-brandorange-500 bg-brandorange-50 dark:bg-slate-800 px-2.5 py-1 rounded-full uppercase tracking-wider">{prod.therCat}</span>
                  </div>
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white group-hover:text-brandorange-500 transition-colors">{prod.name}</h3>
                  <span className="text-[9px] text-slate-400 font-bold block mt-0.5">{prod.form}</span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2.5 leading-relaxed">{prod.desc}</p>
                </div>

                <div className="pt-5 border-t border-slate-100 dark:border-slate-800 mt-5 flex flex-col space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <button 
                      onClick={() => setSelectedProduct(prod)} 
                      className="flex-1 py-2 bg-gradient-to-r from-brandorange-500 to-brandorange-600 text-white text-[10px] font-bold rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center space-x-1"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Inquiry</span>
                    </button>
                    <button 
                      onClick={() => handleToggleCompare(prod.id)} 
                      className={`py-2 px-3 border border-slate-200 dark:border-slate-800 text-[10px] rounded-xl font-bold flex items-center justify-center ${
                        isCompared ? "bg-tealaccent-500 text-white border-tealaccent-500" : "bg-slate-50 dark:bg-slate-800 text-slate-500 hover:bg-slate-100"
                      } transition-all`}
                    >
                      {isCompared ? <Check className="w-3.5 h-3.5" /> : <ArrowLeftRight className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <button 
                    onClick={() => handleDownloadBrochure(prod.name)}
                    className="w-full py-1.5 border border-dashed border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-405 text-[9px] font-bold rounded-lg transition-colors flex items-center justify-center space-x-1"
                  >
                    <Download className="w-3 h-3 text-tealaccent-500" />
                    <span>PDF Technical Brochure</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Product Inquiry Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setSelectedProduct(null)} />
          <div className="glass-card p-6 sm:p-8 rounded-3xl w-full max-w-lg border border-slate-200/50 dark:border-slate-800 shadow-2xl relative z-10 text-left animate-float">
            <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-4 mb-4">
              <div>
                <span className="text-[9px] font-bold text-brandorange-500 uppercase tracking-widest">Inquiry Desk</span>
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white mt-0.5">Inquiry: {selectedProduct.name}</h3>
              </div>
              <button onClick={() => setSelectedProduct(null)} className="p-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400"><X className="w-5.5 h-5.5" /></button>
            </div>
            
            {inquirySuccess ? (
              <div className="py-8 text-center text-softgreen-500 font-bold text-sm">
                Inquiry successfully sent! Form response assay compiled.
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Your Name *</label>
                    <input type="text" required className="w-full p-3 border border-slate-200 dark:border-slate-800 bg-[#F8FAFC]/50 dark:bg-slate-900/50 rounded-xl text-xs focus:outline-none focus:border-brandorange-500" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email Address *</label>
                    <input type="email" required className="w-full p-3 border border-slate-200 dark:border-slate-800 bg-[#F8FAFC]/50 dark:bg-slate-900/50 rounded-xl text-xs focus:outline-none focus:border-brandorange-500" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Target Volume / Requirements *</label>
                  <input type="text" placeholder="e.g. 500 Blisters, Hospital Supplies contract, etc." required className="w-full p-3 border border-slate-200 dark:border-slate-800 bg-[#F8FAFC]/50 dark:bg-slate-900/50 rounded-xl text-xs focus:outline-none focus:border-brandorange-500" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Specific Requirements</label>
                  <textarea placeholder="Write down custom parameters, shelf-life requirements, delivery addresses..." className="w-full p-3 border border-slate-200 dark:border-slate-800 bg-[#F8FAFC]/50 dark:bg-slate-900/50 rounded-xl text-xs focus:outline-none focus:border-brandorange-500 h-20" />
                </div>
                <button type="submit" className="w-full py-3.5 bg-brandorange-500 text-white font-bold rounded-xl text-xs shadow-md shadow-brandorange-500/20 active:scale-95 transition-all">Submit Secure Inquiry</button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Comparison Modal */}
      {compareModalOpen && comparedProdObjects.length >= 2 && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setCompareModalOpen(false)} />
          <div className="glass-card p-6 sm:p-8 rounded-3xl w-full max-w-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-2xl relative z-10 animate-float text-center">
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
              <h3 className="font-extrabold text-lg text-slate-900 dark:text-white flex items-center space-x-2">
                <ArrowLeftRight className="text-brandorange-500 w-5 h-5" />
                <span>Product Comparison Matrix</span>
              </h3>
              <button onClick={() => setCompareModalOpen(false)} className="text-slate-400"><X className="w-5.5 h-5.5" /></button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800">
                    <th className="p-3 font-bold text-slate-400 uppercase">Formulation Specifications</th>
                    <th className="p-3 font-extrabold text-slate-800 dark:text-white">{comparedProdObjects[0].name}</th>
                    <th className="p-3 font-extrabold text-slate-800 dark:text-white">{comparedProdObjects[1].name}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr>
                    <td className="p-3 text-slate-400 font-medium">Therapeutic Category</td>
                    <td className="p-3">{comparedProdObjects[0].therCat}</td>
                    <td className="p-3">{comparedProdObjects[1].therCat}</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-400 font-medium">Core Indication</td>
                    <td className="p-3">{comparedProdObjects[0].desc}</td>
                    <td className="p-3">{comparedProdObjects[1].desc}</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-400 font-medium">Formulation Form</td>
                    <td className="p-3">{comparedProdObjects[0].form}</td>
                    <td className="p-3">{comparedProdObjects[1].form}</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-400 font-medium">Manufacturing Quality Standards</td>
                    <td className="p-3 text-softgreen-500 font-bold uppercase tracking-wider text-[10px]">ISO / GMP Sterile</td>
                    <td className="p-3 text-softgreen-500 font-bold uppercase tracking-wider text-[10px]">ISO / GMP Sterile</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

