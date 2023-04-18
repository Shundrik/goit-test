import css from "./homeList.module.css";

const HomeList = () => {
  return (
    <>
      <iframe
        width="100%"
        height="500px"
        src="https://www.youtube.com/embed/VBBdq3MObzA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className={css.heropanel__video}>
        <div className={css.heropanel__content}>
          <h1>
            <a href="/" rel="home">
            Welcome
            </a>
          </h1>
        </div>
      </div>
    </>
  );
};
export default HomeList;
