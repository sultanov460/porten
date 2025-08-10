import { Container } from "../Container/Container.jsx";

export function Copyright() {
  return (
    <div className={"py-4 bg-[#0f0f0f] text-white px-5 sm:px-2"}>
      <Container className="flex items-center justify-between">
        <span className="text-xs font-ptsans text-gray-300">
          © 2020 Все права защищены
        </span>
        <span className="font-bold text-xs font-ptsans underline">
          Сделано Figma.info
        </span>
      </Container>
    </div>
  );
}
