export const genres = [
    { _id: "5b21ca3eeb7f6fbccd471818", name: "Cool Gagets" },
    { _id: "5b21ca3eeb7f6fbccd471814", name: "Computer hardware" },
    { _id: "5b21ca3eeb7f6fbccd471820", name: "Electirc" },
    { _id: "5b21ca3eeb7f6fbccd471821", name: "ART" },
    { _id: "5b21ca3eeb7f6fbccd471822", name: "Motor Accessories" },
    { _id: "5b21ca3eeb7f6fbccd471826", name: "Cell Phone" }
    
  ];
  
  export function getGenres() {
    return genres.filter(g => g);
  }
  