import axios from "axios";
export const postdata = (send) => {
  axios
    .post("https://damp-mesa-49161.herokuapp.com/timer", send)
    .then((res) => console.log("done"));
};

export function msToTime(duration) {
  var milliseconds = parseInt(duration % 1000),
    seconds = parseInt((duration / 1000) % 60),
    minutes = parseInt((duration / (1000 * 60)) % 60),
    hours = parseInt((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return (
    hours + ":" + minutes + ":" + seconds + "." + Math.floor(milliseconds / 10)
  );
}
