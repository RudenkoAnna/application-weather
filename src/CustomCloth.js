export default function CustomCloth(props) {
  let icon;

  const temperature = props.temperature;
  if (temperature > 20) {
    icon = <img src="./customicons/light-wear.png" alt="Shorts and T-Shirt" />;
  } else if (temperature >= 15 && temperature <= 20) {
    icon = <img src="./customicons/warm-suit.png" alt="Pants and Hoodie" />;
  } else if (temperature >= 5 && temperature < 15) {
    icon = <img src="./customicons/jacket.png" alt="Jacket" />;
  } else if (temperature >= 0 && temperature < 5) {
    icon = <img src="./customicons/coat.png" alt="Coat" />;
  } else {
    icon = <img src="./customicons/winter-jacket.png" alt="Warm Jacket" />;
  }
  return <div> {icon}</div>;
}
