import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Car,
  Fuel,
  Gauge,
  Calendar,
  Palette,
  Settings2,
  Shield,
  ArrowUpRight,
  ImageIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

interface CarData {
  id: number;
  name: string;
  price: string;
  category: string;
  brand: string;
  img: string;
}

interface CarDetailModalProps {
  car: CarData | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const getSpecs = (car: CarData) => {
  const specMap: Record<string, { engine: string; fuel: string; transmission: string; mileage: string; color: string; drive: string }> = {
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
  };
  return specMap[car.brand] ?? specMap.Toyota;
};

const CarDetailModal = ({ car, open, onOpenChange }: CarDetailModalProps) => {
  if (!car) return null;

  const specs = getSpecs(car);
  const specItems = [
    { icon: Settings2, label: "Engine", value: specs.engine },
    { icon: Fuel, label: "Fuel", value: specs.fuel },
    { icon: Car, label: "Transmission", value: specs.transmission },
    { icon: Gauge, label: "Mileage", value: specs.mileage },
    { icon: Palette, label: "Color", value: specs.color },
    { icon: Shield, label: "Drivetrain", value: specs.drive },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] p-0 gap-0 rounded-2xl border-border bg-card flex flex-col overflow-hidden [display:flex]">
        {/* Hero image — smaller aspect ratio */}
        <div className="relative aspect-[2/1] sm:aspect-[16/9] overflow-hidden rounded-t-2xl bg-muted shrink-0">
          <img
            src={car.img}
            alt={car.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-5 right-5">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/70 mb-1">
              {car.brand}
            </p>
            <DialogHeader className="space-y-0">
              <DialogTitle className="text-white font-heading text-2xl sm:text-3xl leading-tight">
                {car.name}
              </DialogTitle>
            </DialogHeader>
          </div>
        </div>

        <div className="p-5 sm:p-7 space-y-6">
          {/* Price */}
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Asking price</p>
              <p className="font-heading italic text-3xl sm:text-4xl text-primary">
                {car.price}
              </p>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-1">
              <Calendar size={12} /> Listed 2024
            </span>
          </div>

          {/* Specs grid */}
          <div>
            <p className="eyebrow mb-3">Specifications</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {specItems.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border bg-muted/40 p-3"
                >
                  <s.icon size={14} className="text-primary mb-1.5" />
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-0.5">
                    {s.label}
                  </p>
                  <p className="text-sm font-medium">{s.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery placeholders */}
          <div>
            <p className="eyebrow mb-3">Gallery</p>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-xl bg-muted border border-border flex flex-col items-center justify-center gap-1 text-muted-foreground"
                >
                  <ImageIcon size={18} />
                  <span className="text-[10px]">Photo {i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <Button
              asChild
              size="lg"
              className="gold-gradient text-primary-foreground font-medium rounded-full shadow-pop hover:opacity-90 flex-1"
            >
              <Link to="/contact" onClick={() => onOpenChange(false)}>
                Request a Quote <ArrowUpRight size={18} className="ml-2" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full bg-card flex-1"
              onClick={() => onOpenChange(false)}
            >
              Back to listings
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CarDetailModal;
