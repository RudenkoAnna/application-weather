<RevolvingDot
        height="100"
        width="100"
        radius="16"
        color="#4fa94d"
        secondaryColor=""
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
day(short = false) {
let days = [
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",
];

    if (short) {
      return days[this.date.getDay()].substring(0, 3);
    } else {
      return days[this.date.getDay()];
    }

}

time() {
let minutes = this.date.getMinutes();
if (minutes < 10) minutes = `${0}minutes`;

    return `${this.date.getHours()}:${minutes}`;

}

dayTime() {
return `${this.day()} ${this.time()}`;
}
}
