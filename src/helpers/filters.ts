const filters = {
  phone(input: number) {
    if (isNaN(input)) {
      return "";
    }
    return input
      .toString()
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  },
};
export default filters;
