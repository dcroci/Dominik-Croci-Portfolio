import Image from 'next/image';
function StackIcon({ imgURL, stackName }: any) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image
        src={`/assets/${imgURL}`}
        alt={imgURL}
        width={'70'}
        height={'70'}
        className="mx-auto cursor-pointer hover:-translate-y-1 hover:scroll-smooth hover:ease-in-out  "
      ></Image>
      <p>{stackName}</p>
    </div>
  );
}

export default StackIcon;
