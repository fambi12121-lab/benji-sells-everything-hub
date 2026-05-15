import camryImg from "@/assets/cars/camry.jpg";
import civicImg from "@/assets/cars/civic.jpg";
import corollaImg from "@/assets/cars/corolla.jpg";
import elantraImg from "@/assets/cars/elantra.jpg";
import e300Img from "@/assets/cars/e300.jpg";
import x5Img from "@/assets/cars/x5.jpg";
import rangeroverImg from "@/assets/cars/rangerover.jpg";
import rx350Img from "@/assets/cars/rx350.jpg";
import kiarioImg from "@/assets/cars/kiario.jpg";
import almeraImg from "@/assets/cars/almera.jpg";
import focusImg from "@/assets/cars/focus.jpg";
import cayenneImg from "@/assets/cars/cayenne.jpg";
import pradoImg from "@/assets/cars/prado.jpg";
import q7Img from "@/assets/cars/q7.jpg";
import accordImg from "@/assets/cars/accord.jpg";
import highlanderImg from "@/assets/cars/highlander.jpg";
import gleImg from "@/assets/cars/gle.jpg";
import rav4Img from "@/assets/cars/rav4.jpg";
import bmw3Img from "@/assets/cars/bmw3.jpg";
import sonataImg from "@/assets/cars/sonata.jpg";
import cx5Img from "@/assets/cars/cx5.jpg";
import es350Img from "@/assets/cars/es350.jpg";

export type Category = "under5" | "mid" | "above10";

export interface Car {
  id: number;
  slug: string;
  name: string;
  price: string;
  category: Category;
  brand: string;
  img: string;
}

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const raw: Omit<Car, "slug">[] = [
  // Under ₦5M
  { id: 1, name: "Kia Rio 2017", price: "₦3,200,000", category: "under5", brand: "Kia", img: kiarioImg },
  { id: 2, name: "Nissan Almera 2018", price: "₦4,100,000", category: "under5", brand: "Nissan", img: almeraImg },
  { id: 3, name: "Ford Focus 2016", price: "₦4,800,000", category: "under5", brand: "Ford", img: focusImg },
  { id: 15, name: "Hyundai Sonata 2014", price: "₦3,900,000", category: "under5", brand: "Hyundai", img: sonataImg },
  { id: 16, name: "Honda Civic 2015", price: "₦4,500,000", category: "under5", brand: "Honda", img: civicImg },
  { id: 17, name: "Toyota Corolla 2014", price: "₦4,700,000", category: "under5", brand: "Toyota", img: corollaImg },
  // Mid
  { id: 4, name: "Toyota Camry 2020", price: "₦8,500,000", category: "mid", brand: "Toyota", img: camryImg },
  { id: 5, name: "Honda Civic 2019", price: "₦7,200,000", category: "mid", brand: "Honda", img: civicImg },
  { id: 6, name: "Toyota Corolla 2021", price: "₦9,800,000", category: "mid", brand: "Toyota", img: corollaImg },
  { id: 7, name: "Hyundai Elantra 2020", price: "₦6,500,000", category: "mid", brand: "Hyundai", img: elantraImg },
  { id: 18, name: "Honda Accord 2019", price: "₦9,200,000", category: "mid", brand: "Honda", img: accordImg },
  { id: 19, name: "Mazda CX-5 2018", price: "₦7,800,000", category: "mid", brand: "Mazda", img: cx5Img },
  { id: 20, name: "Toyota RAV4 2018", price: "₦8,900,000", category: "mid", brand: "Toyota", img: rav4Img },
  { id: 21, name: "Hyundai Sonata 2019", price: "₦6,900,000", category: "mid", brand: "Hyundai", img: sonataImg },
  // Above
  { id: 8, name: "Mercedes-Benz E300 2022", price: "₦28,000,000", category: "above10", brand: "Mercedes", img: e300Img },
  { id: 9, name: "BMW X5 2021", price: "₦35,000,000", category: "above10", brand: "BMW", img: x5Img },
  { id: 10, name: "Range Rover Sport 2023", price: "₦65,000,000", category: "above10", brand: "Land Rover", img: rangeroverImg },
  { id: 11, name: "Lexus RX 350 2022", price: "₦22,000,000", category: "above10", brand: "Lexus", img: rx350Img },
  { id: 12, name: "Porsche Cayenne 2022", price: "₦55,000,000", category: "above10", brand: "Porsche", img: cayenneImg },
  { id: 13, name: "Toyota Land Cruiser Prado 2023", price: "₦48,000,000", category: "above10", brand: "Toyota", img: pradoImg },
  { id: 14, name: "Audi Q7 2022", price: "₦40,000,000", category: "above10", brand: "Audi", img: q7Img },
  { id: 22, name: "Mercedes-Benz GLE 2023", price: "₦52,000,000", category: "above10", brand: "Mercedes", img: gleImg },
  { id: 23, name: "Toyota Highlander 2021", price: "₦18,500,000", category: "above10", brand: "Toyota", img: highlanderImg },
  { id: 24, name: "BMW 3 Series 2021", price: "₦19,800,000", category: "above10", brand: "BMW", img: bmw3Img },
  { id: 25, name: "Lexus ES 350 2021", price: "₦21,500,000", category: "above10", brand: "Lexus", img: es350Img },
];

export const cars: Car[] = raw.map((c) => ({ ...c, slug: `${slugify(c.name)}-${c.id}` }));

export const getCarBySlug = (slug: string) => cars.find((c) => c.slug === slug);

export interface Specs {
  engine: string;
  fuel: string;
  transmission: string;
  mileage: string;
  color: string;
  drive: string;
}

const specMap: Record<string, Specs> = {
  Toyota: { engine: "2.5L 4-Cylinder", fuel: "Petrol", transmission: "Automatic", mileage: "42,000 km", color: "Pearl White", drive: "FWD" },
  Honda: { engine: "1.5L Turbo", fuel: "Petrol", transmission: "CVT", mileage: "38,000 km", color: "Lunar Silver", drive: "FWD" },
  Hyundai: { engine: "2.0L 4-Cylinder", fuel: "Petrol", transmission: "Automatic", mileage: "29,000 km", color: "Phantom Black", drive: "FWD" },
  Mercedes: { engine: "2.0L Turbo I4", fuel: "Petrol", transmission: "9G-Tronic", mileage: "18,000 km", color: "Obsidian Black", drive: "RWD" },
  BMW: { engine: "3.0L Turbo I6", fuel: "Petrol", transmission: "8-Speed Auto", mileage: "22,000 km", color: "Alpine White", drive: "AWD" },
  "Land Rover": { engine: "3.0L V6 Supercharged", fuel: "Petrol", transmission: "8-Speed Auto", mileage: "15,000 km", color: "Santorini Black", drive: "AWD" },
  Lexus: { engine: "3.5L V6", fuel: "Petrol", transmission: "8-Speed Auto", mileage: "20,000 km", color: "Eminent White", drive: "AWD" },
  Porsche: { engine: "3.0L Twin-Turbo V6", fuel: "Petrol", transmission: "8-Speed Tiptronic", mileage: "12,000 km", color: "Jet Black", drive: "AWD" },
  Audi: { engine: "3.0L TFSI V6", fuel: "Petrol", transmission: "8-Speed Tiptronic", mileage: "25,000 km", color: "Glacier White", drive: "AWD" },
  Kia: { engine: "1.4L 4-Cylinder", fuel: "Petrol", transmission: "Automatic", mileage: "55,000 km", color: "Signal Red", drive: "FWD" },
  Nissan: { engine: "1.6L 4-Cylinder", fuel: "Petrol", transmission: "Automatic", mileage: "48,000 km", color: "Brilliant Silver", drive: "FWD" },
  Ford: { engine: "2.0L EcoBoost", fuel: "Petrol", transmission: "6-Speed Auto", mileage: "60,000 km", color: "Shadow Black", drive: "FWD" },
  Mazda: { engine: "2.5L SkyActiv-G", fuel: "Petrol", transmission: "6-Speed Auto", mileage: "45,000 km", color: "Soul Red", drive: "AWD" },
};

export const getSpecs = (brand: string): Specs => specMap[brand] ?? specMap.Toyota;
