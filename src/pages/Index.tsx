import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import avatar1 from "@/assets/profile1.jpg";
import avatar2 from "@/assets/profile2.jpg";
import avatar3 from "@/assets/profile3.jpg";
import avatar4 from "@/assets/profile4.jpg";
import {
  ShoppingBag,
  Umbrella,
  Shield,
  Truck,
  Star,
  Menu,
  X,
} from "lucide-react";
import heroImage from "@/assets/hero-umbrellas.jpg";
import redUmbrella from "@/assets/red-umbrella.jpg";
import blueUmbrella from "@/assets/blue-umbrella.jpg";
import yellowUmbrella from "@/assets/yellow-umbrella.jpg";
import prpgLogo from "@/assets/logo.png";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fungsi untuk menutup menu jika diklik di luar area menu
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      // KUNCI scroll pada body saat menu terbuka
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // KEMBALIKAN scroll pada body saat menu tertutup
      document.body.style.overflow = "auto";
    }

    // Fungsi cleanup untuk menghapus event listener dan mengembalikan scroll
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const avatars = [avatar1, avatar2, avatar3, avatar4];

  const products = [
    {
      id: 1,
      name: "Oriental Dekorasi 80cm",
      price: "Rp 45.000",
      image: redUmbrella,
      category: "Classic",
      description:
        "Kami melestarikan warisan seni Payung Geulis dengan sentuhan inovasi modern. Payung ini dibuat oleh pengrajin ahli menggunakan rangka bambu tradisional, lalu disempurnakan dengan kain rPET yang ramah lingkungan.",
    },
    {
      id: 2,
      name: "Payung Menari 80cm",
      price: "Rp 85.000",
      image: blueUmbrella,
      category: "Premium",
      description:
        "Diciptakan untuk daya tahan maksimal, setiap payung ditopang oleh bambu pilihan yang kokoh dan fleksibel. Kainnya menggunakan material rPET premium yang tidak hanya tahan air, tetapi juga memiliki ketahanan warna.",
    },
    {
      id: 3,
      name: "Payung Dekor",
      price: "Rp 35.000",
      image: yellowUmbrella,
      category: "Classic",
      description:
        "Payung ini memadukan keindahan desain klasik dengan kepedulian terhadap lingkungan. Kain pelindungnya terbuat dari bahan rPET berkualitas tinggi, yang diolah dari botol plastik daur ulang untuk mendukung gaya hidup berkelanjutan.",
    },
  ];

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Tahan Lama",
      description:
        "Material berkualitas tinggi yang tahan angin dan hujan deras",
    },
    {
      icon: <Umbrella className="h-6 w-6" />,
      title: "Design Cantik",
      description: "Berbagai pilihan warna dan motif yang elegan",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Pengiriman Cepat",
      description: "Gratis ongkir untuk pembelian di atas Rp 500.000",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm fixed w-full top-0 z-50">
        <div className="container mx-auto  px-4 lg:px-10 py-3 lg:py-4 flex items-center justify-between">
          {/* Logo dan Nama */}
          <a
            href="/"
            className="text-xs lg:text-2xl font-bold text-primary flex items-center gap-2"
          >
            <img
              src={prpgLogo}
              alt="PRPG Logo"
              className="h-7 w-7 lg:h-8 lg:w-8"
            />
            <span>Payung Geulis</span>
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-6 ">
            <a
              href="#products"
              className="text-foreground hover:text-primary transition-colors"
            >
              Produk
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors"
            >
              Tentang
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Kontak
            </a>
            <Button size="sm">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Keranjang
            </Button>
          </div>

          {/* Tombol Hamburger (Hanya tampil di mobile) */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <div
          ref={menuRef}
          className={`absolute top-full right-0 h-screen w-2/3 bg-card/90 backdrop-blur-xl p-6 space-y-6 transform ${
            // Tingkatkan spasi menjadi space-y-6
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden border-l border-border`}
        >
          <a
            href="#products"
            className="block text-foreground hover:text-primary transition-colors text-sm lg:text-2xl"
          >
            {" "}
            {/* Tambahkan text-2xl */}
            Produk
          </a>
          <a
            href="#about"
            className="block text-foreground hover:text-primary transition-colors text-sm lg:text-2xl"
          >
            {" "}
            {/* Tambahkan text-2xl */}
            Tentang
          </a>
          <a
            href="#contact"
            className="block text-foreground hover:text-primary transition-colors text-sm lg:text-2xl"
          >
            {" "}
            {/* Tambahkan text-2xl */}
            Kontak
          </a>
          <Button
            size="sm"
            className="w-full mt-4 teks-sm lg:text-2xl h-auto py-2"
          >
            {/* Tambahkan margin atas untuk spasi */}
            <ShoppingBag className="h-6 w-6 mr-3" />{" "}
            {/* Sesuaikan ukuran ikon */}
            Keranjang
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto  px-4 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Lebih dari Sekadar
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {" "}
                  Payung Biasa.
                </span>
              </h2>
              <p className="text-xs lg:text-xl text-muted-foreground">
                Koleksi payung berkualitas premium dengan design modern dan
                elegan. Jelajahi koleksi payung geulis premium kami yang
                memadukan keindahan tradisi dengan sentuhan modern.
              </p>
              <div className="flex flex-wrap gap-2 lg:gap-4">
                <Button
                  variant="hero"
                  className="text-sm px-6 py-2 md:text-base md:px-8 md:py-3"
                >
                  Belanja Sekarang
                </Button>
                <Button
                  variant="outline"
                  className="text-sm px-6 py-2 md:text-base md:px-8 md:py-3"
                >
                  Lihat Koleksi
                </Button>
              </div>
              <div className="flex items-center gap-1 lg:gap-6 lg:-4 lg:pt-4">
                <div className="flex -space-x-2">
                  {avatars.map((avatarSrc, index) => (
                    <img
                      key={index}
                      src={avatarSrc}
                      alt={`Pelanggan ${index + 1}`}
                      className="w-6 lg:w-10 h-6 lg:h-10 rounded-full border-2 border-background object-cover"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex text-secondary">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="h-3 lg:h-4 w-3 lg:w-4 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-xs lg:text-sm text-muted-foreground">
                    1000+ pelanggan puas
                  </p>
                </div>
              </div>
            </div>
            <div className="relative animate-in fade-in slide-in-from-right duration-700">
              <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
                <img
                  src={heroImage}
                  alt="Koleksi Payung Cantik"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto  px-4 lg:px-10">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto  px-4 lg:px-10">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-2xl lg:text-4xl font-bold">Koleksi Terbaru</h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Payung Geulis pilihan dengan kualitas terbaik dan design yang
              keren
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4 space-y-5">
                  {" "}
                  {/* Sedikit menambah spasi */}
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-primary font-medium">
                        {product.category}
                      </p>
                      <h3 className="text-2sm lg:text-xl font-semibold mt-1">
                        {product.name}
                      </h3>
                    </div>
                    <p className="text-2sm lg:text-lg font-bold text-accent">
                      {product.price}
                    </p>
                  </div>
                  {/* --- TAMBAHKAN PARAGRAF DESKRIPSI DI SINI --- */}
                  <p className="text-sm text-muted-foreground h-24 overflow-hidden">
                    {product.description}
                  </p>
                  {/* ------------------------------------------- */}
                  <Button className="w-full" variant="outline">
                    Tambah ke Keranjang
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-b from-muted/30 to-background"
      >
        <div className="container mx-auto  px-4 lg:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl lg:text-4xl font-bold">
              Tentang Payung Geulis
            </h2>
            <p className="text-sm lg:text-lg text-muted-foreground leading-relaxed">
              Kami adalah toko payung premium yang menghadirkan koleksi payung
              berkualitas tinggi dengan design yang cantik dan modern. Setiap
              payung dipilih dengan teliti untuk memastikan ketahanan,
              kenyamanan, dan gaya yang sempurna untuk menemani hari-hari Anda.
            </p>
            <p className="text-sm lg:text-lg text-muted-foreground leading-relaxed">
              kami berkomitmen memberikan produk terbaik dan layanan pelanggan
              yang memuaskan.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto  px-4 lg:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl lg:text-4xl font-bold">Ayo Berbelanja?</h2>
            <p className="text-sm lg:text-lg text-muted-foreground">
              Dapatkan payung impian Anda hari ini dan nikmati gratis ongkir
              untuk pembelian pertama!
            </p>
            <Button
              variant="hero"
              size="lg"
              className="text-sm px-6 py-2 md:text-base md:px-8 md:py-3"
            >
              Mulai Belanja
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-border bg-card/50 py-12">
        <div className="container mx-auto  px-4 lg:px-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <h3 className="text-md lg:text-lg font-semibold flex items-center gap-2">
                <img src={prpgLogo} alt="PRPG Logo" className="h-8 w-8" />
                Payung Geulis
              </h3>
              <p className="text-xs lg:text-sm text-muted-foreground">
                Payung Geulis untuk hari terbaik Anda
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Belanja</h4>
              <ul className="space-y-2 text-xs lg:text-sm text-muted-foreground">
                <li>
                  <a
                    href="#products"
                    className="hover:text-primary transition-colors"
                  >
                    Semua Produk
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Koleksi Baru
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Best Seller
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Informasi</h4>
              <ul className="space-y-2 text-xs lg:text-sm text-muted-foreground">
                <li>
                  <a
                    href="#about"
                    className="hover:text-primary transition-colors"
                  >
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Hubungi Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Kontak</h4>
              <ul className="space-y-2 text-xs lg:text-sm text-muted-foreground">
                <li>Email: hello@payunggeulis.com</li>
                <li>Telepon: +62 812-3456-7890</li>
                <li>Alamat: Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-xs lg:text-sm text-muted-foreground">
            <p>&copy; 2025 Payung Geulis. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
