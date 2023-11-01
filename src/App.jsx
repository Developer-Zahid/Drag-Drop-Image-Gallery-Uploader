import './App.css'

function App() {

  return (
    <>
      <section className="gallery container">
        <div className="gallery__card">
          <div className="gallery__card__header">
            <h1 className="gallery__card__header__title">Gallery</h1>
            <button type="button" className="gallery__card__header__btn">Delete File</button>
          </div>
          <div className="gallery__card__body">
            <div className="gallery__grid">
              <div className="gallery__grid__item">
                <label className="gallery__grid__card">
                  <input type="checkbox" name="product[]" className="gallery__grid__card__input" />
                  <figure className="gallery__grid__card__figure">
                    <img className="gallery__grid__card__figure__bg" src="/assets/images/image-1.webp" alt="product preview" />
                  </figure>
                </label>
              </div>
              <div className="gallery__grid__item">
                <label className="gallery__grid__card">
                  <input type="checkbox" name="product[]" className="gallery__grid__card__input" />
                  <figure className="gallery__grid__card__figure">
                    <img className="gallery__grid__card__figure__bg" src="/assets/images/image-2.webp" alt="product preview" />
                  </figure>
                </label>
              </div>
              <div className="gallery__grid__item">
                <label className="gallery__grid__card">
                  <input type="checkbox" name="product[]" className="gallery__grid__card__input" />
                  <figure className="gallery__grid__card__figure">
                    <img className="gallery__grid__card__figure__bg" src="/assets/images/image-3.webp" alt="product preview" />
                  </figure>
                </label>
              </div>
              <div className="gallery__grid__item">
                <label className="gallery__grid__card">
                  <input type="checkbox" name="product[]" className="gallery__grid__card__input" />
                  <figure className="gallery__grid__card__figure">
                    <img className="gallery__grid__card__figure__bg" src="/assets/images/image-4.webp" alt="product preview" />
                  </figure>
                </label>
              </div>
              <div className="gallery__grid__item">
                <label className="gallery__grid__card">
                  <input type="checkbox" name="product[]" className="gallery__grid__card__input" />
                  <figure className="gallery__grid__card__figure">
                    <img className="gallery__grid__card__figure__bg" src="/assets/images/image-5.webp" alt="product preview" />
                  </figure>
                </label>
              </div>
              <div className="gallery__grid__item">
                <label className="gallery__grid__card">
                  <input type="checkbox" name="product[]" className="gallery__grid__card__input" />
                  <figure className="gallery__grid__card__figure">
                    <img className="gallery__grid__card__figure__bg" src="/assets/images/image-6.webp" alt="product preview" />
                  </figure>
                </label>
              </div>
              <div className="gallery__grid__item">
                <label className="gallery__grid__card">
                  <input type="checkbox" name="product[]" className="gallery__grid__card__input" />
                  <figure className="gallery__grid__card__figure">
                    <img className="gallery__grid__card__figure__bg" src="/assets/images/image-7.webp" alt="product preview" />
                  </figure>
                </label>
              </div>
              <div className="gallery__grid__item">
                <label className="gallery__grid__card">
                  <input type="checkbox" name="product[]" className="gallery__grid__card__input" />
                  <figure className="gallery__grid__card__figure">
                    <img className="gallery__grid__card__figure__bg" src="/assets/images/image-8.webp" alt="product preview" />
                  </figure>
                </label>
              </div>
              <div className="gallery__grid__item">
                <label className="gallery__grid__card">
                  <input type="checkbox" name="product[]" className="gallery__grid__card__input" />
                  <figure className="gallery__grid__card__figure">
                    <img className="gallery__grid__card__figure__bg" src="/assets/images/image-9.webp" alt="product preview" />
                  </figure>
                </label>
              </div>
              <div className="gallery__grid__item">
                <label className="gallery__grid__card">
                  <input type="checkbox" name="product[]" className="gallery__grid__card__input" />
                  <figure className="gallery__grid__card__figure">
                    <img className="gallery__grid__card__figure__bg" src="/assets/images/image-10.jpeg" alt="product preview" />
                  </figure>
                </label>
              </div>
              <div className="gallery__grid__item">
                <label className="gallery__grid__card">
                  <input type="checkbox" name="product[]" className="gallery__grid__card__input" />
                  <figure className="gallery__grid__card__figure">
                    <img className="gallery__grid__card__figure__bg" src="/assets/images/image-11.jpeg" alt="product preview" />
                  </figure>
                </label>
              </div>
              <div className="gallery__grid__item">
                <label className="gallery__grid__card gallery__grid__card--dotted">
                  <input className="gallery__grid__card__uploader" type="file" name="product_images[]" accept='image/jpeg, image/png, image/webp' multiple />
                  <div className="gallery__grid__card__content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="gallery__grid__card__content__icon" viewBox="0 0 16 16">
                      <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                      <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                    </svg>
                    <p className="gallery__grid__card__content__title">Add Images</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App