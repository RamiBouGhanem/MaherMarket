// src/pages/Products.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    // "yerba",
    "bread",
    "dairy",
    // "snacks",
    "drinks",
    "Frozen",
    "fruits",
    "vegetables",
    "Ice Cream",
    "Canned Food",
    "coffee",
    "sauces",
    "Cleaning Tools && detergents",

    // "spreads"
  ];

  const products = [
    // Fruits - الفواكه
    {
      id: 1,
      name: "Apple – تفاح",
      price: 1.5,
      category: "fruits",
      description: "Fresh and juicy apples",
    },
    {
      id: 2,
      name: "Banana – موز",
      price: 0.5,
      category: "fruits",
      description: "Ripe and sweet bananas",
    },
    {
      id: 3,
      name: "Orange – برتقال",
      price: 1.2,
      category: "fruits",
      description: "Citrusy and refreshing oranges",
    },
    {
      id: 4,
      name: "Lemon – ليمون",
      price: 0.6,
      category: "fruits",
      description: "Zesty and tangy lemons",
    },
    {
      id: 5,
      name: "Grapes – عنب",
      price: 2.0,
      category: "fruits",
      description: "Seedless and sweet grapes",
    },
    {
      id: 6,
      name: "Watermelon – بطيخ",
      price: 4.5,
      category: "fruits",
      description: "Large and juicy watermelon",
    },
    {
      id: 7,
      name: "Melon – شمام",
      price: 3.5,
      category: "fruits",
      description: "Sweet and soft melon",
    },
    {
      id: 8,
      name: "Mango – مانجو",
      price: 2.5,
      category: "fruits",
      description: "Tropical and delicious mangoes",
    },
    {
      id: 9,
      name: "Pineapple – أناناس",
      price: 3.0,
      category: "fruits",
      description: "Tart and tropical pineapple",
    },
    {
      id: 10,
      name: "Strawberry – فراولة",
      price: 2.8,
      category: "fruits",
      description: "Bright red and fresh strawberries",
    },
    {
      id: 11,
      name: "Blueberry – توت أزرق",
      price: 3.2,
      category: "fruits",
      description: "Sweet and antioxidant-rich blueberries",
    },
    {
      id: 12,
      name: "Cherry – كرز",
      price: 3.5,
      category: "fruits",
      description: "Juicy and dark red cherries",
    },
    {
      id: 13,
      name: "Peach – خوخ",
      price: 1.8,
      category: "fruits",
      description: "Soft and sweet peaches",
    },
    {
      id: 14,
      name: "Pear – كمثرى",
      price: 1.6,
      category: "fruits",
      description: "Crisp and juicy pears",
    },
    {
      id: 15,
      name: "Plum – برقوق",
      price: 1.9,
      category: "fruits",
      description: "Tangy and juicy plums",
    },
    {
      id: 16,
      name: "Pomegranate – رمان",
      price: 2.7,
      category: "fruits",
      description: "Rich and juicy pomegranates",
    },
    {
      id: 17,
      name: "Kiwi – كيوي",
      price: 0.9,
      category: "fruits",
      description: "Fuzzy and tart kiwi fruits",
    },
    {
      id: 18,
      name: "Apricot – مشمش",
      price: 2.2,
      category: "fruits",
      description: "Soft and golden apricots",
    },
    {
      id: 19,
      name: "Fig – تين",
      price: 2.6,
      category: "fruits",
      description: "Sweet and soft figs",
    },
    {
      id: 20,
      name: "Coconut – جوز الهند",
      price: 2.0,
      category: "fruits",
      description: "Fresh whole coconuts",
    },
    {
      id: 21,
      name: "Avocado – أفوكادو",
      price: 2.3,
      category: "fruits",
      description: "Creamy and ripe avocados",
    },
    {
      id: 22,
      name: "Papaya – بابايا",
      price: 2.9,
      category: "fruits",
      description: "Tropical and soft papaya",
    },
    {
      id: 23,
      name: "Guava – جوافة",
      price: 1.7,
      category: "fruits",
      description: "Fragrant and delicious guavas",
    },
    {
      id: 24,
      name: "Date – تمر",
      price: 3.1,
      category: "fruits",
      description: "Sweet and chewy dates",
    },
    {
      id: 25,
      name: "Blackberry – توت أسود",
      price: 3.3,
      category: "fruits",
      description: "Tart and juicy blackberries",
    },

    // Vegetables - الخضروات
    {
      id: 26,
      name: "Tomato – طماطم",
      price: 1.0,
      category: "vegetables",
      description: "Ripe and juicy tomatoes",
    },
    {
      id: 27,
      name: "Cucumber – خيار",
      price: 0.8,
      category: "vegetables",
      description: "Cool and crisp cucumbers",
    },
    {
      id: 28,
      name: "Carrot – جزر",
      price: 0.9,
      category: "vegetables",
      description: "Crunchy and sweet carrots",
    },
    {
      id: 29,
      name: "Potato – بطاطا",
      price: 1.1,
      category: "vegetables",
      description: "Versatile starchy potatoes",
    },
    {
      id: 30,
      name: "Onion – بصل",
      price: 1.0,
      category: "vegetables",
      description: "Aromatic and flavorful onions",
    },
    {
      id: 31,
      name: "Garlic – ثوم",
      price: 1.2,
      category: "vegetables",
      description: "Pungent and powerful garlic cloves",
    },
    {
      id: 32,
      name: "Lettuce – خس",
      price: 1.5,
      category: "vegetables",
      description: "Leafy and fresh lettuce",
    },
    {
      id: 33,
      name: "Spinach – سبانخ",
      price: 1.4,
      category: "vegetables",
      description: "Dark green and iron-rich spinach",
    },
    {
      id: 34,
      name: "Broccoli – بروكلي",
      price: 2.0,
      category: "vegetables",
      description: "Nutrient-packed broccoli florets",
    },
    {
      id: 35,
      name: "Cauliflower – قرنبيط",
      price: 2.1,
      category: "vegetables",
      description: "White and hearty cauliflower",
    },
    {
      id: 36,
      name: "Bell Pepper – فلفل رومي",
      price: 1.9,
      category: "vegetables",
      description: "Colorful and sweet bell peppers",
    },
    {
      id: 37,
      name: "Chili Pepper – فلفل حار",
      price: 1.3,
      category: "vegetables",
      description: "Spicy and hot chili peppers",
    },
    {
      id: 38,
      name: "Eggplant – باذنجان",
      price: 1.7,
      category: "vegetables",
      description: "Deep purple eggplants",
    },
    {
      id: 39,
      name: "Zucchini – كوسا",
      price: 1.6,
      category: "vegetables",
      description: "Soft and green zucchinis",
    },
    {
      id: 40,
      name: "Peas – بازلاء",
      price: 1.8,
      category: "vegetables",
      description: "Green and tender peas",
    },
    {
      id: 41,
      name: "Green Beans – فاصوليا خضراء",
      price: 2.2,
      category: "vegetables",
      description: "Crisp and long green beans",
    },
    {
      id: 42,
      name: "Corn – ذرة",
      price: 1.9,
      category: "vegetables",
      description: "Sweet and golden corn",
    },
    {
      id: 43,
      name: "Celery – كرفس",
      price: 1.3,
      category: "vegetables",
      description: "Crunchy and refreshing celery",
    },
    {
      id: 44,
      name: "Mushroom – فطر",
      price: 2.4,
      category: "vegetables",
      description: "Earthy and tender mushrooms",
    },
    {
      id: 45,
      name: "Pumpkin – قرع",
      price: 3.0,
      category: "vegetables",
      description: "Bright orange and sweet pumpkin",
    },
    {
      id: 46,
      name: "Sweet Potato – بطاطا حلوة",
      price: 2.1,
      category: "vegetables",
      description: "Sweet and healthy sweet potatoes",
    },
    {
      id: 47,
      name: "Radish – فجل",
      price: 1.0,
      category: "vegetables",
      description: "Crunchy and peppery radishes",
    },
    {
      id: 48,
      name: "Beetroot – شمندر",
      price: 1.7,
      category: "vegetables",
      description: "Sweet and vibrant beetroots",
    },
    {
      id: 49,
      name: "Asparagus – هليون",
      price: 3.5,
      category: "vegetables",
      description: "Tender and elegant asparagus",
    },
    {
      id: 50,
      name: "Cabbage – ملفوف",
      price: 1.6,
      category: "vegetables",
      description: "Large and crisp cabbage",
    },

    {
      id: 51,
      name: "Yogurt – لبن",
      price: 1.0,
      category: "dairy",
      description: "Creamy and fresh yogurt",
    },
    {
      id: 52,
      name: "Labneh – لبنة",
      price: 1.2,
      category: "dairy",
      description: "Thick and tangy labneh",
    },
    {
      id: 53,
      name: "Halloum – حلوم",
      price: 2.5,
      category: "dairy",
      description: "Grillable salty halloum cheese",
    },
    {
      id: 54,
      name: "Chiki – تشيكي",
      price: 1.8,
      category: "dairy",
      description: "Soft and mild Chiki cheese",
    },
    {
      id: 55,
      name: "Akiwi Chiki – أكيواي تشيكي",
      price: 2.0,
      category: "dairy",
      description: "Akiwi-style Chiki cheese",
    },
    {
      id: 56,
      name: "Laban – لبن سائل",
      price: 1.1,
      category: "dairy",
      description: "Refreshing and light laban drink",
    },
    {
      id: 57,
      name: "Butter – زبدة",
      price: 2.3,
      category: "dairy",
      description: "Rich and creamy butter",
    },
    {
      id: 58,
      name: "Fresh Cream – قشطة",
      price: 2.4,
      category: "dairy",
      description: "Smooth and fresh cream",
    },
    {
      id: 59,
      name: "Sweet Cream – قشطة حلوة",
      price: 2.6,
      category: "dairy",
      description: "Deliciously sweetened cream",
    },
    {
      id: 60,
      name: "Cheddar – جبنة شيدر",
      price: 2.8,
      category: "dairy",
      description: "Sharp and aged cheddar",
    },
    {
      id: 61,
      name: "Mozzarella – موزاريلا",
      price: 3.0,
      category: "dairy",
      description: "Soft and melty mozzarella",
    },
    {
      id: 62,
      name: "Feta – فيتا",
      price: 2.2,
      category: "dairy",
      description: "Crumbly and tangy feta cheese",
    },

    // Ice Cream Cortina - بوظة كورتينا
    {
      id: 63,
      name: "Gaint White – بوظة عملاقة بيضاء",
      price: 2.0,
      category: "Ice Cream",
      description: "Large vanilla ice cream bar",
    },
    {
      id: 64,
      name: "Gaint Chocolate – بوظة عملاقة شوكولا",
      price: 2.0,
      category: "Ice Cream",
      description: "Large chocolate ice cream bar",
    },
    {
      id: 65,
      name: "Gaint Milk & Chocolate – بوظة عملاقة بالحليب والشوكولا",
      price: 2.0,
      category: "Ice Cream",
      description: "Milk & chocolate giant ice cream",
    },
    {
      id: 66,
      name: "Cornet – كورنيه",
      price: 0.9,
      category: "Ice Cream",
      description: "Classic ice cream cone",
    },
    {
      id: 67,
      name: "Sandwich – ساندويش بوظة",
      price: 0.9,
      category: "Ice Cream",
      description: "Ice cream sandwich treat",
    },
    {
      id: 68,
      name: "Cup Milk & Chocolate – كوب بالحليب والشوكولا",
      price: 0.9,
      category: "Ice Cream",
      description: "Cup with milk and chocolate flavor",
    },
    {
      id: 69,
      name: "Cup Milk & Strawberry – كوب بالحليب والفراولة",
      price: 0.9,
      category: "Ice Cream",
      description: "Cup with milk and strawberry flavor",
    },
    {
      id: 70,
      name: "Cookies Biskrem – كوكيز بيسكريم",
      price: 0.9,
      category: "Ice Cream",
      description: "Cookies and cream ice cream",
    },
    {
      id: 71,
      name: "Pistachio – بوظة فستق",
      price: 1.1,
      category: "Ice Cream",
      description: "Nutty pistachio ice cream",
    },
    {
      id: 72,
      name: "Box 500g – علبة نصف كيلو",
      price: 6.0,
      category: "Ice Cream",
      description: "500g tub of ice cream",
    },
    {
      id: 73,
      name: "Mango Diet – مانجو دايت",
      price: 1.8,
      category: "Ice Cream",
      description: "Diet mango-flavored ice cream",
    },
    {
      id: 74,
      name: "Ice Cream – بوظة",
      price: 0.3,
      category: "Ice Cream",
      description: "Simple and affordable ice cream",
    },
    {
      id: 75,
      name: "Bouble Cookie – بوظة كوكي مزدوجة",
      price: 1.1,
      category: "Ice Cream",
      description: "Double cookie ice cream sandwich",
    },

    // Ice - ثلج
    {
      id: 76,
      name: "Ice 1k – ثلج 1 كغ",
      price: 0.5,
      category: "ice",
      description: "1 kilogram bag of ice",
    },
    {
      id: 77,
      name: "Ice 2k – ثلج 2 كغ",
      price: 1.0,
      category: "ice",
      description: "2 kilogram bag of ice",
    },

    // Yerba - يربا
    {
      id: 78,
      name: "Amanda – يربا أماندا",
      price: 2.5,
      category: "",
      description: "Amanda yerba mate",
    },
    {
      id: 79,
      name: "Pipore – يربا بيبورى",
      price: 2.7,
      category: "yerba",
      description: "Pipore yerba mate",
    },
    {
      id: 80,
      name: "Sabrousa – يربا سابروسا",
      price: 2.6,
      category: "yerba",
      description: "Sabrousa yerba mate",
    },

    // Bread - خبز
    {
      id: 81,
      name: "Burger Bread – خبز برغر",
      price: 1.2,
      category: "bread",
      description: "Soft burger buns",
    },
    {
      id: 82,
      name: "Fajita Bread – خبز فاهيتا",
      price: 1.5,
      category: "bread",
      description: "Flexible fajita wraps",
    },
    {
      id: 83,
      name: "Saj Bread – خبز صاج",
      price: 1.3,
      category: "bread",
      description: "Traditional Saj flatbread",
    },

    {
      id: 84,
      name: "Pepsi Can – بيبسي علبة",
      price: 1.0,
      category: "drinks",
      description: "Cold and refreshing Pepsi in a can",
    },
    {
      id: 85,
      name: "Pepsi 1.25L – بيبسي 1.25 لتر",
      price: 1.8,
      category: "drinks",
      description: "Family-size Pepsi bottle",
    },
    {
      id: 86,
      name: "Pepsi 2.25L – بيبسي 2.25 لتر",
      price: 2.5,
      category: "drinks",
      description: "Large Pepsi bottle for sharing",
    },
    {
      id: 87,
      name: "Mountain Dew – مونتن ديو",
      price: 1.0,
      category: "drinks",
      description: "Citrusy and energizing soft drink",
    },
    {
      id: 88,
      name: "Ice Tea – شاي مثلج",
      price: 1.5,
      category: "drinks",
      description: "Refreshing iced tea beverage",
    },
    {
      id: 89,
      name: "Ice Coffee – قهوة مثلجة",
      price: 1.7,
      category: "drinks",
      description: "Chilled and smooth iced coffee",
    },
    {
      id: 90,
      name: "Milk Shake – ميلك شيك",
      price: 2.5,
      category: "drinks",
      description: "Creamy and sweet milkshake",
    },
    {
      id: 91,
      name: "Maccaw – مكّاوي",
      price: 1.2,
      category: "drinks",
      description: "Flavorful Maccaw fruit juice",
    },
    {
      id: 92,
      name: "H₂O – مياه",
      price: 0.8,
      category: "drinks",
      description: "Pure bottled water",
    },
    {
      id: 93,
      name: "Sparkling Water – مياه غازية",
      price: 1.0,
      category: "drinks",
      description: "Carbonated refreshing water",
    },
    {
      id: 94,
      name: "Tropicana Juice – عصير تروبيكانا",
      price: 2.0,
      category: "drinks",
      description: "Fresh and fruity Tropicana juice",
    },
    {
      id: 95,
      name: "Ayran – عيران",
      price: 1.0,
      category: "drinks",
      description: "Chilled yogurt-based drink",
    },
    {
      id: 96,
      name: "Mr. Juicy – مستر جوسي",
      price: 1.3,
      category: "drinks",
      description: "Tasty and fruity juice blend",
    },
    {
      id: 97,
      name: "Water Small – مياه صغيرة",
      price: 0.5,
      category: "drinks",
      description: "Small-sized bottled water",
    },
    {
      id: 98,
      name: "Water Big – مياه كبيرة",
      price: 1.0,
      category: "drinks",
      description: "Large-sized bottled water",
    },
    {
      id: 99,
      name: "Water 10L – مياه 10 لتر",
      price: 2.0,
      category: "drinks",
      description: "10-liter water container",
    },
    {
      id: 100,
      name: "Ice Tea Diet – شاي مثلج دايت",
      price: 1.5,
      category: "drinks",
      description: "Sugar-free iced tea",
    },
    {
      id: 101,
      name: "Pepsi Diet – بيبسي دايت",
      price: 1.0,
      category: "drinks",
      description: "Zero sugar Pepsi can",
    },
    {
      id: 102,
      name: "Pepsi Diet 1.25L – بيبسي دايت 1.25 لتر",
      price: 1.8,
      category: "drinks",
      description: "Large bottle of Diet Pepsi",
    },

    // Detergents – منظفات
    {
      id: 103,
      name: "Dishwashing Liquid – سائل جلي (Fabo)",
      price: 1.5,
      category: "Cleaning Tools && detergents",
      description: "Effective dishwashing liquid by Fabo",
    },
    {
      id: 104,
      name: "Dishwashing Liquid – سائل جلي (Pril)",
      price: 1.8,
      category: "Cleaning Tools && detergents",
      description: "High-quality dishwashing liquid by Pril",
    },
    {
      id: 105,
      name: "Dishwashing Liquid – سائل جلي (Fairy)",
      price: 2.0,
      category: "Cleaning Tools && detergents",
      description: "Trusted dishwashing brand Fairy",
    },
    {
      id: 106,
      name: "Dishwashing Liquid – سائل جلي (Dimex)",
      price: 1.4,
      category: "Cleaning Tools && detergents",
      description: "Affordable dishwashing solution from Dimex",
    },
    {
      id: 107,
      name: "Bleach – كلور",
      price: 1.2,
      category: "Cleaning Tools && detergents",
      description: "Multipurpose disinfectant and cleaner",
    },
    {
      id: 108,
      name: "Glass Cleaner – منظف زجاج",
      price: 1.3,
      category: "Cleaning Tools && detergents",
      description: "Streak-free glass and window cleaner",
    },
    {
      id: 109,
      name: "Floor Cleaner – منظف أرضيات",
      price: 1.5,
      category: "Cleaning Tools && detergents",
      description: "Strong floor cleaning solution",
    },
    {
      id: 110,
      name: "Hand Soap (Liquid) – صابون يد سائل",
      price: 1.0,
      category: "Cleaning Tools && detergents",
      description: "Gentle liquid hand soap",
    },
    {
      id: 111,
      name: "Hand Soap (Bar) – صابون يد قالب",
      price: 0.7,
      category: "Cleaning Tools && detergents",
      description: "Classic bar hand soap",
    },
    {
      id: 112,
      name: "Shampoo (Body) – شامبو للجسم",
      price: 1.8,
      category: "Cleaning Tools && detergents",
      description: "Cleansing and moisturizing body shampoo",
    },
    {
      id: 113,
      name: "Shampoo (Hair) – شامبو للشعر",
      price: 1.9,
      category: "Cleaning Tools && detergents",
      description: "Hair shampoo for everyday use",
    },
    {
      id: 114,
      name: "Air Freshener – معطر جو",
      price: 2.0,
      category: "Cleaning Tools && detergents",
      description: "Room-freshening spray or diffuser",
    },
    {
      id: 115,
      name: "Sanitizer – معقم",
      price: 1.5,
      category: "Cleaning Tools && detergents",
      description: "Hand and surface disinfectant",
    },

    // Cleaning Tools – أدوات تنظيف
    {
      id: 116,
      name: "Sponge – إسفنجة",
      price: 0.5,
      category: "Cleaning Tools && detergents",
      description: "Soft sponge for cleaning dishes or surfaces",
    },
    {
      id: 117,
      name: "Mop – ممسحة",
      price: 3.0,
      category: "Cleaning Tools && detergents",
      description: "Floor cleaning mop",
    },
    {
      id: 118,
      name: "Broom – مكنسة",
      price: 2.5,
      category: "Cleaning Tools && detergents",
      description: "Traditional sweeping broom",
    },
    {
      id: 119,
      name: "Bucket – دلو",
      price: 2.0,
      category: "Cleaning Tools && detergents",
      description: "Water bucket for cleaning",
    },
    {
      id: 120,
      name: "Cleaning Cloth – قطعة تنظيف",
      price: 0.8,
      category: "Cleaning Tools && detergents",
      description: "Reusable cleaning cloth",
    },
    {
      id: 121,
      name: "Gloves – قفازات",
      price: 1.2,
      category: "Cleaning Tools && detergents",
      description: "Protective cleaning gloves",
    },
    {
      id: 122,
      name: "Brush – فرشاة",
      price: 1.5,
      category: "Cleaning Tools && detergents",
      description: "Scrubbing brush for tough stains",
    },

    // Coffee
    {
      id: 123,
      name: "Najar Coffee Blue – قهوة النجار الزرقاء",
      price: 2.5,
      category: "coffee",
      description: "Traditional Lebanese coffee – Blue",
    },
    {
      id: 124,
      name: "Najar Coffee Green – قهوة النجار الخضراء",
      price: 2.5,
      category: "coffee",
      description: "Traditional Lebanese coffee – Green",
    },
    {
      id: 125,
      name: "Nescafe – نسكافيه",
      price: 1.5,
      category: "coffee",
      description: "Instant coffee",
    },
    {
      id: 126,
      name: "Cappuccino – كابتشينو",
      price: 1.7,
      category: "coffee",
      description: "Creamy cappuccino drink",
    },
    {
      id: 127,
      name: "Nescafe Gold – نسكافيه جولد",
      price: 2.0,
      category: "coffee",
      description: "Premium instant coffee by Nescafe",
    },

    // Spreads
    {
      id: 128,
      name: "Nutella Spread – نوتيلا",
      price: 3.5,
      category: "spreads",
      description: "Chocolate hazelnut spread",
    },
    {
      id: 129,
      name: "Lotus Spread – سبريد اللوتس",
      price: 3.5,
      category: "spreads",
      description: "Caramelized biscuit spread",
    },

    // Sauces
    {
      id: 130,
      name: "Barbecue Sauce – صوص باربكيو",
      price: 1.5,
      category: "sauces",
      description: "Rich BBQ flavor",
    },
    {
      id: 131,
      name: "Ketchup – كاتشب",
      price: 1.0,
      category: "sauces",
      description: "Classic tomato ketchup",
    },
    {
      id: 132,
      name: "Mayonnaise – مايونيز",
      price: 1.0,
      category: "sauces",
      description: "Creamy mayo",
    },
    {
      id: 133,
      name: "Mustard – خردل",
      price: 1.0,
      category: "sauces",
      description: "Tangy mustard",
    },
    {
      id: 134,
      name: "Buffalo Sauce – صوص بوفالو",
      price: 1.5,
      category: "sauces",
      description: "Spicy buffalo sauce",
    },
    {
      id: 135,
      name: "Hot Sauce – صوص حار",
      price: 1.2,
      category: "sauces",
      description: "Spicy chili sauce",
    },
    {
      id: 136,
      name: "Soy Sauce – صوص الصويا",
      price: 1.3,
      category: "sauces",
      description: "Asian-style soy sauce",
    },

    // Canned Food
    {
      id: 137,
      name: "Martadella – مرتديلا",
      price: 1.5,
      category: "Canned Food",
      description: "Canned luncheon meat",
    },
    {
      id: 138,
      name: "Hot Dog – نقانق معلبة",
      price: 1.6,
      category: "Canned Food",
      description: "Canned hot dogs",
    },
    {
      id: 139,
      name: "Tuna – تونا",
      price: 1.8,
      category: "Canned Food",
      description: "Canned tuna in oil or water",
    },
    {
      id: 140,
      name: "Foul – فول معلب",
      price: 1.2,
      category: "Canned Food",
      description: "Canned fava beans",
    },
    {
      id: 141,
      name: "Hummus – حمص معلب",
      price: 1.3,
      category: "Canned Food",
      description: "Canned hummus paste",
    },

    // Frozen Food
    {
      id: 142,
      name: "Crispy Chicken – دجاج مقرمش",
      price: 4.0,
      category: "Frozen",
      description: "Frozen crispy chicken",
    },
    {
      id: 143,
      name: "Chicken Nuggets – ناجت",
      price: 3.5,
      category: "Frozen",
      description: "Frozen chicken nuggets",
    },
    {
      id: 144,
      name: "Escalope – اسكالوب",
      price: 4.5,
      category: "Frozen",
      description: "Breaded chicken escalope",
    },
    {
      id: 145,
      name: "Makanek – مقانق",
      price: 4.0,
      category: "Frozen",
      description: "Lebanese sausages (Makanek)",
    },
    {
      id: 146,
      name: "Sujuk – سجق",
      price: 4.0,
      category: "Frozen",
      description: "Spicy Lebanese Sujuk sausage",
    },
    {
      id: 147,
      name: "Hamburger – همبرغر",
      price: 4.0,
      category: "Frozen",
      description: "Frozen beef or chicken burgers",
    },
    {
      id: 148,
      name: "Fish Fillet – فيليه سمك",
      price: 4.5,
      category: "Frozen",
      description: "Frozen fish fillet portions",
    },
    {
      id: 149,
      name: "Insta (Lebanese Art Delicious)",
      price: 5.0,
      category: "Frozen",
      description: "Lebanese frozen specialty from Insta",
    },

    // Coffee
    {
      id: 150,
      name: "Najar Coffee Blue – قهوة النجار الزرقاء",
      price: 2.5,
      category: "coffee",
      description: "Traditional Lebanese coffee – Blue",
    },
    {
      id: 151,
      name: "Najar Coffee Green – قهوة النجار الخضراء",
      price: 2.5,
      category: "coffee",
      description: "Traditional Lebanese coffee – Green",
    },
    {
      id: 152,
      name: "Nescafe – نسكافيه",
      price: 1.5,
      category: "coffee",
      description: "Instant coffee",
    },
    {
      id: 153,
      name: "Cappuccino – كابتشينو",
      price: 1.7,
      category: "coffee",
      description: "Creamy cappuccino drink",
    },
    {
      id: 154,
      name: "Nescafe Gold – نسكافيه جولد",
      price: 2.0,
      category: "coffee",
      description: "Premium instant coffee by Nescafe",
    },

    // Spreads
    {
      id: 155,
      name: "Nutella Spread – نوتيلا",
      price: 4.5,
      category: "spreads",
      description: "Chocolate hazelnut spread",
    },
    {
      id: 156,
      name: "Lotus Spread – سبريد لوتس",
      price: 4.0,
      category: "spreads",
      description: "Caramelized biscuit spread",
    },

    // Sauces
    {
      id: 157,
      name: "Barbecue Sauce – صلصة باربيكيو",
      price: 2.5,
      category: "sauces",
      description: "Smoky and tangy barbecue sauce",
    },
    {
      id: 158,
      name: "Ketchup – كاتشب",
      price: 1.8,
      category: "sauces",
      description: "Classic tomato ketchup",
    },
    {
      id: 159,
      name: "Mayonnaise – مايونيز",
      price: 2.0,
      category: "sauces",
      description: "Creamy mayonnaise",
    },
    {
      id: 160,
      name: "Mustard – خردل",
      price: 1.7,
      category: "sauces",
      description: "Tangy mustard sauce",
    },
    {
      id: 161,
      name: "Buffalo Sauce – صلصة بوفالو",
      price: 2.3,
      category: "sauces",
      description: "Spicy buffalo wing sauce",
    },
    {
      id: 162,
      name: "Hot Sauce – صلصة حارة",
      price: 1.9,
      category: "sauces",
      description: "Spicy hot sauce",
    },
    {
      id: 163,
      name: "Soya Sauce – صلصة صويا",
      price: 2.1,
      category: "sauces",
      description: "Savory soy sauce",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-stone-50">
      {/* Navbar */}
      <nav className="bg-white/90 backdrop-blur-md border-b bordeyerbar-emerald-200 p-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-emerald-600 p-2 rounded-xl transition-colors duration-300 group-hover:bg-emerald-700">
              🛒
            </div>
            <h1 className="text-2xl font-semibold text-gray-900 font-serif tracking-wide">
              <span className="text-emerald-600">Maher’s</span> Market
            </h1>
          </Link>

          {/* Links */}
          <div className=" md:flex items-center space-x-6 text-sm font-medium text-emerald-900">
            <Link
              to="/"
              className="hover:text-emerald-600 transition-colors text-xl"
            >
              <FiHome />
            </Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        {/* Header and Search */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-6">
            Fresh Finds Daily
          </h2>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-96 p-3 border border-emerald-200 rounded-lg shadow focus:ring-2 focus:ring-emerald-300 focus:outline-none"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 justify-center md:justify-start lg:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`capitalize px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition duration-200 ${
                selectedCategory === cat
                  ? "bg-emerald-600 text-white shadow"
                  : "bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow p-4 flex flex-col justify-between hover:shadow-lg transition"
              >
                <div>
                  <h3 className="text-lg font-semibold text-emerald-800">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {product.description}
                  </p>
                </div>
                <div className="mt-4 text-right">
                  <span className="text-emerald-700 font-bold text-lg">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Products;
