import kFSeafood from "./kFSeafood.png";
import kevinVegan from "./kevinVegan.png";
import whereItAllVegan from "./whereItAllVegan.png";
import theFunkyChicken from "./theFunkyChicken.png";
import pizzaHat from "./pizzaHat.png";

const restaurantData = [
  {
    place_id: "thefunkychicken",
    name: "The Funky Chicken",
    vicinity: "4, Adelaide Street, Cardiff CF10 5BS",
    image: [theFunkyChicken],
    restaurantType: "dummy",
    lat: 51.463649,
    lng: -3.168304,
    price_level: 1,
    rating: 3.6,
    ratings: [
      {
        ratingID: 1,
        rating: 2,
        text: "Terrible service, not so funky! Yikes!",
      },
      {
        ratingID: 2,
        rating: 1,
        text:
          "OMG, why did they chuck Carly out, it wasn't even her fault chicken was all over the floor",
      },
      { ratingID: 3, rating: 5, text: "Great guys, GREAT CHICKEN" },
      {
        ratingID: 4,
        rating: 5,
        text:
          "If you are after dirt cheap meat after a night out, this is the place",
      },
      {
        ratingID: 5,
        rating: 5,
        text: "Los Pollos Hermanes",
      },
    ],
  },

  {
    place_id: "kfseafood",
    name: "K.F.Seafood",
    vicinity: "22 Mermaid Quay, Cardiff, CF10 5BZ",
    image: [kFSeafood],
    restaurantType: "dummy",
    lat: 51.463381,
    lng: -3.165384,
    price_level: 2,
    rating: 3.5,
    ratings: [
      {
        ratingID: 1,
        rating: 2,
        text: "There's something fishy about this place!  They always get the order wrong, or atleast don't know which type of fish is which!",
      },
      {
        ratingID: 2,
        rating: 5,
        text: "Salmon please save me from myself!  Great fish restaurant",
      },
      { ratingID: 3, rating: 4, text: "Great guys, GREAT FISH" },
      { ratingID: 4, rating: 3, text: "cRAB LINGUINI WAS TO DIE FOR!!!1!" },
    ],
  },

  {
    place_id: "kevinvegan",
    name: "Kevin Vegan",
    vicinity: "110 Bute Street, Cardiff CF10 5AJ",
    image: [kevinVegan],
    restaurantType: "dummy",
    lat: 51.465293,
    lng: -3.165973,
    price_level: 3,
    rating: 4.5,
    ratings: [
      { ratingID: 1, rating: 4, text: "God Cress this place" },
      { ratingID: 2, rating: 5, text: "SWEET! (potato)" },
      {
        ratingID: 3,
        rating: 5,
        text: "Lettuce eat here every week from now on!",
      },
      { ratingID: 4, rating: 4, text: "onYUM" },
    ],
  },

  {
    place_id: "whereitallvegan",
    name: "Where it all Vegan",
    vicinity: "2 Pierhead St, Cardiff, CF10 4QQ",
    image: [whereItAllVegan],
    restaurantType: "dummy",
    lat: 51.466567,
    lng: -3.158641,
    price_level: 3,
    rating: 4.5,
    ratings: [
      {
        ratingID: 1,
        rating: 5,
        text: "great imitation burgers, much better than beyond burgers",
      },
      {
        ratingID: 2,
        rating: 5,
        text: "I would give this six rating if i could!",
      },
      {
        ratingID: 3,
        rating: 5,
        text: "Talk of the town, much better than Kevin Vegan!",
      },
      {
        ratingID: 4,
        rating: 4,
        text: "WOW, this food is dangerously good!",
      },
      {
        ratingID: 5,
        rating: 4,
        text: "So impressive how like meat this tastes",
      },
      { ratingID: 6, rating: 4, text: "I love it at Where It All Vegan, where their consensus on meat is to ban, so with a knife and fork, I ate their imitation pork, and now i'm their biggest fan!" },
    ],
  },

  {
    place_id: "pizzahat",
    name: "Pizza Hat",
    vicinity: "Dumballs Road Bottom, Cardiff CF10 5FW",
    image: [pizzaHat],
    restaurantType: "dummy",
    lat: 51.465691,
    lng: -3.17055,
    price_level: 2,
    rating: 4,
    ratings: [
      {
        ratingID: 1,
        rating: 4,
        text: "I was NOT expecting them to be wearing pizza on their head!",
      },
      {
        ratingID: 2,
        rating: 3,
        text: "I was expecting them to be wearing pizza on their head!",
      },
      { ratingID: 3, 
        rating: 5, 
        text: "oooooof that pizza is licious" },
      {
        ratingID: 4,
        rating: 4,
        text: "omnom nom nom nom pepperoni nom nom om.  This place is amazing and the staff are so friendly.  They do the best deep pan anywhere in Cardiff",
      },
    ],
  },
];
export { restaurantData };
