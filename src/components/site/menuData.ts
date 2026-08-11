import americano from "@/assets/menu-americano.jpg";
import icedLatte from "@/assets/menu-iced-latte.jpg";
import cappuccino from "@/assets/menu-cappuccino.jpg";
import choco from "@/assets/menu-choco.jpg";
import matcha from "@/assets/menu-matcha.jpg";

export type MenuItem = {
  src: string;
  name: string;
  desc: string;
  price: string;
  tag?: string;
  group: string;
};

export const menuItems: MenuItem[] = [
  { src: americano, name: "Es Kopi Americano", desc: "Espresso murni, dingin & ringan", price: "Rp 10.000", tag: "Best seller", group: "Kopi" },
  { src: icedLatte, name: "Es Kopi Susu Benice", desc: "Signature gula aren, creamy", price: "Rp 12.000", tag: "Signature", group: "Kopi" },
  { src: cappuccino, name: "Hot Cappuccino", desc: "Espresso + microfoam lembut", price: "Rp 13.000", group: "Kopi" },
  { src: choco, name: "Choco Ice Blend", desc: "Cokelat premium, whipped cream", price: "Rp 15.000", group: "Non-kopi" },
  { src: matcha, name: "Matcha Latte", desc: "Matcha Jepang, susu segar", price: "Rp 15.000", tag: "Baru", group: "Non-kopi" },
  { src: americano, name: "Kopi Hitam Panas", desc: "Robusta pilihan, bold", price: "Rp 8.000", group: "Kopi" },
  { src: icedLatte, name: "Es Kopi Karamel", desc: "Karamel butter, manis seimbang", price: "Rp 14.000", group: "Kopi" },
  { src: cappuccino, name: "Hot Latte", desc: "Espresso lembut dengan susu", price: "Rp 13.000", group: "Kopi" },
  { src: choco, name: "Red Velvet Latte", desc: "Creamy, favorit anak muda", price: "Rp 15.000", group: "Non-kopi" },
  { src: matcha, name: "Taro Latte", desc: "Taro premium, tekstur halus", price: "Rp 14.000", group: "Non-kopi" },
  { src: icedLatte, name: "Es Teh Lemon", desc: "Segar, cocok siang hari", price: "Rp 8.000", group: "Non-kopi" },
  { src: choco, name: "Cheese Tea", desc: "Teh dengan cheese foam gurih", price: "Rp 15.000", group: "Non-kopi" },
];