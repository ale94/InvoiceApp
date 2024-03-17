export const invoice = {
  id: 10,
  name: "Componentes PC",
  client: {
    name: "Pepe",
    lastName: "Doe",
    address: {
      country: "USA",
      city: "Los Angeles",
      street: "One Street",
      number: 12,
    },
  },
  company: {
    name: "New Egg",
    fiscalNumber: 1234567,
  },
  items: [
    {
      product: "Cpu Intel i7",
      price: 499,
      quantity: 0,
    },
    {
      product: "Corsair Keyboard Mecanico",
      price: 150,
      quantity: 0,
    },
    {
      product: "Monitor Asus",
      price: 350,
      quantity: 0,
    },
  ],
};
