export const handleSlice = (e, num) => {
  if (e.target.value.length > e.target.maxLength) {
    e.target.value = e.target.value.slice(0, num || e.target.maxLength);
  }
  e.target.value = e.target.value.replace(/\D/g, "");
};
