import { Container } from "../Container/Container";
import { FooterColumn } from "../FooterColumn/FooterColumn";

export const Footer = () => {
  const categories = [
    { id: 1, title: "часы" },
    {
      id: 2,
      title: "браслеты",
    },
    {
      id: 3,
      title: "ремни",
    },
    {
      id: 4,
      title: "ювелирные изделия",
    },
    {
      id: 5,
      title: "запонки",
    },
  ];
  return (
    <footer className="bg-[url(/Footer.jpg)] bg-center bg-cover w-full pt-20 pb-25">
      <Container
        className={
          "flex items-center  flex-col md:flex-row md:flex-wrap gap-10 md:justify-between md:items-start xl:flex-nowrap"
        }
      >
        <FooterColumn title={"О магазине"}>
          <p className="text-white font-ptsans text-sm leading-[1.5rem] font-normal max-w-87.5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper
            viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet
            consectetur vel vitae aliquam dictum suspendisse. Lobortis eget
            consequat, tellus et et sed turpis. Pretium quisque vitae, amet,
            porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in
            sit mi ultrices nisi, nunc.
          </p>
        </FooterColumn>
        <FooterColumn title={"Категории"}>
          <div className="flex flex-wrap gap-5 max-w-80">
            {categories.map((category) => (
              <h5
                key={category.id}
                className="py-2.5 px-5 bg-[#0F0F0F] text-sm font-normal font-ptsans text-[#D0D0D0] "
              >
                {category.title}
              </h5>
            ))}
          </div>
        </FooterColumn>
        <FooterColumn title={"рассылка"}>
          <p className="text-white font-ptsans text-sm leading-[1.5rem] font-normal max-w-87.5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper
            viverra nunc cursus tortor lectus nunc nulla nibh.
          </p>
          <form>
            <input
              className=" px-5 text-white text-sm font-ptsans bg-white/40 h-14 w-52.5"
              type="text"
              placeholder="Ваша почта"
            />
            <button className="bg-[#0F0F0F] py-2.5 px-4 text-white cursor-pointer text-sm h-14">
              ПОДПИСАТЬСЯ
            </button>
          </form>
        </FooterColumn>
      </Container>
    </footer>
  );
};
