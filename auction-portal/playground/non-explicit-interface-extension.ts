
// Takich zapisów nie praktykujemy ! Są one wykorzystywane wewnętrznie przez TS !
// Warto jednak wiedzieć o skutkach takiego zapisu[!]
interface User {
  name: string;
}

interface User {
  lastName: string;
}



// const myUser: User = {  };


type UserType = { name: string }
type LastNameType = { lastName: string }


type UserWithLastName = UserType & LastNameType;




export {};
