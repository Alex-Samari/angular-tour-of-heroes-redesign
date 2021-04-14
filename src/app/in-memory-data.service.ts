export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 11, name: "Achilles", img: "../assets/images/achilles.jpg" },
      { id: 12, name: "Cloud Boy", img: "../assets/images/cloud-boy.jpg" },
      {
        id: 13,
        name: "Illusto Girl",
        img: "../assets/images/illusto-girl.jpg",
      },
      { id: 14, name: "Night Lady", img: "../assets/images/night-lday.jpg" },
      { id: 15, name: "Robin", img: "../assets/images/robin.jpg" },
      { id: 16, name: "Shazam", img: "../assets/images/shazam.jpg" },
      { id: 17, name: "Super Dad", img: "../assets/images/super-dad.jpg" },
      { id: 18, name: "Superman", img: "../assets/images/superman.jpg" },
      { id: 19, name: "Superwoman", img: "../assets/images/superwoman.jpg" },
      { id: 20, name: "Wingman", img: "../assets/images/wingman.jpg" },
    ];
    return { heroes };
  }
}
