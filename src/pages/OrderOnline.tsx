import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Plus, Minus, ShoppingCart, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { menuCategories } from "@/components/Menu";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
}

const OrderOnline = () => {
  const { toast } = useToast();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState("meat");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const parsePrice = (priceStr: string): number => {
    return parseFloat(priceStr.replace("$", ""));
  };

  const addToCart = (item: { name: string; price: string }, category: string) => {
    const itemId = `${category}-${item.name}`;
    const existingItem = cart.find((i) => i.id === itemId);

    if (existingItem) {
      setCart(
        cart.map((i) =>
          i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id: itemId,
          name: item.name,
          price: parsePrice(item.price),
          quantity: 1,
          category,
        },
      ]);
    }

    toast({
      title: "Added to Cart",
      description: `${item.name} has been added to your order.`,
    });
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setCart(
      cart
        .map((item) =>
          item.id === itemId
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (itemId: string) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    toast({
      title: "Order Submitted!",
      description: "Thank you for your order. We'll have it ready for pickup soon!",
    });
    setCart([]);
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative">
        {/* Hero Section */}
        <section className="py-12 lg:py-16 hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
              ORDER FOR PICKUP
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-card mb-4">
              Order <span className="text-gradient-golden">Online</span>
            </h1>
            <p className="text-lg text-card/80 max-w-2xl mx-auto">
              Browse our menu and add items to your cart. Pay when you pick up!
            </p>
          </div>
        </section>

        {/* Floating Cart Button (Mobile) */}
        {cartItemCount > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="lg:hidden fixed bottom-6 right-6 z-40 btn-golden flex items-center gap-2 rounded-full px-6 py-4 shadow-lg"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>{cartItemCount} items</span>
            <span className="font-bold">${cartTotal.toFixed(2)}</span>
          </button>
        )}

        {/* Main Content */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Menu Section */}
              <div className="flex-1">
                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {menuCategories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                          activeCategory === category.id
                            ? "bg-primary text-primary-foreground shadow-golden"
                            : "bg-card text-foreground hover:bg-secondary"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="hidden sm:inline">{category.name}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Menu Items */}
                {menuCategories.map((category) => (
                  <div
                    key={category.id}
                    className={activeCategory === category.id ? "block" : "hidden"}
                  >
                    <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                      {category.name}
                    </h2>
                    <div className="grid gap-4">
                      {category.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className="flex-1">
                            <h3 className="font-medium text-foreground">{item.name}</h3>
                            <p className="text-lg font-bold text-primary mt-1">
                              {item.price}
                            </p>
                          </div>
                          <Button
                            onClick={() => addToCart(item, category.id)}
                            className="btn-golden flex items-center gap-2"
                          >
                            <Plus className="w-4 h-4" />
                            Add
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Sidebar (Desktop) */}
              <div className="hidden lg:block w-96">
                <div className="sticky top-24 bg-card rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-primary px-6 py-4">
                    <div className="flex items-center gap-2 text-primary-foreground">
                      <ShoppingCart className="w-5 h-5" />
                      <span className="font-display font-bold text-lg">Your Order</span>
                    </div>
                  </div>

                  <div className="p-6">
                    {cart.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        <ShoppingCart className="w-12 h-12 mx-auto mb-4 opacity-30" />
                        <p>Your cart is empty</p>
                        <p className="text-sm mt-1">Add items to get started</p>
                      </div>
                    ) : (
                      <>
                        <div className="space-y-4 max-h-[400px] overflow-y-auto">
                          {cart.map((item) => (
                            <div key={item.id} className="flex items-center gap-3">
                              <div className="flex items-center gap-2 bg-secondary rounded-lg">
                                <button
                                  onClick={() => updateQuantity(item.id, -1)}
                                  className="p-2 hover:bg-muted rounded-l-lg transition-colors"
                                >
                                  <Minus className="w-4 h-4" />
                                </button>
                                <span className="w-8 text-center font-medium">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.id, 1)}
                                  className="p-2 hover:bg-muted rounded-r-lg transition-colors"
                                >
                                  <Plus className="w-4 h-4" />
                                </button>
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-foreground truncate">
                                  {item.name}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  ${item.price.toFixed(2)} each
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="font-bold text-foreground">
                                  ${(item.price * item.quantity).toFixed(2)}
                                </p>
                                <button
                                  onClick={() => removeFromCart(item.id)}
                                  className="text-destructive hover:underline text-sm"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="border-t border-border mt-6 pt-6">
                          <div className="flex justify-between text-lg font-bold mb-4">
                            <span>Total</span>
                            <span className="text-primary">${cartTotal.toFixed(2)}</span>
                          </div>
                          <Button
                            onClick={handleCheckout}
                            className="btn-golden w-full"
                          >
                            Place Order for Pickup
                          </Button>
                          <p className="text-xs text-muted-foreground text-center mt-3">
                            Pay when you pick up your order
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Cart Drawer */}
        {isCartOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            <div
              className="absolute inset-0 bg-foreground/50"
              onClick={() => setIsCartOpen(false)}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-card rounded-t-3xl max-h-[80vh] overflow-hidden animate-slide-up">
              <div className="bg-primary px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary-foreground">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="font-display font-bold text-lg">Your Order</span>
                </div>
                <button onClick={() => setIsCartOpen(false)}>
                  <X className="w-6 h-6 text-primary-foreground" />
                </button>
              </div>

              <div className="p-6 max-h-[60vh] overflow-y-auto">
                {cart.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <p>Your cart is empty</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4">
                      {cart.map((item) => (
                        <div key={item.id} className="flex items-center gap-3">
                          <div className="flex items-center gap-2 bg-secondary rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-2"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-2"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium truncate">{item.name}</p>
                          </div>
                          <p className="font-bold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-border mt-6 pt-6">
                      <div className="flex justify-between text-lg font-bold mb-4">
                        <span>Total</span>
                        <span className="text-primary">${cartTotal.toFixed(2)}</span>
                      </div>
                      <Button onClick={handleCheckout} className="btn-golden w-full">
                        Place Order for Pickup
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default OrderOnline;
