import logo from './logo.svg';
import './App.css';
import ProductListPage from './Component/ProductList';
import SamsungGalaxyA21 from './Component/samsung-galaxy-a21s-sm-a217fzkfins-original-imafsuyajewgnfcg.webp';
import DEll from './Component/inspiron-3520-laptop-dell-original-imagtegwwhwk9ghn.webp';
import Morpen from './Component/bp-14-dr-morepen-original-imagt56nmc9gmdbs.webp';
import Fogg from './Component/-original-imagujyzye9dqhfa.webp';
import Pears from './Component/pure-gentle-bathing-bar-pears-original-imag48gcxhfm3pmy.webp';
import REDLABEL from './Component/REDLABEL.webp';
import CopperBottle from './Component/950-pure-copper-water-bottle-eco-friendly-non-toxic-for-kids-original-imagzmkcaqvvjugg.webp';
import CookwareSet from './Component/CookwareSet.webp';
import SweatShirt from './Component/xl-shopsy-2500mswnb-alnwlkr-mosajc-men-original-imageh6kbydg4cpz.webp';
import SunGlasses from './Component/SunGlasses.webp';
import SmartTV from './Component/ToshibhaSmartTV.webp';
import TopLoadWashingMachine from './Component/TopLoadWashingMachine.webp';
import SamsungGalaxyS21 from './Component/SamsungGalaxyS21.webp'; 
const products = [
  {
    image: SamsungGalaxyA21,
    title: 'Samsung Galaxy A21',
    price: 15775,
    description:'Whether it’s movies, games, or videos, every form of content that’s displayed on this smartphone’s 16.63 cm (6.5) ',
    category:'Mobile&Accesories',
  },

  {
    image: DEll,

    title: 'DELL Inspiron 15 3520 Core i5 12th Gen Core i5 - (16 GB/512 GB SSD/Windows 11 Home) Inspiron 3520 Laptop  (15.6 inch, Platinum Silver, 1.65 kg, With MS Office) ',
    price: 58990,
    description:'This is a good quality laptop with a genuine price',
    category:'Electronics',
  },
  {
    image: TopLoadWashingMachine,

    title: 'SAMSUNG 8 kg 5 Star, AI Ecobubble,Wi-Fi Enabled ,Hygiene Steam,Digital Inverter Fully Automatic Front Load Washing Machine',
    price: 34990,
    description:'This is a good quality product with a genuine price',
    category:'TV&Appliances',
  },
  {
    image: SweatShirt,
    title: 'Men Full Sleeve Printed Sweatshirt',
    price: 496,
    description:'This is a good quality product with a genuine price',
    category:'fashion',
  },
  {
    image: REDLABEL,
    title: 'Red Label Tea Pouch  (1 kg)',
    price: 445,
    description:'Brooke Bond Red Label is one of India’s largest selling packaged tea brands. Brooke Bond Red Label Tea is a blend CTC tea with best quality leaves; processed in the unique Brooke Bond Tea Excellence Centre ',
    category:'Beauty',
  },
  {
    image: CopperBottle,
    title: 'Usha Shriram Pure Water |Eco-Friendly|Non-Toxic|For Kids & Adults|Leak-Proof 950 ml Bottle  (Pack of 1, Copper, Copper)',
    price: 655,
    description:'Usha Shriram is a range of home utility products built on the belief that modern science is but an inspired ode to the ancient Indian heritage.',
    category:'Home&Kitchen'
  },
  {
    image: Pears,
    title: 'Pears P & G BATHING BAR WITH Glycerin and Natural Oils  (8 x 125 g)',
    price: 333,
    description:'is a brand that understands the importance of starting your skin care regimen right. Thats why brings you its heritage product - the glycerine soap - in the form of the Pure & Gentle Bathing Soap Bar.',
    category:'Beauty',
  },
  {
    image: SamsungGalaxyS21,
    title: 'Samsung Galaxy S21 FE 5G with Snapdragon 888 (Olive, 256 GB)  (8 GB RAM)',
    price: 34999,
    description:'This is a good quality product with a genuine price',
    category:'Mobile&Accesories'
  },
  {
    image: SunGlasses,
    title: 'Polarized, UV Protection Wayfarer Sunglasses (51)  (For Men & Women, Blue)',
    price: 1236,
    description:'This is a good quality product with a genuine price',
    category:'fashion'
  },
  {
    image: CookwareSet,
    title: 'Pigeon Induction Bottom Non-Stick Coated Cookware Set  (Aluminium, 1 - Piece)',
    price: 1899,
    description:'This is a good quality product with a genuine price',
    category:'Home&Kitchen'
  },
  {
    image: Fogg,
    title: 'FOGG Marco No Gas Body Spray - For Men (450 ml, Pack of 3)',
    price: 371,
    description:'FOGG MARCO - Elevate your confidence with Fogg Marco, the ultimate body spray for men. This deodorant captures the essence of a refreshing and masculine scent, taking your fragrance game to a whole new level.',
    category:'Beauty',
  },
  {
    image: Morpen,
    title: 'Dr. Morepen BP-14 BP-14 Bp Monitor  (Orange)',
    price: 1049,
    description:'Dr. Morepen Blood Pressure Monitor Model BP-14 is a simple and accurate BP Monitor with a Large Display. It is a simple and easy-to-use device for monitoring BP. ',
    category:'Electronics'
  },
  {
    image: SmartTV,
    title: 'TOSHIBA M550MP 164 cm (65 inch) QLED Ultra HD (4K) Smart Google TV With Full Array Local Dimming, Power Bass woofer, and HSR 120 Mode  (65M550MP)',
    price: 54999,
    description:'Imagine a window to a new world, where every pixel is a masterpiece, every sound is a symphony, and every frame is a marvel.From the incredible REGZA Engine ZR to Quantum Dot Technology, from Dolby Vision to Ultravision 120, every feature is meticulously designed to redefine your viewing experience. ',
    category:'TV&Appliances'
  },
];
function App() {
  return (
    <div className="App">
      <header>

      </header>
      <h1>Product List Page</h1>
      <ProductListPage products={products} />
    </div>
  );
}

export default App;
