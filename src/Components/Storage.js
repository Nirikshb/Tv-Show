export const saveBookingDetails = (showName, formData) => {
    localStorage.setItem('showName', showName);
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(formData);
  };
  