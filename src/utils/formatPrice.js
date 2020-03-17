const formatPrice = price => {
  const formatedPrice = price.toString().replace(/(.)(?=(\d{3})+$)/g,'$1,');
  return `${formatedPrice} VNĐ`;
};

export { formatPrice };