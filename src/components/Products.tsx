"use client";

import { useState } from "react";
import { Search, ArrowLeftRight, Check, X, MessageSquare } from "lucide-react";

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
  {
    "id": "aerobon_dm",
    "name": "AEROBON-DM TAB",
    "category": "respiratory",
    "form": "Tablets",
    "therCat": "Joint & Pain Care",
    "desc": "Formulated with Diacerin, Glucosamine, and Methylsulfonyl Methane to support joint health, cartilage repair, and relieve chronic osteoarthritis pain.",
    "image": "💊"
  },
  {
    "id": "aerobon_qr",
    "name": "AEROBON-QR TAB",
    "category": "respiratory",
    "form": "Tablets",
    "therCat": "Joint & Pain Care",
    "desc": "Potent combination of Glucosamine, Methylsulfonyl Methane, Rutin, and Quercetin to reduce joint inflammation and support vascular integrity.",
    "image": "💊"
  },
  {
    "id": "actramol",
    "name": "ACTRAMOL TAB",
    "category": "respiratory",
    "form": "Tablets",
    "therCat": "Analgesic & Pain Relief",
    "desc": "Synergistic combination of Tramadol HCL (37.5 mg) and Paracetamol (375 mg) for the management of moderate to severe acute pain.",
    "image": "💊"
  },
  {
    "id": "algieva",
    "name": "ALGIEVA Cap",
    "category": "respiratory",
    "form": "Capsules",
    "therCat": "Anti-inflammatory & Pain Care",
    "desc": "Contains Palmitoylethanolamide (300 mg), Cucumis Melo L Extract (7 mg) providing Superoxide Dismutase (140 units), and Alpha Lipoic Acid (300 mg) for chronic neuropathic pain management.",
    "image": "💊"
  },
  {
    "id": "aqunext",
    "name": "AQUNEXT CAP",
    "category": "respiratory",
    "form": "Capsules",
    "therCat": "Joint & Mobility Care",
    "desc": "Premium mobility formula featuring Aflapin (100 mg), Curqlie (100 mg), Native Collagen (40 mg), and Mobilee Hyaluronate (40 mg) to restore joint flexibility.",
    "image": "💊"
  },
  {
    "id": "bioraft",
    "name": "BIORAFT LIQUID",
    "category": "digestive",
    "form": "Syrups & Liquids",
    "therCat": "Antacid & Anti-Reflux",
    "desc": "Rapid relief suspension containing Sodium Alginate (250 mg), Sodium Bicarbonate (133.5 mg), and Calcium Carbonate (88 mg) to prevent acid reflux and heartburn.",
    "image": "🍶"
  },
  {
    "id": "becofol",
    "name": "BECOFOL CAP.",
    "category": "nutritional",
    "form": "Capsules",
    "therCat": "B-Complex & Probiotics",
    "desc": "B-Complex vitamins fortified with Lactic Acid Bacillus, Vitamin C, and Folic Acid to support gut health and recover from nutritional deficiencies.",
    "image": "🍀"
  },
  {
    "id": "becofol_tm",
    "name": "BECOFOL-TM CAP.",
    "category": "nutritional",
    "form": "Capsules",
    "therCat": "Multivitamins & Antioxidants",
    "desc": "High-potency therapeutic capsule combining Vitamin A (5000 IU), Lycopene (4000 mcg), and essential Multivitamins for comprehensive cell protection.",
    "image": "💊"
  },
  {
    "id": "becofol_pr",
    "name": "BECOFOL-PR CAP.",
    "category": "nutritional",
    "form": "Capsules",
    "therCat": "Pre & Probiotic",
    "desc": "Advanced Pre and Probiotic capsules formulated to restore healthy intestinal microflora, boost immunity, and improve digestion.",
    "image": "🦠"
  },
  {
    "id": "becofol_coq",
    "name": "BECOFOL CoQ Cap",
    "category": "nutritional",
    "form": "Capsules",
    "therCat": "Coenzyme Q10 & Antioxidants",
    "desc": "Premium soft gelatin capsules containing Ubidecarenone (CoQ10) combined with Omega 3 Fatty Acids, Lycopene, and Selenium for cardiovascular and cellular energy support.",
    "image": "💊"
  },
  {
    "id": "calbritta_forte",
    "name": "CALBRITTA-FORTE TAB",
    "category": "nutritional",
    "form": "Tablets",
    "therCat": "Calcium & Amino Acids",
    "desc": "Formulated with L-Arginine, L-Lysine, Zinc, Calcium Citrate, and Vitamin B6 to enhance bone mineralization and calcium absorption.",
    "image": "💊"
  },
  {
    "id": "calbritta_xt",
    "name": "CALBRITTA -XT TAB",
    "category": "nutritional",
    "form": "Tablets",
    "therCat": "Calcium & Bone Health",
    "desc": "Advanced combination of L-Arginine, L-Citrulline, Zinc, Calcium Citrate, and Vitamin B6 to support bone density and muscle wellness.",
    "image": "💊"
  },
  {
    "id": "calbritta_k2",
    "name": "CALBRITTA-K2 CAP",
    "category": "nutritional",
    "form": "Capsules",
    "therCat": "Calcium, D3 & Vitamin K2-7",
    "desc": "Comprehensive soft gelatin formula with Calcium Carbonate, Calcitriol (0.25 mcg), Zinc (7.5 mg), Vitamin B6 (3 mg), Magnesium Oxide (50 mg), Folic Acid (1.5 mg), Methylcobalamin (1500 mcg), and Vitamin K2-7 (50 mcg).",
    "image": "🥛"
  },
  {
    "id": "carbofol_z_tab",
    "name": "CARBOFOL-Z Tab.",
    "category": "nutritional",
    "form": "Tablets",
    "therCat": "Iron & Folic Acid",
    "desc": "Optimal hematinic combination of Ferrous Ascorbate (100 mg) and Folic Acid (1.5 mg) to treat iron-deficiency anemia and boost energy levels.",
    "image": "💊"
  },
  {
    "id": "carbofol_z_syp",
    "name": "CARBOFOL-Z SYP.",
    "category": "nutritional",
    "form": "Syrups & Liquids",
    "therCat": "Hematinic Syrup",
    "desc": "Liquid iron supplement providing Ferrous Ascorbate (30 mg) and Folic Acid (1.5 mg) per 5 ml serving to promote red blood cell synthesis.",
    "image": "🍶"
  },
  {
    "id": "dapafloz_500",
    "name": "DAPAFLOZ MET ER 10/500 TAB",
    "category": "cardio",
    "form": "Tablets",
    "therCat": "Anti-Diabetic Care",
    "desc": "Extended-release combination of Dapagliflozin (10 mg) and Metformin HCL (500 mg) for effective glycemic control in Type 2 Diabetes.",
    "image": "💊"
  },
  {
    "id": "dapafloz_1000",
    "name": "DAPAFLOZ MET ER 10/1000 TAB",
    "category": "cardio",
    "form": "Tablets",
    "therCat": "Anti-Diabetic Care",
    "desc": "High strength extended-release combination of Dapagliflozin (10 mg) and Metformin HCL (1000 mg) for advanced blood glucose management.",
    "image": "💊"
  },
  {
    "id": "dioprot",
    "name": "DIOPROT POWDER",
    "category": "nutritional",
    "form": "Powders & Sachets",
    "therCat": "Protein Supplement",
    "desc": "Premium quality protein powder formulated to support muscle recovery, daily protein requirements, and strength synthesis.",
    "image": "🥛"
  },
  {
    "id": "esmyle_d",
    "name": "ESMYLE-D TAB",
    "category": "digestive",
    "form": "Tablets",
    "therCat": "Antacid & Anti-Emetic",
    "desc": "Balanced formulation of Esomeprazole (20 mg) and Domperidone (10 mg) to treat gastroesophageal reflux disease (GERD) and associated nausea.",
    "image": "💊"
  },
  {
    "id": "ediquit",
    "name": "EDIQUIT TAB",
    "category": "respiratory",
    "form": "Tablets",
    "therCat": "Systemic Enzymes & Wound Healing",
    "desc": "Proteolytic enzyme combination containing Trypsin (72 mg), Chymotrypsin (12 mg), Bromelain (135 mg), and Rutoside Trihydrate (150 mg) to reduce post-surgical edema and inflammation.",
    "image": "💊"
  },
  {
    "id": "ediquit_ds",
    "name": "EDIQUIT -DS TAB",
    "category": "respiratory",
    "form": "Tablets",
    "therCat": "Double Strength Anti-inflammatory",
    "desc": "Double strength enzyme therapy comprising Trypsin (96 mg), Bromelain (180 mg), and Rutoside Trihydrate (200 mg) for resolving deep tissue inflammation and hematomas.",
    "image": "💊"
  },
  {
    "id": "fibrex",
    "name": "FIBREX POWDER",
    "category": "digestive",
    "form": "Powders & Sachets",
    "therCat": "Laxative & Fiber",
    "desc": "Clinically proven combination of Lactitol (10 gm) and Ispaghula Husk (3.5 gm) per serving to relieve chronic constipation and support bowel regularity.",
    "image": "🥛"
  },
  {
    "id": "flurtin_p",
    "name": "FLURTIN P Tab",
    "category": "respiratory",
    "form": "Tablets",
    "therCat": "Analgesic & Muscle Relaxant",
    "desc": "Formulated with Flupirtine (100 mg) and Paracetamol (325 mg) for the management of acute and chronic musculoskeletal pain.",
    "image": "💊"
  },
  {
    "id": "foxy_oz",
    "name": "FOXY-OZ TAB",
    "category": "respiratory",
    "form": "Tablets",
    "therCat": "Antibiotic & Anti-Diarrheal",
    "desc": "Broad-spectrum anti-infective combining Ofloxacin (200 mg) and Ornidazole (500 mg) for mixed gastrointestinal and respiratory bacterial infections.",
    "image": "💊"
  },
  {
    "id": "glution",
    "name": "GLUTION TAB",
    "category": "nutritional",
    "form": "Tablets",
    "therCat": "Skin Health & Antioxidant",
    "desc": "Nutrient blend of L-Glutathione, Alpha Lipoic Acid, Grape Seed Extract, Ascorbic Acid, and Vitamin E to detoxify and promote cellular rejuvenation.",
    "image": "✨"
  },
  {
    "id": "jaical",
    "name": "JAICAL TAB.",
    "category": "nutritional",
    "form": "Tablets",
    "therCat": "Calcium & Mineral Supplement",
    "desc": "Essential daily formula with Calcium Citrate (1000 mg), Vitamin D3 (200 IU), Magnesium (100 mg), and Zinc (4 mg) to support structural bone strength.",
    "image": "💊"
  },
  {
    "id": "jaifix_o",
    "name": "JAIFIX -O Tab",
    "category": "respiratory",
    "form": "Tablets",
    "therCat": "Antibiotic",
    "desc": "Powerful combination of Cefixime (200 mg) and Ofloxacin (200 mg) to treat severe respiratory tract and urinary tract infections.",
    "image": "💊"
  },
  {
    "id": "jaifix_xl",
    "name": "JAIFIX -XL TAB",
    "category": "respiratory",
    "form": "Tablets",
    "therCat": "Antibiotic",
    "desc": "Contains Cefixime (200 mg) for effective treatment of typhoid fever, bronchitis, and acute middle ear infections.",
    "image": "💊"
  },
  {
    "id": "kamfart_syp",
    "name": "KAMFART SYP",
    "category": "respiratory",
    "form": "Syrups & Liquids",
    "therCat": "Cough & Bronchodilator",
    "desc": "Expectorant syrup containing Ambroxol (15 mg), Guaiphenesin (50 mg), Terbutaline (1.25 mg), and Menthol (2.5 mg) in a sorbitol base for mucosal clearance.",
    "image": "🍶"
  },
  {
    "id": "kamfart_d_syp",
    "name": "KAMFART-D SYP",
    "category": "respiratory",
    "form": "Syrups & Liquids",
    "therCat": "Cough Suppressant",
    "desc": "Cough relief formula containing Phenylpropanolamine HCL (12.5 mg), Dextromethorphan HBr (10 mg), Chlorpheniramine Maleate (2 mg), and Menthol (2 mg) per 5 ml.",
    "image": "🍶"
  },
  {
    "id": "livlite_syp",
    "name": "LIVLITE SYP.",
    "category": "digestive",
    "form": "Syrups & Liquids",
    "therCat": "Ayurvedic Liver Care",
    "desc": "Premium Ayurvedic liver care preparation formulated with natural herbs to support digestion, appetite, and hepatic detoxification.",
    "image": "🍶"
  },
  {
    "id": "livlite_plus_syp",
    "name": "LIVLITE PLUS SYP.",
    "category": "digestive",
    "form": "Syrups & Liquids",
    "therCat": "Appetite Stimulant",
    "desc": "Exquisite syrup containing Cyproheptadine (2 mg) and Tricholine Citrate (275 mg) to stimulate appetite and improve weight gain.",
    "image": "🍶"
  },
  {
    "id": "livlite_gold_tab",
    "name": "LIVLITE GOLD TAB.",
    "category": "digestive",
    "form": "Tablets",
    "therCat": "Hepatic Support",
    "desc": "Advanced liver health support combination of Lecithin, Silymarin, Zinc, Amino Acids, and essential vitamins.",
    "image": "💊"
  },
  {
    "id": "loricyte_8",
    "name": "LORICYTE-8 MG",
    "category": "respiratory",
    "form": "Tablets",
    "therCat": "Analgesic & Pain Relief",
    "desc": "Non-steroidal anti-inflammatory tablet containing Lornoxicam (8 mg) for effective relief of osteoarthritis and rheumatoid arthritis pain.",
    "image": "💊"
  },
  {
    "id": "loricyte_p_8",
    "name": "LORICYTE P-8 MG",
    "category": "respiratory",
    "form": "Tablets",
    "therCat": "Analgesic & Pain Relief",
    "desc": "Combination of Lornoxicam (8 mg) and Paracetamol (325 mg) for fast-acting management of acute muscle pain and joint inflammation.",
    "image": "💊"
  },
  {
    "id": "montera_l",
    "name": "MONTERA-L TAB",
    "category": "respiratory",
    "form": "Tablets",
    "therCat": "Anti-Allergic Care",
    "desc": "Standard combination of Montelukast (10 mg) and Levocetirizine (5 mg) for the prevention of asthma, allergic rhinitis, and hives.",
    "image": "💊"
  },
  {
    "id": "montera_ab",
    "name": "MONTERA AB TAB",
    "category": "respiratory",
    "form": "Tablets",
    "therCat": "Bronchodilator & Anti-Allergic",
    "desc": "Sustained-release formulation containing Acebrophylline (200 mg) and Montelukast (10 mg) to treat asthma and COPD.",
    "image": "💊"
  },
  {
    "id": "nervitop_gt",
    "name": "NERVITOP-GT",
    "category": "respiratory",
    "form": "Tablets",
    "therCat": "Neuropathic Pain Relief",
    "desc": "Formulated with Gabapentin (300 mg) and Methylcobalamin (750 mcg) to alleviate neuropathic pain and regenerate damaged nerves.",
    "image": "💊"
  },
  {
    "id": "ocean_d",
    "name": "OCEAN-D CAP.",
    "category": "digestive",
    "form": "Capsules",
    "therCat": "Gastrointestinal Care",
    "desc": "Contains Omeprazole (20 mg) and Domperidone (10 mg) to manage stomach acidity, bloating, and gastroesophageal reflux.",
    "image": "🧪"
  },
  {
    "id": "orgnise_spas",
    "name": "ORGNISE-SPAS TAB.",
    "category": "respiratory",
    "form": "Tablets",
    "therCat": "Anti-Spasmodic",
    "desc": "Formulated with Drotaverine HCL (80 mg) to relieve smooth muscle spasms, abdominal cramping, and kidney/biliary colic.",
    "image": "💊"
  },
  {
    "id": "orgnise_asp",
    "name": "ORGNISE-ASP Tab.",
    "category": "respiratory",
    "form": "Tablets",
    "therCat": "Muscle Care & Anti-inflammatory",
    "desc": "Powerful triple combination of Aceclofenac (100 mg), Paracetamol (325 mg), and Serratiopeptidase (15 mg) to resolve inflammation and edema.",
    "image": "💊"
  },
  {
    "id": "orgnise_p",
    "name": "ORGNISE-P Tab.",
    "category": "respiratory",
    "form": "Tablets",
    "therCat": "Analgesic & Antipyretic",
    "desc": "Standard pain relief tablet combining Aceclofenac (100 mg) and Paracetamol (325 mg) for muscular pain, fever, and headaches.",
    "image": "💊"
  },
  {
    "id": "orgpan_dsr",
    "name": "ORGPAN-DSR Cap.",
    "category": "digestive",
    "form": "Capsules",
    "therCat": "Gastrointestinal Care",
    "desc": "Sustained-release capsule combining Pantoprazole (40 mg) and Domperidone (30 mg) to treat severe acidity and peptic ulcers.",
    "image": "🧪"
  },
  {
    "id": "orzyme_liq",
    "name": "ORZYME LIQ.",
    "category": "digestive",
    "form": "Syrups & Liquids",
    "therCat": "Digestive Enzymes",
    "desc": "Liquid digestive enzymes supplement formulated with Fungal Diastase and Pepsin to aid protein and starch metabolism.",
    "image": "🍶"
  },
  {
    "id": "orzyme_plus_tab",
    "name": "ORZYME PLUS Tab.",
    "category": "digestive",
    "form": "Tablets",
    "therCat": "Digestive & Anti-Flatulent",
    "desc": "Contains Pancreatin (175 mg), Activated Charcoal (50 mg), and Activated Dimethicone (50 mg) for indigestion, intestinal gas, and abdominal comfort.",
    "image": "🥣"
  },
  {
    "id": "pcl_2_tab",
    "name": "PCL-2 TAB",
    "category": "digestive",
    "form": "Tablets",
    "therCat": "Gastrointestinal Motility",
    "desc": "Contains Prucalopride for the treatment of chronic idiopathic constipation by enhancing intestinal transit and bowel movement.",
    "image": "💊"
  },
  {
    "id": "raji_dsr",
    "name": "RAJI-DSR CAP.",
    "category": "digestive",
    "form": "Capsules",
    "therCat": "Gastrointestinal Care",
    "desc": "Sustained-release capsule formulation of Rabeprazole (20 mg) and Domperidone (30 mg) for immediate relief from hyperacidity and GERD.",
    "image": "🧪"
  },
  {
    "id": "reversyn",
    "name": "REVERSYN Tab.",
    "category": "nutritional",
    "form": "Tablets",
    "therCat": "Liver & Immune Support",
    "desc": "A premium phytotherapy blend featuring Withania Somnifera (Ashwagandha), N-Acetylglucosamine, Silymarin (Milk Thistle), Boswellia Serrata, Zingiber Officinale (Ginger), and Curcuma Longa (Turmeric).",
    "image": "🌿"
  },
  {
    "id": "rifast",
    "name": "RIFAST TAB",
    "category": "digestive",
    "form": "Tablets",
    "therCat": "Gastrointestinal Antibiotic",
    "desc": "Contains Rifaximin (400 mg) for the treatment of Irritable Bowel Syndrome with diarrhea (IBS-D) and Hepatic Encephalopathy.",
    "image": "💊"
  },
  {
    "id": "rosuace_asp_10",
    "name": "ROSUACE ASP 10-75 CAP",
    "category": "cardio",
    "form": "Capsules",
    "therCat": "Cardiovascular Care",
    "desc": "Active cardiovascular protection combining Rosuvastatin (10 mg) and Aspirin (75 mg) to regulate cholesterol levels and prevent blood clots.",
    "image": "❤️"
  },
  {
    "id": "rosuace_asp_20",
    "name": "ROSUACE ASP 20-75 CAP",
    "category": "cardio",
    "form": "Capsules",
    "therCat": "Cardiovascular Care",
    "desc": "High strength cardiac combination of Rosuvastatin (20 mg) and Aspirin (75 mg) to manage hyperlipidemia and support artery health.",
    "image": "❤️"
  },
  {
    "id": "sg_ajmo",
    "name": "SG-AJMO Cap.",
    "category": "nutritional",
    "form": "Capsules",
    "therCat": "Anti-inflammatory & Joints",
    "desc": "Herbal anti-inflammatory blend containing Apium Graveolens (250 mg) and Boswellia Serrata (250 mg) to support joint comfort and alleviate arthritis.",
    "image": "🌿"
  },
  {
    "id": "spride",
    "name": "SPRIDE",
    "category": "digestive",
    "form": "Tablets",
    "therCat": "Gastrointestinal Motility",
    "desc": "Contains Levosulpiride (25 mg) to manage diabetic gastroparesis, dyspepsia, and restore gastrointestinal homeostasis.",
    "image": "💊"
  },
  {
    "id": "supipep",
    "name": "SUPIPEP Sachet",
    "category": "nutritional",
    "form": "Powders & Sachets",
    "therCat": "Collagen & Bone Supplement",
    "desc": "Advanced structural supplement containing Collagen Peptide (10 gm), Vitamin D3 (50 IU), Calcium Carbonate (500 mg), and Methylcobalamin (100 mcg) for cartilage vitality.",
    "image": "🥛"
  },
  {
    "id": "tapex_sr_50",
    "name": "TAPEX SR 50",
    "category": "respiratory",
    "form": "Tablets",
    "therCat": "Analgesic & Pain Relief",
    "desc": "Contains Tapentadol (50 mg) in a sustained-release formulation to manage moderate to severe chronic pain.",
    "image": "💊"
  },
  {
    "id": "udibest_300",
    "name": "UDIBEST TAB",
    "category": "digestive",
    "form": "Tablets",
    "therCat": "Hepatobiliary Support",
    "desc": "Contains Ursodeoxycholic Acid (300 mg) to dissolve gallstones and treat primary biliary cholangitis.",
    "image": "💊"
  },
  {
    "id": "vijdec_25",
    "name": "VIJDEC-25 MG",
    "category": "nutritional",
    "form": "Injectables",
    "therCat": "Anabolic Support",
    "desc": "Contains Nandrolone Decanoate (25 mg) injection to treat osteoporosis in postmenopausal women and manage anemia of renal insufficiency.",
    "image": "💉"
  },
  {
    "id": "calbritta_nano",
    "name": "Calbritta Nano Shot",
    "category": "nutritional",
    "form": "Syrups & Liquids",
    "therCat": "Vitamin D3 Shot",
    "desc": "Fast-acting Vitamin D3 oral solution (Cholecalciferol 60,000 IU) to correct severe vitamin D deficiency and support immunity.",
    "image": "🧪"
  },
  {
    "id": "provent",
    "name": "PROVENT CAP",
    "category": "nutritional",
    "form": "Capsules",
    "therCat": "Probiotic Care",
    "desc": "High-density therapeutic probiotic containing Lactobacillus Paracasei GMNL-133 and Lactobacillus Fermentum GM-090 (4 Billion Spores) to boost gut health.",
    "image": "🦠"
  },
  {
    "id": "lolax",
    "name": "LOLAX Sachet",
    "category": "digestive",
    "form": "Powders & Sachets",
    "therCat": "Liver Care",
    "desc": "L-Aspartate L-Ornithine (3 gm per 5 gm sachet) formula to lower blood ammonia levels and promote active liver rejuvenation.",
    "image": "🥛"
  },
  {
    "id": "jaifix_cv",
    "name": "JAIFIX-CV TAB",
    "category": "respiratory",
    "form": "Tablets",
    "therCat": "Antibiotic",
    "desc": "Advanced combination of Cefixime (200 mg) and Potassium Clavulanate (125 mg) to combat beta-lactamase resistant bacterial infections.",
    "image": "💊"
  },
  {
    "id": "udibest_150",
    "name": "UDIBEST-150 TAB",
    "category": "digestive",
    "form": "Tablets",
    "therCat": "Hepatobiliary Support",
    "desc": "Contains Ursodeoxycholic Acid (150 mg) for active gallstone dissolution and management of chronic hepatobiliary disorders.",
    "image": "💊"
  },
  {
    "id": "flowzy",
    "name": "FLOWZY Solution",
    "category": "digestive",
    "form": "Syrups & Liquids",
    "therCat": "Laxative",
    "desc": "Lactulose Solution to treat chronic constipation and portal-systemic encephalopathy by regulating colonic pH.",
    "image": "🍶"
  },
  {
    "id": "nactive",
    "name": "NACTIVE TAB",
    "category": "nutritional",
    "form": "Tablets",
    "therCat": "Antioxidant & Respiratory Support",
    "desc": "Formulated with N-Acetyl-L-Cysteine (150 mg), Taurine (500 mg), Vitamin B12 (2.2 mcg), Vitamin B6 (2.4 mcg), and Folic Acid (176.47 mg) to support cellular glutathione synthesis.",
    "image": "💊"
  },
  {
    "id": "adecyte",
    "name": "ADECYTE TAB",
    "category": "nutritional",
    "form": "Tablets",
    "therCat": "Liver & Mood Support",
    "desc": "Contains Ademetionine (S-Adenosyl-L-Methionine 400 mg) to support liver function, cellular health, and emotional well-being.",
    "image": "💊"
  },
  {
    "id": "ibsacure",
    "name": "IBSACURE Tab",
    "category": "digestive",
    "form": "Tablets",
    "therCat": "Gastrointestinal Care",
    "desc": "Antispasmodic and anxiolytic combination of Chlordiazepoxide (5 mg) and Mebeverine HCL (135 mg) to manage Irritable Bowel Syndrome (IBS).",
    "image": "💊"
  },
  {
    "id": "udiboost",
    "name": "UDIBOOST Sachet",
    "category": "nutritional",
    "form": "Powders & Sachets",
    "therCat": "Amino Acids Support",
    "desc": "Essential branched-chain amino acids sachet featuring L-Leucine (2300 mg), L-Valine (1500 mg), and L-Isoleucine (1200 mg) to support muscle synthesis.",
    "image": "🥛"
  },
  {
    "id": "sg_frac",
    "name": "SG-FRAC Tab",
    "category": "nutritional",
    "form": "Tablets",
    "therCat": "Bone & Joint Support",
    "desc": "Advanced formula combining L-Arginine HCL (250 mg), L-Citrulline (250 mg), Cissus Quadrangularis Extract (250 mg), Collagen Type I, II, III (150 mg), Quercetin (50 mg), L-Glutathione (50 mg), and Boron (1.5 mg) to support bone fracture healing.",
    "image": "🦴"
  },
  {
    "id": "sg_mag",
    "name": "SG-MAG TAB",
    "category": "nutritional",
    "form": "Tablets",
    "therCat": "Mineral Supplement",
    "desc": "Contains Magnesium Bisglycinate (400 mg) for optimal magnesium absorption to support muscle function and nervous system health.",
    "image": "💊"
  }
]

  const categories = [
  {
    "id": "all",
    "label": "All Products"
  },
  {
    "id": "nutritional",
    "label": "Nutritional & Vitamins"
  },
  {
    "id": "cardio",
    "label": "Cardiovascular"
  },
  {
    "id": "digestive",
    "label": "Digestive Care"
  },
  {
    "id": "respiratory",
    "label": "Respiratory & Pain"
  }
]

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
                    <div className="flex flex-col items-end space-y-1.5">
                      <span className="text-[9px] font-bold text-brandorange-500 bg-brandorange-50 dark:bg-slate-800 px-2.5 py-1 rounded-full uppercase tracking-wider">{prod.therCat}</span>
                      {prod.category === "nutritional" ? (
                        <span className="text-[8px] font-extrabold text-softgreen-500 bg-softgreen-50 dark:bg-slate-800 px-2 py-0.5 rounded uppercase tracking-widest border border-softgreen-500/20">Nutraceutical</span>
                      ) : (
                        <span className="text-[8px] font-extrabold text-rose-500 bg-rose-50 dark:bg-slate-800 px-2 py-0.5 rounded uppercase tracking-widest border border-rose-500/20">Rx Only</span>
                      )}
                    </div>
                  </div>
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white group-hover:text-brandorange-500 transition-colors">{prod.name}</h3>
                  <span className="text-[9px] text-slate-400 font-bold block mt-0.5">{prod.form}</span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2.5 leading-relaxed">{prod.desc}</p>
                </div>

                <div className="pt-5 border-t border-slate-100 dark:border-slate-800 mt-5 flex items-center justify-between gap-2">
                  <a 
                    href={`https://wa.me/919919002066?text=Hi,%20I%20am%20interested%20in%20obtaining%20PCD%20franchise%20rates%20for%20${encodeURIComponent(prod.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-gradient-to-r from-softgreen-500 to-softgreen-600 text-white text-[11px] font-bold rounded-xl shadow-md shadow-softgreen-500/10 hover:shadow-lg transition-all flex items-center justify-center space-x-1.5"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                  <button 
                    onClick={() => handleToggleCompare(prod.id)} 
                    className={`py-3 px-3 border border-slate-200 dark:border-slate-800 text-[10px] rounded-xl font-bold flex items-center justify-center ${
                      isCompared ? "bg-tealaccent-500 text-white border-tealaccent-500" : "bg-slate-50 dark:bg-slate-800 text-slate-500 hover:bg-slate-100"
                    } transition-all`}
                  >
                    {isCompared ? <Check className="w-4 h-4" /> : <ArrowLeftRight className="w-4 h-4" />}
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
                    <td className="p-3 text-softgreen-500 font-bold uppercase tracking-wider text-[10px]">ISO Certified Sterile</td>
                    <td className="p-3 text-softgreen-500 font-bold uppercase tracking-wider text-[10px]">ISO Certified Sterile</td>
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

