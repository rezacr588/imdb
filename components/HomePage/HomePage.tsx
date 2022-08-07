import Image from "next/image";
import { FC, useState } from "react";
import { ButtonContainer, Button } from "./styles";

export const HomePage: FC = () => {
  const [type, setType] = useState<"now-showing" | "coming-soon">(
    "now-showing",
  );
  const [data, setData] = useState<[{ title: string; id: string }]>([
    { id: "dark-knight", title: "Batman: The Dark Knight" },
  ]);

  return (
    <div>
      <ButtonContainer>
        <Button
          active={type === "now-showing" ? true : false}
          onClick={() => setType("now-showing")}
        >
          <Image alt="search-icon" width={18} height={18} src="/play.svg" />
          <span style={{ paddingRight: 5 }} />
          Now Showing
        </Button>
        <Button
          active={type === "coming-soon" ? true : false}
          onClick={() => setType("coming-soon")}
        >
          Coming Soon
        </Button>
      </ButtonContainer>
      <div>
        {data.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
