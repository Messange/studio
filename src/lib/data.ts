export const menuItems = [
  {
    id: 1,
    name: "Pulled Pork Sandwich",
    description: "Slow-smoked pulled pork, served on a toasted bun with your choice of sauce.",
    price: "$9.99",
    category: "main",
    imageId: "pulled-pork",
    isPlate: false,
  },
  {
    id: 2,
    name: "BBQ Ribs",
    description: "Tender, slow-smoked BBQ ribs, slathered in our signature BBQ sauce. Served with two sides and cornbread.",
    price: "Half rack: $14.99, Full rack: $24.99",
    category: "main",
    imageId: "bbq-ribs",
    isPlate: true,
  },
  {
    id: 3,
    name: "Smoked Brisket Platter",
    description: "Sliced smoked brisket, served with two sides and cornbread.",
    price: "$16.99",
    category: "main",
    imageId: "brisket-platter",
    isPlate: true,
  },
  {
    id: 4,
    name: "Fried Chicken Platter",
    description: "Crispy fried chicken, seasoned with our special blend of spices. Served with two sides and cornbread.",
    price: "2 pieces: $14.99, 4 pieces: $19.99",
    category: "main",
    imageId: "fried-chicken",
    isPlate: true,
  },
  {
    id: 5,
    name: "Green Chili Mac and Cheese",
    description: "Creamy mac and cheese with a kick of green chili, made with a blend of cheddar and parmesan cheeses.",
    price: "$5.99",
    category: "side",
    imageId: "green-chili-mac-cheese",
  },
  {
    id: 6,
    name: "Coleslaw",
    description: "Fresh coleslaw, made with shredded cabbage, carrots, and our tangy coleslaw dressing.",
    price: "$3.99",
    category: "side",
    imageId: "coleslaw",
  },
  {
    id: 7,
    name: "Cornbread",
    description: "Sweet and moist cornbread, baked fresh daily.",
    price: "$2.99",
    category: "side",
    imageId: "cornbread",
  },
  {
    id: 8,
    name: "Sweet Potato Fries",
    description: "Crispy sweet potato fries, seasoned with cinnamon and sugar.",
    price: "$5.99",
    category: "side",
    imageId: "sweet-potato-fries",
  },
  {
    id: 9,
    name: "Baked Beans",
    description: "Hearty baked beans with a sweet and smoky flavor.",
    price: "$3.99",
    category: "side",
    imageId: "baked-beans",
  },
  {
    id: 10,
    name: "Grilled Teriyaki Parmesan Corn",
    description: "Grilled corn on the cob with a teriyaki glaze and parmesan cheese.",
    price: "$4.99",
    category: "side",
    imageId: "teriyaki-corn",
  },
  {
    id: 11,
    name: "Great Grannys Green Beans",
    description: "Classic green beans just like granny used to make.",
    price: "$3.99",
    category: "side",
    imageId: "green-beans",
  },
  {
    id: 12,
    name: "Fried Okra",
    description: "Crispy fried okra, a southern favorite.",
    price: "$4.99",
    category: "side",
    imageId: "fried-okra",
  },
  {
    id: 13,
    name: "Potato Salad",
    description: "Creamy and tangy potato salad, perfect for any BBQ.",
    price: "$3.99",
    category: "side",
    imageId: "potato-salad",
  },
  {
    id: 14,
    name: "Fries",
    description: "Classic crispy french fries.",
    price: "$3.99",
    category: "side",
    imageId: "fries",
  },
  {
    id: 15,
    name: "Pulled Pork Plate",
    description: "A generous portion of our slow-smoked pulled pork, served with two sides and cornbread.",
    price: "$15.99",
    category: "main",
    imageId: "pulled-pork-plate",
    isPlate: true,
  },
];

export const specialOffers = [
    {
        id: 1,
        title: "Taco Tuesday",
        description: "Buy one get one 50% off all BBQ sandwiches on Tuesdays.",
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
