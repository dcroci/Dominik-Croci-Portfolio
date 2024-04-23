'use client';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import Image from 'next/image';
function StackIcon({
  imgURL,
  stackName,
  stackDesc,
  margin,
}: {
  imgURL: string;
  stackName: string;
  stackDesc: string;
  margin: string;
}) {
  return (
    <div>
      <Popover placement="top" showArrow backdrop="opaque">
        <PopoverTrigger>
          <figure className="flex flex-col gap-2 w-fit">
            <Image
              src={`/assets/${imgURL}`}
              alt={imgURL}
              width={'70'}
              height={'70'}
              className={`${margin} cursor-pointer hover:-translate-y-1 hover:scroll-smooth hover:ease-in-out`}
            />
            <figcaption className="text-lg font-medium text-center">
              {stackName}
            </figcaption>
          </figure>
        </PopoverTrigger>

        <PopoverContent className="w-60">
          <p className="text-black text-lg ">{stackDesc}</p>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default StackIcon;
