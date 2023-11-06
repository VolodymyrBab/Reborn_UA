import React from 'react';
import '../css/App.css';
import Search from './Search';
// import axios from 'axios';
import ProfileButton from './ProfileButton';
// import ProfileIcon from '..//images/ProfileIcon.png';
import GeosIcon from '..//images/GeosIcon.png';

export const App = () => {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="container-fluid">
          <div className="header-line">
            <div className="header-logo">
              <img src="" alt="logo" />
            </div>

            <div className="searchContainer">
              <Search />
              <div className="selectCity">
                <label htmlFor="cities" className="customSelect">
                  <select className="cities" id="cities">
                    <option value="odessa">Одесса</option>
                    <option value="kharkiv">Харків</option>
                    <option value="kyiv">Київ</option>
                    <option value="kherson">Херсон</option>
                    <option value="lviv">Львів</option>
                    <option value="ternopil">Тернопіль</option>
                    <option value="sevastopol">Севастополь</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="Advertisment">
              <a className="addAdvertisment" href=" ">
                Додати оголошення
              </a>
            </div>
            <ProfileButton />
          </div>
        </div>
      </div>

      <div className="categories">
        <div className="container-fluid">
          <div className="cardsHolder">
            <div className="categoriesHeader">
              <h2>Категорії</h2>
            </div>
            <div className="categoryContainer">
              <div className="categoryContainerUpper">
                <div className="cardsCategories">
                  <a className="card" href=" ">
                    Меблі
                  </a>
                </div>
                <div className="cardsCategories">
                  <a className="card" href=" ">
                    Одяг
                  </a>
                </div>
                <div className="cardsCategories">
                  <a className="card" href=" ">
                    Техніка
                  </a>
                </div>
              </div>
              <div className="categoryContainerLower">
                <div className="cardsCategories">
                  <a className="card" href=" ">
                    Все для дому
                  </a>
                </div>
                <div className="cardsCategories">
                  <a className="card" href=" ">
                    Дитячий <br />
                    світ
                  </a>
                </div>
                <div className="cardsCategories">
                  <a className="card" href=" ">
                    Домашні <br />
                    улюбленці
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="aboutUs">
        <div className="container-fluid">
          <div className="aboutUsHolder">
            <h2 className="aboutUsTitle">Про нас</h2>
            <div className="aboutUsContent">
              <p className="aboutUsDiscription">
                Наша мета - дати нове життя старим речам + <br />
                допомогти Вам знайти щось особливе та ексклюзивне
              </p>
              <ul className="aboutUsList">
                <li className="aboutUsItem">
                  Допомагаємо екології нашої планети користуючись тими <br />
                  речами які вже були у споживанні
                </li>
                <li className="aboutUsItem">
                  У нас є речі які ви дійсно більше ніде не знайдете
                </li>
                <li className="aboutUsItem">
                  Заощаджуй кошти на подорожі, навчання та враження від життя
                  разом з нами!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="newAdvs">
        <div className="container-fluid">
          <div className="newAdvsHolder">
            <h2 className="newAdvsTitle">Нові Оголошення</h2>
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <div className="newAdvsItem">
                    <a href=" " className="neAdvsLink">
                      <div className="newAdvsImgContainer">
                        <img src="" className="newAdvsImg"></img>
                      </div>
                      <div className="newAdvsFooter">
                        <h5 className="newAdvsFooterTitle">
                          Дитяче ліжечко 1 - 3 роки
                        </h5>
                        <div className="newAdvsFooterItems">
                          <a href=" " className="geoItem">
                            <img src={GeosIcon}></img>
                            Київ, Борщагівка
                          </a>
                          <p className="newAdvsTime"> сьогодні 7:39</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="newAdvsItem">
                    <a href=" " className="neAdvsLink">
                      <div className="newAdvsImgContainer">
                        <img src="" className="newAdvsImg"></img>
                      </div>
                      <div className="newAdvsFooter">
                        <h5 className="newAdvsFooterTitle">
                          Дитяче ліжечко 1 - 3 роки
                        </h5>
                        <div className="newAdvsFooterItems">
                          <a href=" " className="geoItem">
                            <img src={GeosIcon}></img>
                            Київ, Борщагівка
                          </a>
                          <p className="newAdvsTime"> сьогодні 7:39</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="newAdvsItem">
                    <a href=" " className="neAdvsLink">
                      <div className="newAdvsImgContainer">
                        <img src="" className="newAdvsImg"></img>
                      </div>
                      <div className="newAdvsFooter">
                        <h5 className="newAdvsFooterTitle">
                          Дитяче ліжечко 1 - 3 роки
                        </h5>
                        <div className="newAdvsFooterItems">
                          <a href=" " className="geoItem">
                            <img src={GeosIcon}></img>
                            Київ, Борщагівка
                          </a>
                          <p className="newAdvsTime"> сьогодні 7:39</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="newAdvsItem">
                    <a href=" " className="neAdvsLink">
                      <div className="newAdvsImgContainer">
                        <img src="" className="newAdvsImg"></img>
                      </div>
                      <div className="newAdvsFooter">
                        <h5 className="newAdvsFooterTitle">
                          Дитяче ліжечко 1 - 3 роки
                        </h5>
                        <div className="newAdvsFooterItems">
                          <a href=" " className="geoItem">
                            <img src={GeosIcon}></img>
                            Київ, Борщагівка
                          </a>
                          <p className="newAdvsTime"> сьогодні 7:39</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="newAdvsItem">
                    <a href=" " className="neAdvsLink">
                      <div className="newAdvsImgContainer">
                        <img src="" className="newAdvsImg"></img>
                      </div>
                      <div className="newAdvsFooter">
                        <h5 className="newAdvsFooterTitle">
                          Дитяче ліжечко 1 - 3 роки
                        </h5>
                        <div className="newAdvsFooterItems">
                          <a href=" " className="geoItem">
                            <img src={GeosIcon}></img>
                            Київ, Борщагівка
                          </a>
                          <p className="newAdvsTime"> сьогодні 7:39</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="newAdvsItem">
                    <a href=" " className="neAdvsLink">
                      <div className="newAdvsImgContainer">
                        <img src="" className="newAdvsImg"></img>
                      </div>
                      <div className="newAdvsFooter">
                        <h5 className="newAdvsFooterTitle">
                          Дитяче ліжечко 1 - 3 роки
                        </h5>
                        <div className="newAdvsFooterItems">
                          <a href=" " className="geoItem">
                            <img src={GeosIcon}></img>
                            Київ, Борщагівка
                          </a>
                          <p className="newAdvsTime"> сьогодні 7:39</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="newAdvsItem">
                    <a href=" " className="neAdvsLink">
                      <div className="newAdvsImgContainer">
                        <img src="" className="newAdvsImg"></img>
                      </div>
                      <div className="newAdvsFooter">
                        <h5 className="newAdvsFooterTitle">
                          Дитяче ліжечко 1 - 3 роки
                        </h5>
                        <div className="newAdvsFooterItems">
                          <a href=" " className="geoItem">
                            <img src={GeosIcon}></img>
                            Київ, Борщагівка
                          </a>
                          <p className="newAdvsTime"> сьогодні 7:39</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="newAdvsItem">
                    <a href=" " className="neAdvsLink">
                      <div className="newAdvsImgContainer">
                        <img src="" className="newAdvsImg"></img>
                      </div>
                      <div className="newAdvsFooter">
                        <h5 className="newAdvsFooterTitle">
                          Дитяче ліжечко 1 - 3 роки
                        </h5>
                        <div className="newAdvsFooterItems">
                          <a href=" " className="geoItem">
                            <img src={GeosIcon}></img>
                            Київ, Борщагівка
                          </a>
                          <p className="newAdvsTime"> сьогодні 7:39</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="newAdvsItem">
                    <a href=" " className="neAdvsLink">
                      <div className="newAdvsImgContainer">
                        <img src="" className="newAdvsImg"></img>
                      </div>
                      <div className="newAdvsFooter">
                        <h5 className="newAdvsFooterTitle">
                          Дитяче ліжечко 1 - 3 роки
                        </h5>
                        <div className="newAdvsFooterItems">
                          <a href=" " className="geoItem">
                            <img src={GeosIcon}></img>
                            Київ, Борщагівка
                          </a>
                          <p className="newAdvsTime"> сьогодні 7:39</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="newAdvsItem">
                    <a href=" " className="neAdvsLink">
                      <div className="newAdvsImgContainer">
                        <img src="" className="newAdvsImg"></img>
                      </div>
                      <div className="newAdvsFooter">
                        <h5 className="newAdvsFooterTitle">
                          Дитяче ліжечко 1 - 3 роки
                        </h5>
                        <div className="newAdvsFooterItems">
                          <a href=" " className="geoItem">
                            <img src={GeosIcon}></img>
                            Київ, Борщагівка
                          </a>
                          <p className="newAdvsTime"> сьогодні 7:39</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="newAdvsItem">
                    <a href=" " className="neAdvsLink">
                      <div className="newAdvsImgContainer">
                        <img src="" className="newAdvsImg"></img>
                      </div>
                      <div className="newAdvsFooter">
                        <h5 className="newAdvsFooterTitle">
                          Дитяче ліжечко 1 - 3 роки
                        </h5>
                        <div className="newAdvsFooterItems">
                          <a href=" " className="geoItem">
                            <img src={GeosIcon}></img>
                            Київ, Борщагівка
                          </a>
                          <p className="newAdvsTime"> сьогодні 7:39</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="newAdvsItem">
                    <a href=" " className="neAdvsLink">
                      <div className="newAdvsImgContainer">
                        <img src="" className="newAdvsImg"></img>
                      </div>
                      <div className="newAdvsFooter">
                        <h5 className="newAdvsFooterTitle">
                          Дитяче ліжечко 1 - 3 роки
                        </h5>
                        <div className="newAdvsFooterItems">
                          <a href=" " className="geoItem">
                            <img src={GeosIcon}></img>
                            Київ, Борщагівка
                          </a>
                          <p className="newAdvsTime"> сьогодні 7:39</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="newAdvsItem">
                    <a href=" " className="neAdvsLink">
                      <div className="newAdvsImgContainer">
                        <img src="" className="newAdvsImg"></img>
                      </div>
                      <div className="newAdvsFooter">
                        <h5 className="newAdvsFooterTitle">
                          Дитяче ліжечко 1 - 3 роки
                        </h5>
                        <div className="newAdvsFooterItems">
                          <a href=" " className="geoItem">
                            <img src={GeosIcon}></img>
                            Київ, Борщагівка
                          </a>
                          <p className="newAdvsTime"> сьогодні 7:39</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="newAdvsItem">
                    <a href="" className="neAdvsLink">
                      <div className="newAdvsImgContainer">
                        <img src="" className="newAdvsImg"></img>
                      </div>
                      <div className="newAdvsFooter">
                        <h5 className="newAdvsFooterTitle">
                          Дитяче ліжечко 1 - 3 роки
                        </h5>
                        <div className="newAdvsFooterItems">
                          <a href="" className="geoItem">
                            <img src={GeosIcon}></img>
                            Київ, Борщагівка
                          </a>
                          <p className="newAdvsTime"> сьогодні 7:39</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="newAdvsItem">
                    <a href="" className="neAdvsLink">
                      <div className="newAdvsImgContainer">
                        <img src="" className="newAdvsImg"></img>
                      </div>
                      <div className="newAdvsFooter">
                        <h5 className="newAdvsFooterTitle">
                          Дитяче ліжечко 1 - 3 роки
                        </h5>
                        <div className="newAdvsFooterItems">
                          <a href="" className="geoItem">
                            <img src={GeosIcon}></img>
                            Київ, Борщагівка
                          </a>
                          <p className="newAdvsTime"> сьогодні 7:39</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="newAdvsItem">
                    <a href="" className="neAdvsLink">
                      <div className="newAdvsImgContainer">
                        <img src="" className="newAdvsImg"></img>
                      </div>
                      <div className="newAdvsFooter">
                        <h5 className="newAdvsFooterTitle">
                          Дитяче ліжечко 1 - 3 роки
                        </h5>
                        <div className="newAdvsFooterItems">
                          <a href=" " className="geoItem">
                            <img src={GeosIcon}></img>
                            Київ, Борщагівка
                          </a>
                          <p className="newAdvsTime"> сьогодні 7:39</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container-fluid">
          <div className="footerItems">
            <div className="firstCol">
              <a href=" " className="footerItem">
                Меблі
              </a>
              <a href=" " className="footerItem">
                Текстиль
              </a>
              <a href=" " className="footerItem">
                Все для для дому
              </a>
              <a href=" " className="footerItem">
                Дитячий світ
              </a>
              <a href=" " className="footerItem">
                Домашні улюбленці
              </a>
            </div>
            <div className="firstCol">
              <a href=" " className="footerItem">
                Улюблене
              </a>
              <a href=" " className="footerItem">
                Мій кабінет
              </a>
              <a href=" " className="footerItem">
                Про нас
              </a>
              <a href=" " className="footerItem">
                Умови використання
              </a>
              <a href=" " className="footerItem">
                Політика конфіденційності
              </a>
            </div>
            <div className="firstCol">
              <a href=" " className="footerItem">
                Допомога
              </a>
              <a href=" " className="footerItem">
                Зворотній зв’язок
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


