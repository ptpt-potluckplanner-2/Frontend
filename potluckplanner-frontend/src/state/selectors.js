export const getCredentials = ({ username, password }) => ({
    username,
    password
  });
  export const potluckEvent = ({ eventTitle, headerTwo }) => ({
    eventTitle,
    headerTwo
  });
  export const eventDetails = ({ date, time, location, description }) => ({
    date,
    time,
    location,
    description
  });
  export const potluckInvites = ({ inviteeName, inviteeEmail }) => ({
    inviteeName,
    inviteeEmail
  });
  export const potluckMenu = ({ category, dishName, userOfDish }) => ({
    category,
    dishName,
    userOfDish
  });
  
  export const selectDish = ({ category, dishName }) => ({
    category,
    dishName,
  });
  
  export const loginSuccess = ({ username }) => ({ username });
  export const allPotlucks = ({
    eventTitle,
    date,
    time,
    location,
    dishName,
    userOfDish,
    inviteeName
  }) => ({ eventTitle, date, time, location, dishName, userOfDish, inviteeName });