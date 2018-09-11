const styledProp = (property, defaultValue) => props =>
  property in props && props[property] ? props[property] : defaultValue;

export { styledProp };
