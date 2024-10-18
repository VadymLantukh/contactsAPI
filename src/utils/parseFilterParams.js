const parseType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;

  const isType = (type) => ['work', 'home', 'personal'].includes(type);
  if (isType(type)) return type;
};

const parseFavourite = (boolean) => {
  const isString = typeof boolean === 'string';
  if (!isString) return;

  const parsedBoolean = JSON.parse(boolean);
  return parsedBoolean;
};

export const parseFilterParams = (query) => {
  const { isFavourite, contactType } = query;

  const parsedType = parseType(contactType);
  const parsedFavourite = parseFavourite(isFavourite);

  return {
    isFavourite: parsedFavourite,
    contactType: parsedType,
  };
};
