import img from "../../assets/diego_Auza_Photo.webp";
function Banner(){
    return (
      <>
        <section className="container">
          <div className="container--banner">
            <div className="banner--image">
              <div className="">
            <img src={img} alt="Diego Auza picture" />
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
export default Banner;