export default function CustomCloth(props) {
  let clothing;
  let imageSrc;

  const temperature = props.temperature;

  if (temperature > 20) {
    clothing = "Shorts and T-Shirt";
    imageSrc = "/customicons/light-wear.png";
  } else if (temperature >= 15 && temperature <= 20) {
    clothing = "Pants and Hoodie";
    imageSrc = "/customicons/warm-suit.png";
  } else if (temperature >= 5 && temperature < 15) {
    clothing = "Jacket";
    imageSrc = "/customicons/jacket.png";
  } else if (temperature >= 0 && temperature < 5) {
    clothing = "Coat";
    imageSrc = "/customicons/coat.png";
  } else {
    clothing = "Warm Jacket";
    imageSrc = "/customicons/winter-jacket.png";
  }

  return (
    <div>
      <img className="cloth" src={imageSrc} alt={clothing} />
    </div>
  );
}
