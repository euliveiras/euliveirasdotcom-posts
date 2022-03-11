import Image from "next/image";

type CardProps = {
  data: {
    name: string;
  price: number;
  description: string;
  image: string;
  }
};

export const Card: React.FC<CardProps> = ({
  data
}) => {
  return (
    <div>
      <h2>{data.name}</h2>
      <Image src="/" alt={`imagem de um ${data.name}`} width={120} height={120} />
      <p>{data.description}</p>
      <p>{data.price}</p>
    </div>
  );
};
