export const menuItems = [
  // Plates
  {
    id: 100,
    name: "One Entree Plate",
    description: "Your choice of one entree (Wings, Ribs, or Hot Links), served with two sides and cornbread.",
    price: "$17.99",
    category: "plate",
    imageId: "pulled-pork-plate",
  },
  {
    id: 101,
    name: "Two Entree Plate",
    description: "Your choice of two entrees (Wings, Ribs, or Hot Links), served with two sides and cornbread.",
    price: "$23.99",
    category: "plate",
    imageId: "bbq-ribs",
  },
  {
    id: 102,
    name: "Three Entree Plate",
    description: "Your choice of three entrees (Wings, Ribs, or Hot Links), served with two sides and cornbread.",
    price: "$28.99",
    category: "plate",
    imageId: "brisket-platter",
  },
  
  // Entrees - A La Carte
  {
    id: 5,
    name: "Pulled Pork Sandwich",
    description: "Slow-smoked pulled pork, served on a toasted bun with your choice of sauce.",
    price: "$9.99",
    category: "entree",
    imageId: "pulled-pork",
  },
  {
    id: 6,
    name: "Pulled Pork (A La Carte)",
    description: "A half-pound of our slow-smoked pulled pork.",
    price: "$10.99",
    category: "entree",
    imageId: "pulled-pork-plate",
  },
  {
    id: 7,
    name: "BBQ Ribs (A La Carte)",
    description: "Tender, slow-smoked BBQ ribs, slathered in our signature BBQ sauce.",
    price: "Half rack: $11.99, Full rack: $21.99",
    category: "entree",
    imageId: "bbq-ribs",
  },
  {
    id: 8,
    name: "Smoked Brisket (A La Carte)",
    description: "A half-pound of sliced smoked brisket, tender and juicy.",
    price: "$12.99",
    category: "entree",
    imageId: "brisket-platter",
  },
  {
    id: 9,
    name: "Fried Chicken (A La Carte)",
    description: "Crispy fried chicken, seasoned with our special blend of spices.",
    price: "2 pieces: $9.99, 4 pieces: $14.99",
    category: "entree",
    imageId: "fried-chicken",
  },
  {
    id: 20,
    name: "Wings (6pc)",
    description: "6 crispy and juicy wings tossed in your choice of sauce. Flavors: Smoky BBQ, Spicy Buffalo, Garlic Parmesan.",
    price: "$10.99",
    category: "entree",
    imageId: "wings",
  },
  {
    id: 21,
    name: "Hot Links",
    description: "Spicy sausage links, smoked to perfection and served hot.",
    price: "$8.99",
    category: "entree",
    imageId: "hot-links",
  },

  // Sides
  {
    id: 10,
    name: "Green Chili Mac and Cheese",
    description: "Creamy mac and cheese with a kick of green chili, made with a blend of cheddar and parmesan cheeses.",
    price: "$5.99",
    category: "side",
    imageId: "green-chili-mac-cheese",
  },
  {
    id: 11,
    name: "Coleslaw",
    description: "Fresh coleslaw, made with shredded cabbage, carrots, and our tangy coleslaw dressing.",
    price: "$3.99",
    category: "side",
    imageId: "coleslaw",
  },
  {
    id: 12,
    name: "Cornbread",
    description: "Sweet and moist cornbread, baked fresh daily.",
    price: "$2.99",
    category: "side",
    imageId: "cornbread",
  },
  {
    id: 13,
    name: "Sweet Potato Fries",
    description: "Crispy sweet potato fries, seasoned with cinnamon and sugar.",
    price: "$5.99",
    category: "side",
    imageId: "sweet-potato-fries",
  },
  {
    id: 14,
    name: "Baked Beans",
    description: "Hearty baked beans with a sweet and smoky flavor.",
    price: "$3.99",
    category: "side",
    imageId: "baked-beans",
  },
  {
    id: 15,
    name: "Grilled Teriyaki Parmesan Corn",
    description: "Grilled corn on the cob with a teriyaki glaze and parmesan cheese.",
    price: "$4.99",
    category: "side",
    imageId: "teriyaki-corn",
  },
  {
    id: 16,
    name: "Great Grannys Green Beans",
    description: "Classic green beans just like granny used to make.",
    price: "$3.99",
    category: "side",
    imageId: "green-beans",
  },
  {
    id: 17,
    name: "Fried Okra",
    description: "Crispy fried okra, a southern favorite.",
    price: "$4.99",
    category: "side",
    imageId: "fried-okra",
  },
  {
    id: 18,
    name: "Potato Salad",
    description: "Creamy and tangy potato salad, perfect for any BBQ.",
    price: "$3.99",
    category: "side",
    imageId: "potato-salad",
  },
  {
    id: 19,
    name: "Fries",
    description: "Classic crispy french fries.",
    price: "$3.99",
    category: "side",
    imageId: "fries",
  },
];

export const specialOffers = [
    {
        id: 1,
        title: "Wing Wednesday",
        description: "Get a dozen wings for just $15 every Wednesday!",
    },
    {
        id: 2,
        title: "Free Delivery",
        description: "Free delivery for orders over $50.",
    },
    {
        id: 3,
        title: "Catering Discount",
        description: "10% off catering orders for new customers.",
    }
];

export const wingFlavors = ["Smoky BBQ", "Spicy Buffalo", "Garlic Parmesan"];

export const jobListings = [
    {
        id: 1,
        title: "Line Cook",
        location: "Austin, TX",
        description: "We are seeking an experienced and passionate Line Cook to join our kitchen team. You will be responsible for preparing high-quality food in a timely, efficient, and sanitary manner.",
        responsibilities: [
            "Prepare and cook food according to recipes and quality standards.",
            "Maintain a clean and organized work station.",
            "Adhere to all food safety and sanitation regulations.",
            "Work collaboratively with other kitchen staff.",
        ],
        requirements: [
            "Proven experience as a Line Cook.",
            "Knowledge of cooking procedures and methods.",
            "Ability to work in a fast-paced environment.",
            "Food handler's certification is a plus.",
        ]
    },
    {
        id: 2,
        title: "Server / Waitstaff",
        location: "Austin, TX",
        description: "Join our front-of-house team as a Server! You will be the face of our restaurant, providing excellent customer service and ensuring our guests have a memorable dining experience.",
        responsibilities: [
            "Greet and seat customers.",
            "Take orders and serve food and beverages.",
            "Answer questions about the menu and make recommendations.",
            "Process payments and handle cash.",
        ],
        requirements: [
            "Previous serving experience preferred.",
            "Excellent communication and interpersonal skills.",
            "Ability to work evenings and weekends.",
            "Positive attitude and a team player.",
        ]
    }
];
