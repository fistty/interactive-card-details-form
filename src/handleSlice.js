export const handleSlice = (e, num) => {
  if (e.target.value.length > num) {
    e.target.value = e.target.value.slice(0, num);
  }
  e.target.value = e.target.value.replace(/\D/g, "");
};
