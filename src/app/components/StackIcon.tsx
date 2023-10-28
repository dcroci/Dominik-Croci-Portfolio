import Image from 'next/image';
function StackIcon({ imgURL }: any) {
  return (
    <Image
      src={`/assets/${imgURL}`}
      alt={imgURL}
      width={'70'}
      height={'70'}
      className="mx-auto cursor-pointer hover:-translate-y-1 hover:scroll-smooth hover:ease-in-out hover:shadow-xl "
    ></Image>
  );
}

export default StackIcon;
