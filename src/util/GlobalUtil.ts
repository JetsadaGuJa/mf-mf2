const generateTranscriptID = () => {
  let d = new Date();
  let year = d.getFullYear().toString();
  let month = addZero(d.getMonth() + 1);
  let day = addZero(d.getDate());
  let hours = addZero(d.getHours());
  let minutes = addZero(d.getMinutes());
  let seconds = addZero(d.getSeconds());
  let ms = addZero(d.getMilliseconds(), 3);
  return year + month + day + hours + minutes + seconds + ms;
};

const addZero = (number: any, size = 2) => {
  let str = number.toString();
  while (str.length < size) {
    str = "0" + str;
  }
  return str;
};

const GlobalUtil = {
  generateTranscriptID,
  addZero,
};
export default GlobalUtil;
