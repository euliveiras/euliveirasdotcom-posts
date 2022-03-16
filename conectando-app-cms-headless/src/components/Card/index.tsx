import Image from "next/image";
import { useRouter } from "next/router";

type CardProps = {
  data: {
    name: string;
    price: number;
    description: string;
    image: string;
    url: string;
  };
};

export const Card: React.FC<CardProps> = ({ data }) => {
  const router = useRouter();
  const handleClick = async () => {
    await router.push(`/product/${data.url}`)
  }
  return (
    <div onClick={handleClick}>
      <h2>{data.name}</h2>
      <Image
        src="/"
        alt={`imagem de um ${data.name}`}
        width={120}
        height={120}
      />
      <p>{data.description}</p>
      <p>{data.price}</p>
    </div>
  );
};
