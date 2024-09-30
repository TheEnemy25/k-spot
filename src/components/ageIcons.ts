export const getAgeIcon = (ageRestriction: number): string => {
  switch (ageRestriction) {
    case 0:
      return "/images/0.png";
    case 12:
      return "/images/12.png";
    case 16:
      return "/images/16.png";
    case 18:
      return "/images/18.png";
    default:
      return "/images/0.png";
  }
};
