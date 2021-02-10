
const restaurantData = [ 
  { id: 1,
    restaurantName: "The Funky Chicken",
    address: "4, Adelaide Street, Cardiff CF10 5BS",
    lat: 51.463649,
    lng: -3.168304,
    ratings: [
      { ratingID: 1,
        stars: 2,
        comment: "Terrible service, not so funky! Yikes!",
      },
      { ratingID: 2,
        stars: 1,
        comment:
          "OMG, why did they chuck Carly out, it wasn't even her fault chicken was all over the floor",
      },
      { ratingID: 3,
        stars: 5,
        comment: "Great guys, GREAT CHICKEN",
      },
      { ratingID: 4,
        stars: 4,
        comment:
          "If you are after dirt cheap meat after a night out, this is the place",
      },
      {
        ratingID: 5,
        stars: 5,
        comment: "Los Pollos Hermanes",
      },
    ],
  },

  { id: 2,
    restaurantName: "K.F.Seafood",
    address: "22 Mermaid Quay, Cardiff, CF10 5BZ",
    lat: 51.463381,
    lng: -3.165384,
    ratings: [
      { ratingID: 1,
        stars: 2,
        comment: "There's something fishy about this place",
      },
      { ratingID: 2,
        stars: 5,
        comment: "Salmon please save me from myself!  Great fish restaurant",
      },
      { ratingID: 3,
        stars: 5,
        comment: "Great guys, GREAT FISH",
      },
      { ratingID: 4,
        stars: 4,
        comment: "cRAB LINGUINI WAS TO DIE FOR!!!1!",
      },
    ],
  },

  { id: 3,
    restaurantName: "Kevin Vegan",
    address: "110 Bute Street, Cardiff CF10 5AJ",
    lat: 51.465293,
    lng: -3.165973,
    ratings: [
      { ratingID: 1,
        stars: 4,
        comment: "God Cress this place",
      },
      { ratingID: 2,
        stars: 5,
        comment: "SWEET! (potato)",
      },
      { ratingID: 3,
        stars: 5,
        comment: "Lettuce eat here every week from now on!",
      },
      { ratingID: 4,
        stars: 4,
        comment: "onYUM",
      },
    ],
  },


  { id: 4,
    restaurantName: "Where it all Vegan",
    address: "2 Pierhead St, Cardiff, CF10 4QQ",
    lat: 51.466567,
    lng: -3.158641,
    ratings: [
      { ratingID: 1,
        stars: 5,
        comment: "great imitation burgers, much better than beyond burgers",
      },
      { ratingID: 2,
        stars: 5,
        comment: "I would give this six stars if i could!",
      },
      { ratingID: 3,
        stars: 5,
        comment: "Talk of the town, much better than Kevin Vegan!",
      },
      { ratingID: 4,
        stars: 5,
        comment: "WOW, this food is dangerously good!",
      },
      { ratingID: 5,
        stars: 5,
        comment: "So impressive how like meat this tastes",
      },
      { ratingID: 6,
        stars: 4,
        comment: "yummy veggies in my tummy",
      },
    ],
  },

  { id: 5,
    restaurantName: "Pizza Hat",
    address: "Dumballs Road Bottom, Cardiff CF10 5FW",
    lat: 51.465691,
    lng: -3.17055,
    ratings: [
      { ratingID: 1,
        stars: 4,
        comment: "I was NOT expecting them to be wearing pizza on their head!",
      },
      { ratingID: 2,
        stars: 2,
        comment: "I was expecting them to be wearing pizza on their head!",
      },
      { ratingID: 3,
        stars: 5,
        comment: "oooooof that pizza is licious",
      },
      { ratingID: 4,
        stars: 4,
        comment: "omnom nom nom nom pepperoni nom nom om",
      },
    ],
  },
];
export {restaurantData}

// google how to make React call to the api 
/* 


Try to make this call from React code. Basically implement a JS function to make this call and return the restaurants

https://www.newline.co/fullstack-react/articles/how-to-write-a-google-maps-react-component/#

in the above article, google api Component link (install via npm etc, makes it easier than dealing with canvas 


https://www.newline.co/fullstack-react/articles/how-to-write-a-google-maps-react-component/#


https://developers.google.com/maps/documentation/javascript/places

example

also get it to console .log and see the restaurants  in browser

goal is that there is a javascript object that is holding these objects

console log it

*/