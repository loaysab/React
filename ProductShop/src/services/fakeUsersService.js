const users = [
        {
        _id: "5b21ca3eeb7f6fbccd471814",
        name: "Arnold Schwarzenegger",
        gender:"male",
        age: 73,
        birth_date: "July 30, 1947",
        description: "Arnold Alois Schwarzenegger is an Austrian-American actor, businessman, retired bodybuilder, and former politician who served as the 38th Governor of California from 2003 to 2011. As of 2021, he is the most recent Republican governor of California",
        picture_url: "https://upload.wikimedia.org/wikipedia/commons/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg"
        },
        {
            _id: "5b21ca3eeb7f6fbccd471819",
            name: "Bruce Willis",
            gender:"male",
            age: 65,
            birth_date: " March 19, 1955",
            description: "Walter Bruce Willis is an American actor and film producer. Born in Germany to a German mother and American father, Willis moved to the U.S. with his family when he was two years old. His career began on the off-Broadway stage in the 1970s",
            picture_url: "http://www.gstatic.com/tv/thumb/persons/9653/9653_v9_bb.jpg"
        },
        {
            _id: "5b21ca3eeb7f6fbccd471766",
            name: "Julia Roberts",
            gender:"female",
            age: 53,
            birth_date: "October 28, 1967",
            description: "Julia Fiona Roberts is an American actress and producer. She has won three Golden Globe Awards, from eight nominations, and has been nominated for four Academy Awards for her film acting, winning the Academy Award for Best Actress for her performance in Erin Brockovich",
            picture_url: "http://www.gstatic.com/tv/thumb/persons/1474/1474_v9_ba.jpg"
        },
    ];


export function getUsers() {
  return users;
 }
      