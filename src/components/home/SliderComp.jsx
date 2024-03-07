import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-[#F6F6F6] px-6">
          <div className="">
            <div className="text-5xl font-bold">Keşfetmeye Hazır mısınız!</div>
            <div className="text-lg my-4">
              1980'lerin klasik basketbol stilini seviyor ancak günümüzün hızlı
              oyun kültürüne uygun bir model mi arıyorsun? Nike Court Vision ile
              tanış. Şık deri ve süet yüzeyler klasik bir stil oluştururken
              yumuşak bilek kısmı ayakkabıya zarif ve modern bir tasarım ve
              rahat bir yapı kazandırır
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 ">
              İncele
            </div>
          </div>

          <img
            className="w-[550px] h-[550px]"
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cf43fd2a-f2c3-4d7e-ae24-65bd6e0c41c1/court-vision-low-ayakkab%C4%B1s%C4%B1-BRphvk.png"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-[#F6F6F6] px-6">
          <div className="">
            <div className="text-5xl font-bold">Enlerin Tercihi</div>
            <div className="text-lg my-4">
              Üstün destek ve rahat yastıklamayla Tuned Air deneyimi sunan Nike
              Air Max Plus ile tavrını ortaya koy. Dikkat çekici ve çok yönlü
              olan bu model, koşu ayakkabısının 40. yıl dönümünü kutlamak için
              ikonik Pegasus logosuna sahiptir. Nefes alabilen üst kısım,
              dalgalı tasarım çizgileri ve burun çevresindeki cilalanmış plastik
              vurgular, rahatlığı asi stille birleştirir.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300">
              İncele
            </div>
          </div>
          <img
            className="w-[550px] h-[550px]"
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/43ad3d73-7ed5-4010-8004-fd2f2e1dd2ae/air-max-plus-ayakkab%C4%B1s%C4%B1-2B74nW.png"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-[#F6F6F6] px-6">
          <div className="">
            <div className="text-5xl font-bold">Kişiye Özel Tasarım</div>
            <div className="text-lg my-4">
              Yumuşak ve esnek ZoomX köpük, dengeni koruyup zinde kalmana
              yardımcı olur. Bu ayakkabıyla gün boyu tüm aktivitelerinde
              muhteşem hissedeceksin. Ayrıca yastıklamayı her kombine uyum
              sağlayan renklerle buluşturan tasarımı sayesinde bu ayakkabıyı
              ayağından hiç çıkarmak istemeyeceksin.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300">
              İncele
            </div>
          </div>
          <img
            className="w-[550px] h-[550px]"
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1b8a3ccb-787d-48ee-a9dc-32cf180c613b/invincible-3-yol-ko%C5%9Fu-ayakkab%C4%B1s%C4%B1-8tDZXB.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;

/*<div className="lg:flex">
  <div className="bg-gray-200 p-6 flex flex-col lg:w-1/2">
    <div className="text-5xl font-bold">Keşfetmeye Hazır mısınız!</div>
    <div className="text-lg my-4">
      Nefesleri kesen yalın ve şık bir tasarım. Bu adidas ayakkabıyı
      kutusundan çıkardığında göreceğin şey bu. Sentetik deri sayasının
      üzerindeki aynı tonda 3 bant detayı ile klasik bir görünüm sunan
      model, retro stildeki kauçuk dış tabanı ve yastıklamalı orta
      tabanı ile adımlarına yumuşaklık ve destek kazandırır.
    </div>
    <div className="border rounded-full cursor-pointer text-xl w-[100px] h-12 flex items-center justify-center bg-gray-400 p-2">
      İncele
    </div>
    <img
      className="h-[850px] w-full object-cover py-3 lg:hidden"
      src="https://img-ayakkabidunyasi.mncdn.com/Content/Images/Thumbs/0146213_adidas-gy4727-hoops-3-0-2008gy4727.jpeg"
      alt=""
    />
  </div>

  <div className="bg-gray-200 p-6 flex flex-col lg:w-1/2">
    <div className="text-5xl font-bold">Keşfetmeye Hazır mısınız!</div>
    <div className="text-lg my-2">
      Lumberjack Erkek Ayakkabı Pol, erkeklerin günlük hayatta
      rahatlıkla kullanabilecekleri bir ayakkabıdır. Ayakkabının dış
      yüzeyi deri malzemeden yapılmıştır ve oldukça dayanıklıdır. İç
      kısmı ise yumuşak bir yapıya sahiptir ve ayakların rahat etmesini
      sağlar. Taban kısmı ise kaymaz özellikte olduğu için her türlü
      zeminde güvenli bir yürüyüş sağlar.
    </div>
    <div className="border rounded-full cursor-pointer text-xl w-[100px] h-12 flex items-center justify-center bg-gray-400">
      İncele
    </div>
    <img
      className="h-[850px] w-full object-cover py-3 lg:hidden"
      src="https://img-ayakkabidunyasi.mncdn.com/Content/Images/Thumbs/0163683_lumberjack-pol-beyaz-erkek-sneaker-5225a10139301012010.jpeg"
      alt=""
    />
  </div>
</div>*/
