import Image from 'next/image';
function StackIcon({ imgURL }) {
  return (
    <Image
      src={`/assets/${imgURL}`}
      alt={imgURL}
      width={'70'}
      height={'70'}
      className="mx-auto cursor-pointer"
    ></Image>
  );
}

export default StackIcon;
